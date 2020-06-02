import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/router";
import {DividedContent, Footer, ICONS, Teaser, THEME, Icon, BorderButton, StealthButton} from "../components";
import Link from "next/link";
import {ROUTES} from "../constants";
import { useIntersection } from "react-use";
import '../theme/styles.scss';

const About = () => {
  const router = useRouter();
  const analysisRef = useRef(null);
  const artifactRef = useRef(null);
  const actionRef =   useRef(null);

  let analysisIntersect = useIntersection(analysisRef, {root: null,
    rootMargin: "0px",
    threshold: .5});

  let artifactIntersect = useIntersection(artifactRef, {root: null,
    rootMargin: "0px",
    threshold: .5});

  let actionIntersect = useIntersection(actionRef, {root: null,
    rootMargin: "0px",
    threshold: .5});

  const calculateIntersection = () => {
    if (actionIntersect && analysisIntersect && actionIntersect){
      if (actionIntersect.intersectionRatio > 0.45){
        return 2;
      }  else if ((analysisIntersect.intersectionRatio > 0.45) && (artifactIntersect.intersectionRatio > 0.45) && (actionIntersect.intersectionRatio < 0.45)){
        return 1;
      } else if ((analysisIntersect.intersectionRatio > 0.45) && (artifactIntersect.intersectionRatio < 0.45) && (actionIntersect.intersectionRatio < 0.45)) {
        return 0;
      }
    } else {
      return 0;
    }
  };

  useEffect(() => {
    console.log('initial');
    if( !router.asPath.includes(('#')) ) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
    }
  }, []);


  return(
    <main className={'About'}>
      <section className={'banner'}>
        <div className={'section-content'}>
          <div>
            <h2>Radical innovation is rigorously imaginative, multidisciplinary in execution, and scrupulously reinvents itself.</h2>
            <h4>We bring this core belief to companies and teams wanting to discover the future.</h4>
          </div>
        </div>
        <Teaser label={'explore more'} />
      </section>



      <section className={'methodology'}>
        <div className={'section-content'}>
          <h4>
            We believe the best approach to conduct research is through a deep dive into data... and from that data, remixing it with our own experimentation and analysis.
            Futurity offers clients membership in our labs&mdash;a year-long cycle of using trend, participatory, and design research to build a better future through experimentation.
          </h4>
        </div>
        <BorderButton
          id={'methodology'}
          content={<em>our methodology</em>}
          icon={<Icon icon={ICONS.BULB} theme={THEME.DARK} />}
        />
        <div className={'section-content'}>
          <DividedContent
            left={<h2>Future Offerings</h2>}
            right={<>
              <h4>
                Lab members get three types of deliverables throughout the calendar year: Analyses, Artifacts, and Actions (6 each, per lab).
                The topics of each are planned, but subject to change in response to member needs, new ideas and information, or other emergent forces.
              </h4>
              <StealthButton
                label={'explore our labs'}
                icon={<Icon icon={ICONS.RIGHT} theme={THEME.DARK} />}
                link={ROUTES.LABS}
              />
            </>}
          />
        </div>
      </section>


      <section className={'deliverables'}>
        <div className={'deliverables--container'}>
          <div className={'deliverables--graphic'} id={`graphic-${calculateIntersection() || 0}`}/>
          <div className={'deliverables--content'}>
            <div ref={analysisRef}>
              <h3>Analysis</h3>
              <p>
                We learn everything we can about an innovation space to build a conceptual understanding of how it interacts with our social, economic, and industry systems.
              </p>
              <ul>
                <li><p>Examples include:</p></li>
                <li><p>Timelines</p></li>
                <li><p>Systems Maps</p></li>
                <li><p>Forecasts</p></li>
                <li><p>Scenarios</p></li>
                <li><p>Reports (appx. 15-25 pages)</p></li>
              </ul>
            </div>
            <div ref={artifactRef}>
              <h3>Artifact</h3>
              <p>
                We use our data to prototype a narrative into reality. Artifacts are objects based on the interactions, inquiries, and provocations from our analysis.
              </p>
              <ul>
                <li><p>Examples include:</p></li>
                <li><p>Speculative physical products</p></li>
                <li><p>Digital experiences</p></li>
                <li><p>Interactive installations</p></li>
              </ul>
            </div>
            <div ref={actionRef}>
              <h3>Action</h3>
              <p>
                We pilot our better future-forecast now. Actions include interventions, panels discussions, ethnographic research, user questionnaires, co-creation design interventions all with the goal of testing the realized understanding of our lab against industry leaders, scientists, and individuals. These findings feed back into our analysis to support our future deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className={'team'} id={'team'}>
        <div className={'team--container'}>
          <div className={'team--header'}>
            <div><h2>Our Team</h2>
              <p>Together we have 50+ years of experience in analysis, forecasting, design and development for startups, moonshot factories, and Fortune 500 companies.</p>
            </div>
            <div className={'team--photo'} />
          </div>
          <div className={'team--content'}>
            <div>
              <p>Synthesist - a person who develops the craft of unifying or coupling things together.</p><em>presented from left to right</em>
            </div>
            <div className={'team--members'}>
              <div>
                <Link prefetch={false} href={'https://www.linkedin.com/in/ceciliatham/'}>
                  <a target={'_blank'}>
                    <h4>Cecilia MoSze Tham</h4>
                    <em>Futures Synthesist</em>
                  </a>
                </Link>
              </div>

              <div>
                <Link prefetch={false} href={'https://www.linkedin.com/in/lucaslpena/'}>
                  <a target={'_blank'}>
                    <h4>Lucas Lorenzo Pe&ntilde;a</h4>
                    <em>Technology Synthesist</em>
                  </a>
                </Link>
              </div>

              <div>
                <Link prefetch={false} href={'https://www.linkedin.com/in/markbunger/'}>
                  <a target={'_blank'}>
                    <h4>Mark Dixon B&uuml;nger</h4>
                    <em>Strategy Synthesist</em>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/*<section className={'clients'}>*/}
      {/*  <BorderButton*/}
      {/*    content={ <em>select clients</em>}*/}
      {/*    backwards={true}*/}
      {/*    icon={<Icon icon={ICONS.GLOBE} theme={THEME.DARK} />}*/}
      {/*  />*/}
      {/*  <div className={'section-content'}>*/}
      {/*    <div className={'clients--list'}>*/}

      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <Footer/>
    </main>
  )
}

export default About