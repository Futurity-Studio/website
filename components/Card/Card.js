import React, { useState, useEffect, useLayoutEffect } from 'react';
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {removeWebpFormat, Icon, ICONS, Image, THEME} from "..";

import styles from "./Card.module.scss"

const Card = ({content, nextSlide, prevSlide}) => {
  const router = useRouter();
  const [background, setBackground] = useState(null)
  useLayoutEffect(() => {
    const asset = removeWebpFormat() ? require('images/'+ content.background) : require('images/'+ content.background +'?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  return(
    <motion.section
      className={styles.Card}
      id={content.type}
      style={background}

      initial={{  opacity: 0, transition:{ duration: .2, easings: "linear" } }}
      animate={{  opacity: 1, transition:{ duration: .2, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .2, easings: "linear" } }}
    >
      <div>
        <div className={styles.image} onClick={() => {
          router.push('/about#methodology')
        }}>
            <Image alt={'blob'} src={'blob_diffusion.png'} />
        </div>

        <div className={styles.content}>
          <div className={styles.tagline}>
            <p><em>Building better</em>&nbsp;<span><em>aCommerce</em></span>&nbsp;<em>Futures Faster</em></p>
          </div>
          <div className={styles.projectDescription}>
            <div onClick={() => {
              if (content.button.link) {
                router.push(content.button.link).then(() => window.scrollTo(0,0));
              }
            }}>
              <em>{content.tag}</em>
              <h1>{content.header}</h1>
              <h4>{content.short_desc}</h4>
            </div>
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