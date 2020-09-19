import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useInterval } from "react-use";
import {
  Menu,
  Footer,
  DividedContent,
  SelectedWorks,
  ICONS,
  THEME,
  Icon,
  Card,
  Landing,
  removeWebpFormat
} from "../components";
import Link from "next/link";
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import { FeatureContent } from "../constants/featured";

const Home = () => {
  const [slide, setSlide] = useState(3);
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();

  const [background, setBackground] = useState(null)


  useEffect( () => {
    // console.log('effect')
    // console.log(slide);
  }, [slide]);


  useEffect(() => {
    const asset = removeWebpFormat() ? require('images/background--landing.jpg') : require('images/background--landing.jpg?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, []);

  // useEffect( () => {
  //   setInterval(() => {
  //     setSlide(Math.abs((slide+1) % featureContent.length ));
  //   }, 2000);
  // }, [])


  // useInterval( () => {
  //   setSlide(Math.abs((slide+1) % featureContent.length ));
  // }, 4000);

  const nextSlide = () => {
    console.log('next slide')
    setSlide(Math.abs((slide+1) % FeatureContent.length ));
  }
  const prevSlide = () => {
    console.log('prev slide')
    setSlide(Math.abs((slide-1) % FeatureContent.length ));
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
          duration: 20,
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
         <Landing exploreClick={nextSlide} />
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