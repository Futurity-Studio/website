import Link from 'next/link';
import {DividedContent, Icon, ICONS, removeWebpFormat, THEME} from "..";
import styles from './Footer.module.scss'
import { ROUTES, LINKS } from '../../constants';
import {useRouter} from "next/router";
import React, {useEffect, useState, useRef} from "react";
import {motion} from "framer-motion";
import { useWindowSize } from "react-use";

const Footer = () => {
  const router = useRouter();
  const footerNavRefs = LINKS.map(_ => useRef(null));
  const size = useWindowSize();

  const navAnimations = {
    initial: {
      color: 'rgba(247,247,247,1)',
    },
    hover: {
      color: 'rgba(247,247,247,0)',
      backgroundSize: '100% 100%',
      transition: {
        duration: .10,
        easings: "backInOut",
        // repeat: Infinity,
        // repeatType: "mirror"
      }
    }
  }
  const growArrow = {
    initial: {
      // opacity: 0,
      // scale: .1
    },
    hover: {
      // scale: 1,
      // opacity: 1,
      // backgroundColor: 'rgba(247,247,247,1)',
      transition: {
        duration: .10,
        easings: "backInOut",
      }
    },
  }
  const arrowLoc = {
    initial: {
      y: 40
    },
    hover: {
      y: 0,
      transition: {
        delay: .1,
        duration: .1,
        easings: "backInOut",
      }
    }
  }

  const [background, setBackground] = useState(null)
  useEffect(() => {
    const asset = removeWebpFormat() ? require('images/background--generic.jpg') : require('images/background--generic.jpg?webp');
    let background = { backgroundImage: `url('${asset}')`}
    setBackground(background);
  }, [])

  const generateNav = () => {
    return (
      LINKS.map((n, i) => {
          // if (n.children && n.children.length > 0) {
          //   return (
          //     <li key={n.title}>
          //       <div>
          //         <Link href={n.link}>
          //           <a>
          //             <motion.div
          //               className={styles.bottomNav}
          //               whileHover="hoverAnimation"
          //               variants={navAnimations}
          //               style={background}
          //             >
          //               <em>{`${i + 1}.0`}</em><br/>
          //               <h2>
          //                 {n.title}
          //               </h2>
          //             </motion.div>
          //           </a>
          //         </Link>
          //       </div>
          //     </li>
          //   )
          // } else {
          return (
            <li key={n.title} className={styles.navItemBasicContainer} ref={footerNavRefs[i]}>
              <div>
                <Link href={n.link}>
                  <a>
                    <motion.div
                      className={(router.asPath === n.link) ? styles.navItemBasicActive : styles.navItemBasic}
                      whileHover="hover"
                      initial="initial"
                      variants={navAnimations}
                      style={background}
                    >
                      <em>{`${i + 1}.0`}</em>
                      <h2>{n.title}</h2>
                      <motion.div
                        className={styles.navArrow} variants={growArrow}
                        style={{
                          // backgroundImage: (background ? background.backgroundImage : null),
                          // backgroundSize: (footerNavRefs[i] && footerNavRefs[i].current ? `${footerNavRefs[i].current.offsetWidth}px ${footerNavRefs[i].current.offsetHeight}px` : '100% 100%')
                        }}
                      >
                        <motion.div variants={arrowLoc}>
                          <Icon icon={ICONS.ARROW_RIGHT} theme={THEME.LINK_LIGHT} />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </a>
                </Link>
              </div>
            </li>
          )
          // }
        }
      )
    )
  }

  return(
    <section className={styles.Footer}>
      <div className={'section-content'}>

        <DividedContent
          medLeft={size.width >= 900}
          hiddenBar={true}
          left={<div>
            <Link prefetch={false} href={'mailto:inquiry@futurity.studio'}>
              <a target='_blank' className={styles.cta}>
                <motion.div whileHover="hover" initial="initial">
                  <h3>Let's Future.</h3>
                  <motion.div
                    className={styles.contactMail} variants={growArrow}
                  >
                    <motion.div variants={arrowLoc}>
                      <Icon icon={ICONS.MAIL} theme={THEME.LIGHT} />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </a>
            </Link>

          </div>}
          right={
            <div>
              <nav>
                <ul>
                  {generateNav()}
                </ul>
              </nav>
            </div>
          }
        />

        <DividedContent
          medLeft={true}
          hiddenBar={true}
          right={
            <div>
              <p><em>Building Better Futures Faster<br />Copyright &#169; Futurity Studio</em></p>
            </div>
          }
          left={
            <div>
              <div className={styles.location}>
                <Link href={'https://g.page/MOB-BLN?share'} prefetch={false}>
                  <a target={"_blank"}>
                    <div>
                      <Icon icon={ICONS.PIN} theme={THEME.NAV_MIX}/>
                      <p><em>Barcelona, Spain</em><br /><em>11 Carrer de Bailèn</em></p>
                    </div>
                  </a>
                </Link>
              </div>
              <Link prefetch={false} href={'https://www.linkedin.com/company/FuturityStudio'}>
                <a target='_blank'>
                  <Icon icon={ICONS.LINKEDIN} theme={THEME.LIGHT}/>
                </a>
              </Link>
              <Link prefetch={false} href={'https://twitter.com/FuturityStudio'}>
                <a target='_blank'>
                  <Icon icon={ICONS.TWITTER} theme={THEME.LIGHT}/>
                </a>
              </Link>
              <Link prefetch={false} href={'https://www.youtube.com/channel/UC0QDU-sjWKesXRdNbhdKSgA'}>
                <a target='_blank'>
                  <Icon icon={ICONS.YOUTUBE} theme={THEME.LIGHT}/>
                </a>
              </Link>
              <Link prefetch={false} href={'https://www.facebook.com/FuturityStudio/'}>
                <a target='_blank'>
                  <Icon icon={ICONS.FACEBOOK} theme={THEME.LIGHT}/>
                </a>
              </Link>
              <Link prefetch={false} href={'https://www.instagram.com/futurity.studio'}>
                <a target='_blank'>
                  <Icon icon={ICONS.INSTAGRAM} theme={THEME.LIGHT}/>
                </a>
              </Link>
              <Link prefetch={false} href={'https://medium.com/@futuritystudio'}>
                <a target='_blank'>
                  <Icon icon={ICONS.MEDIUM} theme={THEME.LIGHT}/>
                </a>
              </Link>
            </div>
          }
        />
      </div>
    </section>
  )
}

export default Footer