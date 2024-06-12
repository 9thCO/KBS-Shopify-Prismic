import { GridTileImage } from '@/components/grid/tile';
import type { Product } from '@/lib/shopify/types';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ThreeItemGrid`.
 */
export type ThreeItemGridProps = SliceComponentProps<Content.ThreeItemGridSlice>;

import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item?.handle ?? '#'}`}
      >
        <GridTileImage
          src={item.image?.src ?? '/imgs/phone-mockup.png'}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.image?.alt ?? 'Placeholder'}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item?.title ?? 'Placeholder',
            amount: `${item?.variants[0]?.price ?? 0.0}`,
            currencyCode: 'USD'
          }}
        />
      </Link>
    </div>
  );
}

const ThreeItemGrid = async ({ slice }: ThreeItemGridProps) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid w-full gap-4 py-4 md:grid-cols-6 md:grid-rows-2"
    >
      <ThreeItemGridItem size="full" item={slice.primary.itemLarge as Product} priority={true} />
      <ThreeItemGridItem size="half" item={slice.primary.itemTopSmall as Product} priority={true} />
      <ThreeItemGridItem size="half" item={slice.primary.itemBottomSmall as Product} />
    </section>
  );
};

export default ThreeItemGrid;
