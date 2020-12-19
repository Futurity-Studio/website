import React, {useEffect, useState} from 'react';
import { LabData } from "../../constants";
import {motion} from "framer-motion";
import styles from "./Lab.module.scss"
import {removeWebpFormat} from "../Image/Images";
import {Icon, ICONS} from "../index";

export const LabThumbnail = ({lab, expanded, onClick, clicked, altClass}) => {
  const [open, setOpen] = useState(false);
  const [background, setBackground] = useState(null)

  useEffect(() => {
    const asset = removeWebpFormat() ? require(`images/background--${lab.encoded}.jpg`) : require(`images/background--${lab.encoded}.jpg?webp`);
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])
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

  return(
    <motion.div
      className={[styles.Thumbnail]}
      onClick={onClick}
      animate={open ? 'open' : 'resting'  }
      variants={animateVariants}
    >
      <em>{lab.title_expanded}</em>
      <motion.h3
        style={background}
        animate={{
          backgroundSize: '100% 150%',
          transition: {
            duration: 6,
            easings: "backInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }
        }}
      >
        {lab.title}
      </motion.h3>
      <div>
        <p>{lab.desc}</p>
      </div>
      { expanded &&
      <div>
        <em>explore more</em>
        // steal buttons here
      </div>
      }
    </motion.div>
  )
}

export const LabDetails = ({lab}) => {

  const generateRow =() => {
    return lab.deliverable_analysis.map((_ , i) => (
      <tr key={i}>
        <td><p>{lab.deliverable_analysis[i].title}</p></td>
        <td>{lab.deliverable_analysis[i].desc}</td>
        <td><p>{lab.deliverable_artifacts[i].title}</p></td>
        <td>{lab.deliverable_artifacts[i].desc}</td>
      </tr>
    ))
  }

  return(
    <div className={styles.Details}>
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
        { generateRow() }
        </tbody>
      </table>

    </div>
  )
}

