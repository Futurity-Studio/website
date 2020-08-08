import React, {useEffect, useState} from 'react';
import { useRouter } from "next/router";
import {
  DividedContent,
  Footer,
  ICONS,
  Teaser,
  THEME,
  Icon,
  BorderButton,
  StealthButton,
  Image,
  removeWebpFormat
} from "../components";
import Link from "next/link";
import {ROUTES} from "../constants";
import {AnimatePresence, motion} from "framer-motion";
import { useInView } from 'react-intersection-observer'
import {animateInUp} from "../helpers/animation";


const About = () => {
  const router = useRouter();
  const [ deliverableSection, setDeliverableSection ] = useState(0);
  const [ methodologySection, setMethodologySection ] = useState(null);

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
    if( !router.asPath.includes(('#')) ) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
    }
  }, []);

  // useEffect(() => {
  //   console.log(methodologySection)
  // }, [methodologySection]);

  const [background, setBackground] = useState(null)
  useEffect(() => {
    const asset = removeWebpFormat() ? require('images/background--generic.jpg') : require('images/background--generic.jpg?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  return(
    <motion.main
      className={'About'}
      initial={{  opacity: 0, transition:{  duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .25, easings: "linear" } }}
    >
      <section
        className={'banner'}
        style={background}
      >
        <div className={'section-content'}>
          <div>
            <div className={'banner--interactive'}>
            <h2><span onMouseEnter={() => setMethodologySection(1)}>Build</span></h2>
            <h2><span onMouseEnter={() => setMethodologySection(2)}>Better</span></h2>
            <h2><span onMouseEnter={() => setMethodologySection(3)}>Futures</span></h2>
            <h2><span onMouseEnter={() => setMethodologySection(4)}>Faster</span> </h2><br />
            </div>
            <h2>with Futurity Studio</h2>

            <AnimatePresence exitBeforeEnter>
              {(!methodologySection) &&
              <motion.h4 key={0} animate={"animate"} initial={"initial"} variants={animateInUp} exit={"initial"}>
                We help innovation teams analyze, de-risk and develop opportunities via evidence-based future
                building.
              </motion.h4>
              }
              { (methodologySection === 1) &&
              <motion.h4 key={1} animate={"animate"} initial={"initial"} variants={ animateInUp } exit={"initial"}>
                <em>Build</em> (means make, don't just think). We build physical prototypes of devices, clothing, and even rooms, that take your understanding beyond abstract designs, market analysis, code, and manifestos.
              </motion.h4>
              }
              { (methodologySection === 2) &&
              <motion.h4 key={2} animate={"animate"} initial={"initial"} variants={ animateInUp } exit={"initial"}>
                <em>Better</em> (means impact, not just money) (impact beyond economics). We help you calculate and maximize the total worth of an innovation, including not only financial, but also environmental, health, and social costs and benefits.
              </motion.h4>
              }
              { (methodologySection === 3) &&
              <motion.h4 key={3} animate={"animate"} initial={"initial"} variants={ animateInUp } exit={"initial"}>
                <em>Futures</em> (means plural, not singular). We help you envision a spectrum of scenarios between simple utopia or dystopia, and create the roadmaps that lead to them.
              </motion.h4>
              }
              { (methodologySection === 4) &&
              <motion.h4 key={4} animate={"animate"} initial={"initial"} variants={ animateInUp } exit={"initial"}>
                <em>Faster</em> (means fewer steps and fewer failures). We get you effectively from idea to market with our decades of experience as innovators and advisors.
              </motion.h4>
              }
            </AnimatePresence>

          </div>
        </div>
        <Teaser label={'explore how'} />
      </section>

      <section className={'services'}>
        <div className={'section-content'}>
          <DividedContent
            left={<div>
              <p>We help you recognize and plan for existential threats and create entirely new markets, instead of incremental innovation, incremental revenue growth or product line extensions. We help companies reach Sustainable Development Goals, create new markets, and execute strategies. Futures require new skills that no one company has, no matter how large or heavily invested it is in R&D.</p>
              <p>We don't just write reports or design thinking activities. We embody them in functional, interactive artifacts that provoke thought and learning from your industry's users, consumers, and thought leaders. We bring you deep datasets and data science tools, better ideas from broader sources, and a network of world-class collaborators. And we work with you and your team to design an organization and processes to build better futures faster.</p>
            </div>}
            right={<h2>We deal in Futures</h2>}
          />
        </div>
        <BorderButton
          id={'services'}
          content={<em>our Services</em>}
          icon={<Icon icon={ICONS.BULB} theme={THEME.DARK} />}
        />
        <div className={'section-content'}>
          <DividedContent
            left={<h2>Future Labs</h2>}
            right={<>
              <h4>
                Futurity offers clients membership in our labs—a year-long cycle of using trend, participatory, and design research to build a better future through experimentation.
                Lab members get three types of deliverables throughout the calendar year: Analyses, Artifacts, and Actions.
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
          <div className={'deliverables--graphic'} >
            { (deliverableSection === 0) &&
            <Image src={'metaballs_analysis.png'} alt={'Analysis'}/>
            }
            { (deliverableSection === 1) &&
            <Image src={'metaballs_artifact.png'} alt={'Artifact'}/>
            }
            { (deliverableSection === 2) &&
            <Image src={'metaballs_action.jpg'} alt={'Action'}/>
            }
          </div>
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
            <div className={'team--photo'}>
              <Image src={'team.png'} alt={'a team photo'} />
            </div>
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
        <div className={'section-content'}>
          <DividedContent
            hiddenBar={true}
            right={<div>
              <p>We were born, lived in, and worked on three continents, and currently work with organizations in Europe, Asia, Africa, the Middle East, and North America. Last year we visited innovators, met with clients, and spoke at events in the US, UK, Spain, Germany, France, Sweden, Norway, Denmark, Saudi Arabia, Pakistan, Singapore, Australia, and China.</p>
            </div>}
            left={<h3>Global Experience</h3>}
          />
          <DividedContent
            smallRight={true}
            hiddenBar={true}
            left={<div>
              <p>We've worked in dozens of corporate and non-commercial moonshot programs in many industries. Corporate venture capitalists, product developers, and R&D teams at Adidas, BASF, BMW, IBM, Telefonica, the United Nations, and more than 150 other Fortune 500 global companies have been our clients. We have taught sustainability, innovation, design, and entrepreneurship to business and engineering students at Parsons School of Design, the Institute for Advanced Architecture of Catalonia, the University of California at Berkeley, Presidio Graduate School, and the International University of Monaco, and INSEEC.</p>
            </div>}
            right={<div />}
          />

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
    </motion.main>
  )
}

export default About