import React, { useState, useEffect, useRef, useLayoutEffect }from 'react';
import { useRouter } from "next/router";
import { useIntersection } from "react-use";
import {AccordionSection, DividedContent, Footer, Icon, StealthButton, ICONS, THEME, BorderButton} from "../components";
import {LabData, Links, ROUTES} from "../constants/";
import Link from "next/link";
import {motion, useElementScroll} from "framer-motion";


const Services = () => {
  return (
    <main
      className={'Services'}
    >
      Services
      {/*<section style={{backgroundColor: '#171717'}}>huge shit</section>*/}
    </main>
  )
}

export default Services;