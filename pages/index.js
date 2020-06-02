import React, { useState, useEffect } from 'react';

import {Menu, Footer, DividedContent, SelectedWorks, ICONS, THEME, Icon} from "../components";
import '../theme/styles.scss';
import Link from "next/link";


const featureContent = [
  {
    tag: 'Upcoming Event - 2020 - aCommerce Lab',
    header:'Future Artifacts',
    short_desc: 'Designing for ubiquitous systems in aCommerce',
    type: 'acommerce',
    button: {
      link: '',
      text: 'view event information'
    }
  }, {
    tag: 'Artifact - Q2 - 2020 - aCommerce Lab',
    header:'Tomeato',
    short_desc: 'Polygenic Plantable Meals',
    type: 'foodturity',
    button: {
      link: '',
      text: 'explore the artifact'
    }
  }, {
    tag: 'Artifact - Q2 - 2020 - aCommerce Lab',
    header:'Frictionless Kitchen',
    short_desc: 'Home delivery with optimized supply chains.',
    type: 'acommerce',
    button: {
      link: '',
      text: 'explore the artifact'
    }
  }
]

const Home = () => {
  const [slide, setSlide] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect( () => {
   console.log('effect')
    console.log(slide);
  }, [slide]);


  const data = featureContent[slide];

  return(
    <main className={'Index'}>
      <section className={'hero-banner'} id={data.type}>
        <div className={'hero-banner--wrapper'}>
          <div className={'hero-banner--blob'}/>
          <div className={'hero-banner--content'}>
            <div className={'tagline'}>
              <p><em>Building better</em>&nbsp;<span><em>aCommerce</em></span>&nbsp;<em>Futures Faster</em></p>
            </div>
            <div className={'project-description'}>
              <em>{data.tag}</em>
              <h1>{data.header}</h1>
              <h4>{data.short_desc}</h4>
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
    </main>)
}

export default Home