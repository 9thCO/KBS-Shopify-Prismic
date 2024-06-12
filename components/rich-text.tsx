import { RichTextField } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';

export async function RichText({ field }: { field: RichTextField }) {
  return (
    <PrismicRichText
      field={field}
      components={{
        heading1: ({ children }) => (
          <h1 className="text-4xl/tight font-medium md:text-5xl/tight xl:text-6xl/tight dark:text-white">
            {children}
          </h1>
        ),
        heading2: ({ children }) => (
          <h2 className="text-3xl/tight font-medium md:text-4xl/tight xl:text-5xl/tight dark:text-white">
            {children}
          </h2>
        ),
        heading3: ({ children }) => (
          <h3 className="text-2xl/tight font-medium md:text-3xl/tight xl:text-4xl/tight dark:text-white">
            {children}
          </h3>
        ),
        heading4: ({ children }) => (
          <h4 className="text-xl/tight font-medium md:text-2xl/tight xl:text-3xl/tight dark:text-white">
            {children}
          </h4>
        ),
        heading5: ({ children }) => (
          <h5 className="text-lg/tight font-medium md:text-xl/tight xl:text-2xl/tight dark:text-white">
            {children}
          </h5>
        ),
        paragraph: ({ children }) => (
          <p className="font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
            {children}
          </p>
        )
      }}
    />
  );
}
