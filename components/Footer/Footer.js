import Link from 'next/link';
import {DividedContent, Icon, ICONS, removeWebpFormat, THEME} from "..";
import styles from './Footer.module.scss'
import { ROUTES, LINKS } from '../../constants';
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";


const Footer = () => {
  const hoverAnimation = {
    color: 'rgba(247,247,247,0)',
    backgroundSize: '100% 100%',
    transition: {
      duration: .25,
      easings: "backInOut",
      // repeat: Infinity,
      // repeatType: "mirror"
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
      // TODO -- check the Link if it fires the base app.js vs react.push
      LINKS.map((n, i) =>
        <li
          key={n.title}
        >
          <div>
            <Link href={n.link}>
              <a>
                <motion.div
                  className={styles.bottomNav}
                  whileHover={hoverAnimation}
                  style={background}
                >
                  <em>{`${i + 1}.0`}</em><br/>
                  <h2>{n.title}</h2>
                </motion.div>
              </a>
            </Link>
          </div>
        </li>
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
                  <em>get in touch</em><Icon icon={ICONS.MAIL} theme={THEME.LINK_LIGHT} />
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
              <p><em>© Futurity Studios<br />Building Better Futures Faster</em></p>
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