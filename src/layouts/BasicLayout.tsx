import { FC, ReactElement } from "react";
import Head from "next/head";
import { Nav, Setting, Footer } from "src/components";

type BasicLayoutProps = {
  meta: {
    title: string;
  };
  children: ReactElement;
};

const BasicLayout: FC<BasicLayoutProps> = ({ meta, children }) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Nav />
      <Setting />
      {children}
      <Footer />
    </>
  );
};

export default BasicLayout;
