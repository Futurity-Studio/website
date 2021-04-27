import React from "react";
import Link from 'next/link';
import styles from './Idea.module.scss'

const Idea = ({idea, unq, descLong}) => {
  return(
    <div className={styles.Idea}>
      <em>{idea.location}</em>
      <h4>{idea.title}</h4>
      {descLong}
      <Link href={idea.hostLink}><a target="_blank">{idea.format} at {idea.host}</a></Link>
    </div>
  )
}

export default Idea