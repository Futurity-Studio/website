import React from 'react';
import {DividedContent, Footer, ICONS, Teaser, THEME} from "../components";

import '../theme/styles.scss';
import Icon from "../components/Icon/Icon";
import BorderButton from "../components/BorderButton/BorderButton";

const About = () => {
  return(
    <main className={'about'}>
      <section className={'banner'}>
        <div className={'section-content'}>
          <h2>Radical innovation is rigorously imaginative, multidisciplinary in execution, and scrupulously reinvents itself.</h2>
          <h4>Futurity Studio brings this core belief to companies and teams wanting to discover the future.</h4>
        </div>
        <Teaser label={'explore more'} />
      </section>



      <section className={'methodology'}>
        <div className={'section-content'}>
          <h4>
            We believe the best approach to conduct research is through a deep dive into data... and from that data, remixing it with our own experimentation and analysis.
            Futurity offers clients membership in our lab&mdash;a year-long cycle of using trend, participatory, and design research to build a future through experimentation.
          </h4>
        </div>
        <BorderButton
          content={<>
            <em>our methodology</em>
            <Icon icon={ICONS.BULB} theme={THEME.DARK} />
          </>}
        />
        <div className={'section-content'}>
          <h4>
            Lab members get three types of deliverables throughout the calendar year: Analyses, Artifacts, and Actions (6 each, per lab).
            The topics of each are planned, but subject to change in response to member needs, new ideas and information, or other forces emerge.
          </h4>
        </div>
      </section>


      <section className={'deliverables'}>
        <div className={'deliverables--container'}>
          <div className={'deliverables--graphic'}></div>
          <div className={'deliverables--content'}>
            <div>
              <h3>Analysis</h3>
              <p>
                We learn everything we can about an innovation space to build a conceptual understanding of how it interacts with our social, economic, and industry systems. Examples include: Timelines, systems maps, forecasts, scenarios, reports appx. 15-25 pages.
              </p>
            </div>
            <div>
              <h3>Artifact</h3>
              <p>
                We use our data to prototype a narrative into reality. Artifacts are objects based on the interactions, inquiries, and provocations from our analysis. Examples include: speculative physical products, digital experiences, interactive installations.
              </p>
            </div>
            <div>
              <h3>Action</h3>
              <p>
                We pilot the our future-forecast now. Actions include interventions, panels discussions, ethnographic research, user questionnaires, co-creation design interventions all with the goal of testing the realized understanding of our lab against industry leaders, scientists, and individuals. These findings feed-back into our analysis to support our future deliverables.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className={'team'}>
        <div className={'team--container'}>
          <div className={'team--header'}>
            <div><h2>Our Team</h2>
              <p>Together we have 50+ years of experiences in analysis, forecasting, design and development for startups, moonshot factories, and fortune 500 companies.</p>
            </div>
            <div className={'team--photo'} />
          </div>
          <div className={'team--content'}>
            <div>
              <p>Synthesist - person which develops the craft unification or coupling things together.</p><em>presented from left to right</em>
            </div>
            <div className={'team--members'}>
              <div>
                <h4>Cecilia MoSze Tham</h4>
                <em>Futures Synthesist</em>
              </div>

              <div>
                <h4>Lucas Lorenzo Pe&ntilde;a</h4>
                <em>Technology Synthesist</em>
              </div>

              <div>
                <h4>Mark B&uuml;nger</h4>
                <em>Strategy Synthesist</em>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className={'clients'}>
        <div className={'clients--container'}>
          <div className={'clients--header'}>
            <div className={'clients--list'}>
            </div>
            <div>
              <h2>Select clients</h2>
              <p>We've taken to the future and back</p>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

export default About