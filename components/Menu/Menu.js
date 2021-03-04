import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { motion } from 'framer-motion';
import styles from "./Menu.module.scss"
import { ROUTES, LINKS } from '../../constants';
import {Footer, Icon, ICONS, THEME} from "../index";
import { useWindowSize, useWindowScroll, useLockBodyScroll } from "react-use";

const Menu = () => {
  const size = useWindowSize();

  const menuVariant = {
    initial: {
      opacity: 0
    },
    animateIn: {
      opacity: 1,
      height: (size.width < 880) ? 58 : 82,
      background: 'rgba(0, 0, 0, 0)',
      mixBlendMode: 'exclusion',
      transition: {
        ease: 'easeOut',
        duration: .25,
        staggerChildren: 0.3,
      },
    },
    open: {
      opacity: 1,
      height: size.height-16,
      bottom: '8px',
      background: 'rgba(19, 19, 19, 1)',
      mixBlendMode: 'normal',
      transition: {
        ease: 'easeOut',
        duration: .5,
        staggerChildren: 0.3,
      },
    }
  }

  const customChild = {
    initial: {
      opacity: 0

    },
    animateIn: {
      opacity: 1,
      transition: {
        duration: .3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: .3
      }
    },
  }

  const mobileMenuVariant = {
    initial: {
      opacity: 0
    },
    animateIn: {
      opacity: 0,
      transition: {
        duration: 0
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: .3,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
  }

  const mobileMenuLinkVariant = {
    initial: {
      opacity: 0,
      y: -25,
    },
    animateIn: {
      opacity: 0,
      y: -25,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .1,
        ease: 'easeInOut',
      }
    }
  }

  const mobileMenuContentVariant = {
    initial: {
      opacity: 0,
    },
    animateIn: {
      opacity: 0,
      y: -25,
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .1,
        ease: 'easeInOut',
      }
    }
  }


  const rocketAnimation = {
    initial: {
      y: 0,
      x:0
    },
    hover: {
      y:[0, 2, -1],
      x:[0, -2, 1],
      times: [0, .5, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeIn",
      }
    }
  }


  const router = useRouter();
  const [mobileMenu, setMobileMenu] = useState(false);
  // const scrollPos = useWindowScroll();
  // const [scrollYPos, setScrollYPos] = useState(0);
  useEffect(() => {
    if (size.width >= 800) {
      setMobileMenu(false)
    }
  }, [size]);
  useLockBodyScroll(mobileMenu);

  const generateNav = () => (
    LINKS.map( (n, i) =>
      // todo -- integrate the hover effect and the current effect
      <li
        key={n.title}
      >
        <Link href={n.link}>
          <a className={(router.asPath === n.link) ? styles.active : ''}>
            <em>{`${i+1}.0`}</em>
            <p>{n.title}</p>
          </a>
        </Link>
      </li>
    )
  )

  const generateMobileMenuContent = () => {
    return (
      LINKS.map((n, i) => {
        return (
          <motion.div
            key={n.title}
            onClick={() => {
              router.push(n.link).then(() => setMobileMenu(false));
            }}
            variants={mobileMenuContentVariant}
          >
            <em>{`${i + 1}.0`}</em>
            <h2 className={ (router.asPath === n.link) ? styles.currentMobileMenuLink : null}>
              {n.title}
            </h2>
          </motion.div>
        )
      })
    )}



  //
  // const generateMobileNav = () => (
  //   <>
  //     <motion.div variants={customChild}>
  //       <div
  //         className={styles.logoWrapper}
  //         onClick={() => {
  //           router.push(ROUTES.HOME);
  //         }}
  //       >
  //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
  //           <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
  //         </svg>
  //       </div>
  //     </motion.div>
  //     <em>menu</em>
  //   </>
  // )
  //
  // const generateDesktopNav = () => (
  //   <>
  //     <motion.div variants={customChild}>
  //       <div
  //         className={styles.logoWrapper}
  //         onClick={() => {
  //           router.push(ROUTES.HOME);
  //         }}
  //       >
  //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
  //           <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
  //         </svg>
  //         <Link href={'/'}>
  //           <a><span><em>Futurity Studio</em></span></a>
  //         </Link>
  //       </div>
  //     </motion.div>
  //     <motion.ul variants={customChild}>
  //       {generateNav()}
  //     </motion.ul>
  //     <motion.div variants={customChild} whileHover={"hover"}>
  //       <Link prefetch={false} href={'mailto:inquiry@futurity.studio'}>
  //         <a target="_blank">Contact
  //           <Icon
  //             icon={ICONS.ROCKET}
  //             theme={THEME.NAV_MIX}
  //             iconHoverAnimation={rocketAnimation}
  //           />
  //         </a>
  //       </Link>
  //     </motion.div>
  //   </>
  // )

  return(
    <motion.nav
      className={(mobileMenu) ? styles.Menu : styles.MenuHiddenMobileContents}
      variants={menuVariant}
      initial={"initial"}
      animate={!(mobileMenu) ? "animateIn" : "open"}
    >
      <motion.div variants={customChild}>
        <div
          className={styles.logoWrapper}
          onClick={() => {
            router.push(ROUTES.HOME);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
            <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
          </svg>
          <Link href={'/'}>
            <a><span><em>Futurity Studio</em></span></a>
          </Link>
        </div>
      </motion.div>
      <motion.ul variants={customChild}>
        {generateNav()}
      </motion.ul>
      <motion.div
        className={styles.contactButton}
        variants={customChild}
        whileHover={"hover"}>
        <Link prefetch={false} href={'mailto:inquiry@futurity.studio'}>
          <a target="_blank">Contact
            <Icon
              icon={ICONS.ROCKET}
              theme={THEME.NAV_MIX}
              iconHoverAnimation={rocketAnimation}
            />
          </a>
        </Link>
      </motion.div>
      <motion.div
        className={styles.mobileMenuButton}
        variants={customChild}
        whileHover={"hover"}
        onClick={() => {setMobileMenu(!mobileMenu)}}
      >
        Menu
        { (mobileMenu) ?
          <Icon
            icon={ICONS.CROSS}
            theme={THEME.NAV_MIX_NUDE}
          />
          :
          <Icon
            icon={ICONS.MENU}
            theme={THEME.NAV_MIX_NUDE}
          />
        }
      </motion.div>
      <motion.div className={styles.mobileMenuIcons} variants={mobileMenuVariant}>
        <Link prefetch={false} href={'https://www.linkedin.com/company/FuturityStudio'}>
          <motion.a target='_blank' variants={mobileMenuLinkVariant}>
            <Icon icon={ICONS.LINKEDIN} theme={THEME.LIGHT}/>
          </motion.a>
        </Link>
        <Link prefetch={false} href={'https://twitter.com/FuturityStudio'}>
          <motion.a target='_blank' variants={mobileMenuLinkVariant}>
            <Icon icon={ICONS.TWITTER} theme={THEME.LIGHT}/>
          </motion.a>
        </Link>
        <Link prefetch={false} href={'https://www.youtube.com/channel/UC0QDU-sjWKesXRdNbhdKSgA'}>
          <motion.a target='_blank' variants={mobileMenuLinkVariant}>
            <Icon icon={ICONS.YOUTUBE} theme={THEME.LIGHT}/>
          </motion.a>
        </Link>
        <Link prefetch={false} href={'https://www.facebook.com/FuturityStudio/'}>
          <motion.a target='_blank' variants={mobileMenuLinkVariant}>
            <Icon icon={ICONS.FACEBOOK} theme={THEME.LIGHT}/>
          </motion.a>
        </Link>
        <Link prefetch={false} href={'https://www.instagram.com/futurity.studio'}>
          <motion.a target='_blank' variants={mobileMenuLinkVariant}>
            <Icon icon={ICONS.INSTAGRAM} theme={THEME.LIGHT}/>
          </motion.a>
        </Link>
        <Link prefetch={false} href={'https://medium.com/@futuritystudio'}>
          <motion.a target='_blank' variants={mobileMenuLinkVariant}>
            <Icon icon={ICONS.MEDIUM} theme={THEME.LIGHT}/>
          </motion.a>
        </Link>
        <Link href={'https://g.page/MOB-BLN?share'} prefetch={false}>
          <motion.a target={"_blank"} variants={mobileMenuLinkVariant}>
            <Icon icon={ICONS.PIN} theme={THEME.LIGHT}/>
          </motion.a>
        </Link>
      </motion.div>
      <motion.div className={styles.mobileMenuContent} variants={mobileMenuVariant}>
        { generateMobileMenuContent() }
        <motion.div variants={mobileMenuContentVariant}>
          <em>
            <br />Copyright &#169; Futurity Studio
          </em>
        </motion.div>
      </motion.div>
    </motion.nav>
  )
}

export default Menu;
