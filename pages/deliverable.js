import React, { useState, useEffect } from 'react';
import {FeatureContent, ROUTES} from "../constants";
import {DeliverableSampler, DividedContent, Footer, Icon, ICONS, Image, StealthButton, THEME} from "../components";
import Link from 'next/link';
import { motion } from "framer-motion";


function Deliverable({pathname, query, asPath, id}){
  let param = id || 'tomeato'
  const deliverable =  FeatureContent.find(a => a.key === param);

  const generateContent = () => {
    return deliverable.content.map( (c, i) => {
      let special = '';
      let img = '';

      if (Object.keys(c).includes('special')) {
        switch (c.special.type) {
          case 'quote':
            special = (<>
              <h4>"{c.special.body.text}"</h4>
              <span><em>{c.special.body.from}</em></span>
            </>)
            break;
          case 'list':
            special = (<ul>
              {c.special.body.text.map((t,i) => <li key={i}><p>{t}</p></li>)}
            </ul>)
            break;
          case 'link':
            special = (<>
              <p>{c.special.body}</p>
              <a href={c.special.link.url} target="_blank">{c.special.link.text}</a>
            </>)
            break;
        }
      }

      if (deliverable.images && deliverable.images[i]){
        img = <Image src={deliverable.images[i].src} alt={deliverable.images[i].alt}/>
      }

      return (
        <div key={i} className={'content-block'}>
          <h3>{c.header}</h3>
          <p>{c.content}</p>
          { (special) &&  <div className={'content-special'}>{special}</div> }
          { (img) && <div className={'content-image'}>{img}</div> }
        </div>
      );
    })
  }

  const generateDetails = (copy) => {
    return(
      <div className={'details'}>
        <em>Artifact Details:</em>
        <p>{copy.details.time}</p>
        <Link href={copy.details.lab.link}>
          <a><p>{copy.details.lab.title}</p></a>
        </Link>
        { (copy.details.collab) &&
        <a href={copy.details.collab.link} target="_blank">
          <p>{copy.details.collab.title}</p>
        </a>
        }
      </div>
    )
  }

  return(
    <motion.main
      className={'Deliverable'}
      initial={{opacity: 0, transition: {duration: .25, easings: "linear"}}}
      animate={{opacity: 1, transition: {duration: .25, easings: "linear"}}}
      exit={{opacity: 0, transition: {duration: .25, easings: "linear"}}}
    >
      <section className={'banner'}>
        <Image
          alt={deliverable.banner.header}
          src={deliverable.banner.image}
          mobile={deliverable.banner.mobileImage || false}
          backup={deliverable.banner.backupImage || false}
        />
        <div className={'section-content'}>
          <DeliverableSampler content={{tag: deliverable.details.lab.title, header: deliverable.header, subHeader: deliverable.subHeader}}/>
        </div>
      </section>
      <section className={'overview'}>
        <div className={'section-content'}>
          <DividedContent
            smallLeft={true}
            left={generateDetails(deliverable)}
            right={<h4>{deliverable.details.shortDesc}</h4>}
          />
        </div>
      </section>
      <section className={'content'}>
        <div className={'section-content'}>
          {generateContent()}
        </div>
        <div className={'section-content'}>
          <DividedContent
            medLeft={true}
            right={
              <div>
                <p>{deliverable.details.lab.desc}</p>
                <StealthButton
                  label={'explore this lab'}
                  icon={<Icon icon={ICONS.RIGHT} theme={THEME.DARK} />}
                  link={deliverable.details.lab.link}
                />
              </div>
            }
            left={<h3>{deliverable.details.lab.title}</h3>}
          />
        </div>
      </section>
      <Footer/>
    </motion.main>
  )
}

Deliverable.getInitialProps = async ({ query } ) => {
  const { id } = query;
  return { id };
}

export default Deliverable;
