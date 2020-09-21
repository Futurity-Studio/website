import React, { useState, useEffect } from 'react';
import { FeaturedArtifacts } from "../constants";
import {DeliverableSampler, DividedContent, Footer, Image} from "../components";
import Link from 'next/link';
import { motion } from "framer-motion";


function Deliverable({pathname, query, asPath, id}){
  let param = id || 'tomeato'
  const a =  FeaturedArtifacts.find(a => a.key === param);

  const generateContent = () => {
    return a.content.map( (c, i) => {
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
        }
      }

      if (a.images && a.images[i]){
        img = <img src={a.images[i]} />
      }

      return (
        <div key={i} className={'content-block'}>
          <h2>{c.header}</h2>
          <p>{c.content}</p>
          <div className={'content-special'}>{special}</div>
          <div className={'content-image'}  >{img}</div>
        </div>
      );
    })
  }

  const generateDetails = (a) => {
    return(
      <div className={'details'}>
        <em>Artifact Details:</em>
        <p>{a.details.time}</p>
        <Link href={a.details.lab.link}>
          <a><p>{a.details.lab.title}</p></a>
        </Link>
      </div>
    )
  }

  return(
    <motion.main
      className={'Deliverable'}
      initial={{  opacity: 0, transition:{  duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .25, easings: "linear" } }}
    >
      <section className={'banner'}>
        <Image alt={'tomeato'} src={'tomeato-optimized.gif'} />
        <div className={'section-content'}>
          <DeliverableSampler content={{tag: a.details.lab.title, header: a.title, subHeader: a.subTitle}} />
        </div>
      </section>
      <section className={'overview'}>
        <div className={'section-content'}>
          <DividedContent
            smallLeft={true}
            left={ generateDetails(a) }
            right={<h4>{a.details.question}</h4>}
          />
        </div>
      </section>

      {/*<section className={'media'}>*/}

      {/*</section>*/}

      <section className={'content'}>
        <div className={'section-content'}>
          {generateContent()}
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
