import React, { useState, useEffect } from 'react';
import {Card, Landing, removeWebpFormat, Icon, ICONS, THEME, DividedContent} from "../components";
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FeatureContent } from "../constants";

const Home = () => {
  const [slide, setSlide] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();
  const pageTimer = 7500;
  let pageTimerInterval;
  const [background, setBackground] = useState(null)

  useEffect( () => {
  }, [slide]);

  useEffect(() => {
    const asset = removeWebpFormat() ? require('images/background--landing.jpg') : require('images/background--landing.jpg?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
    window.scrollTo(0, 0);
  }, []);

  const setPageTimerInterval = () => {
    pageTimerInterval = setInterval(() => {
      nextSlide();
    }, pageTimer)
  }

  const nextSlide = () => {
    setSlide((slide+1) % FeatureContent.length);
  }
  const prevSlide = () => {
    setSlide((slide+2) % FeatureContent.length );
  }

  const bannerAnimation = {
    initial:{
      opacity: 0
    },
    animate:{
      opacity: 1,
      transition: {
        duration: .25,
        delay: .5,
        staggerChildren: .2,
        ease: 'easeInOut',
      }
    },
    exit:{
      opacity: 0
    }
  }

  const bannerVariant = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .12,
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
            variants={bannerAnimation}
          >
            <motion.div><motion.h2 variants={bannerVariant}>
                Our
              </motion.h2>
            </motion.div>
            <motion.div><motion.h2 variants={bannerVariant}>
                Financial
              </motion.h2>
            </motion.div>
            <motion.div><motion.h2 variants={bannerVariant}>
                Futures
              </motion.h2>
            </motion.div>
            <motion.div><motion.h2 variants={bannerVariant}>
                are
              </motion.h2>
            </motion.div>
            <motion.div><motion.h2 variants={bannerVariant}>
                Fancy
              </motion.h2>
            </motion.div></motion.div>

          <div>
            <p>
              Futurity Studio is a research and design studio at the intersection of design, technology, social, and business innovation helping communities, and corporates build better futures faster.
            </p>
            <em>learn more
              {/*<Icon icon={ICONS.ARROW_RIGHT} theme={THEME.LIGHT}/>*/}
            </em>
          </div>



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
    </motion.main>)
}

export default Home