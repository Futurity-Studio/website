import React, { useState, useEffect } from 'react';
import { FeaturedEvent } from "../constants";
import { Footer} from "../components";
import Link from 'next/link';
import dynamic from 'next/dynamic'
import { useRouter } from "next/router";

const ICalLink = dynamic(
  () => import("react-icalendar-link"),
  { ssr: false }
)

// import '../theme/styles.scss';
import {motion} from "framer-motion";

function Event({pathname, query, asPath, id}){
  let param = id || 'concord'
  const e =  FeaturedEvent.find(a => a.key === param);

  const router = useRouter();
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    // window is accessible here.
    setIsWindow(true);
  }, []);


  const generateContent = () => {
    return e.content.map( (c, i) => {

      return (
        <div key={i} className={'content-block'}>
          <h2>{c.header}</h2>
          <h4>{c.content}</h4>
        </div>
      );
    })
  }

  return(
    <motion.main
      className={'Event'}
      initial={{  opacity: 0, transition:{  duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  duration: .25, easings: "linear" } }}
    >
      <section className={'banner'} id={`background-${e.lab.toLowerCase()}`}>
        <div className={'section-content'}>
          <div className={'title'}>
            <h1>{e.title}</h1>
          </div>
        </div>
      </section>
      <section className={'content'}>
        <div className={'section-content'}>
          {generateContent()}
        </div>
      </section>
      <section className={'columned-content'}>
        <div>
          <p className={'lab-link'} onClick={() => router.push('/labs?lab=acommerce')}>Lab:&nbsp;{e.details.lab.title}</p>
          <p>{e.details.time}</p>
          { isWindow &&
            <ICalLink event={e.details.calendar}>
              <p>Add to Calendar</p>
            </ICalLink>
          }
        </div>
        <div className={'event-image'}>
        </div>
      </section>

      <section className={'event-footer'}>
        <div className={'section-content'}>
        <p>
          To participate in live voting and Q&A for this webinar,&nbsp;<Link href={'https://app.agoraviva.com/session_invite/193fffdd-f57b-4e5a-bc1d-9af1dffe6909/bbed9001-2e01-4401-b5d7-93f228fa1082'} prefetch={false}><a target={'blank'}>please sign up here.</a></Link>&nbsp;

          To view this and past webinars, please&nbsp;<Link href={'https://www.youtube.com/channel/UC0QDU-sjWKesXRdNbhdKSgA/'} prefetch={false}><a href={'_blank'}>check out the Futurity channel on YouTube.</a></Link>
        </p>
        </div>
      </section>

      <Footer/>
    </motion.main>
  )
}

Event.getInitialProps = async ({ query } ) => {
  const { id } = query;
  return { id };
}

export default Event;
