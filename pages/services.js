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
import {c, useWindowSize} from "react-use";


const Services = () => {
  const router = useRouter();
  const [ deliverableSection, setDeliverableSection ] = useState(0);
  const [ methodologySection, setMethodologySection ] = useState(null);
  const size = useWindowSize();

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
      className={'Services'}
      initial={{  opacity: 0, transition:{  duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .25, easings: "linear" } }}
    >
      <motion.section
        className={'banner'}
        style={background}
        initial={{
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundSize: '100% 100%',
          transition: {
            duration: 12,
            easings: "backInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }
        }}
      >
        <div className={'section-content'} onMouseLeave={() =>  setMethodologySection(0)}>
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
                <em>Build</em> (means make, don't just think). We build physical prototypes or experiences that take your understanding beyond abstract designs, market analysis, and manifestos.
              </motion.h4>
              }
              { (methodologySection === 2) &&
              <motion.h4 key={2} animate={"animate"} initial={"initial"} variants={ animateInUp } exit={"initial"}>
                <em>Better</em> (impact beyond economics). We help you calculate and maximize the total worth of an innovation, not just financial, but environmental, health, and social costs/benefits too.
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
      </motion.section>

      <section className={'services'}>
        <div className={'section-content'}>
          <DividedContent
            medLeft={ !!(size.width > 900)  }
            right={<div>
              <p>We don't just write reports or design thinking activities. Our future synthesis approach culminates with an embodiment of data science, experimentation, and forecasting into a narrative artifact, product, or experience to help your team realize a better future faster.</p>
            </div>}
            left={<h2>We deal in Futures</h2>}
          />
        </div>
        <div className={'section-content'}>
          <DividedContent
            medLeft={ !!(size.width > 900)  }
            left={<div>
              <ul>
                <li><p>Innovation & Moonshot Consulting</p></li>
                <li><p>Design & Futuring Workshops</p></li>
                <li><p>Trend & Market Research</p></li>
                <li><p>Research & Design Processes</p></li>
                <li><p>Rapid Design Prototyping</p></li>
              </ul>
            </div>}
            right={
              <div>
                <p>
                  We help companies recognize & plan existential threats and emerging markets. We help companies achieve sustainable development goals, emerging market fit, and novel business strategies.
                  We don't just write reports or design thinking activities.
                  Our future synthesis approach culminates with an embodiment of data science, experimentation, and forecasting into a narrative artifact, product, or experience to help your team realize a better future faster.
                </p>
              </div>
            }
          />
        </div>
      </section>

      <section className={'offerings'}>
        <BorderButton
          backwards={true}
          content={<em>our offerings</em>}
          icon={<Icon icon={ICONS.WAIVER} theme={THEME.DARK} />}
        />
        <div className={'section-content'}>
          <DividedContent
            medLeft={ !!(size.width > 900)  }
            left={<h2>Future Labs</h2>}
            right={<>
              <p>
                Our core offering is a year-long cycle of trend, participatory, and design research to build a better future through experimentation.
                Subscribing to this full-service package gives lab members access to three types of deliverables throughout the calendar year: Analyses, Artifacts, and Actions.
              </p>
              <StealthButton
                label={'explore our labs'}
                icon={<Icon icon={ICONS.RIGHT} theme={THEME.DARK} />}
                link={ROUTES.LABS}
              />
            </>}
          />
        </div>
        <div className={'section-content'}>
          <svg
            viewBox="0 0 1447 804"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(299 .682)">
                <circle
                  stroke="#3A3A3A"
                  strokeWidth={4}
                  cx={483.5}
                  cy={386.5}
                  r={381.5}
                />
                <path
                  d="M257 79.318c-57.267 44.223-116.128 71.357-176.583 81.403-25.83 4.292-52.636 5.578-80.417 3.86M257 693.318c-34.44-27.496-75.636-47.477-123.589-59.944C88.686 621.747 48.215 619.29 12 626.005"
                  stroke="#3A3A3A"
                  strokeWidth={4}
                  strokeLinecap="square"
                />
                <path fill="#f7f7f7" d="M632 .318h363v158H632z" />
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  fontSize={24}
                  fill="#222"
                  transform="translate(632 .318)"
                >
                  <tspan x={13} y={80}>
                    {"Analyze data to generate "}
                  </tspan>
                  <tspan x={13} y={108}>
                    {"hypothetical future scenarios\u2013"}
                  </tspan>
                  <tspan x={13} y={136}>
                    {"both desirable and undesirable"}
                  </tspan>
                </text>
                <text
                  fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                  fontSize={48}
                  fontWeight="bold"
                  fill="#222"
                  transform="translate(632 .318)"
                >
                  <tspan x={11} y={47}>
                    {"Analysis"}
                  </tspan>
                </text>
                <path fill="#f7f7f7" d="M31 280.318h336v222H31z" />
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  fontSize={24}
                  fill="#222"
                  transform="translate(31 280.318)"
                >
                  <tspan x={9} y={87}>
                    {"Test the hypothetical Artifact "}
                  </tspan>
                  <tspan x={9} y={115}>
                    {"in the real world, measuring "}
                  </tspan>
                  <tspan x={9} y={143}>
                    {"with observation, surveys, "}
                  </tspan>
                  <tspan x={9} y={171}>
                    {"and ethnographic tools to "}
                  </tspan>
                  <tspan x={9} y={199}>
                    {"get primary data"}
                  </tspan>
                </text>
                <text
                  fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                  fontSize={48}
                  fontWeight="bold"
                  fill="#222"
                  transform="translate(31 280.318)"
                >
                  <tspan x={9} y={54}>
                    {"Action"}
                  </tspan>
                </text>
                <path fill="#f7f7f7" d="M626 625.318h325v177H626z" />
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  fontSize={24}
                  fill="#222"
                  transform="translate(626 625.318)"
                >
                  <tspan x={11} y={80}>
                    {"Create an interactive "}
                  </tspan>
                  <tspan x={11} y={108}>
                    {"embodiment of desired "}
                  </tspan>
                  <tspan x={11} y={136}>
                    {"hypothetical scenario from "}
                  </tspan>
                  <tspan x={11} y={164}>
                    {"the Analysis"}
                  </tspan>
                </text>
                <text
                  fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                  fontSize={48}
                  fontWeight="bold"
                  fill="#222"
                  transform="translate(626 625.318)"
                >
                  <tspan x={11} y={47}>
                    {"Artifact"}
                  </tspan>
                </text>
                <path
                  fill="#3A3A3A"
                  d="M639.883 39.082l-19.237.983 8.168-16.747zM791.018 629.1l-17.323 8.422.975-18.608zM868.418 487.801l-4.636-18.696 17.999 4.823zM116.485 488.096l13.363 13.873-17.999 4.823zM5.71 627.63l13.873-13.363 4.822 17.998zM114.158 153.74l-13.962 13.575-4.918-18.352z"
                />
                <g>
                  <path
                    stroke="#3A3A3A"
                    strokeWidth={4}
                    strokeLinecap="square"
                    d="M284.635 585.729L682.365 188"
                  />
                  <text
                    transform="rotate(-45 399.729 133.103)"
                    fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                    fontSize={24}
                    fontWeight="bold"
                    letterSpacing={2}
                    fill="#222"
                  >
                    <tspan x={-3} y={364.865}>
                      {"LEARN"}
                    </tspan>
                  </text>
                  <text
                    transform="rotate(-45 754.729 -176.897)"
                    fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                    fontSize={24}
                    fontWeight="bold"
                    letterSpacing={2}
                    fill="#222"
                  >
                    <tspan x={348} y={54.865}>
                      {"INVENT"}
                    </tspan>
                  </text>
                </g>
                <g fill="#222" fontSize={24}>
                  <text
                    fontFamily="HelveticaNeue, Helvetica Neue"
                    transform="translate(891 301.318)"
                  >
                    <tspan x={0} y={54}>
                      {"Iterate the cycle six "}
                    </tspan>
                    <tspan x={0} y={82}>
                      {"times, each time "}
                    </tspan>
                    <tspan x={0} y={110}>
                      {"building on past "}
                    </tspan>
                    <tspan x={0} y={138}>
                      {"findings and exploring "}
                    </tspan>
                    <tspan x={0} y={166}>
                      {"new aspects in depth"}
                    </tspan>
                  </text>
                  <text
                    fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                    fontWeight="bold"
                    letterSpacing={2}
                    transform="translate(891 301.318)"
                  >
                    <tspan x={0} y={23}>
                      {"ITERATE"}
                    </tspan>
                  </text>
                </g>
              </g>
              <g fill="#222" fontSize={24}>
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  transform="translate(0 117)"
                >
                  <tspan x={0} y={54}>
                    {"Initiate a new Lab with a "}
                  </tspan>
                  <tspan x={0} y={82}>
                    {"problem/opportunity statement, "}
                  </tspan>
                  <tspan x={0} y={110}>
                    {"and secondary data describing "}
                  </tspan>
                  <tspan x={0} y={138}>
                    {"the state of the space today"}
                  </tspan>
                </text>
                <text
                  fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                  fontWeight="bold"
                  letterSpacing={2}
                  transform="translate(0 117)"
                >
                  <tspan x={0} y={23}>
                    {"NEW LAB"}
                  </tspan>
                </text>
              </g>
              <g fill="#222" fontSize={24}>
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  transform="translate(44 605)"
                >
                  <tspan x={0} y={54}>
                    {"By the end of the Lab, prime our "}
                  </tspan>
                  <tspan x={0} y={82}>
                    {"members with the data, ideas, "}
                  </tspan>
                  <tspan x={0} y={110}>
                    {"and ecosystem partners needed "}
                  </tspan>
                  <tspan x={0} y={138}>
                    {"to make a better future happen "}
                  </tspan>
                  <tspan x={0} y={166}>
                    {"faster"}
                  </tspan>
                </text>
                <text
                  fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                  fontWeight="bold"
                  letterSpacing={2}
                  transform="translate(44 605)"
                >
                  <tspan x={0} y={23}>
                    {"END LAB"}
                  </tspan>
                </text>
              </g>
              <path
                d="M1170.5 295.5c6.603 29.3 9.905 59.982 9.905 92.047s-3.302 61.382-9.905 87.953"
                stroke="#3A3A3A"
                strokeWidth={4}
                strokeLinecap="square"
              />
            </g>
          </svg>
        </div>
      </section>

      <Footer/>
    </motion.main>
  )
}

export default Services