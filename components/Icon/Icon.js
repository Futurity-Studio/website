import React, { Component } from 'react';
import styles from './Icon.module.scss';
import { motion } from 'framer-motion';

export const ICONS = {
  FILTER: 'FILTER',
  RIGHT: 'RIGHT',
  CROSS: 'CROSS',
  MINUS: 'MINUS',
  WAIVER: 'WAIVER',
  PLUS: 'PLUS',
  LEFT_CHEV:'LEFT_CHEV',
  RIGHT_CHEV:'RIGHT_CHEV',
  BULB: 'BULB',
  MAIL: 'MAIL',
  MENU: 'MENU',
  LINKEDIN:'LINKEDIN',
  TWITTER: 'TWITTER',
  FACEBOOK: 'FACEBOOK',
  MEDIUM: 'MEDIUM',
  INSTAGRAM: 'INSTAGRAM',
  YOUTUBE: 'YOUTUBE',
  GLOBE: 'GLOBE',
  FILE: 'FILE',
  THUNDER: 'THUNDER',

  // modulz

  ROCKET: 'ROCKET',
  ARROW_RIGHT: 'ARROW_RIGHT',
  ARROW_LEFT: 'ARROW_LEFT',
  PIN: 'PIN',
  CHAT_BUBBLE: 'CHAT_BUBBLE',
  INFO: 'INFO',
  CALENDAR: 'CALENDAR',
  DOUBLE_DOWN: 'DOUBLE_DOWN',

  //SynthFuts
  DIVERGE: 'DIVERGE',
  SPACE: 'SPACE',
  COMPONENTS: 'COMPONENTS'
};

export const THEME = {
  LIGHT: 'light',
  GREY: 'grey',
  DISABLED: 'disabled',
  RED: 'red',
  GREEN: 'green',
  DARK: 'dark',
  TRANSPARENT: 'transparent',

  //NEW below
  NAV_MIX: 'nav_mix',
  LINK_LIGHT:'link_light',
  NAV_MIX_NUDE: 'nav_mix_nude'

};

export const SIZE = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg'
};

export const TYPE = {
  LINK: 'lnk'
};

// SynthFuts
const DIVERGE = (iconHoverAnimation) => {
  return (
    <motion.svg variants={iconHoverAnimation}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <path
          d="M10.523 7.748a2.33 2.33 0 11-4.66 0 2.33 2.33 0 014.66 0M5.37 2.662a2.33 2.33 0 11-4.659 0 2.33 2.33 0 014.66 0M15.675 2.662a2.33 2.33 0 11-4.66 0 2.33 2.33 0 014.66 0M5.406 12.835a2.33 2.33 0 11-4.659 0 2.33 2.33 0 014.66 0M15.711 12.835a2.33 2.33 0 11-4.659 0 2.33 2.33 0 014.66 0"
          stroke="#000"
          strokeWidth={0.2}
        />
        <path stroke="#1D1D1B" strokeWidth={0.25} d="M6.291 5.685l-.689-.688" />
        <path fill="#1D1D1B" d="M6.087 4.732l-1.023-.274.274 1.023z" />
        <path stroke="#1D1D1B" strokeWidth={0.25} d="M10.095 5.685l.688-.688" />
        <path fill="#1D1D1B" d="M11.048 5.481l.275-1.023-1.024.274z" />
        <path stroke="#1D1D1B" strokeWidth={0.25} d="M10.131 9.678l.688.689" />
        <path fill="#1D1D1B" d="M10.335 10.631l1.024.275-.274-1.024z" />
        <path stroke="#1D1D1B" strokeWidth={0.25} d="M6.327 9.678l-.688.689" />
        <path fill="#1D1D1B" d="M5.374 9.882L5.1 10.905l1.023-.274z" />
      </g>
    </motion.svg>
  )
}
const COMPONENTS = (iconHoverAnimation) => {
  return (
    <motion.svg variants={iconHoverAnimation}
                viewBox="0 0 17 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill="none"
        stroke="#1D1D1B"
        strokeWidth={0.5}
        fillRule="evenodd"
        fillOpacity={0}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.492.267L.884 11.712H14.1z" />
        <path d="M7.492.267l6.607 11.445 1.785-5.722z" />
      </g>
    </motion.svg>
  )
}
const SPACE = (iconHoverAnimation) => {
  return (
    <motion.svg variants={iconHoverAnimation}
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.05 13.168h-.827l.827 1.416v-1.416zm-.002-11.781l-.826 1.416h.826V1.387zM4.975 2.805L4.149 1.39v1.416h.826zM4.972 13.17h-.824v1.412l.824-1.412zm-1.018-1.334l-1.137 1.132h1.137v-1.132zM2.84 3l1.11 1.109V3H2.84zm8.405 8.8v1.164h1.17l-1.17-1.164zm-.005-7.637l1.17-1.162h-1.17v1.162zM4.154 2.992c-.007.035-.015.054-.015.073 0 .412-.003.824.002 1.236 0 .05.037.11.074.149.194.2.393.397.592.595.177.176.328.42.542.508.219.09.5.029.755.032.155.002.31 0 .463 0 0-.03.004-.041 0-.048-.48-.827-.962-1.653-1.446-2.478-.016-.03-.057-.063-.087-.064-.293-.005-.586-.003-.88-.003zm2.443 7.391c-.426 0-.817-.002-1.208.003-.037 0-.08.036-.109.065-.359.356-.717.713-1.07 1.073a.243.243 0 00-.07.151c-.004.398 0 .796-.004 1.194 0 .084.03.111.112.11.236-.003.472-.006.707.001.096.003.149-.03.197-.114.312-.544.631-1.086.947-1.628l.498-.855zm2.023-.001c.007.032.008.047.014.058.478.821.956 1.642 1.436 2.462.02.033.064.07.097.071.292.006.585.004.889.004 0-.464.002-.91-.003-1.355-.002-.044-.042-.096-.077-.131-.272-.276-.561-.536-.815-.827-.195-.223-.406-.316-.7-.288-.276.027-.555.006-.841.006zm2.436-7.391c-.286 0-.55.004-.816-.003-.097-.002-.148.033-.196.116-.454.785-.913 1.568-1.37 2.352-.02.035-.036.074-.063.129.418 0 .814.002 1.21-.004.042 0 .09-.037.122-.07.348-.345.696-.692 1.04-1.041.033-.033.069-.08.07-.12.005-.447.003-.893.003-1.36zm-5.65 7.202h1.248V5.77H5.407v4.424zm3.134.002h1.267V5.771H8.54v4.424zm2.505 1.119V4.656c-.348.35-.678.678-1.003 1.01-.03.03-.043.087-.044.132a1422.17 1422.17 0 000 4.372c0 .045.014.102.043.132.326.333.655.662 1.004 1.012zm-6.898 0c.029-.019.046-.026.058-.038.313-.312.627-.623.935-.94a.24.24 0 00.054-.155c.003-1.462.004-2.924-.001-4.386a.301.301 0 00-.079-.19c-.286-.295-.58-.585-.871-.876-.025-.024-.056-.045-.096-.076v6.66zm2.702-1.117h1.496V5.771H6.85v4.426zm-1.534-7.2c.005.032.004.042.009.05.478.822.955 1.644 1.438 2.462.025.041.101.072.155.073.45.006.902.001 1.353.006.09 0 .141-.027.187-.106.456-.788.916-1.575 1.375-2.363.02-.034.033-.072.056-.121H5.315zm4.575 9.97c-.018-.039-.024-.057-.033-.073-.471-.809-.941-1.618-1.418-2.423-.027-.046-.106-.084-.162-.085-.446-.007-.892 0-1.339-.006-.102-.001-.157.034-.207.12-.452.78-.907 1.559-1.36 2.338-.022.037-.04.075-.067.13H9.89zm2.695-9.85c-.455.455-.886.884-1.312 1.318-.031.03-.038.097-.038.147-.003 2.268-.003 4.536.001 6.805 0 .063.035.142.08.188.388.397.782.788 1.174 1.18.025.026.055.046.095.078V3.117zm-9.97-.021v9.774c.446-.447.873-.873 1.296-1.302.033-.033.048-.096.048-.145.003-2.292.003-4.584 0-6.876 0-.05-.015-.112-.047-.145-.422-.43-.85-.857-1.297-1.306zM.78 14.69c.032-.023.045-.03.055-.04.51-.51 1.022-1.02 1.529-1.534a.26.26 0 00.06-.168c.002-3.31.002-6.619-.001-9.928a.298.298 0 00-.08-.19c-.485-.493-.976-.98-1.466-1.47-.026-.026-.055-.047-.097-.081v13.41zm13.651.008V1.285c-.024.016-.037.023-.047.033-.521.52-1.042 1.04-1.56 1.564-.037.039-.055.113-.055.17-.003 3.288-.003 6.577.001 9.865 0 .068.04.152.087.2.345.356.698.705 1.048 1.055l.526.526zm-10.475.488v-2.031c-.269 0-.53.027-.785-.006-.43-.055-.73.098-1.019.417-.483.535-1.013 1.026-1.54 1.552V.856c.044.04.083.073.118.109.58.58 1.16 1.159 1.737 1.741a.324.324 0 00.256.11c.406-.006.813-.002 1.236-.002V.779A.879.879 0 013.99.77l.08.131c.349.598.698 1.194 1.043 1.794.05.087.105.12.207.12 1.518-.003 3.034-.003 4.551 0 .11.001.165-.039.217-.13.342-.595.69-1.188 1.036-1.78.027-.046.055-.09.104-.169v2.069c.067.003.119.008.17.009.364 0 .728-.004 1.09.002a.321.321 0 00.258-.106c.577-.583 1.157-1.162 1.737-1.741.037-.037.075-.07.13-.12v14.27c-.051-.047-.09-.08-.125-.115-.58-.58-1.16-1.159-1.737-1.742a.324.324 0 00-.256-.11c-.368.007-.736.003-1.105.003-.048 0-.095.005-.157.008v2.073c-.048-.076-.075-.115-.098-.155-.341-.584-.688-1.166-1.02-1.756-.077-.136-.163-.173-.311-.173a553.37 553.37 0 01-4.419-.001c-.154 0-.234.052-.307.18-.33.58-.67 1.155-1.006 1.731-.026.045-.054.09-.082.134l-.034-.01z"
        fill="#4F4F4E"
        fillRule="evenodd"
      />
    </motion.svg>
  )
}

//Modulz
const ROCKET = (iconHoverAnimation) => {
  return (
    <motion.svg variants={iconHoverAnimation}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.854 3.854l.8-.8c.644-.645 1.775-1.092 2.898-1.253a5.342 5.342 0 011.504-.02c.443.066.714.196.84.323.127.126.257.397.323.84.064.427.059.95-.02 1.504-.16 1.123-.608 2.254-1.253 2.898L7.5 11.793l-1.146-1.146a.5.5 0 10-.708.707l1.5 1.5a.5.5 0 00.708 0l.547-.548 1.17 1.951a.5.5 0 00.783.097l2-2a.5.5 0 00.141-.425l-.465-3.252.624-.623c.855-.856 1.358-2.225 1.535-3.465.09-.627.1-1.25.019-1.794-.08-.528-.256-1.05-.604-1.399-.349-.348-.871-.525-1.4-.604a6.333 6.333 0 00-1.793.02C9.17.987 7.8 1.49 6.946 2.345l-.623.624-3.252-.465a.5.5 0 00-.425.141l-2 2a.5.5 0 00.097.783l1.95 1.17-.547.547a.5.5 0 000 .708l1.5 1.5a.5.5 0 10.708-.708L3.207 7.5l.647-.646 3-3zm3.245 9.34l-.97-1.617 2.017-2.016.324 2.262-1.37 1.37zM3.423 5.87l2.016-2.016-2.262-.324-1.37 1.37 1.616.97zm-1.07 4.484a.5.5 0 10-.707-.708l-1 1a.5.5 0 10.708.707l1-1zm1.5 1.5a.5.5 0 10-.707-.707l-2 2a.5.5 0 00.708.707l2-2zm1.5 1.5a.5.5 0 10-.707-.708l-1 1a.5.5 0 10.708.707l1-1zM8.526 5.45a.925.925 0 111.85 0 .925.925 0 01-1.85 0zm.925-1.775a1.775 1.775 0 100 3.55 1.775 1.775 0 000-3.55z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  )
}
const CALENDAR = (iconHoverAnimation) => {
  return (
    <motion.svg variants={iconHoverAnimation}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 1a.5.5 0 01.5.5V2h5v-.5a.5.5 0 011 0V2h1.5A1.5 1.5 0 0114 3.5v9a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 12.5v-9A1.5 1.5 0 012.5 2H4v-.5a.5.5 0 01.5-.5zM10 3v.5a.5.5 0 001 0V3h1.5a.5.5 0 01.5.5V5H2V3.5a.5.5 0 01.5-.5H4v.5a.5.5 0 001 0V3h5zM2 6v6.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V6H2zm5 1.5a.5.5 0 111 0 .5.5 0 01-1 0zM9.5 7a.5.5 0 100 1 .5.5 0 000-1zm1.5.5a.5.5 0 111 0 .5.5 0 01-1 0zm.5 1.5a.5.5 0 100 1 .5.5 0 000-1zM9 9.5a.5.5 0 111 0 .5.5 0 01-1 0zM7.5 9a.5.5 0 100 1 .5.5 0 000-1zM5 9.5a.5.5 0 111 0 .5.5 0 01-1 0zM3.5 9a.5.5 0 100 1 .5.5 0 000-1zM3 11.5a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1zm1.5.5a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  )
}
const DOUBLE_DOWN = (iconHoverAnimation) => {
  return (
    <motion.svg variants={iconHoverAnimation}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.854 2.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7.5 5.793 3.854 2.146zm0 6a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7.5 11.793 3.854 8.146z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  )
}
const INFO = (iconHoverAnimation) => {
  return (
    <motion.svg variants={iconHoverAnimation}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5.877a6.623 6.623 0 100 13.246A6.623 6.623 0 007.5.877zM1.827 7.5a5.673 5.673 0 1111.346 0 5.673 5.673 0 01-11.346 0zm6.423-3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6 6h1.5a.5.5 0 01.5.5V10h1v1H6v-1h1V7H6V6z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  )
}

const ARROW_RIGHT = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.146 3.146a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L11.293 8H2.5a.5.5 0 010-1h8.793L8.146 3.854a.5.5 0 010-.708z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  )
}

const ARROW_LEFT = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation}
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.854 3.146a.5.5 0 010 .708L3.707 7H12.5a.5.5 0 010 1H3.707l3.147 3.146a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708 0z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  )
}

const CHAT_BUBBLE = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation}
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 3h-10A1.5 1.5 0 001 4.5v5A1.5 1.5 0 002.5 11h5a.5.5 0 01.354.146L10 13.293V11.5a.5.5 0 01.5-.5h2A1.5 1.5 0 0014 9.5v-5A1.5 1.5 0 0012.5 3zm-10-1h10A2.5 2.5 0 0115 4.5v5a2.5 2.5 0 01-2.5 2.5H11v2.5a.5.5 0 01-.854.354L7.293 12H2.5A2.5 2.5 0 010 9.5v-5A2.5 2.5 0 012.5 2z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  )
}

const PIN = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation}
                width={15}
                height={15}
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 3.5C6 2.67157 6.67157 2 7.5 2C8.32843 2 9 2.67157 9 3.5C9 4.32843 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5ZM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5C10 2.11929 8.88071 1 7.5 1C6.11929 1 5 2.11929 5 3.5C5 4.70948 5.85888 5.71836 7 5.94999V13.5C7 13.7761 7.22386 14 7.5 14C7.77614 14 8 13.7761 8 13.5V5.94999Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
      />
    </motion.svg>
  )
}



//Wild
const PLUS = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 15 15">
      <defs>
        <path id="icons-plus" d="M8 6h5a1 1 0 010 2H8v5a1 1 0 01-2 0V8H1a1 1 0 110-2h5V1a1 1 0 112 0v5z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" transform="translate(.5 .5)" xlinkHref="#icons-plus"/>
    </motion.svg>
  )
}

const LEFT_CHEV = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" height="12" width="7" viewBox="0 0 7 12">
      <defs>
        <path id="icons-left-chevron" d="M2.41 6l4.3 4.3a1 1 0 01-1.42 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 111.42 1.4L2.4 6z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icons-left-chevron"/>
    </motion.svg>
  )
}
const RIGHT_CHEV = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" height="12" width="7" viewBox="0 0 7 12">
      <defs>
        <path id="icons-right-chevron" d="M4.59 6L.29 1.7A1 1 0 111.71.3l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.42-1.4L4.6 6z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icons-right-chevron"/>
    </motion.svg>
  )
}

const MENU = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 18" width="18" height="22">
      <defs>
        <path id="icon-menu" d="M2 18a1.5 1.5 0 010-3h12a1.5 1.5 0 010 3H2zm0-7.5a1.5 1.5 0 010-3h18a1.5 1.5 0 010 3H2zm-1.5-9C.5.67 1.17 0 2 0h18a1.5 1.5 0 010 3H2A1.5 1.5 0 01.5 1.5z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="evenodd" xlinkHref="#icon-menu"/>
    </motion.svg>
  );
};

const LINKEDIN = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
      <defs>
        <path id="icon-linkedin" d="M2.75 14H.25a.25.25 0 01-.25-.25v-8.5C0 5.11.11 5 .25 5h2.5c.14 0 .25.11.25.25v8.5c0 .14-.11.25-.25.25zm7.75-9.5c2.28 0 3.5 1.26 3.5 3.93v5.32c0 .14-.11.25-.25.25h-2.5a.25.25 0 01-.25-.25V9c0-1.6-.4-2-1.4-2C8.5 7 8 7.75 8 9v4.75c0 .14-.11.25-.25.25h-2.5a.25.25 0 01-.25-.25v-8.5c0-.14.11-.25.25-.25h2.5c.14 0 .25.11.25.25V6c.62-1 1.26-1.5 2.5-1.5zM1.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icon-linkedin"/>
    </motion.svg>
  );
};

const BULB = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" height="18" width="12" viewBox="0 0 12 18">
      <defs>
        <path id="icons-bulb" d="M9.44 8.07A3.98 3.98 0 0010 6a4 4 0 10-7.25 2.33l1.08 1.08A4 4 0 015 12.24V13h2v-.76a4 4 0 011.17-2.83l1.08-1.08.19-.26zM12 6.06a5.64 5.64 0 01-1.22 3.56l-.07.09-1.12 1.12A2 2 0 009 12.24V14a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.76a2 2 0 00-.59-1.41L1.3 9.7l-.07-.09c-.8-1-1.2-2.2-1.22-3.56V6a6 6 0 1112 0v.06zM4 16h4a1 1 0 010 2H4a1 1 0 010-2z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icons-bulb"/>
    </motion.svg>
  )
}
const TWITTER = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 16 13">
      <defs>
        <path id="icon-twitter" d="M16 1.53s-.62 1.01-1.64 1.7C14.57 7.86 11.18 13 5.03 13c-.95 0-1.81-.1-2.6-.32a.65.65 0 010-1.25c.8-.23 1.6-.64 2.42-1.25-1.3-.08-2.2-.57-2.73-1.47a.5.5 0 01.41-.75c.24 0 .49-.05.74-.13C1.77 7.46.9 6.66.67 5.43a.5.5 0 01.64-.56c.26.07.52.1.8.1C.71 3.9.25 2.7.73 1.36a.5.5 0 01.85-.16c1.49 1.73 3.6 2.68 6.3 2.84a3.29 3.29 0 015.6-3c1.1-.18 2.1-.8 2.1-.8s-.35 1.21-1.45 1.8a6.4 6.4 0 001.87-.5z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icon-twitter"/>
    </motion.svg>
  );
};

const FACEBOOK = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} width="8" height="15" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg" >
      <defs>
        <path id="icon-facebook" d="M4.5 15H2.502a.5.5 0 01-.5-.5V8H.25A.25.25 0 010 7.75v-2.5A.25.25 0 01.25 5h1.752V3.52c0-1.122.336-2 1.008-2.632C3.64.296 4.84 0 5.89 0H7.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5H6c-.75 0-1 .25-1 1v1h2.705a.25.25 0 01.246.29l-.416 2.501A.25.25 0 017.288 8H5v6.5a.5.5 0 01-.5.5z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icon-facebook"/>
    </motion.svg>
  );
}

const YOUTUBE = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" height="17" width="12" viewBox="0 0 17 12">
      <defs>
        <path id="icons-youtube" d="M8 0c5 0 6.53.06 7.22.78.51.53.78 2.13.78 5.22s-.27 4.69-.78 5.22C14.53 11.94 13 12 8 12s-6.53-.06-7.22-.78C.27 10.69 0 9.09 0 6S.27 1.31.78.78C1.47.06 3 0 8 0zM6.5 3.5v5a.25.25 0 00.4.2l3.33-2.5a.25.25 0 000-.4L6.9 3.3a.25.25 0 00-.4.2z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" transform="translate(.5)" xlinkHref="#icons-youtube"/>
    </motion.svg>
  )
}

const INSTAGRAM = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.59 0c2.23 0 3.037.232 3.852.668a4.543 4.543 0 011.89 1.89c.436.815.668 1.623.668 3.852v3.18c0 2.23-.232 3.037-.668 3.852a4.543 4.543 0 01-1.89 1.89c-.815.436-1.623.668-3.852.668H6.41c-2.23 0-3.037-.232-3.852-.668a4.543 4.543 0 01-1.89-1.89C.232 12.627 0 11.82 0 9.59V6.41c0-2.23.232-3.037.668-3.852a4.543 4.543 0 011.89-1.89C3.373.232 4.18 0 6.41 0h3.18zm.264 2H6.41c-1.73 0-2.312.112-2.909.431-.466.25-.82.604-1.07 1.07-.302.565-.419 1.117-.43 2.645L2 9.59c0 1.73.112 2.312.431 2.909.25.466.604.82 1.07 1.07.597.319 1.179.431 2.909.431h3.18c1.73 0 2.312-.112 2.909-.431.466-.25.82-.604 1.07-1.07.319-.597.431-1.179.431-2.909V6.41c0-1.73-.112-2.312-.431-2.909a2.544 2.544 0 00-1.07-1.07c-.565-.302-1.117-.419-2.645-.43zM8 5a3 3 0 110 6 3 3 0 010-6zm3.5-1.5a1 1 0 110 2 1 1 0 010-2z"
            fill="##f7f7f7"
            fillRule="nonzero"
      />
    </motion.svg>
  )
}

const MEDIUM = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M16 1.96C16 .88 15.121 0 14.04 0H1.96C.88 0 0 .879 0 1.96v12.08C0 15.12.879 16 1.96 16h12.08c1.081 0 1.96-.879 1.96-1.96V1.96z"/>
        <path d="M8.86 8c0 2.107-1.696 3.816-3.789 3.816S1.281 10.107 1.281 8c0-2.107 1.697-3.816 3.79-3.816S8.861 5.893 8.861 8zM13.018 8c0 1.984-.848 3.592-1.895 3.592-1.046 0-1.895-1.608-1.895-3.592s.849-3.592 1.895-3.592c1.047 0 1.895 1.608 1.895 3.592zM14.719 8c0 1.777-.299 3.218-.667 3.218-.368 0-.666-1.44-.666-3.218 0-1.777.298-3.218.666-3.218.368 0 .667 1.44.667 3.218z"
              fill="#000"/>
      </g>
    </motion.svg>
  )
}

const MAIL = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 2a1 1 0 00-1 1v9a1 1 0 001 1h13a1 1 0 001-1V3a1 1 0 00-1-1H1zm0 1h13v.925a.448.448 0 00-.241.07L7.5 7.967 1.241 3.995A.448.448 0 001 3.925V3zm0 1.908V12h13V4.908L7.741 8.88a.45.45 0 01-.482 0L1 4.908z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </motion.svg>
  );
};

const MAP = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="16" height="14" viewBox="1 0 14 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M9.43 3.52l-2.7-.9a.25.25 0 00-.328.237v7.387a.25.25 0 00.17.237l2.7.9a.25.25 0 00.33-.237V3.757a.25.25 0 00-.171-.237zm1.772.19v7.338a.25.25 0 00.343.233l1.898-.76a.25.25 0 00.157-.232V2.951a.25.25 0 00-.343-.232l-1.898.76a.25.25 0 00-.157.231zm-8.802 0v7.34a.25.25 0 00.343.231l1.902-.76a.25.25 0 00.157-.233V2.95a.25.25 0 00-.343-.232l-1.902.76a.25.25 0 00-.157.233zm-.503 9.633A.8.8 0 01.8 12.6V3a.8.8 0 01.503-.743l4-1.6a.8.8 0 01.55-.016l4.522 1.507 3.728-1.49A.8.8 0 0115.2 1.4V11a.8.8 0 01-.503.743l-4 1.6a.8.8 0 01-.55.016l-4.522-1.507-3.728 1.49z" id="icon-map" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-map" fillRule="evenodd" />
    </motion.svg>
  );
};

const FILTER = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="14" height="12" viewBox="1 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M5.4 6.8c1.045 0 1.934.668 2.264 1.6H12.6a.8.8 0 110 1.6H7.663a2.401 2.401 0 01-4.526 0H1.4a.8.8 0 110-1.6h1.736A2.401 2.401 0 015.4 6.8zm0 1.6a.8.8 0 100 1.6.8.8 0 000-1.6zm3.2-8c1.045 0 1.934.668 2.264 1.6H12.6a.8.8 0 110 1.6h-1.737a2.401 2.401 0 01-4.526 0H1.4a.8.8 0 110-1.6h4.936A2.401 2.401 0 018.6.4zm0 1.6a.8.8 0 100 1.6.8.8 0 000-1.6z" id="icon-filter" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-filter" fillRule="evenodd" />
    </motion.svg>
  );
};



const LEFT = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M3.414 7l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L3.414 5H13a1 1 0 010 2H3.414z" id="icon-left" />
      </defs>
      <use fill="#7BA4FF" fillRule="nonzero" xlinkHref="#icon-left" />
    </motion.svg>
  );
};

const RIGHT = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M10.586 5L7.293 1.707A1 1 0 018.707.293l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L10.586 7H1a1 1 0 110-2h9.586z" id="icon-right" />
      </defs>
      <use fill="#7BA4FF" fillRule="nonzero" xlinkHref="#icon-right" />
    </motion.svg>
  );
};

const DOUBLELEFT = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="19" height="12" viewBox="0 0 19 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.707.293a1 1 0 010 1.414L8.414 5H18a1 1 0 010 2H8.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0zm-6.414 0a1 1 0 011.414 1.414L3.414 5c-.38.355-.571.688-.571 1 0 .312.19.645.571 1l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414z" fill="#FFF" fillRule="nonzero" />
    </motion.svg>
  );
};

const GLOBE = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" height="19" width="18" viewBox="0 0 18 19">
      <defs>
        <path id="icon-globe" d="M9 0a9 9 0 110 18A9 9 0 019 0zm1.4 13H7.6c.24 1.02.58 2.02 1.03 2.99a6.1 6.1 0 00.74 0c.45-.97.79-1.97 1.04-2.99zm-4.86 0H3.26a7.03 7.03 0 002.98 2.44c-.29-.8-.52-1.62-.7-2.44zm9.2 0h-2.28c-.18.82-.41 1.64-.7 2.44A7.02 7.02 0 0014.74 13zM5.22 7H2.29a7 7 0 000 4h2.93a18.9 18.9 0 010-4zm5.55 0H7.23a16.9 16.9 0 000 4h3.54a16.9 16.9 0 000-4zm4.94 0h-2.93a18.9 18.9 0 010 4h2.93a7 7 0 000-4zM6.24 2.56l-.17.08A7.03 7.03 0 003.25 5h2.29c.18-.82.41-1.64.7-2.44zM9 2l-.37.01c-.45.97-.79 1.97-1.04 2.99h2.82c-.25-1.02-.6-2.02-1.04-2.99L9 2zm2.76.56l.1.27c.24.71.44 1.44.6 2.17h2.29a7.03 7.03 0 00-3-2.44z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" transform="translate(0 .32)" xlinkHref="#icon-globe"/>
    </motion.svg>
  )
}

const DOUBLERIGHT = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="19" height="12" viewBox="0 0 19 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.707.293l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L10.586 7H1a1 1 0 010-2h9.586L7.293 1.707A1 1 0 018.707.293zm5 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 7c.38-.355.571-.688.571-1 0-.312-.19-.645-.571-1l-3.293-3.293A1 1 0 0113.707.293z" fill="#FFF" fillRule="nonzero" />
    </motion.svg>
  );
};

const CROSS = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M6 4.586L10.293.293a1 1 0 011.414 1.414L7.414 6l4.293 4.293a1 1 0 01-1.414 1.414L6 7.414l-4.293 4.293a1 1 0 11-1.414-1.414L4.586 6 .293 1.707A1 1 0 111.707.293L6 4.586z" id="icon-cross" />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#icon-cross" />
    </motion.svg>
  );
};

const CHECK = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M4.361 7.03L10.198.473a.8.8 0 011.204 1.054l-6.4 7.2a.8.8 0 01-1.168.039l-3.2-3.2a.8.8 0 111.132-1.132L4.36 7.03z" id="icon-check" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-check" fillRule="evenodd" />
    </motion.svg>
  );
};

const PAUSE = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="8" height="10" viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M1.428.2h.344c.403 0 .619.056.814.16.196.105.35.258.454.454.104.195.16.411.16.814v6.744c0 .403-.056.619-.16.814a1.09 1.09 0 01-.454.454c-.195.104-.411.16-.814.16h-.344c-.403 0-.619-.056-.814-.16a1.09 1.09 0 01-.454-.454C.056 8.991 0 8.775 0 8.372V1.628c0-.403.056-.619.16-.814A1.09 1.09 0 01.614.36C.809.256 1.025.2 1.428.2zm4.8 0h.344c.403 0 .619.056.814.16.196.105.35.258.454.454.104.195.16.411.16.814v6.744c0 .403-.056.619-.16.814a1.09 1.09 0 01-.454.454c-.195.104-.411.16-.814.16h-.344c-.403 0-.619-.056-.814-.16a1.09 1.09 0 01-.454-.454c-.104-.195-.16-.411-.16-.814V1.628c0-.403.056-.619.16-.814A1.09 1.09 0 015.414.36c.195-.104.411-.16.814-.16z" id="icon-pause" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-pause" fillRule="evenodd" />
    </motion.svg>
  );
};

const MINUS = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="14" height="3" viewBox="0 0 14 3" >
      <defs>
        <path d="M4 9h12a1 1 0 010 2H4a1 1 0 010-2z" id="icon-minus" />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#icon-minus" transform="translate(-3 -8.5)" />
    </motion.svg>
  );
};

const PLAY = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="8" height="10" viewBox="-1 0 8 10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M.6 1.036A.8.8 0 011.891.404L6.988 4.37a.8.8 0 010 1.262L1.891 9.596A.8.8 0 01.6 8.964V1.036z" id="icon_play" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon_play" fillRule="evenodd" />
    </motion.svg>
  );
};

const TIME = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M8.8 7.2h1.6a.8.8 0 110 1.6H8a.8.8 0 01-.8-.8V4.8a.8.8 0 111.6 0v2.4zM8 .8a7.2 7.2 0 110 14.4A7.2 7.2 0 018 .8zm0 1.6a5.6 5.6 0 100 11.2A5.6 5.6 0 008 2.4z"
          id="icon-time" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-time" fillRule="evenodd" />
    </motion.svg>
  );
};

const PHONE = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M9.13 6.596a1.245 1.245 0 011.236-1.09c.485 0 .649-.033.811-.12a.654.654 0 00.277-.277c.087-.162.119-.326.119-.811v-.785c0-.486-.032-.65-.12-.812a.654.654 0 00-.276-.277c-.162-.086-.326-.119-.811-.119-1.175 0-2.158.89-2.275 2.059l-.122 1.22a39.4 39.4 0 000 7.842l.122 1.22a2.286 2.286 0 002.275 2.06c.485 0 .649-.033.811-.12a.654.654 0 00.277-.277c.087-.162.119-.326.119-.811v-.785c0-.486-.032-.65-.12-.812a.654.654 0 00-.276-.277c-.162-.086-.326-.119-.811-.119a1.245 1.245 0 01-1.236-1.09l-.15-1.21a13.7 13.7 0 010-3.399l.15-1.21zm1.437 1.408a12.1 12.1 0 000 3.002l.113.905c.541.023.894.111 1.252.302.4.214.719.533.933.933.226.423.308.839.308 1.567v.785c0 .728-.082 1.143-.308 1.566-.214.4-.533.719-.933.933-.423.226-.838.308-1.566.308a3.886 3.886 0 01-3.867-3.499l-.122-1.221a41 41 0 010-8.16l.122-1.22a3.886 3.886 0 013.867-3.5c.728 0 1.143.082 1.566.308.4.214.719.533.933.933.226.423.308.839.308 1.567v.785c0 .728-.082 1.143-.308 1.566-.214.4-.533.719-.933.933-.358.191-.71.28-1.252.302l-.113.905z" id="icon_phone" />
      </defs>
      <use fill="#FFF" transform="rotate(-45 7.466 11.42)" xlinkHref="#icon_phone" fillRule="evenodd" />
    </motion.svg>
  );
};

const IMAGE_UPLOAD = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="30" height="24" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter x="-94.9%" y="-80.5%" width="233.6%" height="228.8%" filterUnits="objectBoundingBox" id="icon_image_upload">
          <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadOuter1" />
          <feOffset dy="8" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" in="shadowBlurOuter1" />
        </filter>
        <path d="M28.998 22.002l.067.008c.042.01.08.033.112.065a.236.236 0 01.073.173v1.5l-.008.067a.242.242 0 01-.065.112.243.243 0 01-.179.073h-9.996l-.067-.008a.242.242 0 01-.112-.065.243.243 0 01-.073-.179v-1.5l.008-.063a.243.243 0 01.065-.11.243.243 0 01.179-.073h9.996zM24 12c.055 0 .115.023.182.07l4.998 4.998.034.043c.038.062.046.142.024.239-.043.101-.123.152-.24.152H26.25v3.246l-.008.067a.242.242 0 01-.065.112.243.243 0 01-.179.073h-3.996l-.067-.008a.242.242 0 01-.112-.065.243.243 0 01-.073-.179v-3.246h-2.748l-.066-.006a.23.23 0 01-.174-.146c-.028-.121-.008-.215.058-.282l4.998-4.998.065-.039A.263.263 0 0124 12zm.632-7.632a.5.5 0 010 .707L9.075 20.632a.5.5 0 01-.707-.707L23.925 4.368a.5.5 0 01.707 0zM8.266.401c.71 0 1.176.074 1.638.259a2.95 2.95 0 011.167.841c.293.346.5.725.704 1.299h.574c.77 0 1.182.08 1.61.308.4.214.719.533.933.933.229.428.308.84.308 1.61V8.75c0 .77-.08 1.182-.308 1.61-.214.4-.533.719-.933.933-.428.229-.84.308-1.61.308H3.65c-.77 0-1.182-.08-1.61-.308a2.254 2.254 0 01-.933-.933C.88 9.93.8 9.519.8 8.749V5.65c0-.77.08-1.182.308-1.61.214-.4.533-.719.933-.933.428-.229.84-.308 1.61-.308h.574c.205-.574.411-.953.704-1.299A2.95 2.95 0 016.096.66C6.558.475 7.024.4 7.734.4h.532zm0 1.6h-.532c-.52 0-.79.043-1.042.144a1.351 1.351 0 00-.543.39c-.175.208-.3.45-.465.944l-.125.374A.8.8 0 014.8 4.4H3.651c-.53 0-.69.031-.855.12a.654.654 0 00-.277.276c-.088.164-.119.326-.119.855V8.75c0 .53.031.69.12.855a.654.654 0 00.276.277c.164.088.326.119.855.119h8.698c.53 0 .69-.031.855-.12a.654.654 0 00.277-.276c.088-.164.119-.326.119-.855V5.65c0-.53-.031-.69-.12-.855a.654.654 0 00-.276-.277c-.164-.088-.326-.119-.855-.119H11.2a.8.8 0 01-.759-.547l-.125-.374c-.164-.494-.29-.736-.465-.943a1.351 1.351 0 00-.543-.391C9.056 2.044 8.786 2 8.266 2zM8 5.2a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zm4 0a.8.8 0 110 1.6.8.8 0 010-1.6z" id="icon_image_upload2" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#icon_image_upload)" xlinkHref="#icon_image_upload2" />
        <use fill="#7BA4FF" xlinkHref="#icon_image_upload2" />
      </g>
    </motion.svg>
  );
};

const IMAGE_TEMPLATE = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="27" height="11" viewBox="0 0 27 11" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#05F" fill="none" fillRule="evenodd" opacity=".2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.346 10.009l-2.813-3.14c-.947-1.085-2.267-1.1-3.224-.035l-.136.15c-.757.843-1.806.806-2.535-.09L11.56 4.344C10.148 2.609 8.121 2.518 6.64 4.12L1.118 9.985" />
        <path d="M26.032 9.985l-6.063-6.392c-1.633-1.734-3.978-1.825-5.691-.223l-2.001 1.853" />
        <path d="M11.62 1.853a.656.656 0 101.313 0 .656.656 0 00-1.312 0z" fill="#05F" />
      </g>
    </motion.svg>
  );
};

const COLLAPSE = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter x="-168.7%" y="-118.7%" width="337.5%" height="337.5%" filterUnits="objectBoundingBox" id="icon-collapse-1">
          <feMorphology radius="1" in="SourceAlpha" result="shadowSpreadOuter1" />
          <feOffset dy="8" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" in="shadowBlurOuter1" />
        </filter>
        <path d="M6 9h.018c.024 0 .048.002.071.004L6 9a1.008 1.008 0 01.617.213c.063.05.12.107.17.17l-.08-.09A1.008 1.008 0 017 9.982V15a1 1 0 01-2 0l-.001-2.585-3.292 3.292a1 1 0 11-1.414-1.414L3.584 11H1a1 1 0 010-2h5zm4-9a1 1 0 011 1l-.001 2.585L14.293.293a1 1 0 011.414 1.414L12.415 5 15 5a1 1 0 010 2H9.98c-.023 0-.046-.002-.07-.004L10 7a1.008 1.008 0 01-.617-.213 1.008 1.008 0 01-.17-.17l.08.09A1.008 1.008 0 019 6.032L9 6V1a1 1 0 011-1z" id="icon-collapse-2" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <use fill="#000" filter="url(#icon-collapse-1)" xlinkHref="#icon-collapse-2" />
        <use fill="#7BA4FF" xlinkHref="#icon-collapse-2" />
      </g>
    </motion.svg>
  );
};

const FILE = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="15" height="18" viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M27.5 34v-2.718c0-.557.065-.892.252-1.242.18-.337.45-.608.788-.788.35-.187.685-.252 1.242-.252H32.5v-8.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h4.5zm.586 2h-5.304c-.557 0-.892-.065-1.242-.252a1.909 1.909 0 01-.788-.788c-.187-.35-.252-.685-.252-1.242V20.282c0-.557.065-.892.252-1.242.18-.337.45-.608.788-.788.35-.187.685-.252 1.242-.252h9.436c.557 0 .892.065 1.242.252.337.18.608.45.788.788.187.35.252.685.252 1.242v9.304A2 2 0 0133.914 31L29.5 35.414a2 2 0 01-1.414.586zm1.414-4.5v1L31 31h-1a.5.5 0 00-.5.5z" id="icon-file" />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#icon-file" transform="translate(-20 -18)" />
    </motion.svg>
  );
};

const THUNDER = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} width={14} height={18} viewBox="0 0 14 18">
      <defs>
        <path
          d="M5.618 2l-3 6H5a1 1 0 01.97 1.243L4.846 13.74 10.586 8H9a1 1 0 01-.894-1.447L10.382 2H5.618zm-1.899 8H1a1 1 0 01-.894-1.447l4-8A1 1 0 015 0h7a1 1 0 01.894 1.447L10.618 6H13c.89 0 1.337 1.077.707 1.707l-10 10c-.717.717-1.923.034-1.677-.95L3.72 10z"
          id="THUNDER__a"
        />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#THUNDER__a" />
    </motion.svg>
  );
}

const WAIVER = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M33.5 27a1 1 0 012 0v5.718c0 .557-.065.892-.252 1.242-.18.337-.45.608-.788.788-.35.187-.685.252-1.242.252H21.782c-.557 0-.892-.065-1.242-.252a1.909 1.909 0 01-.788-.788c-.187-.35-.252-.685-.252-1.242V21.282c0-.557.065-.892.252-1.242.18-.337.45-.608.788-.788.35-.187.685-.252 1.242-.252H27.5a1 1 0 010 2H22a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V27zm-7.804 1.199c.613-2.486.979-3.788 1.097-3.906l5-5a2.414 2.414 0 013.414 3.414l-5 5c-.118.118-1.42.484-3.906 1.097a.5.5 0 01-.605-.605zm8.097-6.906a.414.414 0 10-.586-.586l-4.116 4.116a.25.25 0 000 .354l.232.232a.25.25 0 00.354 0l4.116-4.116z" id="icon-waiver" />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#icon-waiver" transform="translate(-19 -18)" />
    </motion.svg>
  );
};

const CAMERA = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M45.718 37h.718c.964 0 1.477.1 2.012.385.5.268.9.666 1.167 1.167.286.535.385 1.048.385 2.012v3.872c0 .964-.1 1.477-.385 2.012-.268.5-.666.9-1.167 1.167-.535.286-1.048.385-2.012.385H35.564c-.964 0-1.477-.1-2.012-.385a2.817 2.817 0 01-1.167-1.167C32.1 45.913 32 45.4 32 44.436v-3.872c0-.964.1-1.477.385-2.012.268-.5.666-.9 1.167-1.167C34.087 37.1 34.6 37 35.564 37h.718c.255-.718.513-1.192.88-1.624.398-.47.886-.822 1.459-1.051.576-.231 1.16-.323 2.046-.323h.666c.886 0 1.47.092 2.046.323.573.23 1.061.581 1.46 1.051.366.432.624.906.88 1.624zm-10.154 2c-.662 0-.864.039-1.07.149a.818.818 0 00-.345.346c-.11.205-.149.407-.149 1.069v3.872c0 .662.039.864.149 1.07a.818.818 0 00.346.345c.205.11.407.149 1.069.149h10.872c.662 0 .864-.039 1.07-.149a.818.818 0 00.345-.346c.11-.205.149-.407.149-1.069v-3.872c0-.662-.039-.864-.149-1.07a.818.818 0 00-.346-.345c-.205-.11-.407-.149-1.069-.149H45a1 1 0 01-.949-.684l-.156-.468c-.205-.616-.362-.92-.582-1.178a1.69 1.69 0 00-.678-.489c-.315-.126-.652-.18-1.302-.18h-.666c-.65 0-.987.054-1.302.18a1.69 1.69 0 00-.678.489c-.22.258-.377.562-.582 1.178l-.156.468A1 1 0 0137 39h-1.436zM41 44a2 2 0 110-4 2 2 0 010 4zm5-2a1 1 0 110-2 1 1 0 010 2z" id="icon-camera" />
      </defs>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#icon-camera" transform="translate(-32 -34)" />
    </motion.svg>
  );
};

const SEARCH = (iconHoverAnimation) => {
  return (
    <motion.svg whileHover={iconHoverAnimation} width="15" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 16">
      <defs>
        <path d="M10.89 9.477l3.817 3.816a1 1 0 01-1.414 1.414l-3.816-3.816a6 6 0 111.414-1.414zM6 10a4 4 0 100-8 4 4 0 000 8z" id="icon-zoom" />
      </defs>
      <use fill="#000" fillRule="nonzero" xlinkHref="#icon-zoom" transform="translate(0 .5)" /></motion.svg>
  );
};



export const Iffinity = (iconHoverAnimation) => {
  return(
    <motion.svg whileHover={iconHoverAnimation} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
      <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
    </motion.svg>
  );
}

export const Icon = (
  {
    icon,
    progress,
    theme,
    size,
    type,
    hide,
    url,
    children,
    onClick,
    iconHoverAnimation,
    containerHoverAnimation
  }
) => {

  const _onClick = () => {
    if (onClick) {
      onClick();
    }
  }

  // render() {
  //   const { icon, progress, theme, size, type, hide, url, children } = this.props;

  let svg = <motion.span whileHover={iconHoverAnimation}>{'icon'}</motion.span>;

  switch (icon) {
    case ICONS.MAP:
      svg = MAP(iconHoverAnimation);
      break;
    case ICONS.FILTER:
      svg = FILTER(iconHoverAnimation);
      break;
    case ICONS.RIGHT:
      svg = RIGHT(iconHoverAnimation);
      break;
    case ICONS.RIGHT_CHEV:
      svg = RIGHT_CHEV(iconHoverAnimation);
      break;
    case ICONS.LEFT_CHEV:
      svg = LEFT_CHEV(iconHoverAnimation);
      break;
    case ICONS.CROSS:
      svg = CROSS(iconHoverAnimation);
      break;
    case ICONS.PLUS:
      svg = PLUS(iconHoverAnimation);
      break;
    case ICONS.BULB:
      svg = BULB(iconHoverAnimation);
      break;
    case ICONS.MENU:
      svg = MENU(iconHoverAnimation);
      break;
    case ICONS.GLOBE:
      svg = GLOBE(iconHoverAnimation);
      break;
    case ICONS.FILE:
      svg = FILE(iconHoverAnimation);
      break;
    case ICONS.WAIVER:
      svg = WAIVER(iconHoverAnimation);
      break;
    case ICONS.MINUS:
      svg = MINUS(iconHoverAnimation);
      break;
    case ICONS.LINKEDIN:
      svg = LINKEDIN(iconHoverAnimation);
      break;
    case ICONS.TWITTER:
      svg = TWITTER(iconHoverAnimation);
      break;
    case ICONS.FACEBOOK:
      svg = FACEBOOK(iconHoverAnimation);
      break;
    case ICONS.MEDIUM:
      svg = MEDIUM(iconHoverAnimation);
      break;
    case ICONS.INSTAGRAM:
      svg = INSTAGRAM(iconHoverAnimation);
      break;
    case ICONS.YOUTUBE:
      svg = YOUTUBE(iconHoverAnimation);
      break;
    case ICONS.THUNDER:
      svg = THUNDER(iconHoverAnimation);
      break;

    //NEW//

    case ICONS.MAIL:
      svg = MAIL(iconHoverAnimation);
      break;
    case ICONS.ROCKET:
      svg = ROCKET(iconHoverAnimation);
      break;
    case ICONS.ARROW_RIGHT:
      svg = ARROW_RIGHT(iconHoverAnimation);
      break;
    case ICONS.ARROW_LEFT:
      svg = ARROW_LEFT(iconHoverAnimation);
      break;
    case ICONS.PIN:
      svg = PIN(iconHoverAnimation);
      break;
    case ICONS.CHAT_BUBBLE:
      svg = CHAT_BUBBLE(iconHoverAnimation);
      break;
    case ICONS.INFO:
      svg = INFO(iconHoverAnimation);
      break;
    case ICONS.CALENDAR:
      svg = CALENDAR(iconHoverAnimation);
      break;
    case ICONS.DOUBLE_DOWN:
      svg = DOUBLE_DOWN(iconHoverAnimation);
      break;

    //SynthFuts
    case ICONS.DIVERGE:
      svg = DIVERGE(iconHoverAnimation);
      break;
    case ICONS.SPACE:
      svg = SPACE(iconHoverAnimation);
      break;
    case ICONS.COMPONENTS:
      svg = COMPONENTS(iconHoverAnimation);
      break;



    default:
  }

  let additionalStyles = '';

  Object.values(THEME).forEach((v) => {
    if (v === theme) {
      additionalStyles = styles[theme];
    }
  });

  // default to dark theme
  if (!additionalStyles) {
    additionalStyles += styles.dark;
  }

  Object.values(SIZE).forEach((v) => {
    if (v === size) {
      additionalStyles += ` ${size}`;
    }
  });

  Object.values(TYPE).forEach((v) => {
    if (v === type) {
      additionalStyles += ` ${type}`;
    }
  });

  if (progress) {
    additionalStyles += ' progress';
  }

  if (hide) {
    additionalStyles += ' hide';
  }

  if (url) {
    return (
      <a href={url.to}>
        <div className={`${styles.Icon} ${additionalStyles}`}>
          {children}
          {svg}
        </div>
      </a>
    );
  }

  return (
    <motion.div
      className={`${styles.Icon} ${additionalStyles}`}
      onClick={_onClick}
      whileHover={containerHoverAnimation}
    >
      {children}
      {svg}
    </motion.div>
  );
  // }
}

// export default Icon;