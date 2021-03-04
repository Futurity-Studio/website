import React, {useState, useEffect} from 'react'
import {motion} from "framer-motion";
import {LabDetails, LabThumbnail} from "../../components/Labs/Lab";
import {LabData} from "../../constants";
import {Footer} from "../../components";
import { useWindowSize } from "react-use";

const Lab = ({ lab }) => {
  // const lab = LabData.find(l => l.encoded === ((slug) ? slug[0] : null));
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

// Lab.getInitialProps = async ({ query }) => {
//   const { slug } = query;
//   return { slug };
// };

export async function getStaticProps(context) {
  // const { lab } = context.params;
  console.log(context)

  // const lab = LabData.find(l => l.encoded === ((slug) ? slug[0] : null));
  console.log(context.params.lab)
  // return { props: { lab:  LabData.find(l => l.encoded === ((slug) ? slug[0] : null))} };
  return {
    props: {
      lab:  LabData.find(l => l.encoded === context.params.lab)
    },
  }
}
export async function getStaticPaths() {
  const paths = LabData.map(l => ({
    params: { lab: l.encoded },
  }))
  return { paths, fallback: false }
}


export default Lab