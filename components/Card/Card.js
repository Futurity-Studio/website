import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {removeWebpFormat, Icon, ICONS, Image, THEME, DeliverableSampler} from "..";
import Parallax from 'parallax-js';
import { isMobile } from 'react-device-detect';

import styles from "./Card.module.scss"

const Card = ({content, nextSlide, prevSlide}) => {
  const router = useRouter();
  const parallaxScene = useRef(null);
  let parallaxObj;

  useEffect(() => {
    parallaxObj = new Parallax(parallaxScene.current)
  },[]);

  return(
    <motion.section
      className={styles.Card}
      id={content.type}
      initial={{  opacity: 0, transition:{ duration: .2, easings: "linear" } }}
      animate={{  opacity: 1, transition:{ duration: .2, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .2, easings: "linear" } }}
    >
      <div >
        <div
          className={styles.image}
           onClick={() => {
             router.push(content.button.link)
           }}
          ref={parallaxScene}
        >
          <div data-depth="0.2">

            { !isMobile ?
              <Image alt={'blob'} src={content.image}/>
              :
              <Image alt={'blob'} src={content.image}/>
            }
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.tagline}>
            <h3>{`Building better ${content.slogan} faster`}</h3>
          </div>

          <div>
            <DeliverableSampler content={content} router={router} />
            <nav>
              <div onClick={() => {
                prevSlide();
              }}>
                <Icon icon={ICONS.LEFT_CHEV} theme={THEME.DARK} />
              </div>
              <div onClick={() => {
                nextSlide();
              }}>
                <Icon icon={ICONS.RIGHT_CHEV} theme={THEME.DARK} />
              </div>
            </nav>
          </div>
        </div>
      </div>

    </motion.section>
  );
};

export default Card;