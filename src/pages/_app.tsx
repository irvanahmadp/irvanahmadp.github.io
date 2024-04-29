import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "src/hooks/useLanguage";
import "src/styles/globals.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
      <ThemeProvider attribute="class" defaultTheme="system">
        <LanguageProvider>
          {getLayout(<Component {...pageProps} />)}
        </LanguageProvider>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-SK52D5FY7N`}
        />
        <Script
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-SK52D5FY7N');
            `,
          }}
        />
      </ThemeProvider>
  );
}
