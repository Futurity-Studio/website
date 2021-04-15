import React, {useEffect, useState} from 'react';
import { LabData } from "../../constants";
import {motion} from "framer-motion";
import styles from "./Lab.module.scss"
import {removeWebpFormat} from "../Image/Images";
import {Icon, ICONS, StealthButton, THEME} from "../index";
import Link from "next/link";
import { useWindowSize } from "react-use";
import {thumbnailBackgroundSize} from "../../helpers/animation";

export const LabThumbnail = ({lab, expanded, onClick, clicked}) => {
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

  // todo -- chck if navigating between labs throws errors when page is proper built
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
      <div>
        <Link href={`/lab/${encodeURIComponent(prevPage.encoded)}`}>
          <a><Icon icon={ICONS.ARROW_LEFT} theme={THEME.TRANSPARENT}/></a>
        </Link>
        <StealthButton label={'Download Overview'} externalLink={lab.one_pager_link}/>
        <Link href={`/lab/${encodeURIComponent(nextPage.encoded)}`}>
          <a><Icon icon={ICONS.ARROW_RIGHT} theme={THEME.TRANSPARENT}/></a>
        </Link>
      </div>
      }
    </motion.div>
  )
}

export const LabDetails = ({lab}) => {
  const {width, height} = useWindowSize();

  const generateFullTable =() => {
    return lab.deliverable_analysis.map((_ , i) => (
      <tr key={i}>
        <td><p>{lab.deliverable_analysis[i].title}</p></td>
        <td>{lab.deliverable_analysis[i].desc}</td>
        <td><p>{lab.deliverable_artifacts[i].title}</p></td>
        <td>{lab.deliverable_artifacts[i].desc}</td>
      </tr>
    ))
  }
  const generateAnalysisTable =() => {
    return lab.deliverable_analysis.map((_ , i) => (
      <tr key={i}>
        <td><p>{lab.deliverable_analysis[i].title}</p></td>
        <td>{lab.deliverable_analysis[i].desc}</td>
      </tr>
    ))
  }
  const generateArtifactTable =() => {
    return lab.deliverable_analysis.map((_ , i) => (
      <tr key={i}>
        <td><p>{lab.deliverable_artifacts[i].title}</p></td>
        <td>{lab.deliverable_artifacts[i].desc}</td>
      </tr>
    ))
  }


  return(
    <div className={styles.Details}>
      { (width && width <= 650) ?
        <>
          <table>
            <thead>
            <tr>
              <th>analysis</th>
              <th>In-depth examinations and reports of the topic of interest.</th>
            </tr>
            </thead>
            <tbody>
            {generateAnalysisTable()}
            </tbody>
          </table>
          <table>
            <thead>
            <tr>
              <th>artifact</th>
              <th>Design objects based on the interactions, inquiries, and provocations from our analysis.</th>
            </tr>
            </thead>
            <tbody>
            {generateArtifactTable()}
            </tbody>
          </table>
        </>
        :
        <table>
          <thead>
          <tr>
            <th>analysis</th>
            <th>In-depth examinations and reports of the topic of interest.</th>
            <th>artifact</th>
            <th>Design objects based on the interactions, inquiries, and provocations from our analysis.</th>
          </tr>
          </thead>
          <tbody>
          {generateFullTable()}
          </tbody>
        </table>
      }

    </div>
  )
}

