import React from 'react';
import {Footer, Menu} from "../components";

import '../theme/styles.scss';

const About = () => {
  return(
    <main className={'about'}>
      <Menu/>
      <section>
        <h1>dis about</h1>
      </section>
      <Footer/>
    </main>
  )
}

export default About