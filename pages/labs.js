import React, { useState, useEffect, useRef }from 'react';
import { useRouter } from "next/router";
import { useIntersection } from "react-use";
import {AccordionSection, DividedContent, Footer, Icon, StealthButton, ICONS, THEME, BorderButton} from "../components";
import {LabData, Links, ROUTES} from "../constants/";
import '../theme/styles.scss';


const scrollToRef = (ref) => {
    window.scrollTo( 0, ref.current.offsetTop - 80, { behavior: 'smooth' });
}

const Labs = () => {
  const router = useRouter();
  const labParam = router.query.lab;


  const [ lab, setLab ] = useState(null);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ selected, setSelected ] = useState(LabData.map(_ => false));
  const labContainerRefs = LabData.map(_ => useRef(null));
  const intersectionThresholds = LabData.map(_ => 0.2);
  const intersections = [];


  const deliverableRefs = LabData.map(_ => [ useRef(null), useRef(null), useRef(null)] );

  const headerRefs = [ useRef(null), useRef(null), useRef(null), useRef(null)];


  // console.log(lab);
  // console.log(labParam);
  // // console.log(router.query);
  // if ((lab == null) && (labParam != null) && (lab !== labParam)) {
  //   setLab(labParam);
  // }


  useEffect(() => {
    // console.log('initial');
    if (!router.query.lab) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 500);
    }
  }, []);


  intersectionThresholds.forEach((_, i) => {
    intersections.push(useIntersection(labContainerRefs[i], {
        root: null,
        rootMargin: "0px",
        threshold: intersectionThresholds[i]
      }));
  })


  useEffect( () => {

    // if ((lab == null) && (labParam!= null) && (lab !== labParam)) {
    //   console.log('labs updated');
    //   setLab(labParam);
    // }

    console.log('labs updated');
    console.log(lab);
    if (lab){
      let labNumber = Links.find((l) => (l.title === 'Labs')).children.findIndex((c) => c.link.includes(lab));
      console.log(labNumber);

      let selection = [...selected];
      selection[labNumber] = true;
      setSelected(selection);

      scrollToRef(labContainerRefs[labNumber]);
    } else {
      window.scrollTo(0, 0);
    }

    // return() => {
    //   setLab(null);
    // }

  }, [lab]);

  useEffect(() => {
    // console.log('generic effect hit');
    const labParam = router.query.lab;
    if ((labParam!= null) && (lab !== labParam)) {
      setLab(labParam);
    }
  }, );


  // //
  // useEffect(() => {
  //   // console.log('selection changed');
  //   // console.log(selected);
  //   // selected.findIndex()
  //
  // }, [selected]);



  const generateLabs = () =>{
    const labCard = LabData.map( (l, i) => {
      const analysis = l.deliverable_analysis.map( (a) => (
          <div key={a.title} className={'deliverable'}>
            <em>{`Analysis No. ${a.number}`}</em>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        )
      );
      const artifact = l.deliverable_artifacts.map( (a) => (
          <div key={a.title} className={'deliverable'}>
            <em>{`Artifact No. ${a.number}`}</em>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        )
      );
      const action = l.deliverable_actions.map( (a) => (
          <div key={a.title} className={'deliverable'}>
            <em>{`Action No. ${a.number}`}</em>
            <h4>{a.title}</h4>
            <p>{a.desc}</p>
          </div>
        )
      );

      const inView = intersections[i] && intersections[i].intersectionRatio >= intersectionThresholds[i];

      const card = (
        // <div className={'lab'}>
        <AccordionSection
          key={l.title}
          open={selected[i]}
          id={l.title}
          toggle={(open) => {
            let selection = [...selected];
            selection[i] = open ? true : false;
            console.log(selection);
            // router.push()
            if (open){
              scrollToRef(labContainerRefs[i]);

              let link = Links.find((l) => (l.title === 'Labs')).children[i].link;
              // console.log(link);
              router.push(`/labs${link}`, `/labs${link}`, {shallow: true});
            }
            setSelected(selection);
          }}
          reference={labContainerRefs[i]}
          className={`lab ${inView}`}
          header={
            <div className={`section-content`} ref={headerRefs[i]}>
              <div><em>{`Lab - ${l.year}`}</em></div>
              <h2>{l.title}</h2>
              <p>{l.short_desc}</p>
            </div>
          }
        >
          <div className={'lab--content'}>
            {/*<div className={'lab--menu'}>*/}
            {/*  <span*/}
            {/*    onClick={() => {*/}
            {/*      window.scrollTo({*/}
            {/*        top: ( deliverableRefs[i][0].current.offsetTop + 80),*/}
            {/*        behavior: 'smooth'*/}
            {/*      })*/}
            {/*    }}*/}
            {/*  ><p>Overview</p></span>*/}
            {/*  <span*/}
            {/*    onClick={() => {*/}
            {/*      window.scrollTo({*/}
            {/*        top: ( deliverableRefs[i][1].current.offsetTop - (headerRefs[i].current.scrollTop)),*/}
            {/*        behavior: 'smooth'*/}
            {/*      })*/}
            {/*    }}*/}
            {/*  ><p>Analysis</p></span>*/}
            {/*  <span*/}
            {/*  ><p>Artifact</p></span>*/}
            {/*  <span*/}
            {/*  ><p>Action</p></span>*/}
            {/*  <div>*/}
            {/*    <StealthButton*/}
            {/*      label={`Interested in subscribing?`}*/}
            {/*      icon={<Icon icon={ICONS.WAIVER} theme={THEME.DARK} /> }*/}
            {/*      link={'mailto:inquiry@futurity.studio'}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div className={'lab--body'}>
              <div className={'lab--body--desc'} ref={deliverableRefs[i][0]}>
                <em>Description</em>
                <p>{l.desc}</p>
              </div>
              <div className={'deliverables--wrapper'}>
                <div>
                  <div className={'deliverables--container'} ref={deliverableRefs[i][1]}>
                    { analysis }
                  </div>
                </div>
                <div>
                  <div className={'deliverables--container'} ref={deliverableRefs[i][2]}>
                    { artifact }
                  </div>
                </div>
                <div>
                  <div className={'deliverables--container'} ref={deliverableRefs[i][3]}>
                    { action }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </AccordionSection>
        // </div>
      )
      return(card)
    });
    return(labCard);
  }

  return(
    <main className={'Labs'}>
      <section className={'Labs--overview'}>
        <div className={'section-content'}>
          <DividedContent
            left={<h2>Labs</h2>}
            right={
              <>
                <h4>Labs are year long investigations, and experimentations on a theme packaged for as a subscription service</h4>
                <StealthButton
                  label={'explore our methodology'}
                  icon={<Icon icon={ICONS.RIGHT} theme={THEME.DARK} />}
                  link={ROUTES.ABOUT}
                />
              </>
            }
          />
        </div>
      </section>
      <BorderButton
        content={<em>our labs</em>}
        icon={<Icon icon={ICONS.BULB} theme={THEME.DARK} />}
      />
      <div className={'Labs--wrapper'}>
        { generateLabs() }
      </div>
      <Footer/>
    </main>
  )
}

export default Labs;