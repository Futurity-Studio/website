import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {DividedContent, Icon, ICONS, StealthButton, THEME, removeWebpFormat} from "../index";

import './landing.scss';

const Landing = ({exploreClick}) => {
  const [background, setBackground] = useState(null)
  useEffect(() => {
    const asset = removeWebpFormat() ? require('images/background--landing.jpg') : require('images/background--landing.jpg?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  return(
    <motion.div
      className={'landing'}
      style={background}
      initial={{  opacity: 0, transition:{ duration: .2, easings: "linear" } }}
      animate={{  opacity: 1, transition:{ duration: .2, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .2, easings: "linear" } }}
    >
      <section>
        <div className={'identity'}>
          <DividedContent
            left={
              <div className={'logo'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
                  <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
                </svg>
              </div>
            }
            right={<h2>Futurity Studio</h2>}
          />
        </div>
        <div className={'copy'}>
          <h4>
            We are a global research and design innovation studio working at the intersection of design, technology, social, and business innovation.
          </h4>
          <br />
          <h4>
            What makes us different? We take on the roles traditionally provided by an analyst, engineer, and designer, to first understand future spaces. And then, we conduct trend-research, experimentation, and user-interventions to create them.
          </h4>
          <br />
          <p>
            We help you build better futures faster.
          </p>
        </div>
        <div className={'buttonContainer'}>
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