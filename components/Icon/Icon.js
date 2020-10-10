import React, { Component } from 'react';
import styles from './Icon.module.scss';

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
  YOUTUBE: 'YOUTUBE',
  GLOBE: 'GLOBE',
  FILE: 'FILE',
  THUNDER: 'THUNDER'
};

export const THEME = {
  LIGHT: 'light',
  GREY: 'grey',
  DISABLED: 'disabled',
  RED: 'red',
  GREEN: 'green',
  DARK: 'dark',
  TRANSPARENT: 'transparent',
};

export const SIZE = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg'
};

export const TYPE = {
  LINK: 'lnk'
};

const PLUS = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 15 15">
      <defs>
        <path id="icons-plus" d="M8 6h5a1 1 0 010 2H8v5a1 1 0 01-2 0V8H1a1 1 0 110-2h5V1a1 1 0 112 0v5z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" transform="translate(.5 .5)" xlinkHref="#icons-plus"/>
    </svg>
  )
}

const LEFT_CHEV = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="12" width="7" viewBox="0 0 7 12">
      <defs>
        <path id="icons-left-chevron" d="M2.41 6l4.3 4.3a1 1 0 01-1.42 1.4l-5-5a1 1 0 010-1.4l5-5a1 1 0 111.42 1.4L2.4 6z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icons-left-chevron"/>
    </svg>
  )
}
const RIGHT_CHEV = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="12" width="7" viewBox="0 0 7 12">
      <defs>
        <path id="icons-right-chevron" d="M4.59 6L.29 1.7A1 1 0 111.71.3l5 5a1 1 0 010 1.4l-5 5a1 1 0 11-1.42-1.4L4.6 6z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icons-right-chevron"/>
    </svg>
  )
}

const MENU = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 18" width="18" height="22">
      <defs>
        <path id="icon-menu" d="M2 18a1.5 1.5 0 010-3h12a1.5 1.5 0 010 3H2zm0-7.5a1.5 1.5 0 010-3h18a1.5 1.5 0 010 3H2zm-1.5-9C.5.67 1.17 0 2 0h18a1.5 1.5 0 010 3H2A1.5 1.5 0 01.5 1.5z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="evenodd" xlinkHref="#icon-menu"/>
    </svg>
  );
};

const LINKEDIN = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 16 16">
      <defs>
        <path id="icon-linkedin" d="M2.75 14H.25a.25.25 0 01-.25-.25v-8.5C0 5.11.11 5 .25 5h2.5c.14 0 .25.11.25.25v8.5c0 .14-.11.25-.25.25zm7.75-9.5c2.28 0 3.5 1.26 3.5 3.93v5.32c0 .14-.11.25-.25.25h-2.5a.25.25 0 01-.25-.25V9c0-1.6-.4-2-1.4-2C8.5 7 8 7.75 8 9v4.75c0 .14-.11.25-.25.25h-2.5a.25.25 0 01-.25-.25v-8.5c0-.14.11-.25.25-.25h2.5c.14 0 .25.11.25.25V6c.62-1 1.26-1.5 2.5-1.5zM1.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icon-linkedin"/>
    </svg>
  );
};

const BULB = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="12" viewBox="0 0 12 18">
      <defs>
        <path id="icons-bulb" d="M9.44 8.07A3.98 3.98 0 0010 6a4 4 0 10-7.25 2.33l1.08 1.08A4 4 0 015 12.24V13h2v-.76a4 4 0 011.17-2.83l1.08-1.08.19-.26zM12 6.06a5.64 5.64 0 01-1.22 3.56l-.07.09-1.12 1.12A2 2 0 009 12.24V14a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.76a2 2 0 00-.59-1.41L1.3 9.7l-.07-.09c-.8-1-1.2-2.2-1.22-3.56V6a6 6 0 1112 0v.06zM4 16h4a1 1 0 010 2H4a1 1 0 010-2z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icons-bulb"/>
    </svg>
  )
}
const TWITTER = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 16 13">
      <defs>
        <path id="icon-twitter" d="M16 1.53s-.62 1.01-1.64 1.7C14.57 7.86 11.18 13 5.03 13c-.95 0-1.81-.1-2.6-.32a.65.65 0 010-1.25c.8-.23 1.6-.64 2.42-1.25-1.3-.08-2.2-.57-2.73-1.47a.5.5 0 01.41-.75c.24 0 .49-.05.74-.13C1.77 7.46.9 6.66.67 5.43a.5.5 0 01.64-.56c.26.07.52.1.8.1C.71 3.9.25 2.7.73 1.36a.5.5 0 01.85-.16c1.49 1.73 3.6 2.68 6.3 2.84a3.29 3.29 0 015.6-3c1.1-.18 2.1-.8 2.1-.8s-.35 1.21-1.45 1.8a6.4 6.4 0 001.87-.5z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icon-twitter"/>
    </svg>
  );
};

const YOUTUBE = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="17" width="12" viewBox="0 0 17 12">
      <defs>
        <path id="icons-youtube" d="M8 0c5 0 6.53.06 7.22.78.51.53.78 2.13.78 5.22s-.27 4.69-.78 5.22C14.53 11.94 13 12 8 12s-6.53-.06-7.22-.78C.27 10.69 0 9.09 0 6S.27 1.31.78.78C1.47.06 3 0 8 0zM6.5 3.5v5a.25.25 0 00.4.2l3.33-2.5a.25.25 0 000-.4L6.9 3.3a.25.25 0 00-.4.2z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" transform="translate(.5)" xlinkHref="#icons-youtube"/>
    </svg>
  )
}

const MAIL = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 18 12">
      <defs>
        <path id="icon-mail" d="M14.8 10l-3.2-3.91-1.95 1.67a1 1 0 01-1.3 0L6.4 6.09 3.2 10h11.6zM16 8.31V2.5a.5.5 0 00-.03-.16l-2.85 2.45L16 8.3zm-14 0l2.88-3.52-2.85-2.45A.5.5 0 002 2.5v5.8zM15.92 0c.1-.01.2 0 .3.02a1.97 1.97 0 011.53 1.01c.19.35.25.68.25 1.24v7.44c0 .56-.06.89-.25 1.24-.18.34-.45.6-.79.79a2.4 2.4 0 01-1.24.25H2.28c-.56 0-.89-.06-1.24-.25a1.9 1.9 0 01-.79-.79A2.4 2.4 0 010 9.72V2.28c0-.56.06-.89.25-1.24A1.9 1.9 0 011.78.03a5.9 5.9 0 01.5-.03H15.92zM4.7 2L9 5.68 13.3 2H4.7z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" xlinkHref="#icon-mail"/>
    </svg>
  );
};

const MAP = () => {
  return (
    <svg width="16" height="14" viewBox="1 0 14 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M9.43 3.52l-2.7-.9a.25.25 0 00-.328.237v7.387a.25.25 0 00.17.237l2.7.9a.25.25 0 00.33-.237V3.757a.25.25 0 00-.171-.237zm1.772.19v7.338a.25.25 0 00.343.233l1.898-.76a.25.25 0 00.157-.232V2.951a.25.25 0 00-.343-.232l-1.898.76a.25.25 0 00-.157.231zm-8.802 0v7.34a.25.25 0 00.343.231l1.902-.76a.25.25 0 00.157-.233V2.95a.25.25 0 00-.343-.232l-1.902.76a.25.25 0 00-.157.233zm-.503 9.633A.8.8 0 01.8 12.6V3a.8.8 0 01.503-.743l4-1.6a.8.8 0 01.55-.016l4.522 1.507 3.728-1.49A.8.8 0 0115.2 1.4V11a.8.8 0 01-.503.743l-4 1.6a.8.8 0 01-.55.016l-4.522-1.507-3.728 1.49z" id="icon-map" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-map" fillRule="evenodd" />
    </svg>
  );
};

const FILTER = () => {
  return (
    <svg width="14" height="12" viewBox="1 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M5.4 6.8c1.045 0 1.934.668 2.264 1.6H12.6a.8.8 0 110 1.6H7.663a2.401 2.401 0 01-4.526 0H1.4a.8.8 0 110-1.6h1.736A2.401 2.401 0 015.4 6.8zm0 1.6a.8.8 0 100 1.6.8.8 0 000-1.6zm3.2-8c1.045 0 1.934.668 2.264 1.6H12.6a.8.8 0 110 1.6h-1.737a2.401 2.401 0 01-4.526 0H1.4a.8.8 0 110-1.6h4.936A2.401 2.401 0 018.6.4zm0 1.6a.8.8 0 100 1.6.8.8 0 000-1.6z" id="icon-filter" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-filter" fillRule="evenodd" />
    </svg>
  );
};

const CALENDAR = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M11.2.8a.8.8 0 01.8.8v.799l.349.001c.77 0 1.182.08 1.61.308.4.214.719.533.933.933.229.428.308.84.308 1.61v7.098c0 .77-.08 1.182-.308 1.61-.214.4-.533.719-.933.933-.428.229-.84.308-1.61.308H3.65c-.77 0-1.182-.08-1.61-.308a2.254 2.254 0 01-.933-.933C.88 13.53.8 13.119.8 12.349V5.25c0-.77.08-1.182.308-1.61.214-.4.533-.719.933-.933.428-.229.84-.308 1.61-.308L4 2.399 4 1.6a.8.8 0 111.6 0v.799h4.8V1.6a.8.8 0 01.8-.8zM13.6 8H2.4v4.349c0 .53.031.69.12.855a.654.654 0 00.276.277c.164.088.326.119.855.119h8.698c.53 0 .69-.031.855-.12a.654.654 0 00.277-.276c.088-.164.119-.326.119-.855V8zM3.999 3.999L3.651 4c-.53 0-.69.031-.855.12a.654.654 0 00-.277.276c-.088.164-.119.326-.119.855V6.4h11.2V5.251c0-.53-.031-.69-.12-.855a.654.654 0 00-.276-.277C13.04 4.031 12.878 4 12.35 4L12 3.999V4.8a.8.8 0 11-1.6 0v-.801H5.6V4.8a.8.8 0 11-1.6 0l-.001-.801z" id="icon-calendar" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-calendar" fillRule="evenodd" />
    </svg>
  );
};

const LEFT = () => {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M3.414 7l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L3.414 5H13a1 1 0 010 2H3.414z" id="icon-left" />
      </defs>
      <use fill="#7BA4FF" fillRule="nonzero" xlinkHref="#icon-left" />
    </svg>
  );
};

const RIGHT = () => {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M10.586 5L7.293 1.707A1 1 0 018.707.293l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L10.586 7H1a1 1 0 110-2h9.586z" id="icon-right" />
      </defs>
      <use fill="#7BA4FF" fillRule="nonzero" xlinkHref="#icon-right" />
    </svg>
  );
};

const DOUBLELEFT = () => {
  return (
    <svg width="19" height="12" viewBox="0 0 19 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.707.293a1 1 0 010 1.414L8.414 5H18a1 1 0 010 2H8.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0zm-6.414 0a1 1 0 011.414 1.414L3.414 5c-.38.355-.571.688-.571 1 0 .312.19.645.571 1l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414z" fill="#FFF" fillRule="nonzero" />
    </svg>
  );
};

const GLOBE = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="19" width="18" viewBox="0 0 18 19">
      <defs>
        <path id="icon-globe" d="M9 0a9 9 0 110 18A9 9 0 019 0zm1.4 13H7.6c.24 1.02.58 2.02 1.03 2.99a6.1 6.1 0 00.74 0c.45-.97.79-1.97 1.04-2.99zm-4.86 0H3.26a7.03 7.03 0 002.98 2.44c-.29-.8-.52-1.62-.7-2.44zm9.2 0h-2.28c-.18.82-.41 1.64-.7 2.44A7.02 7.02 0 0014.74 13zM5.22 7H2.29a7 7 0 000 4h2.93a18.9 18.9 0 010-4zm5.55 0H7.23a16.9 16.9 0 000 4h3.54a16.9 16.9 0 000-4zm4.94 0h-2.93a18.9 18.9 0 010 4h2.93a7 7 0 000-4zM6.24 2.56l-.17.08A7.03 7.03 0 003.25 5h2.29c.18-.82.41-1.64.7-2.44zM9 2l-.37.01c-.45.97-.79 1.97-1.04 2.99h2.82c-.25-1.02-.6-2.02-1.04-2.99L9 2zm2.76.56l.1.27c.24.71.44 1.44.6 2.17h2.29a7.03 7.03 0 00-3-2.44z"/>
      </defs>
      <use fill="#3A3A3A" fillRule="nonzero" transform="translate(0 .32)" xlinkHref="#icon-globe"/>
    </svg>
  )
}

const DOUBLERIGHT = () => {
  return (
    <svg width="19" height="12" viewBox="0 0 19 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.707.293l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L10.586 7H1a1 1 0 010-2h9.586L7.293 1.707A1 1 0 018.707.293zm5 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 7c.38-.355.571-.688.571-1 0-.312-.19-.645-.571-1l-3.293-3.293A1 1 0 0113.707.293z" fill="#FFF" fillRule="nonzero" />
    </svg>
  );
};

const CROSS = () => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M6 4.586L10.293.293a1 1 0 011.414 1.414L7.414 6l4.293 4.293a1 1 0 01-1.414 1.414L6 7.414l-4.293 4.293a1 1 0 11-1.414-1.414L4.586 6 .293 1.707A1 1 0 111.707.293L6 4.586z" id="icon-cross" />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#icon-cross" />
    </svg>
  );
};

const CHECK = () => {
  return (
    <svg width="12" height="9" viewBox="0 0 12 9" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M4.361 7.03L10.198.473a.8.8 0 011.204 1.054l-6.4 7.2a.8.8 0 01-1.168.039l-3.2-3.2a.8.8 0 111.132-1.132L4.36 7.03z" id="icon-check" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-check" fillRule="evenodd" />
    </svg>
  );
};

const PAUSE = () => {
  return (
    <svg width="8" height="10" viewBox="0 0 8 10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M1.428.2h.344c.403 0 .619.056.814.16.196.105.35.258.454.454.104.195.16.411.16.814v6.744c0 .403-.056.619-.16.814a1.09 1.09 0 01-.454.454c-.195.104-.411.16-.814.16h-.344c-.403 0-.619-.056-.814-.16a1.09 1.09 0 01-.454-.454C.056 8.991 0 8.775 0 8.372V1.628c0-.403.056-.619.16-.814A1.09 1.09 0 01.614.36C.809.256 1.025.2 1.428.2zm4.8 0h.344c.403 0 .619.056.814.16.196.105.35.258.454.454.104.195.16.411.16.814v6.744c0 .403-.056.619-.16.814a1.09 1.09 0 01-.454.454c-.195.104-.411.16-.814.16h-.344c-.403 0-.619-.056-.814-.16a1.09 1.09 0 01-.454-.454c-.104-.195-.16-.411-.16-.814V1.628c0-.403.056-.619.16-.814A1.09 1.09 0 015.414.36c.195-.104.411-.16.814-.16z" id="icon-pause" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-pause" fillRule="evenodd" />
    </svg>
  );
};

const MINUS = () => {
  return (
    <svg width="14" height="3" viewBox="0 0 14 3" >
      <defs>
        <path d="M4 9h12a1 1 0 010 2H4a1 1 0 010-2z" id="icon-minus" />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#icon-minus" transform="translate(-3 -8.5)" />
    </svg>
  );
};

const PLAY = () => {
  return (
    <svg width="8" height="10" viewBox="-1 0 8 10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M.6 1.036A.8.8 0 011.891.404L6.988 4.37a.8.8 0 010 1.262L1.891 9.596A.8.8 0 01.6 8.964V1.036z" id="icon_play" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon_play" fillRule="evenodd" />
    </svg>
  );
};

const TIME = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M8.8 7.2h1.6a.8.8 0 110 1.6H8a.8.8 0 01-.8-.8V4.8a.8.8 0 111.6 0v2.4zM8 .8a7.2 7.2 0 110 14.4A7.2 7.2 0 018 .8zm0 1.6a5.6 5.6 0 100 11.2A5.6 5.6 0 008 2.4z"
          id="icon-time" />
      </defs>
      <use fill="#FFF" xlinkHref="#icon-time" fillRule="evenodd" />
    </svg>
  );
};

const PHONE = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M9.13 6.596a1.245 1.245 0 011.236-1.09c.485 0 .649-.033.811-.12a.654.654 0 00.277-.277c.087-.162.119-.326.119-.811v-.785c0-.486-.032-.65-.12-.812a.654.654 0 00-.276-.277c-.162-.086-.326-.119-.811-.119-1.175 0-2.158.89-2.275 2.059l-.122 1.22a39.4 39.4 0 000 7.842l.122 1.22a2.286 2.286 0 002.275 2.06c.485 0 .649-.033.811-.12a.654.654 0 00.277-.277c.087-.162.119-.326.119-.811v-.785c0-.486-.032-.65-.12-.812a.654.654 0 00-.276-.277c-.162-.086-.326-.119-.811-.119a1.245 1.245 0 01-1.236-1.09l-.15-1.21a13.7 13.7 0 010-3.399l.15-1.21zm1.437 1.408a12.1 12.1 0 000 3.002l.113.905c.541.023.894.111 1.252.302.4.214.719.533.933.933.226.423.308.839.308 1.567v.785c0 .728-.082 1.143-.308 1.566-.214.4-.533.719-.933.933-.423.226-.838.308-1.566.308a3.886 3.886 0 01-3.867-3.499l-.122-1.221a41 41 0 010-8.16l.122-1.22a3.886 3.886 0 013.867-3.5c.728 0 1.143.082 1.566.308.4.214.719.533.933.933.226.423.308.839.308 1.567v.785c0 .728-.082 1.143-.308 1.566-.214.4-.533.719-.933.933-.358.191-.71.28-1.252.302l-.113.905z" id="icon_phone" />
      </defs>
      <use fill="#FFF" transform="rotate(-45 7.466 11.42)" xlinkHref="#icon_phone" fillRule="evenodd" />
    </svg>
  );
};

const IMAGE_UPLOAD = () => {
  return (
    <svg width="30" height="24" viewBox="0 0 30 24" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  );
};

const IMAGE_TEMPLATE = () => {
  return (
    <svg width="27" height="11" viewBox="0 0 27 11" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#05F" fill="none" fillRule="evenodd" opacity=".2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.346 10.009l-2.813-3.14c-.947-1.085-2.267-1.1-3.224-.035l-.136.15c-.757.843-1.806.806-2.535-.09L11.56 4.344C10.148 2.609 8.121 2.518 6.64 4.12L1.118 9.985" />
        <path d="M26.032 9.985l-6.063-6.392c-1.633-1.734-3.978-1.825-5.691-.223l-2.001 1.853" />
        <path d="M11.62 1.853a.656.656 0 101.313 0 .656.656 0 00-1.312 0z" fill="#05F" />
      </g>
    </svg>
  );
};

const COLLAPSE = () => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
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
    </svg>
  );
};

const FILE = () => {
  return (
    <svg width="15" height="18" viewBox="0 0 15 18" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M27.5 34v-2.718c0-.557.065-.892.252-1.242.18-.337.45-.608.788-.788.35-.187.685-.252 1.242-.252H32.5v-8.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h4.5zm.586 2h-5.304c-.557 0-.892-.065-1.242-.252a1.909 1.909 0 01-.788-.788c-.187-.35-.252-.685-.252-1.242V20.282c0-.557.065-.892.252-1.242.18-.337.45-.608.788-.788.35-.187.685-.252 1.242-.252h9.436c.557 0 .892.065 1.242.252.337.18.608.45.788.788.187.35.252.685.252 1.242v9.304A2 2 0 0133.914 31L29.5 35.414a2 2 0 01-1.414.586zm1.414-4.5v1L31 31h-1a.5.5 0 00-.5.5z" id="icon-file" />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#icon-file" transform="translate(-20 -18)" />
    </svg>
  );
};

const THUNDER = () => {
  return(
  <svg width={14} height={18} viewBox="0 0 14 18">
    <defs>
      <path
        d="M5.618 2l-3 6H5a1 1 0 01.97 1.243L4.846 13.74 10.586 8H9a1 1 0 01-.894-1.447L10.382 2H5.618zm-1.899 8H1a1 1 0 01-.894-1.447l4-8A1 1 0 015 0h7a1 1 0 01.894 1.447L10.618 6H13c.89 0 1.337 1.077.707 1.707l-10 10c-.717.717-1.923.034-1.677-.95L3.72 10z"
        id="THUNDER__a"
      />
    </defs>
    <use fill="#05F" fillRule="nonzero" xlinkHref="#THUNDER__a" />
  </svg>
  );
}

const WAIVER = () => {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M33.5 27a1 1 0 012 0v5.718c0 .557-.065.892-.252 1.242-.18.337-.45.608-.788.788-.35.187-.685.252-1.242.252H21.782c-.557 0-.892-.065-1.242-.252a1.909 1.909 0 01-.788-.788c-.187-.35-.252-.685-.252-1.242V21.282c0-.557.065-.892.252-1.242.18-.337.45-.608.788-.788.35-.187.685-.252 1.242-.252H27.5a1 1 0 010 2H22a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V27zm-7.804 1.199c.613-2.486.979-3.788 1.097-3.906l5-5a2.414 2.414 0 013.414 3.414l-5 5c-.118.118-1.42.484-3.906 1.097a.5.5 0 01-.605-.605zm8.097-6.906a.414.414 0 10-.586-.586l-4.116 4.116a.25.25 0 000 .354l.232.232a.25.25 0 00.354 0l4.116-4.116z" id="icon-waiver" />
      </defs>
      <use fill="#05F" fillRule="nonzero" xlinkHref="#icon-waiver" transform="translate(-19 -18)" />
    </svg>
  );
};

const CAMERA = () => {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path d="M45.718 37h.718c.964 0 1.477.1 2.012.385.5.268.9.666 1.167 1.167.286.535.385 1.048.385 2.012v3.872c0 .964-.1 1.477-.385 2.012-.268.5-.666.9-1.167 1.167-.535.286-1.048.385-2.012.385H35.564c-.964 0-1.477-.1-2.012-.385a2.817 2.817 0 01-1.167-1.167C32.1 45.913 32 45.4 32 44.436v-3.872c0-.964.1-1.477.385-2.012.268-.5.666-.9 1.167-1.167C34.087 37.1 34.6 37 35.564 37h.718c.255-.718.513-1.192.88-1.624.398-.47.886-.822 1.459-1.051.576-.231 1.16-.323 2.046-.323h.666c.886 0 1.47.092 2.046.323.573.23 1.061.581 1.46 1.051.366.432.624.906.88 1.624zm-10.154 2c-.662 0-.864.039-1.07.149a.818.818 0 00-.345.346c-.11.205-.149.407-.149 1.069v3.872c0 .662.039.864.149 1.07a.818.818 0 00.346.345c.205.11.407.149 1.069.149h10.872c.662 0 .864-.039 1.07-.149a.818.818 0 00.345-.346c.11-.205.149-.407.149-1.069v-3.872c0-.662-.039-.864-.149-1.07a.818.818 0 00-.346-.345c-.205-.11-.407-.149-1.069-.149H45a1 1 0 01-.949-.684l-.156-.468c-.205-.616-.362-.92-.582-1.178a1.69 1.69 0 00-.678-.489c-.315-.126-.652-.18-1.302-.18h-.666c-.65 0-.987.054-1.302.18a1.69 1.69 0 00-.678.489c-.22.258-.377.562-.582 1.178l-.156.468A1 1 0 0137 39h-1.436zM41 44a2 2 0 110-4 2 2 0 010 4zm5-2a1 1 0 110-2 1 1 0 010 2z" id="icon-camera" />
      </defs>
      <use fill="#FFF" fillRule="nonzero" xlinkHref="#icon-camera" transform="translate(-32 -34)" />
    </svg>
  );
};

const SEARCH = () => {
  return (
    <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 16">
      <defs>
        <path d="M10.89 9.477l3.817 3.816a1 1 0 01-1.414 1.414l-3.816-3.816a6 6 0 111.414-1.414zM6 10a4 4 0 100-8 4 4 0 000 8z" id="icon-zoom" />
      </defs>
      <use fill="#000" fillRule="nonzero" xlinkHref="#icon-zoom" transform="translate(0 .5)" /></svg>
  );
};



export const Iffinity = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
      <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
    </svg>
  );
}

export const Icon = ({icon, progress, theme, size, type, hide, url, children, onClick}) => {

  const _onClick = () => {
    if (onClick) {
      onClick();
    }
  }

  // render() {
  //   const { icon, progress, theme, size, type, hide, url, children } = this.props;

    let svg = <span>{'icon'}</span>;

    switch (icon) {
      case ICONS.MAP:
        svg = MAP();
        break;
      case ICONS.FILTER:
        svg = FILTER();
        break;
      case ICONS.RIGHT:
        svg = RIGHT();
        break;
      case ICONS.RIGHT_CHEV:
        svg = RIGHT_CHEV();
        break;
      case ICONS.LEFT_CHEV:
        svg = LEFT_CHEV();
        break;
      case ICONS.CROSS:
        svg = CROSS();
        break;
      case ICONS.PLUS:
        svg = PLUS();
        break;
      case ICONS.BULB:
        svg = BULB();
        break;
      case ICONS.MENU:
        svg = MENU();
        break;
      case ICONS.GLOBE:
        svg = GLOBE();
        break;
      case ICONS.FILE:
        svg = FILE();
        break;
      case ICONS.WAIVER:
        svg = WAIVER();
        break;
      case ICONS.MINUS:
        svg = MINUS();
        break;
      case ICONS.LINKEDIN:
        svg = LINKEDIN();
        break;
      case ICONS.TWITTER:
        svg = TWITTER();
        break;
      case ICONS.MAIL:
        svg = MAIL();
        break;
      case ICONS.YOUTUBE:
        svg = YOUTUBE();
        break;
      case ICONS.THUNDER:
        svg = THUNDER();
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
      <div className={`${styles.Icon} ${additionalStyles}`} onClick={_onClick}>
        {children}
        {svg}
      </div>
    );
  // }
}

// export default Icon;