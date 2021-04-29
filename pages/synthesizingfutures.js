import React  from 'react';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {CommunityJoin, EmButton, Footer, Icon, ICONS, THEME} from "../components";
import { cross } from "../constants/lottie";
import BackgroundWide from "../components/Icon/BackgroundWide";

const Synthesizingfutures = () => {

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
      <section className={'overview'}>
        <div className={'section-content'}>

          <div>
            <h2>Four Step Futures Synthesis</h2>
          </div>
          <div>
            <h4>01_a map_</h4>
            <h3>Mapping Futures Landscape</h3>
          </div>
          <div>
            <h4>02_a story_</h4>
            <h3>Building Futures World</h3>
          </div>
          <div>
            <h4>03_an object_</h4>
            <h3>Making Future Artifact</h3>
          </div>
          <div>
            <h4>04_a plan_</h4>
            <h3>Forming Roadmap and Backcasting</h3>
          </div>
          <div>
            <div>
            <em>Build a full set of capabilities</em>
            <h4>
              Your team will come away with a fully-rounded set of skills from business, engineering, and design - all critical to ongoing success and growth
            </h4>
            </div>
          </div>

        </div>
      </section>
      <section className={'modules'}>
        <div className={'section-content'}>
          <div>
            <em>Modules 1 / 4</em>
            <em>Skip to workshop details</em>
            <em>Skip to Upcoming cohorts</em>
            <EmButton
              label={'workshop types'}
              icon={<Icon icon={ICONS.INFO} theme={THEME.DARK} />}
              toggle={false}
              />
            <EmButton
              label={'Upcoming Cohorts'}
              icon={<Icon icon={ICONS.INFO} theme={THEME.DARK} />}
              toggle={false}
            />
          </div>
          <div>
            <div>
              <em>Module 1</em>
              <h4>
                <em>Mapping the Futures Space</em> starts with generating multiple scenarios and solutions. You will create detailed projections of positive and negative consequences, to identify the most desirable courses of action.
              </h4>
            </div>
          </div>
          <div>
            <div>
              <em>Module 2</em>
              <h4>
                <em>Building Future World</em> involves creating context and narrative around your desired future product or service. Combining techniques used in stories and screenplays, participants put themselves in the life of customers and users - thus improving the product idea and thinking through how to communicate it.
              </h4>
            </div>
          </div>
          <div>
            <div>
              <em>Module 3</em>
              <h4>
                <em>Designing Future Artifacts</em> is about making prototypes for fast testing with colleagues, clients, and other audiences. Building and designing an artifact can also help you make decisions and open up new ideas and possibilities that a mere thought- or digital exercise would not uncover.
              </h4>
            </div>
          </div>
          <div>
            <div>
              <em>Module 4</em>
              <h4>
                <em>Creating Future Roadmaps</em> or backcasting guides a plan of action in order to get to your desired future, by working backwards in steps to the present day from the future scenario you created.
              </h4>
            </div>
          </div>
        </div>

      </section>
      <Footer />
    </motion.main>
  )
}

export default Synthesizingfutures;
