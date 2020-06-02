import React, { useState, useEffect } from 'react';
import { FeaturedArtifacts } from "../constants";
import {DividedContent, Footer} from "../components";
import Link from 'next/link';


import '../theme/styles.scss';

function Deliverable({pathname, query, asPath, artifact}){
  const a = artifact;

  const generateContent = () => {
    return a.content.map( (c, i) => {

      let special = '';

      if (Object.keys(c).includes('special')) {

        switch (c.special.type) {
          case 'quote':
            special = (<>
              <h3>{c.special.body.text}</h3>
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


      return (
        <div key={i}>
          <h2>{c.header}</h2>
          <p>{c.content}</p>
          {special}
        </div>
      );
    })
  }

  return(
    <main className={'Deliverable'}>
      <section className={'overview'}>
        <div className={'section-content'}>
          <div className={'title'}>
            <h1>{artifact.title}</h1>
          </div>
          <DividedContent
            smallLeft={true}
            left={<div className={'details'}>
              <p>{a.details.time}</p>
              <Link href={a.details.lab.link}>
                <a><p>{a.details.lab.title}</p></a>
              </Link>
              <p>{a.details.length}</p>
              <Link prefetch={false} href={a.details.client.link}>
                <a target={'_blank'}><p>Delivered for {a.details.client.title}</p></a>
              </Link>
            </div>}
            right={<h4>{artifact.details.question}</h4>}
          />
        </div>

        <section className={'media'}>

        </section>

        <section className={'content'}>
          <div className={'section-content'}>
            {generateContent()}
          </div>
        </section>





      </section>
      <Footer/>
    </main>
  )
}

Deliverable.getInitialProps = async ({ pathname, query, asPath } ) => {
  const { id } = query;
  const artifact =  FeaturedArtifacts.find(a => a.key === id);
  return { pathname, query, asPath, artifact }
}

export default Deliverable;
