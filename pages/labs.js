import React, { useState, useEffect }from 'react';
import {AccordionSection, DividedContent, Footer, Menu} from "../components";
import { LabData } from "../constants/labs";
import '../theme/styles.scss';
import BorderButton from "../components/BorderButton/BorderButton";

const Labs = () => {
  const [isOpen, setIsOpen ] = useState(false);
  const [selected, setSelected ] = useState(LabData.map(_ => false));


  // console.log(selected)

  // useEffect(() => {
  //   console.log()
  //   // if (isOpen){
  //   //
  //   // }
  // }, [isOpen]);
  //
  // useEffect(() => {
  //   console.log(selected);
  //
  // }, [selected])



  const generateLabs = () =>{
    const labCard = LabData.map( (l, i) => {
      const analysis = l.deliverable_analysis.map( (a) => (
          <div key={a.title} className={'deliverable'}>
            <em>{`Analysis No. ${a.number}`}</em>
            <h4>{a.title}</h4>
          </div>
        )
      );
      const artifact = l.deliverable_artifacts.map( (a) => (
          <div key={a.title} className={'deliverable'}>
            <em>{`Artifact No. ${a.number}`}</em>
            <h4>{a.title}</h4>
          </div>
        )
      );
      const action = l.deliverable_actions.map( (a) => (
          <div key={a.title} className={'deliverable'}>
            <em>{`Action No. ${a.number}`}</em>
            <h4>{a.title}</h4>
          </div>
        )
      );
      const card = (
        <AccordionSection
          key={l.title}
          // open={selected[i]}
          toggle={(open) => {
            let selection = [...selected];
            selection[i] = open ? true : false;
            setSelected(selection);
          }}
          className={'lab'}
          header={
            <div className={`section-content`}>
              <div><em>{`Lab - ${l.year}`}</em></div>
              <h2>{l.title}</h2>
              <p>{l.short_desc}</p>
            </div>
          }
        >
          <div className={'lab--content'}>
            <div className={'lab--menu'}>
                <span><p>Description</p></span>
                <span><p>Analysis</p></span>
                <span><p>Artifact</p></span>
                <span><p>Analysis</p></span>
              <span>{`Interested in subscribing to ${l.title} Lab`}</span>
            </div>
            <div className={'lab--body'}>
              <div className={'lab--body--desc'}>
                <em>Description</em>
                <p>{l.desc}</p>
              </div>
              <div className={'deliverables--wrapper'}>
                <div>
                  <div className={'deliverables--container'}>
                    { analysis }
                  </div>
                </div>
                <div>
                  <div className={'deliverables--container'}>
                    { artifact }
                  </div>
                </div>
                <div>
                  <div className={'deliverables--container'}>
                    { action }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AccordionSection>)
      return(card)
    });
    return(labCard);
  }

  return(
    <main className={'Labs'}>
      <section className={'Labs--overview'}>
        <div className={'section-content'}>
          <DividedContent
            left={<h2>Our Labs</h2>}
            right={<h4>Labs are year long investigations, and experimentations on a theme packaged for as a subscription service</h4>}
          />
        </div>
      </section>
      <div className={'Labs--wrapper'}>
        { generateLabs() }
      </div>
      <Footer/>
    </main>
  )
}

export default Labs