import React, { useState, useEffect, useRef } from 'react';
import {Card, removeWebpFormat, Icon, ICONS, THEME, Footer} from "../components";
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FeatureContent } from "../constants";
import Typed from 'typed.js';

import { indexBannerContainer } from "../helpers/animation";

const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

const Home = () => {
  const [slide, setSlide] = useState(0);
  const router = useRouter();
  const [background, setBackground] = useState(null)
  const bannerBadFirst = useRef(null);
  const bannerBadSecond = useRef(null);
  let bannerBadFirstTyped;
  let bannerBadSecondTyped;

  useEffect(() => {
    const asset = removeWebpFormat() ? require('images/background--landing.jpg') : require('images/background--landing.jpg?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const options = {
      strings:
        shuffleArray(['financial','commercial','industrial','daily','everyday','ecological','environmental','mental','physical']),
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 3000,
      backDelay: 5000,
      showCursor: false,
      loop: true,
      loopCount: Infinity,
    };
    bannerBadFirstTyped = new Typed(bannerBadFirst.current, options);
    return(() => {
      bannerBadFirstTyped.destroy();
    })
  }, [bannerBadFirst])

  useEffect(() => {
    const options = {
      strings:
        shuffleArray(['risky', 'complicated', 'uncertain']),
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 3000,
      backDelay: 5000,
      showCursor: false,
      loop: true,
      loopCount: Infinity,
    };
    bannerBadSecondTyped = new Typed(bannerBadSecond.current, options);
    return(() => {
      bannerBadSecondTyped.destroy();
    })
  }, [bannerBadSecond])

  const nextSlide = () => {
    setSlide((slide+1) % FeatureContent.length);
  }
  const prevSlide = () => {
    setSlide((slide+2) % FeatureContent.length );
  }

  const bannerVariant = {
    initial: {
      opacity: 0,
      y: 30,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .5,
        duration: .2,
      }
    }
  }

  const generateSlide = (data, key) => {
    return(
      <Card key={key} content={data} nextSlide={nextSlide} prevSlide={prevSlide} />
    )
  }

  return(
    <motion.main
      className={'Index'}
    >
      <section className={'pre-banner'}>
        <div className={'section-content'}>

          <motion.div
            className={'bad-roller'}
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={indexBannerContainer}
          >
            <motion.div><motion.h2 variants={bannerVariant}>
              Our
            </motion.h2>
            </motion.div>
            <motion.div><motion.h2 variants={bannerVariant} ref={bannerBadFirst}>
              certain
            </motion.h2>
            </motion.div>
            <motion.div><motion.h2 variants={bannerVariant}>
              futures
            </motion.h2>
            </motion.div>
            <motion.div><motion.h2 variants={bannerVariant}>
              are
            </motion.h2>
            </motion.div>
            <motion.div><motion.h2 variants={bannerVariant} ref={bannerBadSecond}>
              no more
            </motion.h2>
            </motion.div></motion.div>

          <motion.div
            initial={"initial"}
            animate={"animate"}
            exit={"exit"}
            variants={indexBannerContainer}
          >
            <h4>
              Futurity Studio is a research and design studio at the intersection of design, technology, social, and business innovation helping communities, and corporates build better futures faster.
            </h4>
            <em onClick={() => {router.push('/services')}}>learn more
              <Icon icon={ICONS.ARROW_RIGHT} theme={THEME.LIGHT}/>
            </em>
          </motion.div>



        </div>
      </section>
      <motion.div
        style={background}
        initial={{
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundSize: '100% 100%',
          transition: {
            duration: 12,
            easings: "backInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }
        }}
        exit={{
          opacity: 0,
          transition:{
            duration: .25,
            easings: "linear"
          }
        }}
      >
        <AnimatePresence exitBeforeEnter>
          {/*{ (slide === 3) &&*/}
          {/*<Landing exploreClick={() => { setSlide(0)} } />*/}

          {/*}*/}
          { (slide === 0) &&
          generateSlide( FeatureContent[0], 0 ) }
          }
          { (slide === 1) &&
          generateSlide( FeatureContent[1], 1 ) }
          }
          { (slide === 2) &&
          generateSlide( FeatureContent[2], 2 ) }
          }
        </AnimatePresence>
      </motion.div>
      <Footer/>
    </motion.main>
  )
}

export default Home