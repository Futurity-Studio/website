import React  from 'react';
import { motion } from "framer-motion";
import {CommunityJoin, Footer, Icon, ICONS, THEME} from "../components";

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

        </div>
        <div className={'foreground section-content'}>
          <div>
            <h1>Synthesizing</h1>
            <h1>Futures</h1>
          </div>
          <div>
            {/*todo -- possibly move form to another component */}
            {/*<form name="community" netlify>*/}
            {/*  <label htmlFor="email"><h4>More coming soon.<br /> Stay in touch for more updates!</h4></label>*/}
            {/*  <input type="email" id="email" name="email" placeholder={'Your Email Here'} required />*/}
            {/*  <button type="submit">*/}
            {/*    <Icon icon={ICONS.ARROW_RIGHT} theme={THEME.DISABLED}/>*/}
            {/*  </button>*/}
            {/*</form>*/}
            <CommunityJoin />
            <h3>Building Better Futures Faster</h3>
          </div>

        </div>
      </section>
      <Footer />
    </motion.main>
  )
}

export default Synthesizingfutures;
