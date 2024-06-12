import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from 'prismicio';
import './globals.css';

import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
        `}
      </Script> */}
      <body
        className={`${roboto.className} layout`}
        style={{
          boxShadow: '0px 38px 45px rgba(0, 6, 64, 0.10), 0px 5px 18px rgba(0, 0, 0, 0.10)'
        }}
      >
        <Navbar />
        {children}
        <PrismicPreview repositoryName={repositoryName} />
        <Footer />
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`
          }}
        /> */}
      </body>
    </html>
  );
}
