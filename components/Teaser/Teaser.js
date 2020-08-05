import React from 'react';
import { motion } from 'framer-motion';

import './Teaser.scss';
import {cubicBezier} from "../../helpers/animation";

const Teaser = ({label}) => {
  return(
    <div className={'Teaser'}>
      <motion.div
        initial={{ top: -150 }}
        edit={{ top: -150 }}
        animate={{ top:  150 }}
        transition={{
          loop: Infinity,
          easing: cubicBezier,
          duration: 1.5
        }}
        className={'down-line--background'}
      />
      <div className={'down-line'}/><em>{label}</em>
    </div>
  )
}

export default Teaser;