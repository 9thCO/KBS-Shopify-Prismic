import { RichText } from '@/components/rich-text';
import { Content } from '@prismicio/client';
import { PrismicLink, SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Props for `AboutImageTile`.
 */
export type AboutImageTileProps = SliceComponentProps<Content.AboutImageTileSlice>;

/**
 * Component for "AboutImageTile" Slices.
 */
const AboutImageTile = ({ slice }: AboutImageTileProps): JSX.Element => {
  return (
    <section className="text-gray-15 dark-copy w-full overflow-hidden py-10 md:py-16 2xl:py-20">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center">
        <div className="order-2 md:order-first md:w-1/2 md:p-8 md:pr-14">
          <h1 className="font-headings mt-2 scroll-mt-[120px] text-4xl font-bold tracking-tight first:mt-0 lg:text-5xl 2xl:text-6xl">
            {slice.primary.heading}
          </h1>
          <div className="font-copy 2xl:text-md copy-muted mt-6 max-w-lg text-base font-medium print:text-justify print:text-[12px]">
            <RichText field={slice.primary.content} />
          </div>
          {slice.items.map((item, index) => (
            <PrismicLink
              key={`${item.buttonLink}-${index}`}
              field={item?.buttonLink}
              internalComponent={Link}
              className="mr-2 inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              {item?.buttonText}
            </PrismicLink>
          ))}
        </div>
        <figure className="md:w-1/2">
          <div className="border-gray-15 bg-gray-15 shadow-image-fix overflow-hidden rounded-2xl border-2">
            <Image
              src={slice.primary.img?.url ?? ''}
              alt={slice.primary.img?.alt ?? ''}
              width={slice.primary.img.dimensions?.width}
              height={slice.primary.img.dimensions?.height}
              layout="responsive"
              className="object-cover object-center"
            />
          </div>
        </figure>
      </div>
    </section>
  );
};

export default AboutImageTile;
