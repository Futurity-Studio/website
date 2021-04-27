import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion";
import {LabDetails, LabThumbnail} from "../../../components/Labs/Lab";
import {LabData} from "../../../constants";
import {Footer} from "../../../components";
import { useWindowSize } from "react-use";
import { useRouter } from "next/router";
import {apiRunnerLabOfferings, defaultOffering, mapOfferingData} from "../../../helpers/api";


const Index = ({ lab, offerings }) => {
  // const router = useRouter();
  // const { lab } = router.query
  const {width, height} = useWindowSize();

  // useEffect(() => {
  //   console.log('window stuff')
  //   console.log(width)
  //   console.log(height)
  // } )
  //
  // const offeringData = apiRunnerLabOfferings();
  return (
    <motion.main
      className={'Labs'}
      initial={{  opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
    >
      <section className={'Labs--details'}>
        {lab &&
        <>
          <LabThumbnail
            lab={lab}
            expanded={true}
            key={0}
            forceClose={() => {}}
            closeSiblings={() => {}}
          />
          <LabDetails
            lab={lab}
            offerings={offerings}
          />
        </>
        }
      </section>
      <Footer/>
    </motion.main>
  )
}

export async function getStaticProps(context) {
  const lab = LabData.find(l => l.encoded === context.params.lab);
  const response = await apiRunnerLabOfferings();

  let offeringData;
  if (!response.data) {
    offeringData = defaultOffering;
  } else {
    offeringData = mapOfferingData(response.data.values)
  }
  let offerings = offeringData.filter(o => o.lab.toLowerCase() === lab.encoded);

  return {
    props: {
      lab,
      offerings
    },
  }
}


export async function getStaticPaths() {
  const paths = LabData.map(l => ({
    params: { lab: l.encoded },
  }))
  return { paths, fallback: true }
}


export default Index