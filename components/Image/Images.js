import React, {useEffect, useState} from "react";
import { isMobile } from 'react-device-detect';

const Image = ({src, alt, mobile= null, backup = null}) => {
  const [isSpecial, setIsSpecial] = useState(false)

  useEffect(() => {
    setIsSpecial(removeWebpFormat());
  }, [])

  const imageSource = (isMobile) ? mobile : src;

  return (
    <>
      { (isSpecial && !imageSource.includes('.gif')) ?
        <img src={require('images/' + imageSource)} alt={alt}/>
        :
        <img src={require('images/' + imageSource + '?webp')} alt={alt}/>
      }
    </>
  );
}

export const removeWebpFormat = () => {
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  return (isSafari || isMobile)
}

export default Image;