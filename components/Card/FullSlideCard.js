import React, { useState, useEffect, useLayoutEffect } from 'react';
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {WebpFormat, Icon, ICONS, Image, THEME} from "..";

import "./Card.scss"

const FullSlideCard = ({content, nextSlide, prevSlide}) => {
  const router = useRouter();
  const [background, setBackground] = useState(null)
  useLayoutEffect(() => {
    const asset = WebpFormat() ? require('images/'+ content.background) : require('images/'+ content.background +'?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  return(
    <motion.section
      className={'FullSlideCard'}
      id={content.type}
      style={background}

      initial={{  opacity: 0, transition:{ duration: .2, easings: "linear" } }}
      animate={{  opacity: 1, transition:{ duration: .2, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .2, easings: "linear" } }}
    >
      <div className={'content-wrapper'}>
        <div className={'content-image'} onClick={() => {
          router.push('/about#methodology')
        }}>
            <Image alt={'blob'} src={'blob_diffusion.png'} />
        </div>

        <div className={'content'}>
          <div className={'tagline'}>
            <p><em>Building better</em>&nbsp;<span><em>aCommerce</em></span>&nbsp;<em>Futures Faster</em></p>
          </div>
          <div className={'project-description'}>
            <div onClick={() => {
              if (content.button.link) {
                router.push(content.button.link).then(() => window.scrollTo(0,0));
              }
            }}>
              <em>{content.tag}</em>
              <h1>{content.header}</h1>
              <h4>{content.short_desc}</h4>
            </div>
            <div className={'content-nav'}>
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
            </div>
          </div>
        </div>
      </div>

    </motion.section>
  );
};

export default FullSlideCard;