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
import {useWindowSize} from "react-use";


const Services = () => {
  const router = useRouter();
  const [ deliverableSection, setDeliverableSection ] = useState(0);
  const [ methodologySection, setMethodologySection ] = useState(null);
  const services = useRef(null)
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
        <Teaser
          label={'explore how'}
          onClick={() => (window.scrollTo({top: services.current.offsetTop - (82+ 64), behavior: 'smooth'})) }
        />
      </motion.section>

      <section className={'services'}>
        <div className={'section-content'} ref={services}>
          <div>
            <em>services</em>
            <h2>We deal in Futures and Future Literacy</h2>
          </div>

          <DividedContent
            smallRight={true}
            left={<p>We help companies recognize & plan existential threats and emerging markets. We help companies achieve sustainable development goals, emerging market fit, and novel business strategies. We don't just write reports or design thinking activities. Our future synthesis approach culminates with an embodiment of data science, experimentation, and forecasting into a narrative artifact, product, or experience to help your team realize a better future faster.</p>}
            right={
              <div>
                <svg
                  width={46*3.5}
                  height={43*3.5}
                  viewBox="0 0 46 43"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.127 29.582l-2.92-5.058 9.82-17.014 2.92 5.059-9.82 17.013zM4.749 25.008h5.845l9.82 17.016h-5.846l-9.82-17.016zM4.259.978H23.9l-2.924 5.064H1.336L4.26.977zm26.863 11.539L28.2 17.581 21.823 6.53l2.921-5.063 6.378 11.049zm-9.693 17.556l-2.978-5.065h12.906l2.923 5.065H21.429zM10.986 13.225h5.845L10.594 24.03H4.749l6.237-10.805zm9.989-6.205l6.377 11.05h-5.97l-3.284-5.581a.488.488 0 00-.421-.242h-6.975a.49.49 0 00-.424.245l-2.891 5.01L1.337 7.02h19.638zm-9.534 17.5l6.24-10.813 2.852 4.852-3.358 5.713a.487.487 0 000 .494l3.551 6.043c.088.149.25.241.422.241h6.163l-6.052 10.483-9.818-17.013zm29.738-17.5l-9.818 17.01h-12.91l2.93-4.982H28.2a.49.49 0 00.424-.245l3.487-6.042a.488.488 0 000-.488L29.08 7.02h12.1zm4.755 5.305L42.45 6.287a.49.49 0 00-.424-.245H28.515L25.169.246A.49.49 0 0024.745 0H3.976a.49.49 0 00-.424.246L.065 6.287a.49.49 0 000 .488l6.757 11.707-3.344 5.793a.49.49 0 000 .488l10.384 17.993a.49.49 0 00.424.244h6.974a.492.492 0 00.424-.244L28.44 31.05h6.687a.49.49 0 00.424-.245l10.383-17.992a.485.485 0 000-.488z"
                    fill="#020303"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            }
          />
          <div className={'services--content'}>
            <div>
              <em>Training For Futures</em>
              <h3>Processes</h3>
              <ul>
                <li><p>Individual & Corporate Methodology Training</p></li>
                <li><p>Research & Design Processes</p></li>
                <li><p>Design & Futuring Workshops</p></li>
              </ul>
            </div>
            <div>
              <em>Establishing Futures</em>
              <h3>Infrastructure</h3>
              <ul>
                <li><p>Innovation & Moonshot Consulting</p></li>
                <li><p>Custom Research Verticals</p></li>
              </ul>
            </div>
            <div>
              <em>Exploring Futures</em>
              <h3>Content</h3>
              <ul>
                <li><p>Syndicated Research Verticals</p></li>
                <li><p>Trend & Market Research</p></li>
                <li><p>Future Design Prototyping</p></li>
                <li><p>Focus Groups & Industry Leader Seminars</p></li>
              </ul>
            </div>
          </div>

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
            left={<div><em>Content</em><h2>Future Labs</h2></div>}
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
            // width={1447}
            // height={802}
            viewBox="0 0 1447 802"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <g transform="translate(299)">
                <circle
                  stroke="#3A3A3A"
                  strokeWidth={4}
                  cx={483.5}
                  cy={386.182}
                  r={381.5}
                />
                <path
                  d="M257 79c-57.267 44.223-116.128 71.358-176.583 81.403-25.83 4.292-52.636 5.579-80.417 3.86M257 693c-34.44-27.496-75.636-47.477-123.589-59.943-44.725-11.628-85.196-14.085-121.411-7.37"
                  stroke="#3A3A3A"
                  strokeWidth={4}
                  strokeLinecap="square"
                />
                <path fill="#f7f7f7" d="M632 0h363v158H632z" />
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  fontSize={24}
                  fill="#222"
                  transform="translate(632)"
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
                  transform="translate(632)"
                >
                  <tspan x={11} y={47}>
                    {"Analysis"}
                  </tspan>
                </text>
                <path fill="#f7f7f7" d="M31 280h336v222H31z" />
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  fontSize={24}
                  fill="#222"
                  transform="translate(31 280)"
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
                  transform="translate(31 280)"
                >
                  <tspan x={9} y={54}>
                    {"Action"}
                  </tspan>
                </text>
                <path fill="#f7f7f7" d="M626 625h325v177H626z" />
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  fontSize={24}
                  fill="#222"
                  transform="translate(626 625)"
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
                  transform="translate(626 625)"
                >
                  <tspan x={11} y={47}>
                    {"Artifact"}
                  </tspan>
                </text>
                <path
                  fill="#3A3A3A"
                  d="M639.883 38.764l-19.237.984L628.814 23zM791.018 628.782l-17.323 8.422.975-18.608zM868.418 487.483l-4.636-18.695 17.999 4.822zM116.485 487.779l13.363 13.873-17.999 4.822zM5.71 627.312l13.873-13.363 4.822 17.999zM114.158 153.421l-13.962 13.577-4.918-18.353z"
                />
                <g>
                  <path
                    stroke="#3A3A3A"
                    strokeWidth={4}
                    strokeLinecap="square"
                    d="M284.636 585.411l397.729-397.729"
                  />
                  <text
                    transform="rotate(-45 399.795 131.946)"
                    fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                    fontSize={24}
                    fontWeight="bold"
                    letterSpacing={2}
                    fill="#222"
                  >
                    <tspan x={-3.574} y={364.255}>
                      {"LEARN"}
                    </tspan>
                  </text>
                  <text
                    transform="rotate(-45 600.767 -48.57)"
                    fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                    fontSize={24}
                    fontWeight="bold"
                    letterSpacing={2}
                    fill="#222"
                  >
                    <tspan x={141.899} y={165.738}>
                      {"SYNTHESIZING"}
                    </tspan>
                    <tspan x={141.899} y={197.738}>
                      {"FUTURES"}
                    </tspan>
                  </text>
                  <text
                    transform="rotate(-45 754.795 -178.054)"
                    fontFamily="HelveticaNeue-Bold, Helvetica Neue"
                    fontSize={24}
                    fontWeight="bold"
                    letterSpacing={2}
                    fill="#222"
                  >
                    <tspan x={347.426} y={54.255}>
                      {"INVENT"}
                    </tspan>
                  </text>
                </g>
                <g fill="#222" fontSize={24}>
                  <text
                    fontFamily="HelveticaNeue, Helvetica Neue"
                    transform="translate(891 301)"
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
                    transform="translate(891 301)"
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
                  transform="translate(0 116)"
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
                  transform="translate(0 116)"
                >
                  <tspan x={0} y={23}>
                    {"NEW LAB"}
                  </tspan>
                </text>
              </g>
              <g fill="#222" fontSize={24}>
                <text
                  fontFamily="HelveticaNeue, Helvetica Neue"
                  transform="translate(44 604)"
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
                  transform="translate(44 604)"
                >
                  <tspan x={0} y={23}>
                    {"END LAB"}
                  </tspan>
                </text>
              </g>
              <path
                d="M1170.5 294.5c6.603 29.3 9.905 59.982 9.905 92.047s-3.302 61.382-9.905 87.953"
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