import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { Icon, ICONS, THEME, StealthButton, removeWebpFormat} from "../index";

import styles from './Landing.module.scss';

const Landing = ({exploreClick}) => {
  const [background, setBackground] = useState(null)
  useEffect(() => {
    const asset = removeWebpFormat() ? require('images/background--landing.jpg') : require('images/background--landing.jpg?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  return(
    <motion.div
      className={styles.Landing}
      style={background}
      initial={{  opacity: 0, transition:{ duration: .2, easings: "linear" } }}
      animate={{  opacity: 1, transition:{ duration: .2, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .2, easings: "linear" } }}
    >
      <section>
        <h3>We builds better futures faster.</h3>
        <div className={styles.copy}>
          <h4>
            We are a global research and design innovation studio working at the intersection of design, technology, social, and business innovation.
          </h4>
          <br />
          <h4>
            What makes us different? We take on the roles traditionally provided by an analyst, engineer, and designer, to first understand future spaces. And then, we conduct trend-research, experimentation, and user-interventions to create them.
          </h4>
          <br />
        </div>
        <div>
          <div>
            <StealthButton label={'View some examples'} onClick={exploreClick} />
          </div>
          <StealthButton
            label={'Learn How'} link={'/about'}
            icon={<Icon icon={ICONS.BULB} theme={THEME.DARK} />}
          />
        </div>
      </section>
    </motion.div>
  )
}

export default Landing;