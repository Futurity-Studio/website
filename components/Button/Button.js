import React from 'react';
import { useRouter } from 'next/router'

import './Button.scss'


export const StealthButton = ({label, icon, link, onClick, callback}) => {
  const router = useRouter();

  return(
    <div
      className={`Button-Stealth ${(link) ? 'link' : ''}`}
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
