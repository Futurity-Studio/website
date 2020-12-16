import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {motion} from "framer-motion";
import {LabDetails, LabThumbnail} from "../../components/Labs/Lab";
import {LabData} from "../../constants";
import {Footer} from "../../components";

const Lab = () => {
  const [lab, setLab] = useState('');
  const router = useRouter()

  useEffect(() => {
    const slug = router.query.slug;
    if (slug && length > 1 ){
      const lab = LabData.find(l => router.query.slug[0])
      if(lab){
        setLab(lab)
      } // else handle that 404
    }
  },[router.query.slug])

  return (
    <motion.main
      className={'Labs'}
      initial={{  opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
    >
      <section className={'Labs--details'}>
        {/*<div className={'section-content'}>*/}
          { router.query.slug && router.query.slug[0] &&
            <>
          <LabThumbnail
            lab={LabData.find(lab => lab.encoded === router.query.slug[0])}
            expanded={true}
            key={0}
            forceClose={() => {}}
            closeSiblings={() => {}}
          />
          <LabDetails
            lab={LabData.find(lab => lab.encoded === router.query.slug[0])}
          />
          </>
          }
        {/*</div>*/}
      </section>
      <Footer/>
    </motion.main>
  )
}


export default Lab