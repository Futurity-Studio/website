import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router'

import styles from './Button.module.scss'
import {motion} from "framer-motion";
import {removeWebpFormat} from "../Image/Images";
// todo -- check this import with the -- BEM styles


export const StealthButton = ({label, icon, link, externalLink, onClick, callback}) => {
  const router = useRouter();

  return(
    <div
      className={styles.Button}
      onClick={ () => {
        if (link){
          router.push(link).then( () => {
            if (callback){callback()}
          });
        }
        else if (externalLink){
          window.open(externalLink, '_blank')
          if (callback){callback()}
        }
        else {
          onClick();
        }
      }}
    >
      <em>{ label }</em>
      { icon }
    </div>
  )
};

export const OfferingButton = ({label, icon, link, externalLink, callback, onClick, lab}) => {
  const router = useRouter()
  const [background, setBackground] = useState(null)

  useEffect(() => {
    const asset = removeWebpFormat() ? require(`images/background--${lab}.jpg`) : require(`images/background--${lab}.jpg?webp`);
    let background = {backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  return(
    <button
      className={styles.OfferingButton}
      onClick={e => {
        if (link){
          router.push(link).then( () => {
            if (callback){callback()}
          });
        }
        if (externalLink){
          window.open(externalLink, '_blank')
          if (callback){callback()}
        }
        else {
          onClick();
        }
      }}
      style={background}
    >
      <div>
        <em>{label}</em>
        &nbsp;
        {icon}
      </div>
    </button>
  )
}
