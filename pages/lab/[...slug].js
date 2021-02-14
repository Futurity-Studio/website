import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion";
import {LabDetails, LabThumbnail} from "../../components/Labs/Lab";
import {LabData} from "../../constants";
import {Footer} from "../../components";
import { useWindowSize } from "react-use";

const Lab = ({slug}) => {
  const lab = LabData.find(l => l.encoded === slug[0])
  const {width, height} = useWindowSize();

  useEffect(() => {
    console.log('window stuff')
    console.log(width)
    console.log(height)
  } )

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
          />
        </>
        }
      </section>
      <Footer/>
    </motion.main>
  )
}

Lab.getInitialProps = async ({ query }) => {
  const { slug } = query;
  return { slug };
};


export default Lab