import React  from 'react';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {CommunityJoin, Footer, Icon, ICONS, THEME} from "../components";
import { cross } from "../constants/lottie";
import BackgroundWide from "../components/Icon/BackgroundWide";

const Synthesizingfutures = () => {

  return(
    <motion.main
      className={'SynthFutures'}
      initial={{  opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
    >
      <section className={'banner'}>
        <div className={'background'}>
          <BackgroundWide />
          <BackgroundWide />
          <BackgroundWide />
        </div>
        <div className={'foreground section-content'}>
          <div>
            <h1>Synthesizing</h1>
            <h1>Futures</h1>
          </div>
          <div>
            <CommunityJoin />
            <h3>A Playbook for Building Better Futures Faster</h3>
          </div>
        </div>
      </section>
      <Footer />
    </motion.main>
  )
}

export default Synthesizingfutures;
