import { RichText } from '@/components/rich-text';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Image from 'next/image';
import { useMemo } from 'react';

/**
 * Props for `ProductSpecs`.
 */
export type ProductSpecsProps = SliceComponentProps<Content.ProductSpecsSlice>;

/**
 * Component for "ProductSpecs" Slices.
 */

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description: 'Solid walnut base with rare earth magnets and powder coated steel card cover'
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description: 'Made from natural materials. Grain and color vary with each item.'
  }
];

const ProductSpecs = ({ slice }: ProductSpecsProps): JSX.Element => {
  // memo for product specs
  const images = useMemo(() => {
    return [
      {
        src: slice.primary.image0.url,
        alt: slice.primary.image0.alt,
        width: slice.primary.image0.dimensions?.width || 300,
        height: slice.primary.image0.dimensions?.height || 300
      },
      {
        src: slice.primary.image1.url,
        alt: slice.primary.image1.alt,
        width: slice.primary.image1.dimensions?.width || 300,
        height: slice.primary.image1.dimensions?.height || 300
      },
      {
        src: slice.primary.image2.url,
        alt: slice.primary.image2.alt,
        width: slice.primary.image2.dimensions?.width || 300,
        height: slice.primary.image2.dimensions?.height || 300
      },
      {
        src: slice.primary.image3.url,
        alt: slice.primary.image3.alt,
        width: slice.primary.image3.dimensions?.width || 300,
        height: slice.primary.image3.dimensions?.height || 300
      }
    ];
  }, [slice]);

  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <RichText field={slice.primary.tecspecs} />
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {slice.items.map((feature, index) => (
              <div key={index} className="border-t border-gray-200 pt-4">
                <RichText field={feature.content} />
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <Image
              src={image.src ?? ''}
              alt={image.alt ?? 'Life of the Knife Product Image'}
              className="rounded-lg bg-gray-100"
              width={image.width}
              height={image.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;
