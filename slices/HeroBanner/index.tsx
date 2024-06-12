import { RichText } from '@/components/rich-text';
import { Content } from '@prismicio/client';
import { PrismicLink, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Props for `HeroBanner`.
 */
export type HeroBannerProps = SliceComponentProps<Content.HeroBannerSlice>;

/**
 * Component for "HeroBanner" Slices.
 */
const HeroBanner = ({ slice }: HeroBannerProps): JSX.Element => {
  return (
    <section
      className={`my-8 bg-[${slice.primary?.background_color?.toUpperCase()}]`}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto grid lg:grid-cols-12 lg:gap-8 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="mb-4 max-w-2xl">
            <RichText field={slice.primary.content} />
          </div>
          {slice.items.map((item, index) => (
            <PrismicLink
              key={`${item.button_text}-${index}`}
              field={item?.button_link}
              internalComponent={Link}
              className="mr-2 inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {item?.button_text}
            </PrismicLink>
          ))}
        </div>
        {slice.primary?.image?.url && (
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              className="rounded"
              src={slice.primary.image.url}
              alt={slice.primary.image?.alt ?? ''}
              width={slice.primary.image.dimensions.width}
              height={slice.primary.image.dimensions.height}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroBanner;
