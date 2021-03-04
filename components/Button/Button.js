import React from 'react';
import { useRouter } from 'next/router'

import styles from './Button.module.scss'
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
        if (externalLink){
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
