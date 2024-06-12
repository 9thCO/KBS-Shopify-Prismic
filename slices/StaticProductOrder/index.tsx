import { Gallery } from '@/components/product/gallery';
import { ProductDescription } from '@/components/product/product-description';
import { Image, Product } from '@/lib/shopify/types';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `ProductOrder`.
 */
export type ProductOrderProps = SliceComponentProps<Content.ProductOrderSlice>;

/**
 * Component for "ProductOrder" Slices.
 */
const ProductOrder = ({ slice, context }: ProductOrderProps): JSX.Element => {
  const product = (context as { product: Product }).product;

  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <Gallery
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="basis-full lg:basis-2/6">
            <ProductDescription product={product} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOrder;
