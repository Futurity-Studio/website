import React from 'react';
import { useRouter } from 'next/router'

import styles from './Button.module.scss'
// todo -- check this import with the -- BEM styles


export const StealthButton = ({label, icon, link, onClick, callback}) => {
  const router = useRouter();

  return(
    <div
      className={`${styles.Button} ${(link) ? 'link' : ''}`}
      onClick={ () => {
        if (link){
          router.push(link).then( () => {
            if (callback){callback()}
          });
        } else {
          onClick();
        }
      }}
    >
      <em>{ label }</em>
      { icon }
    </div>
  )
};
