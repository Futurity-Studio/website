import React, {useEffect, useState, useRef} from 'react';
import { LabData } from "../../constants";
import {motion} from "framer-motion";
import styles from "./Lab.module.scss"
import {removeWebpFormat} from "../Image/Images";
import {Icon, ICONS, StealthButton, THEME} from "../index";
import Link from "next/link";
import {useIntersection, useWindowSize} from "react-use";
import {thumbnailBackgroundSize} from "../../helpers/animation";
import {useRouter} from "next/router";
import { chatBubble } from "../../helpers/animation";

export const LabThumbnail = ({lab, expanded, onClick, clicked}) => {
  const route = useRouter();
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState(null)

  let labDataByIndex = LabData.map((_,i) => ({title: _.title, index: i}))
  const nextPage = LabData[(labDataByIndex.find(_ => _.title === lab.title).index + 1) % LabData.length]
  const prevPage = LabData[(labDataByIndex.find(_ => _.title === lab.title).index + LabData.length-1) % LabData.length]

  useEffect(() => {
    const asset = removeWebpFormat() ? require(`images/background--${lab.encoded}.jpg`) : require(`images/background--${lab.encoded}.jpg?webp`);
    let background = {backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  // todo -- fix this sloppy shit
  useEffect(() => {
  }, [open]);
  useEffect(() => {
    setOpen(clicked)
  }, [clicked])

  const animateVariants = {
    open: {
      // backgroundColor: '#ff0000',
      width: '100%'
    },
    resting: {
      backgroundColor: 'rgba(0,0,0,0)',
    }
  }

  // todo -- add button target

  return (
    <motion.div
      className={(expanded) ? styles.Expanded : styles.ThumbnailBase}
      onClick={onClick}
      animate={open ? 'open' : 'resting'}
      variants={animateVariants}
    >
      <em>{lab.title_long}</em>
      <motion.h3
        style={background}
        animate={thumbnailBackgroundSize}
      >
        {lab.title}
      </motion.h3>
      <div>
        <p>{lab.desc}</p>
      </div>
      {expanded &&
      <>
        <div
        >
          <p>Subscribing to this lab grants access to <em>all Analyses, Artifacts, and Actions</em>. Contact us for a subscription</p>
          <Icon
            icon={ICONS.CHAT_BUBBLE}
            theme={THEME.DARK}
          />
        </div>
        <div>
          <Link href={`/lab/${encodeURIComponent(prevPage.encoded)}`}>
            <a><Icon icon={ICONS.ARROW_LEFT} theme={THEME.TRANSPARENT}/></a>
          </Link>
          <StealthButton label={'Download Overview (PDF)'} externalLink={lab.one_pager_link}/>
          <Link href={`/lab/${encodeURIComponent(nextPage.encoded)}`}>
            <a><Icon icon={ICONS.ARROW_RIGHT} theme={THEME.TRANSPARENT}/></a>
          </Link>
        </div>
      </>
      }
    </motion.div>
  )
}

export const LabDetails = ({lab, offerings}) => {
  const router = useRouter();
  const labDescStruct = [
    {
      name: 'analysis',
      desc: 'In-depth examinations of data-driven reports related to the topic of interest.'
    },
    {
      name: 'artifact',
      desc: 'Products or experiences designed from the interactions, inquiries, and provocations of our analysis.'
    },
    {
      name: 'action',
      desc: 'Primary research and insights findings from direct consumer groups or industry leaders.'
    },
  ];
  const sortedOfferings = labDescStruct.map((s, i) => {
    return ({
      name: s.name,
      offerings: offerings.sort( () => .5 - Math.random() )
        .filter(o => o.contentType.toLowerCase() === s.name)
        .sort((a, b) => {
          return a.codedName.split(".")[2] - b.codedName.split(".")[2];
        })
    })
  }).filter(s => s.offerings.length > 0)
  const [currentOfferingType, setCurrentOfferingType] = useState(0);
  const offeringScroller = useRef(null)
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const analysisIntersection = useIntersection(sectionRefs[0], {
    root: offeringScroller.current,
    rootMargin: '0px',
    threshold: .1
  });
  const artifactIntersection = useIntersection(sectionRefs[1], {
    root: offeringScroller.current,
    rootMargin: '0px',
    threshold: .5
  });
  const actionIntersection = useIntersection(sectionRefs[2], {
    root: offeringScroller.current,
    rootMargin: '0px',
    threshold: .9
  });

  // console.log(sortedOfferings)
  // console.log(sectionRefs)

  useEffect(() => {
    if (analysisIntersection && artifactIntersection && actionIntersection) {
      // console.log(analysisIntersection.intersectionRatio || 'none')
      // console.log(analysisIntersection.isIntersecting || 'none')
      // console.log(artifactIntersection.intersectionRatio || 'none')
      // console.log(artifactIntersection.isIntersecting || 'none')
      // console.log(actionIntersection.intersectionRatio || 'none')
      // console.log(actionIntersection.isIntersecting || 'none')
      if (analysisIntersection.isIntersecting){
        setCurrentOfferingType(0)
      } else if (actionIntersection.isIntersecting){
        setCurrentOfferingType(2)
      } else if (artifactIntersection.isIntersecting){
        setCurrentOfferingType(1)
      }
    }
  }, [analysisIntersection, artifactIntersection, actionIntersection])

  const generateOfferings = () => {
    return sortedOfferings.map((i, j) => (
      i.offerings.map((o, k) => (
        <div
          key={o.codedName}
          className={styles.OfferingCard}
          ref={(k===0) ? sectionRefs[j] : null}
        >
          <em>{o.codedName}</em>
          <div
            onClick={() => {
              router.push(`/lab/${lab.encoded}/${encodeURI(o.name.replace(/ /g,'').replace(/\//g,''))}`)
            }}
          >
            <h4>{o.name}</h4>
            <Icon icon={ICONS.ARROW_RIGHT} theme={THEME.DARK} />
          </div>
        </div>
      ))
    ))
  }


  const generatedCategories = () => {
    return sortedOfferings.map((i, j) => (
      <motion.div
        key={`${j}`}
        initial={{ opacity: 0.5}}
        animate={(currentOfferingType === j) ? "current" : "closed"}
        variants={{
          current: { opacity: 1.0},
          closed:{ opacity: 0.5, transition: { duration: .25}}
        }}
        onClick={() => {
          if (offeringScroller && sectionRefs[j] && offeringScroller.current && sectionRefs[j].current){
            const elemTop = sectionRefs[j].current.offsetTop
            const contTop = offeringScroller.current.offsetTop
            const scrollTo = elemTop-contTop;
            offeringScroller.current.scroll(0,scrollTo);
          }
        }}
      >
        <em>{i.name}</em>
        <p>{labDescStruct[j].desc}</p>
      </motion.div>
    ))
  }


  return(
    <div className={styles.Details}>
      <div>
        <div>
          { generatedCategories() }
        </div>
        <div ref={offeringScroller}>
          { generateOfferings() }
        </div>
      </div>

    </div>
  )
}



