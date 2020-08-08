import React, {useEffect, useState} from "react";
import { isMobile } from 'react-device-detect';

const Image = ({src, alt}) => {
  const [isSafari, setIsSafari] = useState(false)
  const [isLoaded, setIsLoaded ] = useState(false)

  useEffect(() => {
    setIsSafari(removeWebpFormat());
    setIsLoaded(true)
  }, [])

  return (
    <>
      { (isSafari) ?
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