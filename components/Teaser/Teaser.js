import React from 'react';
import { motion } from 'framer-motion';

import styles from './Teaser.module.scss';
import {cubicBezier} from "../../helpers/animation";

const Teaser = ({label}) => {
  return(
    <div className={styles.Teaser}>
      <motion.div
        initial={{ top: -150 }}
        edit={{ top: -150 }}
        animate={{ top:  150 }}
        transition={{
          loop: Infinity,
          easing: cubicBezier,
          duration: 1.5
        }}
        className={styles.downLineBackground}
      />
      <div className={styles.downLine}/><em>{label}</em>
    </div>
  )
}

export default Teaser;