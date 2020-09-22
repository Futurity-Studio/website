import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Normalize from "react-normalize";
import {Image, Menu} from "../components";
import { isMobile } from 'react-device-detect';
import {AnimatePresence} from "framer-motion";

import '../theme/theme.scss';

class MyApp extends App {
  componentDidMount(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  // desktopPreLoader = () => {
  //   return(
  //     <Image src={'tomeato-optimized.gif'} alt={''}/>
  //   )
  // }

  render(){
    const { Component, pageProps, router } = this.props;
    return(
      <>
        <Head>
          <meta name="description" content="Futurity Studio—Building better futures faster."/>
          <meta name="description" content="Futurity Studio Innovation Research and Design Studio."/>
          <title>Futurity Studio</title>
          <link rel="icon" href="assets/img/favicon.ico"/>
        </Head>
        <Normalize/>
        <Menu />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>

        {/*<div className={'preload'}>*/}
        {/*  { (!isMobile) &&*/}
        {/*  // USED FOR OPTIMIZATIONS*/}
        {/*  this.desktopPreLoader()*/}
        {/*  }*/}
        {/*</div>*/}
      </>
    );
  }
}

export default MyApp;
