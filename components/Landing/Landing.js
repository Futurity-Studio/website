import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {Icon, ICONS, THEME, StealthButton, removeWebpFormat, TeaserHorizontal} from "../index";

import styles from './Landing.module.scss';
import {landingItems, landingContainer, landingItemsHeading} from "../../helpers/animation";

const Landing = ({exploreClick}) => {
  // const [background, setBackground] = useState(null)
  const duration = 100;

  useEffect(() => {
    // const asset = removeWebpFormat() ? require('images/background--landing.jpg') : require('images/background--landing.jpg?webp');
    // let background = { backgroundImage: `url('${asset}')`}
    // setBackground(background);
    setTimeout(() => {
      exploreClick();
    }, duration * 100)
  }, [])

  return(
    <motion.div
      className={styles.Landing}
      // style={background}
      initial={{
        opacity: 0,
        transition:{
          duration: .1,
          easings: "linear"
        }
      }}
      animate={{
        opacity: 1,
        transition:{
          duration: .1,
          easings: "linear"
        }
      }}
      exit={{
        // opacity: 0,
        transition: {
          duration: .1,
          delay: 1.5,
          easings: "linear" }
      }}

    >
      <motion.section
        variants={landingContainer}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div variants={landingItems}>
          <h3>Building better futures faster</h3>
        </motion.div>
        <motion.h4 variants={landingItems}>
          We are a global research and design innovation studio working at the intersection of design, technology, social, and business innovation.
        </motion.h4>
        <motion.h4 variants={landingItems}>
          What makes us different? We take on the roles traditionally provided by an analyst, engineer, and designer, to first understand future spaces. And then, we conduct trend-research, experimentation, and user-interventions to create them.
        </motion.h4>
        <br />
        <motion.div variants={landingItems}>
          <div>
            <TeaserHorizontal
              duration={duration}
              label={
                <StealthButton label={'View some examples'} onClick={exploreClick} />
              }
            />

          </div>
          <StealthButton
            label={'Learn How'} link={'/about'}
            icon={<Icon icon={ICONS.BULB} theme={THEME.DARK} />}
          />
        </motion.div>
      </motion.section>
    </motion.div>
  )
}

export default Landing;