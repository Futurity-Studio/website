import Link from 'next/link';
import {DividedContent, Icon, ICONS, removeWebpFormat, THEME} from "..";
import styles from './Footer.module.scss'
import { ROUTES, LINKS } from '../../constants';
import {useRouter} from "next/router";
import React, {useEffect, useState, useRef} from "react";
import {motion} from "framer-motion";


const Footer = () => {

  const footerNavRefs = LINKS.map(_ => useRef(null));

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
      opacity: 0,
      scale: .5
    },
    hover: {
      scale: 1,
      opacity: 1,
      // backgroundColor: 'rgba(247,247,247,1)',
      transition: {
        duration: .10,
        easings: "backInOut",
      }
    },
  }
  const arrowLoc = {
    initial: {
      x: -30
    },
    hover: {
      x: 0,
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
                                className={styles.navItemBasic}
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
                            backgroundImage: (background ? background.backgroundImage : null),
                            backgroundSize: (footerNavRefs[i] && footerNavRefs[i].current ? `${footerNavRefs[i].current.offsetWidth}px ${footerNavRefs[i].current.offsetHeight}px` : '100% 100%')
                          }}
                        >
                          <motion.div variants={arrowLoc}>
                            <Icon icon={ICONS.ARROW_RIGHT} theme={THEME.DARK} />
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
          medLeft={true}
          hiddenBar={true}
          left={<div>
            <Link prefetch={false} href={'mailto:inquiry@futurity.studio'}>
              <a target='_blank'>
                <h3>Eager to learn more?</h3>
                <div className={styles.cta}>
                  <em>contact us</em>
                  <Icon icon={ICONS.MAIL} theme={THEME.LINK_LIGHT} />
                </div>
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
              <div>
                <em>Find us at</em>
                <p><em>Barcelona, Spain</em><br />11 Carrer de Bailèn</p>
              </div>
              <Link prefetch={false} href={'https://www.linkedin.com/company/futurity-studio/'}>
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
            </div>
          }
        />
      </div>
    </section>
  )
}

export default Footer