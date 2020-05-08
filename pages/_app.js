import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Normalize from "react-normalize";

import '../theme/theme.scss'

class MyApp extends App {
  componentDidMount(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render(){
    const { Component, pageProps, router } = this.props;
    return(
      <>
        <Head>
          <title>Futurity Studio</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>
        <Normalize/>
        <Component {...pageProps} key={router.route} />
      </>
    );
  }
}

export default MyApp;
