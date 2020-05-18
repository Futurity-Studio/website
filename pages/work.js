import React from 'react';
import {Footer, Menu} from "../components";

import '../theme/styles.scss';

const Work = () => {
  return(
    <main className={'work'}>
      <Menu/>
      <section>
        <h1>le work</h1>
      </section>
      <Footer/>
    </main>
  )
}

export default Work