import Link from 'next/link';
import React, { useState } from 'react';
import Icon, { ICONS, THEME, SIZE } from "../Icon/Icon";
import { motion } from 'framer-motion';
import BorderButton from "../BorderButton/BorderButton";


import "./menu.scss"
import {cubicBezier} from "../../helpers/animation";

const topNav = [
  {title: 'Work', link: '/work', children: [] },
  {title: 'About', link: '/about', children: [{title: 'Methodology'}, {title: 'Services'}, {title: 'Team'}] },
  {title: 'Labs', link: '/labs', children: [{title: 'aCommerce'}, {title: 'Foodturity'}, {title: 'neUIro'}] },
  {title: 'Events', link: '/events', children: [{title: 'Upcoming'}] }
]

const menuAnimation_variants = {
  open: {
    backgroundColor: 'rgba(58,58,58,1)',
    height: '100vh' // todo -- handle this for mobile
  },
  close: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: '80px'
  }
}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonHovering, setButtonHover] = useState(false);

  const generateTopNavContent = () => { // todo handle children
    return(
      topNav.map((n) => {

        let children = n.children.map(c =>  <div key={c.title}><p>{c.title}</p></div> );
        return(<li key={n.title}>
          <div>
            <Link href={n.link}>
              <a>
                <h1>{n.title}</h1>
              </a>
            </Link>
            <div>
              {children}
            </div>
          </div>
        </li>);
      })
    )
  }

  return(
    <motion.div
      className={'menu ' + (isOpen ? "open" : "close")}
      animate={(isOpen ? "open" : "close")}
      variants={menuAnimation_variants}
      transition={{ ease: cubicBezier, duration: .33 }}
    >
      <div className={'menu-contents'}>
        <div className={'menu-header'}>
          <div>
            <div className={'logo'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
                <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
              </svg>
            </div>
            <Link href={'/'}>
              <a><span><em>Futurity Studio</em></span></a>
            </Link>
          </div>
          <div
            className={'menu-button'}
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={ () => {setButtonHover(true)}}
            onMouseLeave={ () => {setButtonHover(false)}}
          >
            { (!isOpen) ?
              <>
                <Icon icon={ICONS.MENU} theme={THEME.DARK}/>
                <em>Menu</em>
              </>
              :
              <>
                <Icon icon={ICONS.CROSS} theme={THEME.DARK}/>
                <em>Close</em>
              </>
            }
            <motion.div className={'menu-button-background ' + (isButtonHovering ? "open" : "close")} />
          </div>
        </div>
        <div className={'menu-body'}>
          <nav className={'nav-top'}>
            <ul>
              { generateTopNavContent() }
            </ul>
            <div><h2>building better futures faster</h2></div>
          </nav>

          <BorderButton
            content={<>
              <em>get in touch</em>
              <Icon icon={ICONS.MAIL} theme={THEME.LIGHT} />
            </>}
          />

          <nav className={'nav-bottom'}>
            <Link prefetch={false} href={'mainto: inquiry@futurity.studio'}>
              <a target='_blank'>
                <span><em>Inquiry@Futurity.Studio</em></span>
              </a>
            </Link>
            <Link prefetch={false} href={'https://www.linkedin.com/company/futurity-studio/'}>
              <a target='_blank'>
                <Icon icon={ICONS.LINKEDIN} theme={THEME.LIGHT} />
              </a>
            </Link>
            <Link prefetch={false} href={'https://twitter.com/FuturityStudio'}>
              <a target='_blank'>
                <Icon icon={ICONS.TWITTER} theme={THEME.LIGHT} />
              </a>
            </Link>
            <Link prefetch={false} href={'https://www.youtube.com/channel/UC0QDU-sjWKesXRdNbhdKSgA'}>
              <a target='_blank'>
                <Icon icon={ICONS.YOUTUBE} theme={THEME.LIGHT} />
              </a>
            </Link>
            <Link href={'/privacy'}>
              <a>
                <span><em>Privacy</em></span>
              </a>
            </Link>
          </nav>
        </div>

      </div>
    </motion.div>
  )
}

export default Menu;