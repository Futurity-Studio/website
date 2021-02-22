import React from 'react';
import { motion } from 'framer-motion';
import styles from './Teaser.module.scss';
import {cubicBezier} from "../../helpers/animation";

export const Teaser = ({label, onClick}) => {
  return(
    <div className={styles.Teaser}>
      <motion.div
        initial={{ top: -150 }}
        animate={{ top:  150 }}
        transition={{
          repeat: Infinity,
          easing: cubicBezier,
          duration: 1.5
        }}
      />
      <div/>
      <em onClick={onClick}>{label}</em>
    </div>
  )
}

export const TeaserHorizontal = ({label, onClick, duration}) => {
  return(
    <div className={styles.TeaserHorizontal}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x:  175 }}
        transition={{
          easing: cubicBezier,
          duration: duration
        }}
      />
      <em onClick={onClick}>{label}</em>
      <div/>
    </div>
  )
}

