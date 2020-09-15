import React, { useState, useEffect, useRef, useLayoutEffect }from 'react';
import { useRouter } from "next/router";
import { useIntersection } from "react-use";
import {AccordionSection, DividedContent, Footer, Icon, StealthButton, ICONS, THEME, BorderButton} from "../components";
import {LabData, Links, ROUTES} from "../constants/";
import '../theme/styles.scss';
import Link from "next/link";
import {motion, useElementScroll} from "framer-motion";


const scrollToRef = (ref) => {
  window.scrollTo( 0, ref.current.offsetTop - 80, { behavior: 'smooth' });
}

const Labs = () => {
  const router = useRouter();
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

  const getParam = () => {
    let section = null
    let paramFound = router.asPath.includes("=")
    if (router.asPath.includes("=")){
      let idx = router.asPath.indexOf("=")
      section = router.asPath.substr(idx+1)
      // console.log(section)
    }
    return section;
  }

  intersectionThresholds.forEach((_, i) => {
    intersections.push(useIntersection(labContainerRefs[i], {
      root: null,
      rootMargin: "0px",
      threshold: intersectionThresholds[i]
    }));
  })



  const { scrollYProgress } = useElementScroll(labContainerRefs[0])




  /* did load */
  useEffect(() => {
    // getParam();
    // console.log(router);
    // console.log(router.query);
    if (!router.query.lab) {
      setTimeout(() => {
        window.scrollTo(0, 0, { behavior: "smooth"} );
      }, 500);
    } else {

    }
  }, []);

  /* did update */
  // useEffect(() => {
  //   // generic effect
  //   const labParam = router.query.lab;
  //   if ((labParam!= null) && (lab !== labParam)) {
  //     // console.log(`setting param to ${labParam}`);
  //     setLab(labParam);
  //   }
  // }, );


  // intersectionThresholds.forEach((_, i) => {
  //   intersections.push(useIntersection(labContainerRefs[i], {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: intersectionThresholds[i]
  //   }));
  // })

  // useEffect( () => {
  //
  //   // if (!!lab) {
  //   //   console.log('labs updating');
  //   //   let labNumber = Links.find((l) => (l.title === 'Labs')).children.findIndex((c) => c.link.includes(lab));
  //   //   let selection = [...selected];
  //   //   selection[labNumber] = true;
  //   //   console.log(selection);
  //   //   setSelected(selection);
  //   //   // let labElement = labContainerRefs[labNumber].current;
  //   //
  //   // }
  //   // console.log(selection);
  //   // setSelected(selection);
  //   // scrollToRef(labContainerRefs[labNumber]);
  // }, [lab]);

  // useLayoutEffect(() => {
  //   // console.log('layout labs');
  //
  //   if (!!lab) {
  //     console.log('labs updating');
  //     let labNumber = Links.find((l) => (l.title === 'Labs')).children.findIndex((c) => c.link.includes(lab));
  //     let selection = [...selected];
  //     selection[labNumber] = true;
  //     // console.log(selection);
  //     // setSelected(selection);
  //
  //
  //     // let labElement = labContainerRefs[labNumber].current;
  //     scrollToRef(labContainerRefs[labNumber]);
  //
  //   }
  // }, [lab])





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
            // let selection = [...selected];
            // let selection = LabData.map(_ => false);
            // selection[i] = open ? true : false;
            // console.log(selection);
            // router.push()
            if (open){
              scrollToRef(labContainerRefs[i]);
              let link = Links.find((l) => (l.title === 'Labs')).children[i].link;
              router.push(`/labs${link}`, `/labs${link}`, {shallow: true});
            }
            // setSelected(selection);
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
                {/*<em>Description</em>*/}
                {/*<p>{l.desc}</p>*/}

                <DividedContent
                  left={<div>
                    <em>Description</em>
                    <p>{l.desc}</p>
                  </div>}
                  smallRight={true}
                  right={
                    <Link href={l.one_pager_link} prefetch={false}>
                      <a target={'_blank'}>
                        <h4>Download Report</h4>
                      </a>
                    </Link>
                  }
                />
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
    <motion.main
      className={'Labs'}
      initial={{  opacity: 0, transition:{  duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .25, easings: "linear" } }}
    >
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
    </motion.main>
  )
}

export default Labs;