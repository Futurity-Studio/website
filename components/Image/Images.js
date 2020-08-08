import React, {useLayoutEffect} from "react";

const Image = ({src, alt}) => {
  let isSafari;
  useLayoutEffect(() => {
    isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  }, [])

  return (
      <img src={require(`images/${src}${isSafari ? '?webp' : ''}`)} alt={alt}/>
  );
}

export const WebpFormat = () => {
  const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  return (isSafari)
}

export default Image;