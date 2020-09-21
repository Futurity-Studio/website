import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {Icon, ICONS, THEME, StealthButton, removeWebpFormat, TeaserHorizontal} from "../index";

import styles from './Landing.module.scss';
import {landingItems, landingContainer, landingItemsHeading} from "../../helpers/animation";


const Landing = ({exploreClick}) => {

  const duration = 100;
  useEffect(() => {
    setTimeout(() => {
      exploreClick();
    }, duration * 1000)
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
        <motion.div variants={landingItems}>
          <h4>
            We are a global research and design innovation studio working at the intersection of design, technology, social, and business innovation.
          </h4>
        </motion.div>
        <motion.div variants={landingItems}>
          <h4>
            What makes us different? We take on the roles traditionally provided by an analyst, engineer, and designer, to first understand future spaces. And then, we conduct trend-research, experimentation, and user-interventions to create them.
          </h4>
        </motion.div>
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