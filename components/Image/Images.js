import React, {useEffect, useState} from "react";
import { isMobile } from 'react-device-detect';

const Image = ({src, alt, backup = null}) => {
  const [isSpecial, setIsSpecial] = useState(false)
  // const [isLoaded, setIsLoaded ] = useState(false)

  useEffect(() => {
    setIsSpecial(removeWebpFormat());
    // setIsLoaded(true)
  }, [])

  return (
    <>
      { (isSpecial && !src.includes('.gif')) ?
        <img src={require('images/' + src)} alt={alt}/>
        :
        <img src={require('images/' + src + '?webp')} alt={alt}/>
      }
    </>
  );
}

export const removeWebpFormat = () => {
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  return (isSafari || isMobile)
}

export default Image;