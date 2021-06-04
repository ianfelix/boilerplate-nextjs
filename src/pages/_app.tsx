import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate - NextJS</title>
        <meta
          name="description"
          content="A simple starter project to work with TypeScript, React, NextJS and Styled Components "
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
