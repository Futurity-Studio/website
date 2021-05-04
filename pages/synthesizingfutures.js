import React, {useEffect, useRef} from 'react';
import {motion, useViewportScroll, useTransform} from "framer-motion";
import Link from 'next/link';
import {
  BorderButton,
  EmButton,
  Footer,
  Icon,
  ICONS, Modules, Sfoverview,
  THEME
} from "../components";
import BackgroundWide from "../components/Icon/BackgroundWide";

const Synthesizingfutures = () => {

  const refDetails = useRef();
  const refOverview = useRef();
  const refCohorts = useRef();
  const { scrollY } = useViewportScroll();
  let inputRangeOrigin = (refOverview.current) ? refOverview.current.offsetTop - refOverview.current.offsetHeight : 1080*.5;
  let gap = 150;
  useEffect(() => {
    gap = window.innerHeight * .125;
  }, [])

  let y1 = useTransform(scrollY, [inputRangeOrigin, inputRangeOrigin+gap    ], [gap, 0]);
  let y2 = useTransform(scrollY, [inputRangeOrigin, inputRangeOrigin+gap+ 50], [gap+ 50, 0]);
  let y3 = useTransform(scrollY, [inputRangeOrigin, inputRangeOrigin+gap+100], [gap+ 100, 0]);
  let y4 = useTransform(scrollY, [inputRangeOrigin, inputRangeOrigin+gap+150], [gap+ 150, 0]);
  let y5 = useTransform(scrollY, [inputRangeOrigin, inputRangeOrigin+gap+250], [gap+ 200, 0]);

  return(
    <motion.main
      className={'SynthFutures'}
      initial={{  opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
    >
      <section className={'banner'}>
        <div className={'background'}>
          <BackgroundWide />
          <BackgroundWide />
          <BackgroundWide />
        </div>
        <div className={'foreground section-content'}>
          <div>
            <div>
              <h1>Synthesizing</h1>
              <h1>Futures</h1>
            </div>
            <div>
              <h4>A four-step future-focused multidisciplinary approach to tackle uncertainties, understand emerging customer needs,communicate your vision, accelerate new product development, and plan a roadmap to future growth.</h4>
            </div>
          </div>
          <div />
        </div>
      </section>
      <section className={'tagline'}>
        <div className={'section-content'}>
          <h3>A Playbook for Building Better Futures Faster</h3>
          <div />
        </div>
      </section>

      <Sfoverview />
      <Modules />

      <section className={'details'} ref={refDetails}>
        <BorderButton
          content={<em>Workshop Offerings</em>}
          icon={<Icon icon={ICONS.INFO} theme={THEME.DARK} />}
        />
        <div className={'section-content'}>
          <div>
            <h4><em>Full Version:</em></h4>
            <p>
              Each module is <em>1 day</em> in duration and programmed for a full week sprint, with day 5 dedicated to sharing results and presentation.
              The workshop is designed as a practical hands-on start-to-finish guide in synthesizing futures.
              Ideal in using existing projects that require future visions and future making, focus on ideating for future products, services, business models and scenarios.
            </p>
            <h4><em>Takeaways:</em></h4>
            <ol>
              <li><p>Training, inspiration, and practice in key innovation tools that will help you your team develop new products, services, programs, or policies</p></li>
              <li><p>Structured scenarios, stories, roadmaps and other materials suitable for strategic planning</p></li>
              <li><p>One or more rapid prototypes ready to feed into new product development</p></li>
              <li><p>A library of data, ideas, and explorations about the technologies, industries, and markets you serve</p></li>
              <li><p>Process materials and documentation that you can use and reuse in future sessions</p></li>
            </ol>
          </div>
          <div>
            <h4><em>Compressed version:</em></h4>
            <p>
              Each module is <em>4 hours</em> in duration and can be programmed back to back for a full 2 day long workshop.
              The workshop is designed as a demo to get an idea of the potential of the methodology.
              Ideal for showcasing method to project/team managers to expand team capacity and clients vision.
            </p>
            <h4><em>Takeaways:</em></h4>
            <ol>
              <li><p>An understanding of why it’s important to build better futures faster</p></li>
              <li><p>Practical innovation tools that will help you to develop new products, services, programs, or policies</p></li>
              <li><p>A “lite” prototype, story, and plan</p></li>
              <li><p>Insight into the tools and how to use them successfully</p></li>
            </ol>
          </div>
        </div>
      </section>
      <section className={'cohorts'} ref={refCohorts}>
        <BorderButton
          content={<em>Cohorts</em>}
          icon={<Icon icon={ICONS.CALENDAR} theme={THEME.DARK} />}
        />
        <div className={'section-content'}>
          <div>
            <p>
              Synthesizing Futures is a 4-week long interactive experience designed for professionals to upskill their foresight, future literacy, and future making capabilities. Participants can start with an idea, a problem, or just an area of curiosity; and finish with a detailed understanding of its causes and consequences, a narrative and conceptual prototype of a future product (or business model, policy, service…), and a roadmap to reach the future space.
              <br /><br />
              The workshop includes:
            </p>
            <ul>
              <li><p>Four interactive hands-on live online learning and making sessions</p></li>
              <li><p>A step-by-step printable playbook on Synthesizing Futures</p></li>
              <li><p>Digital tools, data, and frameworks useful for professional projects or personal development</p></li>
              <li><p>Discord channel to connect with the Synthesizing Futures community</p></li>
              <li><p>Video Recordings of the live sessions</p></li>
              <li><p>Access to the pre-recording of the Synthesizing Futures Domestika Course</p></li>
            </ul>
            <div>
              <p>What you will learn:</p>
              <ol>
                <li><p>the framework for gathering insights and finding relevant starting points for your exploration in futures landscapes</p></li>
                <li><p>to use the futures wheel for structured brainstorming to consider promises, risks, and consequences of emerging technical and social innovations</p></li>
                <li><p>how to use future cones and plan for different horizons</p></li>
                <li><p>world-building techniques to contextualize and communicate your vision</p></li>
                <li><p>how to write a story arc to build a (future) user journey map, identify their (future) pain points and narrate their triumph (or loss)</p></li>
                <li><p>to design, prototype and iterate a solution for your (future) users</p></li>
                <li><p>to create multiple roadmaps to your solution and a work plan to make it real</p></li>
              </ol>
            </div>
          </div>
          <div>
            <div className={'cohorts--header'}>
              <em>1st Cohort 2021</em><em>Instructors:</em>
              <h4>June 1st - June 29th</h4>
              <div>
                <Link href={'https://www.linkedin.com/in/ceciliatham/'}><a target="_blank"><p>Cecilia Tham</p></a></Link>
                <Link href={'https://www.linkedin.com/in/markbunger/'}><a target="_blank"><p>Mark Bünger</p></a></Link>
              </div>
              <em>Cost</em>
              <h4>€1200 (Euro)</h4>
              <p>We offer scholarships to people in need, BIPOC, and other underrepresented people </p>
              <EmButton
                label={'enroll now'}
                toggle={true}
                onClick={() => (window.open('mailto:inquiry@futurity.studio', "") )}
              />
            </div>
            <div>
              <p>
                Who is this for:
                <br />
                Synthesizing Futures is designed for professional analysts, forecasters, product designers, and leaders of innovation teams and organizations. It will equip you and your team with future literacy and future making capabilities to not only tackle uncertainties, but to proactively build and design futures that are resilient, sustainable and visionary.
              </p>
            </div>
            <div className={'cohorts--modules'}>
              <div>
                <em>Module 1 - Date & Time</em>
                <p>Thursday June 3rd, 17-20 CET</p>
                <p>
                  Mapping the Futures Space starts with generating multiple scenarios and solutions. You will create detailed projections of positive and negative consequences, to identify the most desirable courses of action.
                </p>
                <ul>
                  <li><p>1A - Starting Point</p></li>
                  <li><p>1B - Futures Wheel</p></li>
                  <li><p>1C + D - Futures Cone</p></li>
                </ul>
              </div>

              <div>
                <em>Module 2 - Date & Time</em>
                <p>Thursday June 10th, 17-20 CET</p>
                <p>
                  Building Future Worlds involves creating context and narrative around your desired future product or service. Combining techniques used in stories and screenplays, participants put themselves in the life of customers and users - thus improving the product idea and thinking through how to communicate it.
                </p>
                <ul>
                  <li><p>2A - Establishing Components of your future world</p></li>
                  <li><p>2B - Detailing your future world</p></li>
                  <li><p>2C - Journey of your future user</p></li>
                </ul>
              </div>

              <div>
                <em>Module 3 - Date & Time</em>
                <p>Thursday June 17th, 17-20 CET</p>
                <p>
                  Designing Future Artifacts is about making prototypes for fast testing with colleagues, clients, and other audiences. Building and designing an artifact can also help you make decisions and open up new ideas and possibilities that a mere thought- or digital exercise would not uncover.
                </p>
                <ul>
                  <li><p>3A - Features List</p></li>
                  <li><p>3B - Moodboard</p></li>
                  <li><p>3C - Prototyping</p></li>
                </ul>
              </div>

              <div>
                <em>Module 4 - Date & Time</em>
                <p>Thursday June 24th, 17-20 CET</p>
                <p>
                  Creating Future Roadmaps or backcasting guides a plan of action in order to get to your desired future, by working backwards in steps to the present day from the future scenario you created.
                </p>
                <ul>
                  <li><p>4A Backcasting - Features-focused</p></li>
                  <li><p>4B Backcasting - Purpose-focused</p></li>
                  <li><p>4C Future root cause analysis </p></li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </motion.main>
  )
}

export default Synthesizingfutures;
