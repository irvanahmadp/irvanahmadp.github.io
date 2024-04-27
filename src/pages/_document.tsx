import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

function MyDocument() {
  return (
    <Html className="snap-y scroll-smooth md:snap-mandatory" lang="en">
      <Head />
      <body className="pt-14 antialiased accent-purple-400 dark:bg-slate-900 dark:text-slate-100 md:pt-20">
        <Main />
        <NextScript />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-F47X5MD4V2`}
        />
        <Script
          strategy="lazyOnload"
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-F47X5MD4V2');
            `,
          }}
        />
      </body>
    </Html>
  );
}

export default MyDocument;
