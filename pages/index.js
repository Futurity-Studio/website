import React, { useState, useEffect } from 'react';
import { Card, Landing, removeWebpFormat } from "../components";
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { FeatureContent } from "../constants";

const Home = () => {
  const [slide, setSlide] = useState(3);
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

  const generateSlide = (data, key) => {
    return(
      <Card key={key} content={data} nextSlide={nextSlide} prevSlide={prevSlide} />
    )
  }

  return(
    <motion.main
      className={'Index'}
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
        { (slide === 3) &&
        <Landing exploreClick={() => { setSlide(0)} } />

        }
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
    </motion.main>)
}

export default Home