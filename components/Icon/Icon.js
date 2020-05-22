import React, { Component } from 'react';
import './Icon.scss';

export const ICONS = {
  // MAP: 'MAP',
  FILTER: 'FILTER',
  // CALENDAR: 'CALENDAR',
  // LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  // DOUBLELEFT: 'DOUBLELEFT',
  // DOUBLERIGHT: 'DOUBLERIGHT',
  CROSS: 'CROSS',
  // CHECK: 'CHECK',
  // PAUSE: 'PAUSE',
  // MINUS: 'MINUS',
  // PLAY: 'PLAY',
  // TIME: 'TIME',
  // PHONE: 'PHONE',
  // IMAGE_UPLOAD: 'IMAGE_UPLOAD',
  // IMAGE_TEMPLATE: 'IMAGE_TEMPLATE',
  // COLLAPSE: 'COLLAPSE',
  // FILE: 'FILE',
  // WAIVER: 'WAIVER',
  // CAMERA: 'CAMERA',
  BULB: 'BULB',
  MAIL: 'MAIL',
  MENU: 'MENU',
  LINKEDIN:'LINKEDIN',
  TWITTER: 'TWITTER',
  YOUTUBE: 'YOUTUBE'
  // SEARCH: 'search'

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

export class Avatar extends React.Component {
  render() {
    return (
      <svg width="38px" height="39px" viewBox="0 0 38 39" version="1.1">
        <title>Icons / Oval + Icon</title>
        <desc>Created with Sketch.</desc>
        <defs>
          <circle id="path-1" cx="16" cy="16" r="16"></circle>
          <filter x="-15.6%" y="-12.5%" width="131.2%" height="131.2%" filterUnits="objectBoundingBox" id="filter-3">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
          </filter>
          <path d="M5.02902023,10.1703034 C3.91504825,9.29129373 3.2,7.9291511 3.2,6.4 C3.2,3.7490332 5.3490332,1.6 8,1.6 C10.6509668,1.6 12.8,3.7490332 12.8,6.4 C12.8,7.92914365 12.0849587,9.29128046 10.9709961,10.1702905 C12.4011153,10.7420424 13.6478136,11.7213845 14.5504193,13.0063333 C14.8043838,13.367877 14.7171736,13.866845 14.3556299,14.1208095 C13.9940863,14.374774 13.4951183,14.2875638 13.2411538,13.9260201 C12.049469,12.2295384 10.1119859,11.2 8,11.2 C5.87074761,11.2 3.9193386,12.2465854 2.73091382,13.9661082 C2.4797089,14.3295747 1.98141926,14.4205807 1.61795277,14.1693758 C1.25448627,13.9181708 1.16348029,13.4198812 1.41468521,13.0564147 C2.31951801,11.747219 3.57998876,10.7496137 5.02902023,10.1703034 L5.02902023,10.1703034 Z M8,9.6 C9.7673112,9.6 11.2,8.1673112 11.2,6.4 C11.2,4.6326888 9.7673112,3.2 8,3.2 C6.2326888,3.2 4.8,4.6326888 4.8,6.4 C4.8,8.1673112 6.2326888,9.6 8,9.6 Z" id="path-4"></path>
        </defs>
        <g id="Designs" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Designs/Store-1" transform="translate(-752.000000, -29.000000)">
            <g id="Icons-/-Oval-+-Icon" transform="translate(755.000000, 31.525000)">
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
              </mask>
              <g id="canvas-oval" fillRule="nonzero">
                <use fill="black" fillOpacity="1" filter="url(#filter-3)" xlinkHref="#path-1"></use>
                <use fill="#000000" xlinkHref="#path-1"></use>
              </g>
              <g id="Icons-/-1-Primary-/-User" mask="url(#mask-2)">
                <g transform="translate(8.000000, 8.000000)">
                  <mask id="mask-5" fill="white">
                    <use xlinkHref="#path-4"></use>
                  </mask>
                  <use id="fill" stroke="none" fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-4"></use>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export class Swoosh extends React.Component {
  render() {
    return (
      <svg width="84px" height="32px" viewBox="0 0 84 32" version="1.1">
        <title>Bitmap</title>
        <desc>Created with Sketch.</desc>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Designs/Scan" transform="translate(-238.000000, -31.000000)">
            <image id="Bitmap" x="237" y="31.525" width="86" height="30.9734375" xlinkHref="data:image/png;base64,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wIXRN7Lj+2YvB62TPRvZcz93UjfluCypM/hqoO+itanBvisTjQABAgQIECBAgAABAgQIECDQOgEDgK07JHMvqAYFH5nslzx0bepxPT/0Vtfm+05ySfLttV8vXvu1nqvX7ko0AgQIECBAgAABAgQIECBAgEBnBAwAduZQzb3Q7bOHhyT7JHuv/Tp6XN93/Q7E16UPdT2+OlOvvn4vqbP5Rl8vXft8DQJqBAgQIECAAAECBAgQIECAAIHeCBgA7M2hnHtHtswedkv2SHZf+/g++Vqpaw1ut/brDvlag4mVem7bZBatBvBuTa5Pblz7+Jp8rTvn1nX2Kj9a8nj03FV5rgb5ajmNAAECBAgQIECAAAECBAgQIDA4AQOAgzvkC+twDSButXbvm+XrSgODNdB359rl6ksN+hm8WwLiIQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQGKrA/w+XJLi9/E3hawAAAABJRU5ErkJggg==" />
          </g>
        </g>
      </svg>
    );
  }
}

export const Iffinity = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
      <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
    </svg>
  );
}

export default class Icon extends Component {

  _onClick = () => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    }
  }

  render() {
    const { icon, progress, theme, size, type, hide, url, children } = this.props;

    let svg = <span>{'icon'}</span>;

    switch (icon) {
      case ICONS.SETTINGS:
        svg = SETTINGS();
        break;
      case ICONS.MAP:
        svg = MAP();
        break;
      case ICONS.FILTER:
        svg = FILTER();
        break;
      case ICONS.CALENDAR:
        svg = CALENDAR();
        break;
      case ICONS.LEFT:
        svg = LEFT();
        break;
      case ICONS.RIGHT:
        svg = RIGHT();
        break;
      case ICONS.DOUBLELEFT:
        svg = DOUBLELEFT();
        break;
      case ICONS.DOUBLERIGHT:
        svg = DOUBLERIGHT();
        break;
      case ICONS.CROSS:
        svg = CROSS();
        break;
      case ICONS.CHECK:
        svg = CHECK();
        break;
      case ICONS.PAUSE:
        svg = PAUSE();
        break;
      case ICONS.PLAY:
        svg = PLAY();
        break;
      case ICONS.TIME:
        svg = TIME();
        break;
      case ICONS.BULB:
        svg = BULB();
        break;
      case ICONS.MENU:
        svg = MENU();
        break;
      case ICONS.PHONE:
        svg = PHONE();
        break;
      case ICONS.IMAGE_UPLOAD:
        svg = IMAGE_UPLOAD();
        break;
      case ICONS.IMAGE_TEMPLATE:
        svg = IMAGE_TEMPLATE();
        break;
      case ICONS.COLLAPSE:
        svg = COLLAPSE();
        break;
      case ICONS.FILE:
        svg = FILE();
        break;
      case ICONS.WAIVER:
        svg = WAIVER();
        break;
      case ICONS.CAMERA:
        svg = CAMERA();
        break;
      case ICONS.SEARCH:
        svg = SEARCH();
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
      default:
    }

    let styles = '';

    Object.values(THEME).forEach((v) => {
      if (v === theme) {
        styles = `${theme}`;
      }
    });

    // default to dark theme
    if (!styles) {
      styles += 'dark';
    }

    Object.values(SIZE).forEach((v) => {
      if (v === size) {
        styles += ` ${size}`;
      }
    });

    Object.values(TYPE).forEach((v) => {
      if (v === type) {
        styles += ` ${type}`;
      }
    });

    if (progress) {
      styles += ' progress';
    }

    if (hide) {
      styles += ' hide';
    }

    if (url) {
      return (
        <a href={url.to}>
          <div className={`icon ${styles}`}>
            {children}
            {svg}
          </div>
        </a>
      );
    }

    return (
      <div className={`icon ${styles}`} onClick={this._onClick}>
        {children}
        {svg}
      </div>
    );
  }
}