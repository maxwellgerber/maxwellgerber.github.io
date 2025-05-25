import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Max Gerber</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
