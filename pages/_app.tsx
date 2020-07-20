import React from 'react';
import { AppProps } from 'next/app';
import i18n from '../i18n';

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <Component {...pageProps} />
  );
};

export default i18n.appWithTranslation(MyApp);
