import React, {useEffect, useState, useRef} from 'react';
import { useRouter } from "next/router";
import { DividedContent, Footer, ICONS, Teaser, THEME, Icon, BorderButton, StealthButton, Image, removeWebpFormat } from "../components";
import Link from "next/link";
import {ROUTES} from "../constants";
import {AnimatePresence, motion} from "framer-motion";
import { useInView } from 'react-intersection-observer'
import {animateInUp} from "../helpers/animation";
import {getAnchor, getParam, openInNewTab, scrollToRef} from "../helpers/utils";
import { Advisors } from "../constants/featured";

const About = () => {
  const router = useRouter();
  const [ deliverableSection, setDeliverableSection ] = useState(0);
  const [ methodologySection, setMethodologySection ] = useState(null);

  const anchors = {'methodology': useRef(null), 'team': useRef(null)};

  const [ analysisRef, analysisRefInView] = useInView({
    rootMargin: '0px 0px -45% 0px',
    threshold: 0.25,
    triggerOnce: true
  });
  useEffect(() => {
    if (analysisRefInView){
      setDeliverableSection(0);
    }
  }, [analysisRefInView])
  const [ artifactRef, artifactRefInView] = useInView({
    rootMargin: '0px 0px -45% 0px',
    threshold: 0.25,
    triggerOnce: true
  });
  useEffect(() => {
    if (artifactRefInView){
      setDeliverableSection(1);
    }
  }, [artifactRefInView])
  const [ actionRef, actionRefInView] = useInView({
    rootMargin: '0px 0px -45% 0px',
    threshold: 0.25,
    triggerOnce: true
  });
  useEffect(() => {
    if (actionRefInView){
      setDeliverableSection(2);
    }
  }, [actionRefInView])

  useEffect(() => {
    // if( !router.asPath.includes(('#')) ) {
    //   setTimeout(() => {
    //     window.scrollTo(0, 0);
    //   }, 100);
    // } else {
    //   let toAnchor = getAnchor(router);
    //   if (toAnchor && anchors[toAnchor]) {
    //     scrollToRef(anchors[toAnchor])
    //   }
    // }
  }, []);


  const [background, setBackground] = useState(null)
  useEffect(() => {
    const asset = removeWebpFormat() ? require('images/background--generic.jpg') : require('images/background--generic.jpg?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  const generateAdvisors = () => {
    return(
      Advisors.map((a,i) =>
        <div key={i} className={'advisor'}>
          <h4>{a.name}</h4>
          <div>
            <p>{a.bio}</p>
            <StealthButton
              icon={<Icon icon={ICONS.RIGHT} theme={THEME.DARK} />}
              label={"explore more"}
              onClick={() => openInNewTab(a.website)}
            />
          </div>
        </div>
      )
    )
  }

  return(
    <motion.main
      className={'About'}
      initial={{  opacity: 0, transition:{  duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .25, easings: "linear" } }}
    >

      <section className={'team'} ref={anchors['team']}>
        <div className={'team--container'}>
          <div className={'team--header'}>
            <div><h2>The Studio</h2>
              <p>Together we have over 50 years of experience in analysis, forecasting, design and development for startups, moonshot factories, and Fortune 500 companies.</p>
            </div>
            <div className={'team--photo'}>
              <Image src={'team.png'} alt={'a team photo'} />
            </div>
          </div>
          <div className={'team--content'}>
            <div>
              <p>Synthesist - an individual who developing the craft of unification</p><em>presented from left to right</em>
            </div>
            <div className={'team--members'}>
              <div>
                <Link prefetch={false} href={'https://www.linkedin.com/in/ceciliatham/'}>
                  <a target={'_blank'}>
                    <h4>Cecilia MoSze Tham</h4>
                    <em>Futures Principal</em>
                  </a>
                </Link>
              </div>

              <div>
                <Link prefetch={false} href={'https://www.linkedin.com/in/lucaslpena/'}>
                  <a target={'_blank'}>
                    <h4>Lucas Lorenzo Pe&ntilde;a</h4>
                    <em>Creative Tech Principal</em>
                  </a>
                </Link>
              </div>

              <div>
                <Link prefetch={false} href={'https://www.linkedin.com/in/markbunger/'}>
                  <a target={'_blank'}>
                    <h4>Mark Dixon B&uuml;nger</h4>
                    <em>Strategy Principal</em>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={'clients'}>
        <BorderButton
          id={'Our Customers'}
          content={<em>Proudly Serving</em>}
          icon={<Icon icon={ICONS.GLOBE} theme={THEME.DARK} />}
        />
        <div className={'section-content'}>
          <DividedContent
            hiddenBar={true}
            medLeft={true}
            right={<div>
              <p>We've worked in dozens of corporate and non-commercial moonshot programs in many industries. Corporate venture capitalists, product developers, and R&D teams at Adidas, BASF, BMW, IBM, Telefonica, the United Nations, and more than 150 other Fortune 500 global companies have been our clients. We have taught sustainability, innovation, design, and entrepreneurship to business and engineering students at Parsons School of Design, the Institute for Advanced Architecture of Catalonia, the University of California at Berkeley, Presidio Graduate School, and the International University of Monaco, and INSEEC.</p>
            </div>}
            left={
              <div className={'clients--list'}>

                {/* WFP*/}
                <div>
                  <svg
                    // width={208} height={211}
                    viewBox="0 0 208 211" xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{"World_Food_Programme_Logo_Simple"}</title>
                    <g fill="#090909" fillRule="nonzero">
                      <path d="M120.1 62.2c1-2.3 2.2-4.5 3.6-6.6.7-1 1.4-1.7 2.1-2.7-.4 0-.7.1-1 .3-.7.5-1 1.3-1.5 1.7-1.2 1-1.2 1.9-1.9 2.3-.5.3-.9.8-1.2 1.3-.3.5-.6 1-.7 1.6-.1.3-.3 0-.8.7-.6.9-1 1.9-1.2 2.9-.1.3-.7.5-1.1 1.2-.5 1-.9 2.1-1.1 3.3-.1.3-.6.6-1 1.5-.3.6-.6 1.3-.7 2-.1.7-.5.8-.9 1.9-.2.9-.4 1.8-.4 2.7-.2.4-.4.8-.7 1.2-.4.9-.6 1.8-.7 2.7-.4.8-.7 1.6-.9 2.5-.2 1-.2 2-.1 3.1-.4 1.7-.5 3.4-.4 5.2.1.9.2 1.7.2 2.6-.2 2.6-.3 4.8-.3 7.8 0 1.9.1 3.8.4 5.7.3 2 .7 3.6.7 3.6h6.7c-.1-2.6-.1-5.3.1-7.9.2-2.3.7-4.6 1.3-6.8.6-2.2 1.4-4.4 2.3-6.6 0-.1 0-.4-.3-.1-.7.5-1.3 1.2-1.8 1.9-.7 1.2-1.4 2.4-2 3.6-.8 1.5-1.2 2.8-2.1 4.7 0-1.3.1-2.6.4-3.8.6-3 1.7-5.9 3.4-8.6.7-1 1.4-1.9 2.3-2.7 1-.9 1.9-1.7 3-2.6-1.1-.6-2.6.6-2.9.7-1.6.3-2.2 1.8-2.7 1.9-.6.3-1.1.7-1.5 1.3-.4.4-.5 1.1-.9 1.3-.7.5-1.2 1.1-1.5 1.8-.2.3-.7 2-1.2 1.8.9-5.5 2.9-10.7 6-15.3 1.9-3 4.4-5.6 7.3-7.7.4-.3.5-.4-.1-.4-3 .4-3.1 1.7-3.6 1.8-.5.2-1 .6-1.4 1-.7.7-.6 1.2-.9 1.4-.5.4-1 .8-1.3 1.4-.2.3-.5 1.1-.8 1.3-.8.4-1.4 1-1.9 1.8-.2.5-.5 1.1-.7 1.6-.4.5-.9.9-1.4 1.3.5-2.6 1.3-5.1 2.2-7.5 1-3 2.2-6.1 3.6-9.1zM126.9 81.3c2.4-5.3 5.2-10.3 8.6-14.9.4-.7.9-1.3 1.2-1.9l1.2-1.8c1.1-1.8 1.6-2.3 2.8-4 .3-.4.6-.8.7-1.3.2-1-.6-1.6-.8-2.6-.2-.9-.1-1.9.4-2.8.3-.4.6-.9.8-1.4.5-1.3.3-4.1 1-4.2-.2 1.4-.2 2.8 0 4.1.2 1.5 1.2 2.4 1.5 4 1-.2 2-.2 3-.1 1 0 1.9-.1 2.8-.5 1.2-.4 2.1-1.1 3.4-1.4-1 1-2.5 1.3-3.7 2.1-.5.3-.9.7-1.1 1.1-.5.8-.9 1.5-1.6 1.8-1.4.6-2.5.3-4.1.6-2.5 2.7-4.6 5.7-6.4 8.9-5 8.5-9.2 17.4-11.7 26.4.9-1.6 1.6-3.1 2.6-4.6 1-1.7 2.2-3.3 3.4-4.9 2.9-3.8 5.8-7.2 9-10.7 2.5-2.8 5.4-5.2 8.6-7.2 4.2-2.6 9.4-4.5 13.9-3.5.6.1 1.1.3 1.6.6-5.2-.7-10.5.9-14.6 4.2-3 2.4-5.7 5-8.1 8-1.3 1.5-2.5 3.2-3.7 4.8-1.2 1.6-2.4 3.5-3.4 5.3-3.6 6-6.5 12.5-8.5 19.2-.1.2-.1.4-.1.6.1-.1.2-.3.3-.5 2.8-4.5 6.1-8.8 10.3-11.8.4-.3.7-.7.9-1.1.5-1.8-.9-2.6 1-5.1.4-.6 1-.8 1.4-1.3.8-1.2 1.4-3.3 2-3.9-.5 1.4-.9 2.8-1.3 4.3 0 1.5.1 3 .3 4.5 1 .2 1.9.5 2.9.9 1.1.3 2.3.4 3.5.2.7-.2 1.5-.3 2.2-.3-1.3.7-3.1.6-4.4 1.2-.9.5-1.2 1.2-2.5 1.4-1 .2-2 .1-2.9-.3-.4-.3-1-.4-1.5-.2-1.3.7-2.5 1.6-3.4 2.7-2.7 2.7-4.9 5.9-6.7 9.3-.5 1-1 2-1.4 3-.2.5-.8 1.9-.8 1.9h-6.7v-2.7c.1-1.3.3-2.6.6-3.9.4-2.1.8-3.9 1.3-5.9.5-2 1.1-3.8 1.8-5.7 1.3-3.2 2.8-7 4.4-10.6zM61.6 133.9c2.1-1.7 4.4-3.3 6.7-4.6 1-.6 2.5-1.3 3.7-1.8 4.8-2.1 10-3.3 15.2-3.4h39.9c1.2 0 2.4.4 3.3 1.2.8.8 1.2 1.9 1.4 3 .1.9.1 1.9-.1 2.8-.1.7-.4 1.4-.8 2-.3.4-.6.8-1 1.1-.6.4-1.4.6-2.1.6H80.8c-3.1 0-6.2.2-9.2.6-2.3.3-4.6.7-6.8 1.2-2.8.8-5.5 1.7-8.2 2.8 1.4-2.2 3.1-3.9 5-5.5z" />
                      <path d="M75.4 118.1c2.5-1.7 5.2-3.1 8-4.2 1.5-.5 3-1 4.5-1.4 1.7-.4 3.5-.7 5.2-.8h34.1s.7 0 1 .1c.5.1.9.3 1.4.5.6.4 1.1 1 1.5 1.6.8 1.4 1.1 3.1.8 4.7-.3 1.9-1.7 4-3.7 4H90.4l-3.1.1c-1.8.1-3.6.2-5.4.5-1.3.2-2.7.5-4 .8-4.5 1.2-8.5 3.5-12.6 5.3 2.5-4.4 6-8.2 10.1-11.2zM56.4 141.2c5.9-3.5 13-4.9 19.5-5.1h51.9c3.1 0 4.2 3.1 4.2 5.5 0 .7-.1 1.5-.4 2.2-.3.7-.6 1.3-1.1 1.9-.3.3-.7.6-1.2.8-.5.1-1 .2-1.6.1H89.9s-2-.1-3.4-.2c-1-.1-1.8-.2-2.9-.4-2.4-.6-4.7-1.2-7-2.1-1.5-.5-3.1-.8-4.7-1.1-3.1-.5-6.3-.7-9.4-.4-3.8.3-7.5 1-11.1 2.2.6-.9 3.2-2.3 5-3.4z" />
                      <path d="M83.8 157.1c-1.8-.6-3.4-1.4-5-2.4-2-1.3-3-2.4-5.5-3.5-2.3-1.2-4.6-2.2-7-3.1-1.9-.7-3.9-1.2-5.9-1.6-2.9-.5-5.8-.7-5.8-.7.3-.2.7-.4 1-.5 2.8-.9 5.7-1.4 8.7-1.6 2.6-.2 5.3 0 7.8.5 1.3.2 2.6.5 3.8.9 4 1.2 8.7 3 12.8 3h38.1c1.1 0 3.3.4 4.1 1.9 1.1 1.8 1.2 4 .5 5.9-.3.8-.7 1.5-1.3 2.1-.5.4-1.2.7-1.9.8H94.6c-3.6 0-7.3-.6-10.8-1.7zM98.8 168.9c-.9-1-2.2-2.4-3.4-3.8-1.3-1.5-2.4-3.2-3.2-5.1h22c0 1.8-.2 3.7-.5 5.5-.5 2.7-1.3 5.3-2.6 7.7 0 2.1.9 4.1 1 6.2-1.9 1.1-3.7 2.3-5.4 3.8-.1.1-.3.1-.3-.2-.9-3.3-1.3-6.2-2-9.4-2-1.4-3.8-3-5.6-4.7zM121.6 167.1c-.5-1.2-1.1-2.4-1.8-3.6-.1.8 0 1.3-.1 2.1s-.6.4-.7.1c-.3-.9-.6-2-.9-2.9-.3-.9-.5-1.9-.6-2.8h3.7s.1 0 .2.4c.2.9.1 1.8.4 2.9.3 1.3.8 2.6 1.3 3.9.4 1.1 1 2.3 1.5 3.4.1.2.1.4 0 .6-.1.1-.3.2-.4.1l-.1-.1c-1.2-1.3-1.9-2.7-2.5-4.1zM127.2 169.7c-.6-1.3-1.5-2.8-1.4-4.3.4.5.6.9 1.1 1.2.3.1.8 0 .7-.4-.2-.8-.6-1.5-1-2.7-.5-1.7-1-3.5-1-3.5h-3.7c.2 1.3.6 2.6 1.1 3.9.9 2.3 1.9 4.5 3.2 6.6.9 1.7 1.9 3.3 3.1 4.8.4.4 1.4.1 1-.6-1.3-1.6-2.3-3.3-3.1-5zM151.5 43.3c-.8.3-1.5.9-1.9 1.6-.3.6-.5 1.4.1 1.9 1 .8 2.2 0 2.6-.9.4-1 .5-2.1.4-3.2 0 0-.7.3-1.2.6z" />
                      <path d="M152.3 48.5c.5-.8 1.2-1.5 2-1.9 1-.6 2-1.2 2.6-1.6.6-.4.8-.7.8-.7-.3.1-.6.2-.9.4-1.7 1-3.6 2.2-4.3 2.5-1.1.4-2.3.6-3.4.7-.3-1.1-.5-2.3-.6-3.4 0-.7.1-1.3.3-2 .4-1.9.4-2.9.4-2.9-.3.3-.4.7-.4 1.1-.1.8-.2 1-.4 1.9-.1.9-.4 1.8-1 2.6-.9.9-1.7 2.6-1 3.8.4.7 1.1.6 1.3.8.2.2.3.6 1 .8 1.4.5 2.9-.8 3.6-2.1z" />
                      <path d="M150.6 52.4c.4-.7 1-1.3 1.7-1.7 1.2-.7 2.1-1.2 2.9-1.6.3-.1.6-.4.7-.7-1 .4-1.9.9-2.8 1.4-1.1.7-2.2 1.1-3.4 1.2-.3 0-.7 0-1-.1-.5 0-1.1 0-1.6.1-.1-.6-.3-1.1-.5-1.7-.2-.4-.4-.9-.5-1.4-.1-.5-.1-1-.1-1.5.2-1.2.3-2.4.4-3.6-.8 1.6-.4 3.6-1.4 4.8-.4.5-.7 1-1 1.6-.5 1-.4 2.3.2 3.2.4.6 1.2.6 1.4.7.2.1.4.8 1.2 1 1.4.3 2.9-.4 3.8-1.7zM151 83.6c.3-.7.6-1.5 1-2.2-1 .1-1.1.2-2.5.4-.4.1-.8.3-1.1.5-.6.5-1 1.2-.8 2 .1.3.3.6.6.7 1.1.3 2.3-.3 2.8-1.4z" />
                      <path d="M152.1 85.4c1.3-.3 2.8-.9 3.4-.7-1.3.6-2.7 1-4.1 1.3-1 .4-1.9 1-2.7 1.8-.8.7-2 .9-3 .4-.4-.2-.6-.6-.7-1 0-.2-.5-.5-.8-.7-.2-.3-.4-.6-.4-.9 0-1.8 1.3-2.6 2.7-3.6 1-.8 2.3-4.2 3.1-4.9-.1 1.1-1.6 3.2-2.2 4.8-.5 1.3-.3 2.3-.6 3.6.9.1 2 .3 3 .3.7-.1 1.5-.2 2.3-.4z" />
                      <path d="M150.8 88.1c-.7.1-1.6.4-2.2.5-2.1.4-3.1-.6-4.9-.6.1-2-.5-2.8 0-4.1.5-1.3 1-2.3 1.4-3.3.2-.4.4-.9.4-1.4 0 0-.5.8-2 3.6-.5 1-1.4 1.2-2.2 2.2-.8 1-1.5 3.4.3 4.3.4.2.3.8.6 1 1.1 1.1 3.5 1 4.9-.3 1.1-.8 2.4-1.4 3.8-1.6.5-.1.9-.3 1.3-.5-.6.1-1 .1-1.4.2zM110.2 73.5c.7-2.3 1.1-4.6 1.4-6.9.4-3.6-.6-7.2-2.8-10 .2 1.2.5 2.2.7 3.4.1 1.5 0 3.1-.4 4.6-.3 1.1-.8 2.2-1.3 3.3-.7 1.3-1.4 2.5-2.4 3.7-2.5 3.1-6.3 9.1-6.3 9.1h-.5c0-.8 1.7-3.3 2.6-4.8 2-3.1 3.4-4.8 5.2-7.6 1.1-1.7 1.8-3.7 2.2-5.7.5-3.9-1.5-8.5-4.5-10 .7 2.9.6 7-.9 8.7-2.7 2.9-5 6.2-6.7 9.8-.1.1-.5-.6-.9-.8-.4-.3-.2-1.2-.4-1.8-.1-.4-.3-.7-.5-1-.6-.8-1.2-.8-1.3-1-.1-.6-.3-1.1-.6-1.6-.3-.4-1-.6-1.2-1-.2-.4-.4-1.5-1.3-2-.4-.2-.6-.9-1-1.2-.7-.6-1.6-.9-2.6-.9-.6-.5-1.2-.8-1.9-1-1-.2-1.6.5-2.1.3a3 3 0 00-4 .9c-.4.5-1.2 0-2.1.7-.9.7-.8 1.2-1.2 1.2-.7.2-1.3.7-1.6 1.4-.2.5-.3 1-.4 1.5-.2.5-.3 1.1-.4 1.7 0 .7.2 1 .1 1.3-.1.3-.4.8-.5 1.2-.1.4 0 .8.1 1.2.2.4-.1.8-.3 1.2-.2.5-.3 1-.3 1.6.1.7.5.9.2 1.5-.8 1.2-.8 2.7 0 3.9.2.3-.4.9-.5 1.8.1.8.3 1.5.7 2.1 0 .2-.3.1-.3.3-2.4-2.7-5.1-5.3-7.9-7.7-1.8-1.4-3.7-2.7-5.7-3.7-5.4-2.9-11.7-4.9-17.5-4.2 2.2 1.7 4.9 3 7.1 5 2.2 2 4 3.5 5.9 5.5 2.9 3.1 5.6 6.5 8 10 .8 1.1 1.2 1.8 2 3s1.5 2.3 2.1 3.5c3.3 5.7 5.9 10.9 8.6 16.7.8 1.6 1.4 3.3 2.1 4.9.2.4.5.1.7 0 1-.6 2-1 3-1.5.8-.4 1.6-.6 2.3-.9 1.8-.6 3.6-1.1 5.5-1.5 3-.4 5.9-.6 8.9-.5h11.2c-.1-3.1-.9-6.1-1-9.3-.1-2.5-.1-5 0-7.5.2-7.2 1.1-14.2 2.7-20.9zm-12.7 5.4c.2.6.5 1 .2 1.7-.2.7-1 .8-1.7 1.1-.7.3-1.7.5-2.2 0-.5-.5-.8-1.9-.1-2.4 1-.8 3.3-1.8 3.8-.4zm-7.8 12.5c-.7.8-1.9.8-3.1 1.1-.5.1-1-.2-1.2-.7-.4-.8-.9-1.8 0-2.6s1.6-.6 2.5-.8c.4-.2.9-.2 1.3 0 .9.6 1.2 1.8.7 2.7-.1.2-.1.2-.2.3zm1.5 3c.3.8 0 1.8-.8 2.2-1.1.4-2.6 1-3.4.4-.9-.6-1.5-2.6-.3-3.3 1.2-1 3.9-1.6 4.5.7zM77.4 69c.3-.8 1.3-.8 2.1-.7.7.2 1.1.9 1 1.6 0 .1-.1.2-.1.3-.5.7-1.6.6-2.4.5-.8-.1-.9-1.1-.6-1.7zm-.2-2.8c0-.2.2-.3.4-.4.6-.3 1.4-.3 2 0 .4.3.5.9.1 1.3 0 0 0 .1-.1.1-.6.5-1.5.6-2.2.2-.3-.3-.4-.8-.2-1.2zm6.4 1.4c-.8.5-1.8.6-2.7.3-.6-.4-.7-1.2-.3-1.8.7-.8 1.8-1.1 2.8-.7.7.3.9 1.1.6 1.8l-.4.4zm1 1.3c.7.5.9 1.4.4 2.2-.9 1-2.4 1.3-3.6.6-.6-.4-.9-2.2.3-2.6.9-.6 1.9-.6 2.9-.2zm-6.8 2.9c.9-.4 2.7-.7 3 .6.4 1.8-1.7 2.1-2.8 1.8-.9-.3-1-2.1-.2-2.4zm-.1 4c.8-.8 2-1.2 3.1-.8.6.2.9.9.9 1.8 0 .4-.3.8-.6.9-.8.3-1.6.5-2.4.4-.8-.2-1.3-1-1.1-1.8-.1-.2 0-.3.1-.5zm.5 3.7c.9-.7 2-.9 3.1-.7.6.1.9.7 1 1.4.2 1.9-2.3 2.2-3.5 1.8-.8-.5-1.1-1.6-.6-2.4v-.1zm3.7-4.8c-.6-1.9 1.8-2.6 3.2-2.2 1 .2 1.3 2.1.4 2.7-1.1.7-3.1.9-3.6-.5zm9.8 2.2c-.6 1-2.4 1.1-3.2 1-.6-.1-1-1-1-1.8 0-.3.1-.7.4-.8.9-.5 1.9-.8 2.9-.7.9.3 1.4 1.2 1.1 2-.1.1-.2.2-.2.3zm.5 2c.5.6.5 1.5.1 2.1-.5.7-2.3 1-3.1.8-.5-.1-.7-.7-.8-1.1-.2-.5-.1-1.1.3-1.5.7-.5 1.6-.8 2.5-.6.3-.2.7 0 1 .3zM90.8 73c-.6 1-3.2 1.6-3.8.6-.4-.7-.7-1.7.1-2.2.8-.5 1.8-.8 2.8-.6.8.2 1.3 1.2.9 2.2.1-.1 0-.1 0 0zM89 69.7c-.4.3-1 .6-1.5.7-.8.2-1.5-.2-1.8-1v-.2c-.2-1.4 1.3-1.6 2.3-1.8.6-.1 1.2.3 1.3.9.1.6 0 1.1-.3 1.4zM83 77c1.1-.6 3.4-1.4 3.9.3.2.7.2 1.6-.4 1.9-.9.5-2.3 1-3.3.3s-.9-2.1-.2-2.5zm.9 4c1.1-.8 3.3-1.3 3.9.4.2.4.2.9 0 1.3-.6 1-2.2 1.3-3.2 1.1-.9-.3-1.4-1.2-1.1-2.1 0-.3.2-.6.4-.7zm.9 4c.9-.5 2.3-1 3.3-.4.6.5.8 1.3.6 2-.7 1.2-2.5 1.4-3.6 1.1-.8-.4-1.1-1.5-.7-2.3 0-.2.2-.4.4-.4zm4.4-.1c-.2-.6-.4-1.4 0-1.8.9-.7 3-1.4 3.8-.3.5.8.3 1.8-.5 2.3-.9.5-2.7 1.1-3.3-.2zm6.4-10.6c.4 0 .8.5 1.1 1.1.2.6.1 1.2-.2 1.7-.5.4-2.2 1.4-3.3.8-.5-.4-.8-.9-.8-1.6-.2-1.5 2-2.1 3.2-2zm-.5-2.5c.3.5.3 1 .1 1.5-.7.8-1.8 1.2-2.9.9-.7-.4-.8-1.3-.4-2 .7-.8 1.7-1.1 2.7-.9.2 0 .3.3.5.5zm-1.9-4.1c.9.1 1.1 1.4.9 1.9-.2.4-.5.7-.9.9-.6.4-1.4.4-2.1.2-.6-.4-.8-1.2-.5-1.8.6-.9 1.6-1.4 2.6-1.2zm-1-1.8c.2.7-.3 1.1-.9 1.4-.6.3-1.4.6-1.8.2-.5-.4-.7-1.2-.2-1.7l.1-.1c.8-.8 2.2-1.4 2.8.2zm-2.4-3.1c.4 0 .6.3.7.7.1.4-.1.8-.4 1.1-.4.3-.9.4-1.4.5-.6 0-1-.5-.9-1.1 0-.1 0-.2.1-.3.4-.7 1.1-1 1.9-.9zm-1.5-2c.4.1.6.4.5.8v.1c-.2.3-.4.5-.7.6-.6.4-1.1.2-1.3-.2-.4-.8.8-1.6 1.5-1.3zm-.8 4c.5.4.6 1.1.3 1.6-.5.5-1.1.8-1.7.8-.5.1-1-.2-1.2-.7-.1-.4-.1-1 .2-1.3.5-.8 1.5-.9 2.4-.4zm-1-2.4c.4.6-.2 1.2-.5 1.4-.6.4-1.5.6-1.9 0-.3-.5-.1-1.2.4-1.5.1 0 .1-.1.2-.1.5-.3 1.2-.7 1.7.2h.1zm-3.4-2c.3-.7 1.2-1.1 1.9-.8.2.1.4.3.5.6.1.5-.1 1-.5 1.2-.4.4-1.1.5-1.6.3s-.7-.7-.5-1.2v-.1h.2zm.3 3c-.1.5-.6.9-1.1 1-.6.1-1.4.2-1.8-.2-.4-.3-.4-.8-.2-1.2.5-.7 1.4-1 2.3-.9.5.1.9.7.8 1.3zm-3.7-2.9c.3-.8 1.2-1.3 2-1 .5.3.7.9.4 1.3-.1.1-.1.2-.2.3-.3.3-.6.4-1 .5-.8.2-1.6-.2-1.2-1.1zm-.5 4.3c-.7.2-1.8.3-2-.5-.4-1.3 1.2-1.5 2.1-1.2.4.3.6.8.3 1.3-.1.2-.3.3-.4.4zm-2.1-3.3c.1-.2.3-.4.5-.5.4-.1.8-.1 1.1 0 .7.3.6 1.1-.1 1.4-.3.1-.7.2-1.1.1-.4-.1-.7-.4-.6-.9 0-.1 0-.1.1-.2l.1.1zM75 63c.5-.2 1.1-.1 1.5.2.5.5.1 1.3-.8 1.3-.3 0-.6-.1-.9-.2-.3-.2-.4-.7-.2-1.1.1-.1.1-.2.2-.2h.2zm-.6 2.3c.6-.2 1.3-.2 1.8.1.3.2.5.5.4.9-.1.4-.6.7-1.2.7-.5 0-1.1 0-1.4-.5-.3-.4-.2-1 .2-1.3l.2.1zm2 2.8c.3.1.4.4.5.6.1.7 0 1.4-.7 1.5-1 .2-2.4.2-2.4-1.1-.1-1.5 1.4-1.5 2.6-1zm-2.8 3.1c.9-.4 2.4-.5 3 .4.4.6.3 1.7-.4 1.9-.7.2-2.6.5-3.1-.6-.3-.6-.1-1.3.5-1.7zm-.6 3.7c.8-.8 1.9-.4 2.9-.3.2 0 .4.1.6.3.6.6.7 1.6.1 2.2l-.1.1c-.9.7-2 .2-3 .2-.3-.1-.5-.3-.7-.6-.3-.6-.2-1.3.2-1.9zm0 4.4c.5-1.2 2.5-1.2 3.5-.7.7.5.9 1.6.4 2.3-.1.1-.2.3-.4.4-.9.4-1.9.4-2.8.2-1-.2-1.1-1.4-.7-2.2zm.7 5.1c-.4-.4-.3-1 .1-1.4l.2-.2c1-.4 2.1-.5 3.1-.2.6.2.9 1 .8 1.9 0 .4-.1.8-.3.9-.8.4-1.7.5-2.6.3-.7-.1-.9-.9-1.3-1.3zm4.1 5c-.8-.7-1.4-1.5-1.8-2.4-.2-.2 0-.3.1-.3 1.5-.4 2.6.3 2.4 2-.1.3-.3 1-.7.7zm1-5.5c.1-.4.5-.6.9-.7 1-.2 2.1-.6 3 0 .4.2.4.5.4 1 .1.7 0 1.3-.5 1.6-.9.5-2 .6-3 .4-.9-.3-1-1.5-.8-2.3zm1.2 3.6c1.2-.8 3.5-1.4 3.9.8.2.7-.2 1.5-.9 1.8-.9.4-1.8.5-2.8.3-.8-.5-1.1-1.5-.6-2.3.2-.3.3-.5.4-.6zm-.3 5c-.1-.2-.2-.6-.1-.8 1-.6 2.2-.9 3.4-.7 1.4.1 1.7 1.4 1.5 2.5-.3 1.5-2.5 1.7-3.1 1.5-.6-.2-1-1.6-1.7-2.5zm2.7 4.4c-.1-.2-.4-.8-.2-.9 1.8-.6 3.2-.6 3.5 1.3.3 1.4-.7 2.6-2 2.1-.4-.2-.8-1.6-1.3-2.5zm3.7 6.8c-1-.8-1.1-2.2-1.8-3.2.7-.5 1.8-.3 2.3.4 0 .1.1.1.1.2.3.8.5 1.9-.2 2.4-.1.1-.3.3-.4.2zm1.5 3.5c-.4-.2-.4-.8-.6-1.1-.2-.4-.5-.8-.4-1.3.8.5 1.2 1.5 1 2.4zm1.9-2.8c-.1.6-.3 1.1-.5 1.7-.1.3-.3-.1-.3-.1-.4-.8-.5-1.7-.3-2.6.3-.5.8-.9 1.4-.9 0 .7-.1 1.3-.3 1.9zm1.6-5.7c-.3.8-.4 1.4-.7 2.1-.3.7-1.5.9-2.2.7-1-.3-1.8-2.5-.7-3.3.8-.5 1.8-.9 2.8-.9.3 0 .6 0 .9.1.2.4.1.7-.1 1.3zm1.5-5c-.3.4-1-1-1.1-1.6-.3-1.8 1.3-2.3 2.7-2.3-.2 1.4-.8 2.8-1.6 3.9zm2.2-5.6c-.4 1.1-1.6 1.2-2.6 1.4-.4 0-.7 0-1-.3-.5-.4-.8-1.1-.7-1.7.1-.5.4-.9.9-1.1.8-.3 1.8-.9 2.7-.4.6.5.9 1.4.7 2.1zm3.4-5.3c-.6 1-1.2 1.9-1.8 2.8-.3.3-.9.3-1.2 0-.1-.1-.1-.1-.1-.2-.4-.6-.9-1.3-.5-1.9.9-1 2.2-1.5 3.5-1.3-.1-.1.3.2.1.6zM36.1 47.7c-1.7 1.5-3 3.3-4 5.2-1 1.7-1.6 3.5-1.9 5.4 4.3-1.7 7.9-5 11.1-8.8 2.4-2.8 4.2-6.4 6.6-9.2-4.4 1.6-8.5 4.1-11.8 7.4z" />
                      <path d="M23.6 53.6c1.7-2.9 3.9-5.6 6.4-7.8-1.1 2.5-2.5 5-3 8-1 6-1.8 10.2-2.8 15.6 2.7-1.9 5.6-5 8.4-7.1 2.2-1.6 4.5-2.7 6.7-4.3 1.2-1 2.4-2.1 3.4-3.3-1.3 5.7-6.3 11.4-9.9 14.1-4.5 3.4-6.1 3.9-13.3 11.2-.8-8.9-.6-18.3 4.1-26.4z" />
                      <path d="M9 83.6c.3-4.4.9-8.7 2-13 .8-3.2 2.5-8 5-9.9-.3 1.3-.5 2.7-.6 4.1-.5 4.8.4 10.4.5 15.3.1 2.1 0 4.3-.3 6.4-.2 1.7-.2 3.5-.1 5.2.9-1 1.7-2.1 2.4-3.3 1.5-2.6 3.3-5.1 5.3-7.3 2.6-2.7 5.4-5.2 8.5-7.3-.7 1.9-1.6 3.8-2.7 5.5-.9 1.6-1.3 3-3.4 6.5-3 4.9-4.3 5.6-7.6 10.9-.7 1.1-3.6 5.5-4.3 6.8-1.5-3.2-2.1-6-4-11.2-.8-2.8-1.1-5.7-.7-8.7z" />
                      <path d="M4.4 108c-1.6-4.4-2.7-9.1-3.2-13.8-.5-3.3-.2-6.6.8-9.8.3.7.8 2.5.9 2.7.6 2.2 1.3 4.4 2.2 6.5.9 1.9 1.9 3.7 3 5.5 1 1.9 1.8 3.9 2.6 5.9 2.3 5.7 2.5 11.1 3.4 11.7.5-1.1.8-2.2.9-3.4.7-6.4 1.5-12.1 9.5-19.6.7 2.2.4 6.3-.1 8.5-.7 4.1-2 8.1-3.9 11.8-1.1 2.5-2.6 6.1-3 7.3-1.1 3.1-1.4 4.7-2.1 6.6-3.6-6.2-8.3-12.8-11-19.9z" />
                      <path d="M10.6 137c-2.2-3-4-6.2-5.4-9.6-1.2-2.6-2.2-5.4-2.8-8.3-.5-1.6-.6-3.4-.4-5.1 2.1 3.8 3.5 8.1 6.3 11.2 2.2 2.5 4.3 4.6 6 6.8 2.7 3.3 4.8 6.3 7.3 9.7.3-2.1.2-4.1-.1-6.2-.4-3.5-.3-7.1.5-10.6.7-4 1.7-7.9 3.1-11.7 2 3.9 2 8.4 2.5 12.5 1 8-1.5 17.6-2 21.6-.1 1.6 0 3.1.1 4.6-3.6-2.9-7.1-5.9-10.3-9.2-1.7-1.8-3.3-3.7-4.8-5.7z" />
                      <path d="M24.8 166.4c-1.7-1.2-6.3-4.7-8.5-7.5-3.2-4-3.9-5.7-6-10.4-.8-1.6-1.3-3.3-1.5-5 6.8 8.2 13 9.5 19.5 16.3 2.4 2.5 4.8 4.9 6.1 6.1.6.6 1.4 1 2.3 1.2-.1-1-.3-2.1-.8-3-4.3-8.3-5.2-17-4.5-26.3 1.5 2 2.8 4.2 3.9 6.5 1 1.9 1.9 3.8 2.7 5.8 3.7 9.3 4.7 20 7 25.4-7.1-2.5-12.7-3.7-20.2-9.1z" />
                      <path d="M54 188.2c-2.6.2-5.1.1-7.7-.2-10.2-1.6-19.6-9-24.4-17.1 3.5 2.3 7.3 4.2 11.2 5.7 3.4 1.2 6.6 1.5 12.2 3.1 3.4 1 6.8 2.3 7.9 2.8 3.8 1.4 5.4 1.1 5.4 1.1s0-.6-1.4-2.1c-2.8-3.1-3.8-3.8-6.2-6.1-1.3-1.6-2.4-3.3-3.4-5.2-2.5-5-2.8-8.9-5-14.4 8.3 4.9 12.4 11.6 16.8 20.1 1.3 2.6 2.9 5.1 4.8 7.3 1.1 1.1 2.7 2.8 2.7 2.8s-1.2.3-4.8.8c-1.6.1-5 1.2-8.1 1.4zM94.2 188.9c4.2.7 8.3 1.7 12.3 3.2 1.3.5 2.6 1.1 3.8 1.8 2.4 1.2 4.7 2.5 6.9 4 3.9 2.7 8.1 5.6 11.9 10 .1.1.7.7.3 1.1-.7.6-2.6 1.4-3.2.9-3.5-3.1-3.3-4.1-7.5-7.9-1.5-1.3-3-2.5-4.7-3.7-2-1.4-4.1-2.7-6.3-3.8-2.1-.9-4.3-1.3-6.6-1.2-.8 0-5.1-.1-6.2 0-8.6.6-8.2 1.4-13.1 2.7-4.2 1.1-8.5 1.9-12.8 2.5-4.2.6-8.4.7-12.6.2-5.7-.6-11.8-2.2-16.5-5.1 4.2.1 8.6.9 12.8.6 2.2-.1 4.4-.5 6.6-1 3.9-1.2 6.1-1.6 10.2-2.8 3.5-.9 7.1-1.4 10.7-1.7 4.7-.7 9.4-.6 14 .2zM172.9 47.7c1.7 1.5 3 3.3 4 5.2 1 1.7 1.6 3.5 1.9 5.4-4.4-1.7-7.9-5-11.1-8.8-2.4-2.8-4.2-6.4-6.6-9.2 4.4 1.6 8.5 4.1 11.8 7.4z" />
                      <path d="M185.4 53.6c-1.7-2.9-3.9-5.6-6.4-7.8 1.1 2.7 2.8 6.1 3 8 .6 6 1.8 10.2 2.8 15.6-2.7-1.9-5.6-5-8.4-7.1-2.2-1.6-4.4-2.7-6.7-4.3-1.2-1-2.4-2.1-3.4-3.3 1.4 5.7 6.3 11.4 9.9 14.1 4.5 3.4 6.1 3.9 13.3 11.2.8-8.9.7-18.3-4.1-26.4z" />
                      <path d="M200.1 83.6c-.3-4.4-.9-8.7-2-13-.8-3.2-2.5-8-5-9.9.3 1.3.5 2.7.6 4.1.5 4.8-.4 10.4-.6 15.3-.1 2.1 0 4.3.3 6.4.2 1.7.2 3.5.1 5.2-.9-1-1.7-2.1-2.4-3.3-2.5-4-3.3-5.1-5.3-7.3-2.5-2.7-5.4-5.2-8.4-7.3.7 1.9 1.6 3.8 2.7 5.5.9 1.6 1.3 3 3.4 6.5 3 4.9 4.3 5.6 7.6 10.9.7 1.1 3.6 5.5 4.3 6.8 1.5-3.2 2.1-6 4-11.2.7-2.8 1-5.7.7-8.7z" />
                      <path d="M204.6 108c1.7-4.4 2.7-9.1 3.2-13.8.4-3.3.1-6.6-.9-9.8-.3.7-.9 2.5-.9 2.7-.6 2.2-1.3 4.4-2.2 6.5-.9 1.9-1.9 3.7-3 5.5-1 1.9-1.8 3.9-2.6 5.9-2.3 5.7-2.5 11.1-3.4 11.7-.5-1.1-.8-2.2-.9-3.4-.7-6.4-1.5-12.1-9.5-19.6-.7 2.2-.4 6.3.1 8.5.7 4.1 2 8.1 3.9 11.8 1.1 2.5 2.6 6.1 3 7.3 1.1 3.1 1.4 4.7 2.1 6.6 3.7-6.2 8.4-12.8 11.1-19.9z" />
                      <path d="M198.4 137c2.2-3 4-6.2 5.4-9.6 1.3-2.6 2.2-5.4 2.8-8.3.5-1.6.6-3.4.4-5.1-2.1 3.8-3.6 8.1-6.3 11.2-2.2 2.5-4.3 4.6-6 6.8-2.7 3.3-4.8 6.3-7.3 9.7-.3-2.1-.2-4.1.1-6.2.4-3.5.3-7.1-.5-10.6-.7-4-1.7-7.9-3.1-11.7-2 3.9-2 8.4-2.5 12.5-1 8 1.6 17.6 2 21.6.1 1.6 0 3.1-.1 4.6 3.6-2.9 7.1-5.9 10.3-9.2 1.7-1.8 3.3-3.7 4.8-5.7z" />
                      <path d="M184.2 166.4c1.7-1.2 6.3-4.7 8.5-7.5 3.2-4 3.9-5.7 5.9-10.4.8-1.6 1.3-3.3 1.5-5-6.8 8.2-13 9.5-19.5 16.3-2.4 2.5-4.8 4.9-6.1 6.1-.6.6-1.4 1-2.2 1.2.1-1 .3-2.1.8-3 4.4-8.3 5.2-17 4.5-26.3-1.5 2-2.8 4.2-3.9 6.5-1 1.9-1.9 3.8-2.7 5.8-3.7 9.3-4.7 20-7 25.4 7.1-2.5 12.7-3.7 20.2-9.1z" />
                      <path d="M155.1 188.2c2.6.2 5.1.1 7.7-.2 10.2-1.6 19.6-9 24.4-17.1-3.5 2.3-7.3 4.2-11.2 5.7-3.4 1.2-6.6 1.5-12.2 3.1-3.4 1-6.8 2.3-7.9 2.8-3.8 1.4-5.4 1.1-5.4 1.1s0-.6 1.4-2.1c2.8-3.1 3.8-3.8 6.1-6.1 1.3-1.6 2.4-3.3 3.4-5.2 2.5-5 2.8-8.9 5.1-14.4-8.3 4.9-12.4 11.6-16.8 20.1-1.3 2.6-2.9 5.1-4.9 7.3-1.1 1.1-2.7 2.8-2.7 2.8s1.2.3 4.8.8c1.5.1 5 1.2 8.2 1.4zM114.8 188.9c-4.2.7-8.3 1.7-12.2 3.2-1.3.5-2.6 1.1-3.8 1.8-2.4 1.2-4.7 2.5-6.9 4-3.9 2.7-8.1 5.6-11.9 10-.1.1-.7.7-.3 1.1.7.6 2.6 1.4 3.2.9 3.5-3.1 3.3-4.1 7.5-7.9 1.5-1.3 3-2.5 4.7-3.7 2-1.4 4.1-2.7 6.3-3.8 2.1-.8 4.3-1.3 6.6-1.2.8 0 5.1-.1 6.1 0 8.6.6 8.2 1.4 13.1 2.7 4.2 1.1 8.5 1.9 12.8 2.5 4.2.6 8.4.7 12.6.2 5.6-.6 11.8-2.2 16.4-5.1-4.2.1-8.6.9-12.8.6-2.2-.1-4.4-.5-6.6-1-3.9-1.2-6.1-1.6-10.2-2.8-3.5-.9-7.1-1.4-10.7-1.7-4.5-.7-9.3-.6-13.9.2zM99.4 0l-7.7 28.7h-8.2L78.3 10l-5 18.7h-8.2L57.4 0h7.7l4.4 19.8L74.8 0h7.4l5 19.8L91.8 0zM124.8 5.5h-13.2v5.3h12.2v5.5h-12.2v12.3h-7.4V0h20.6v5.5zM153.6 9.1c0 1.3-.2 2.6-.7 3.8-.4 1.2-1.1 2.2-1.9 3.1-1.1 1.1-2.4 2-3.8 2.6-1.7.6-3.5.9-5.2.9h-4.6v9.3H130V0h12.2c1.6 0 3.1.1 4.6.5 1.2.3 2.3.8 3.3 1.4 1.1.7 2 1.7 2.6 2.9.7 1.3 1 2.8.9 4.3zm-7.6.1c0-.7-.2-1.5-.6-2.1-.4-.5-.9-1-1.5-1.2-.7-.3-1.5-.5-2.3-.5h-4.2V14h2.1c1 0 2.1-.1 3.1-.2.8-.1 1.5-.5 2.1-.9.5-.4.8-.9 1-1.5.2-.8.3-1.5.3-2.2z" />
                    </g>
                  </svg>
                </div>
                {/* NASA */}
                <div>
                  <svg
                    // width={140} height={122}
                    viewBox="0 0 140 122"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{"nasa-logo"}</title>
                    <g fill="none" fillRule="evenodd">
                      <g fill="#090909" fillRule="nonzero">
                        <path d="M65.026 0C31.663 0 4.128 27.443 4.128 60.752c0 33.338 27.42 60.758 60.758 60.758 33.331 0 60.752-27.422 60.752-60.758C125.638 27.395 98.332 0 65.026 0zm0 4.2c30.983 0 56.412 25.512 56.412 56.552 0 31.016-25.54 56.558-56.552 56.558-31.019 0-56.558-25.54-56.558-56.558C8.328 29.765 33.979 4.2 65.026 4.2z" />
                        <path d="M44.081 101.123l.244 1.257c.289.08.515.32.578.615l1.263.18-1.272.224a.831.831 0 01-.6.583l-.213 1.28-.215-1.289a.84.84 0 01-.578-.6l-1.21-.198 1.212-.215a.84.84 0 01.624-.594l.167-1.243zm47.994.372c.261 0 .474.213.474.472 0 .26-.213.474-.474.474a.476.476 0 01-.471-.474c0-.26.215-.472.471-.472zm-43.207-4.43c.261 0 .474.212.474.473a.473.473 0 11-.474-.474zm-6.53-1.233a.473.473 0 010 .943.476.476 0 01-.474-.47c0-.262.215-.473.474-.473zm19.454-.074c.259 0 .472.213.472.471a.474.474 0 01-.472.472.475.475 0 01-.47-.472c0-.258.216-.471.47-.471zm42.161-6.12l.244 1.254a.835.835 0 01.584.62l1.26.178-1.273.224a.832.832 0 01-.597.583l-.218 1.278-.21-1.29a.837.837 0 01-.579-.597l-1.217-.198 1.224-.217a.845.845 0 01.624-.591l.158-1.244zm-30.898 2.126c.257 0 .472.213.472.472 0 .26-.215.474-.472.474a.477.477 0 01-.473-.474c0-.259.215-.472.473-.472zm-24.95-.365a.582.582 0 010 1.165.585.585 0 01-.576-.582c0-.32.263-.583.576-.583zm-17.426-.215a.58.58 0 010 1.16.58.58 0 010-1.16zm76.362-.146c.259 0 .471.213.471.47 0 .26-.212.474-.471.474a.472.472 0 010-.944zM28.39 89.44c.257 0 .473.215.473.472a.472.472 0 01-.946 0c0-.257.215-.472.474-.472zm9.873-.434c.26 0 .478.21.478.471a.478.478 0 01-.478.472.475.475 0 01-.468-.472c0-.26.216-.471.468-.471zm51.637-.144a.47.47 0 110 .941.476.476 0 01-.474-.471c0-.26.216-.47.474-.47zm12.853-.51c.256 0 .471.212.471.47a.477.477 0 01-.471.475.478.478 0 01-.474-.474c0-.259.215-.472.474-.472zm-79.958-1.599c.263 0 .478.215.478.474a.474.474 0 01-.95 0c0-.259.213-.474.472-.474zm6.359-.652c.32 0 .576.26.576.578 0 .32-.257.58-.576.58a.58.58 0 110-1.159zm15.248-2.833c.317 0 .583.261.583.579 0 .32-.266.582-.583.582a.585.585 0 01-.58-.582c0-.318.262-.579.58-.579zm63.583.144c.253 0 .466.21.466.474a.474.474 0 01-.466.472.474.474 0 110-.946zm-13.62-.287a.58.58 0 110 1.159.588.588 0 01-.582-.58c0-.318.267-.579.583-.579zm16.555-.948c.32 0 .583.263.583.583 0 .32-.263.58-.583.58a.58.58 0 010-1.163zm-21.02.146a.473.473 0 11-.002.945.473.473 0 01.002-.945zm18.796-5.494l.244 1.257a.82.82 0 01.578.62l1.263.178-1.272.223a.83.83 0 01-.6.579l-.213 1.28-.217-1.287a.807.807 0 01-.567-.598l-1.218-.197 1.222-.218a.813.813 0 01.613-.593l.167-1.244zm-14.259 2.228c.32 0 .585.261.585.579a.584.584 0 01-1.167 0c0-.318.263-.579.582-.579zm8.35-.293c.325 0 .583.265.583.583a.585.585 0 01-.582.582.59.59 0 01-.58-.582c0-.318.264-.583.58-.583zm-1.052-2.759a.471.471 0 11.001.943.471.471 0 010-.943zm-57.516-3.63c.261 0 .474.21.474.472a.474.474 0 01-.474.471.475.475 0 01-.472-.471c0-.261.216-.472.472-.472zm5.666-42.855l.25 1.254a.826.826 0 01.578.62l1.259.178-1.266.224a.84.84 0 01-.608.583l-.213 1.278-.216-1.29a.832.832 0 01-.571-.597l-1.216-.198 1.222-.215a.824.824 0 01.615-.594l.166-1.243zm-4.066 2.985c.261 0 .472.215.472.474 0 .256-.21.471-.472.471a.477.477 0 01-.474-.471c0-.26.216-.474.474-.474zm-2.032-2.468c.258 0 .471.213.471.472a.476.476 0 01-.471.474.476.476 0 01-.474-.474c0-.259.213-.472.474-.472zm33.083-3.704a.58.58 0 010 1.16.585.585 0 01-.59-.578c0-.32.264-.582.59-.582zM54.753 22.34c.257 0 .472.214.472.47 0 .26-.215.472-.472.472a.475.475 0 01-.474-.472c0-.256.215-.47.474-.47zm13.657-.871a.47.47 0 01.467.471.47.47 0 11-.939 0c0-.258.21-.471.472-.471zm-11.553-.946c.257 0 .472.213.472.472a.477.477 0 01-.472.474.473.473 0 010-.946zm-1.376-.946c.257 0 .472.216.472.474a.475.475 0 01-.472.472.476.476 0 01-.474-.472c0-.258.216-.474.474-.474zm7.842-.797a.47.47 0 01.467.471.47.47 0 01-.467.474.475.475 0 01-.472-.474c0-.258.213-.471.472-.471zm-9.224-.146a.471.471 0 110 .942.471.471 0 010-.942zm22.537-6.594l.248 1.253c.289.084.515.323.585.62l1.252.18-1.263.221a.84.84 0 01-.607.585l-.215 1.278-.21-1.289a.83.83 0 01-.58-.598l-1.212-.198 1.221-.215a.816.816 0 01.614-.593l.167-1.244zm-8.268 2.598c.316 0 .585.265.585.583a.584.584 0 01-1.167 0c0-.318.263-.583.582-.583zm-6.68-.796a.58.58 0 010 1.161.58.58 0 110-1.16zm3.524-6.245c.259 0 .474.21.474.472a.476.476 0 01-.952 0c0-.261.217-.472.478-.472z" />
                        <path d="M140 8.055l-.387 1.173c-5.379 15.616-19.284 28.463-36.924 41.077h4.289l7.424 18.705 2.476 2.484H103.39l2.474-2.484-.879-2.28h-7.441l-.77 2.606 1.772 2.158h-4.285c3.252 9.611 6.889 29.726-16.2 19.977l-.05-.158c18.418 7.584 20.722-4.825 15.216-19.818h-1.716l1.243-1.246a69.596 69.596 0 00-2.46-5.53c.387 3.65-2.587 5.819-5.435 6.749-3.302 1.074-6.854.67-9.825-.342l-.193-.067-2.47 1.813-.146-2.342c-3.952 2.552-7.95 5.146-11.958 7.801 3.662 3.421 8.45 5.386 6.36 7.261-1.946 1.738-5.835-3.151-7.964-6.194l-.887.592c-14.482 9.683-28.998 20.214-41.87 32.479l.11-1.994C28.488 97.751 42.79 87.082 57.26 77.286l-.073-.118c-2.699-3.253-5.326-6.626-7.944-10.439h-.22l-.77 2.607 1.78 2.158H42.99l2.476-2.484 4.778-16.54-2.152-2.165h10.363l7.42 18.705 1.535 1.536c1.546-1.01 3.089-2.014 4.627-3.013l-.101-1.602a6.59 6.59 0 001.045.99l5.651-3.66c2.677-1.736 5.33-3.46 7.949-5.182a79.08 79.08 0 00-1.367-2.115 96.503 96.503 0 00-1.983-2.85c-.785-.182-1.57-.257-2.284-.158-3.03.422-3.17 2.503-1.907 3.16l.074.037.084.042c.878.43 2.896 1.248 4.441 1.87a1999.556 1999.556 0 01-7.523 4.89l-.181-.09-.117-.061c-1.908-.992-3.663-2.371-3.912-5.095-.316-3.376 2.252-5.75 4.632-6.876 1.23-.583 2.713-.894 4.27-.938-.247-.316-.496-.63-.745-.941-1.431.113-2.785.444-3.944.993-3.018 1.427-5.141 3.956-5.218 7.025a354.033 354.033 0 01-7.891 2.157l-2.381-6.002 1.23-.418c5.563-1.893 11.108-3.816 16.516-5.81-5.924-7.046-12.15-12.709-16.542-15.915-20.476-14.964-32.97-5.811-18.594 23.526.5 1.02 1.015 2.002 1.544 2.953l-1.118.383c-.323-.56-.645-1.13-.969-1.71-11.072-19.927-9.476-40.26 10.568-31.399 9.468 4.184 18.7 12.575 26.152 21.776 2.4-.893 4.774-1.801 7.107-2.728a256.856 256.856 0 009.405-3.941c18.678-8.291 34.797-18.476 44.072-31.79zM18.147 68.503v.188l-3.56 3.573h.011c-4.799 1.804-9.209 3.83-13.104 6.202L0 77.946c5.193-3.41 11.357-6.516 18.147-9.443zm38.317-1.774h-5.616c2.664 3.557 5.333 6.679 7.674 9.705 2.479-1.67 4.962-3.314 7.44-4.94H54.868l2.476-2.484-.88-2.281zM26.146 50.305l7.89 13.198V52.47l-2.153-2.165h7.172l-2.154 2.165v16.54l2.476 2.484H29.96l-8.11-13.722V69.01l2.084 2.484h-7.493l2.476-2.484V52.47l-2.148-2.165h9.376zm63.41 8.98l-.864.57c1.729 2.944 3.2 5.805 4.364 8.472l.074.172c.126.293.259.619.397.972l.461-.461 4.562-15.794a497.834 497.834 0 01-8.994 6.069zm-64.043 6.197l1.608 2.721c-1.339.382-2.66.77-3.961 1.17l-.54-.644v-2.094c.954-.387 1.919-.771 2.893-1.153zm55.434-.58l-.743.481-1.805 1.165-2.724 1.757c1.812.609 3.587.726 4.365.75 1.487.05 3.41-.779 3.442-1.937.028-1.04-1.043-1.637-2.535-2.216zm-33.169-7.427l-1.692 5.857-1.548.376-1.54.375c-1.794.438-3.57.876-5.328 1.318v-4.427a854.72 854.72 0 0110.108-3.5zm4.368-1.616l-2.197 7.594h5.193l-2.996-7.594zm48.523 0l-2.198 7.594h5.194l-2.996-7.594zm16.328-19.993l-.365.275c-6.033 4.539-12.62 8.274-19.528 11.436a145.645 145.645 0 01-7.985 3.361l-.062-1.83a.98.98 0 00-1.537-.772l-1.817 1.256-.044-.014a15.382 15.382 0 00-4.356-.668c.257.335.511.67.763 1.007 1.243.077 2.503.319 3.694.723l.1.034 2.217-1.532.224 6.595c-.47-.559-1.936-1.527-3.618-2.172a107.11 107.11 0 012.639 4.026 541.357 541.357 0 009.75-6.563l-.849-.723h1.892c6.619-4.605 12.875-9.277 18.56-14.162l.322-.277z" />
                      </g>
                    </g>
                  </svg>
                </div>
                {/*EVONIK*/}
                <div>
                  <svg
                    // width={407} height={93}
                    viewBox="0 0 920 210"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{"evonik"}</title>
                    <path
                      d="M915.134 158.298H898.59c-1.622 0-2.92-1.3-3.244-3.25-.65-10.077-4.218-19.503-10.381-27.63-.973-1.3-1.947-2.6-3.244-3.9-6.488-7.476-15.896-11.376-25.628-11.376h-10.705v42.58c0 1.95-1.298 3.251-3.244 3.251H824.95c-1.947 0-3.244-1.3-3.244-3.25V54.608c0-1.95 1.297-3.25 3.244-3.25h17.193c1.946 0 3.244 1.3 3.244 3.25v33.805h10.705c18.815 0 34.387-15.277 34.711-34.13a2.91 2.91 0 012.92-2.925h17.842c1.946 0 3.244 1.3 3.244 3.25-.325 18.203-8.76 35.105-23.033 45.832 3.569 2.925 7.137 6.176 10.057 9.751 10.705 12.677 16.868 28.28 17.517 44.857 0 1.625-1.297 3.25-3.244 3.25h-.973zM727.306 76.387c-18.815-7.151-39.901-7.151-58.716 0v78.336c0 1.95-1.298 3.25-3.244 3.25h-17.518c-1.946 0-3.244-1.3-3.244-3.25V63.06c0-.976.649-1.95 1.298-2.6 32.115-18.203 71.692-18.203 103.808 0 .973.65 1.622 1.624 1.297 2.925v91.663c0 1.95-1.297 3.25-3.244 3.25h-17.517c-1.947 0-3.244-1.3-3.244-3.25l.324-78.661zm47.038 78.336V54.608c0-1.95 1.298-3.25 3.244-3.25h17.518c1.946 0 3.244 1.3 3.244 3.25v100.115c0 1.95-1.298 3.25-3.244 3.25h-17.518c-1.622 0-3.244-1.3-3.244-3.25zM474.274 51.358h23.357c1.946 0 3.244 1.3 3.244 3.25 0 .325 0 .65-.325 1.3l-38.279 100.115c-.324 1.3-1.946 2.275-3.244 2.275h-29.196c-1.298 0-2.595-.65-2.92-1.95L390.254 55.584v-.976c0-1.625 1.298-2.925 2.92-3.25h23.681c1.298 0 2.595.975 2.92 2.275l24.979 80.612 26.925-80.937c.324-.975 1.622-1.95 2.595-1.95zm-96.996 106.94h-84.344c-1.297 0-2.27-.65-2.92-1.625-9.083-15.927-13.624-33.805-13.624-52.007 0-18.203 4.541-36.08 13.625-51.683.648-.975 1.946-1.625 3.244-1.625h80.126a2.91 2.91 0 012.92 2.925v18.203a2.91 2.91 0 01-2.92 2.925H305.91c-2.27 5.526-3.568 11.377-4.541 17.553h67.15c1.622 0 3.244 1.3 3.244 2.925v17.553c0 1.95-1.297 3.25-3.244 3.25h-67.475c.973 5.851 2.271 11.702 4.542 17.228h71.692c1.622 0 3.244 1.3 3.244 2.925v17.878c0 1.95-1.297 3.25-3.244 3.575zm219.944-81.911c-18.816-7.151-39.902-7.151-58.717 0v56.883c18.815 7.15 39.901 7.15 58.717 0V76.387zm-29.196 86.462c-18.167 0-36.009-4.55-51.904-13.652-.974-.65-1.622-1.625-1.622-2.6V63.06c0-.976.648-1.95 1.622-2.6 32.115-18.203 71.692-18.203 103.808 0 .973.65 1.622 1.624 1.622 2.6v83.537c0 .975-.65 1.95-1.622 2.6-16.22 8.776-34.062 13.652-51.904 13.652zM104.782 23.729c-44.767 0-81.1 36.08-81.1 81.262 0 44.856 36.008 81.261 81.1 81.261 23.681 0 46.065-10.076 61.312-27.954H81.1c-.973 0-1.947-.325-2.595-.65-28.872-14.627-40.55-50.057-25.952-78.986 5.514-11.377 14.922-20.478 25.952-26.004.648-.975 1.622-.975 2.595-.975h47.362c.973 0 1.947.325 2.595.65 8.435 4.226 15.572 10.402 21.086 17.878.974 1.3.974 3.575-.648 4.55-.65.325-1.298.65-2.271.65H85.967c-16.22 10.402-20.762 32.18-10.057 48.432 2.596 3.9 6.164 7.476 10.057 10.077h115.162c1.946 0 3.244 1.3 3.568 2.925 0 .325 0 .975-.324 1.3-18.491 55.258-77.856 84.837-133.004 66.31C16.545 185.927-12.975 126.444 5.515 71.51 24.006 16.578 83.695-13.001 138.52 5.526c42.82 14.302 71.368 54.608 71.368 99.465 0 2.925 0 5.85-.325 9.1 0 1.626-1.622 2.926-3.244 2.926H93.752c-1.297 0-2.595-.65-2.92-1.95-2.919-6.5-2.919-13.652 0-19.828.65-1.3 1.623-1.95 2.92-1.95h91.157c-5.84-40.306-39.901-69.56-80.127-69.56z"
                      fill="#090909"
                      fillRule="nonzero"
                    />
                  </svg>
                </div>
              </div>
            }
          />
        </div>
      </section>

      <section className={'advisors'}>
        <BorderButton
          id={'Our Advisors'}
          content={<em>Our Advisors</em>}
          icon={<Icon icon={ICONS.THUNDER} theme={THEME.DARK} />}
        />
        <div className={'section-content'}>
          <div className={'advisors--list'}>
            {generateAdvisors()}
          </div>
        </div>
      </section>





      <Footer/>
    </motion.main>
  )
}

export default About