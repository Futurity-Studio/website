import React, { useState, useEffect } from 'react';
import { useInterval } from "react-use";
import {Menu, Footer, DividedContent, SelectedWorks, ICONS, THEME, Icon} from "../components";
import Link from "next/link";
import {useRouter} from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const featureContent = [
  {
    tag: 'Upcoming Event - 2020 - aCommerce Lab',
    header:'Future Artifacts',
    short_desc: 'Designing for ubiquitous systems in aCommerce',
    type: 'acommerce',
    button: {
      link: '/event?id=concord',
      text: 'view event information'
    }
  }, {
    tag: 'Artifact - Q2 - 2020 - FoodTurity Lab',
    header:'Tomeato',
    short_desc: 'Polygenic Plantable Meals',
    type: 'foodturity',
    button: {
      link: '/deliverable?id=tomeato',
      text: 'explore the artifact'
    }
  }, {
    tag: 'Artifact - Q2 - 2020 - aCommerce Lab',
    header:'Transaction Membrane',
    short_desc: 'Home delivery with optimized supply chains.',
    type: 'acommerce',
    button: {
      link: '/deliverable?id=membrane',
      text: 'explore the artifact'
    }
  }
]

const Home = () => {
  const [slide, setSlide] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const router = useRouter();

  useEffect( () => {
    // console.log('effect')
    // console.log(slide);
  }, [slide]);

  // useEffect( () => {
  //   setInterval(() => {
  //     setSlide(Math.abs((slide+1) % featureContent.length ));
  //   }, 2000);
  // }, [])


  // useInterval( () => {
  //   setSlide(Math.abs((slide+1) % featureContent.length ));
  // }, 4000);

  const generateSlide = (data) => {
    return(
      <section
        className={'hero-banner'}
        id={data.type}
      >
        <div className={'hero-banner--wrapper'}>
          <div className={'hero-banner--blob'} onClick={() => {
            router.push('/about#methodology')
          }}/>
          <div className={'hero-banner--content'}>
            <div className={'tagline'}>
              <p><em>Building better</em>&nbsp;<span><em>aCommerce</em></span>&nbsp;<em>Futures Faster</em></p>
            </div>
            <div className={'project-description'}>
              <div onClick={() => {
                if (data.button.link) {
                  router.push(data.button.link);
                }
              }}>
                <em>{data.tag}</em>
                <h1>{data.header}</h1>
                <h4>{data.short_desc}</h4>
              </div>
              <div className={'content-nav'}>
                <div onClick={() => {
                  setSlide(Math.abs((slide-1) % featureContent.length ));
                }}>
                  <Icon icon={ICONS.LEFT_CHEV} theme={THEME.DARK} />
                </div>
                <div onClick={() => {
                  setSlide(Math.abs((slide+1) % featureContent.length ));
                }}>
                  <Icon icon={ICONS.RIGHT_CHEV} theme={THEME.DARK} />
                </div>
              </div>
            </div>
            <div className={'bottom-menu--wrapper'}>
              <div>
                <nav>
                  <h4>Work</h4>
                  <h4>About</h4>
                  <h4>Labs</h4>
                  <h4>Contact</h4>
                </nav>
              </div>


            </div>
          </div>
        </div>
      </section>
    )
  }

  return(
    <motion.main
      className={'Index'}
      initial={{  opacity: 0, transition:{ delay: 2.5, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{ duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .25, easings: "linear" } }}
    >
      { generateSlide( featureContent[slide] ) }
    </motion.main>)
}

export default Home