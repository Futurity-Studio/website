import React from 'react';
import {Footer, Menu} from "../components";

import '../theme/styles.scss';

const Labs = () => {
  return(
    <main className={'labs'}>
      <Menu/>
      <section>
        <h1>some labs</h1>
      </section>
      <Footer/>
    </main>
  )
}

export default Labs