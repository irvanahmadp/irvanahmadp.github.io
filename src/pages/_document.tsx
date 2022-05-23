import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

function MyDocument() {
  return (
    <Html className="snap-y scroll-smooth md:snap-mandatory">
      <Head />
      <body className="pt-14 antialiased accent-purple-400 dark:bg-slate-900 dark:text-slate-100 md:pt-20">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
