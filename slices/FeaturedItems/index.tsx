import { RichText } from '@/components/rich-text';
import { Product } from '@/lib/shopify/types';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';
/**
 * Props for `FeaturedItems`.
 */
export type FeaturedItemsProps = SliceComponentProps<Content.FeaturedItemsSlice>;

/**
 * Component for "FeaturedItems" Slices.
 */
const FeaturedItems = ({ slice }: FeaturedItemsProps): JSX.Element => {
  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-12 lg:max-w-none lg:py-32">
          <RichText field={slice.primary.heading} />
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {slice.items.map((item) => {
              const promoItem = item.promoItem as Product;
              return (
                <div key={promoItem.title} className="group relative">
                  <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded bg-white group-hover:opacity-75 sm:h-64">
                    <Image
                      src={promoItem.image?.src ?? ''}
                      alt={promoItem.image?.alt ?? `Promo Product ${promoItem.title}`}
                      className="pointer-events-none object-cover group-hover:opacity-75"
                      fill
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <Link href={`/product/${promoItem.handle}`}>
                      <span className="absolute inset-0" />
                      {promoItem.title}
                    </Link>
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
