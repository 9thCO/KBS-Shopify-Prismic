interface MetaDataProps {
  metaTitle?: string;
  metaDescription?: string;
  socialCardImage?: string;
  socialCardDescription?: string;
  socialCardTitle?: string;
}

export async function MetadataItem(props: MetaDataProps) {
  const { metaTitle, metaDescription, socialCardImage, socialCardDescription, socialCardTitle } =
    props;

  const host = new URL(socialCardImage ?? 'http://localhost:3000').host ?? 'localhost:3000';

  return {
    title: metaTitle,
    description: metaDescription,
    metadataBase: host,
    openGraph: {
      title: socialCardTitle,
      description: socialCardDescription,
      images: [
        {
          url: socialCardImage,
          width: 1600,
          height: 800,
          alt: socialCardTitle
        }
      ]
    },
    twitter: {
      handle: '@roosterforge',
      site: '@roosterforge',
      cardType: 'summary_large_image'
    }
  };
}
