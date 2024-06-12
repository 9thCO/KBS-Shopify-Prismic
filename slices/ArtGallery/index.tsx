import { Content } from '@prismicio/client';
import { PrismicLink, SliceComponentProps } from '@prismicio/react';
import Link from 'next/link';
import { linkResolver } from '@/prismicio';

/**
 * Props for `ArtGallery`.
 */
export type ArtGalleryProps = SliceComponentProps<Content.ArtGallerySlice>;

/**
 * Component for "ArtGallery" Slices.
 */
const ArtGallery = ({ slice }: ArtGalleryProps): JSX.Element => {
  const filterBar = slice.primary?.filter ?? true;

  return (
    <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div
        className="mx-auto"
        // padding: ['0 1em 1em 1em', '0 2.5em 1em 2.5em', '0 4em 1em 4em'],
        // '@media screen and (min-width: 2600px)': {
        //   padding: '0 1em',
        // }
      >
        {filterBar && (
          <div className="my-4 flex gap-4">
            {/* <Button variant={filter === '' ? 'selected' : 'secondary'}
                  onClick={(e) => {
                    e.stopPropagation()
                    setfilter('')
                  }}> All</Button> */}
            {/* <Button variant={filter === 'OGILL' ? 'selected' : 'secondary'}
              onClick={(e) => {
                e.stopPropagation()
              }}> Original Illustrations</Button>
            <Button variant={filter === 'Study' ? 'selected' : 'secondary'}
              onClick={(e) => {
                e.stopPropagation()
                setfilter('Study')
              }}> Studies</Button> */}
          </div>
        )}
        <div
          className={`grid auto-rows-[320px] sm:gap-4 md:gap-6 ${!filterBar ? 'mt-4' : ''}`}
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))'
          }}
        >
          {slice.items
            .filter((t) => {
              // if (filter === '') {
              //   return true
              // }
              // return t.type === filter
              return true;
            })
            .map((item, index) => (
              <PrismicLink field={item?.link} internalComponent={Link} className={item.format}>
                <div
                  className={`card ${item.format}`}
                  style={{
                    backgroundImage: `url(${item.image.url})`
                  }}
                >
                  <div
                    className="h-full w-full bg-[rgba(0,0,0,0.5)] opacity-0 transition-opacity duration-500 hover:opacity-100"
                    key={index}
                  >
                    <div className="flex h-full flex-col justify-center pb-[10%] text-center">
                      <h2 className="text-md font-semibold">{item.title}</h2>
                      <p className="text-sm font-semibold">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </PrismicLink>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ArtGallery;
