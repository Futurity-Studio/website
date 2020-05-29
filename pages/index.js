import React from 'react';

import {Menu, Footer, DividedContent, SelectedWorks, ICONS, THEME, Icon} from "../components";
import '../theme/styles.scss';
import Link from "next/link";

const Home = () => {
  return(
    <main className={'Index'}>
      <section className={'hero-banner'}>
        <div className={'hero-banner--wrapper'}>
          <div className={'hero-banner--blob'}/>
          <div className={'hero-banner--content'}>
            <div className={'tagline'}>
              <p><em>Building better</em>&nbsp;<span><em>aCommerce</em></span>&nbsp;<em>Futures Faster</em></p>
            </div>
            <div className={'project-description'}>
              <em>Artifact - Q2 - 2020 - aCommerce</em>
              <h1>Frictionless Kitchen</h1>
              <h4>Home delivery with optimized supply chains.</h4>
              <div className={'content-nav'}>
                  <Icon icon={ICONS.LEFT_CHEV} theme={THEME.DARK} />
                  <Icon icon={ICONS.RIGHT_CHEV} theme={THEME.DARK} />
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