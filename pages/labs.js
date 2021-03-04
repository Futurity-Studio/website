import React, { useState, useEffect, useRef, useLayoutEffect }from 'react';
import { useRouter } from "next/router";
import { useIntersection } from "react-use";
import {AccordionSection, DividedContent, Footer, Icon, StealthButton, ICONS, THEME, BorderButton} from "../components";
import {LabData, LINKS, ROUTES} from "../constants/";
import Link from "next/link";
import {motion, useElementScroll} from "framer-motion";
import {LabGallery, LabThumbnail} from "../components/Labs/Lab";

const scrollToRef = (ref) => {
  window.scrollTo( 0, ref.current.offsetTop - 80, { behavior: 'smooth' });
}



const Labs = () => {
  const [selectedLab, setSelectedLab] = useState(null)
  const [viewingDetails, setViewingDetails] = useState(false)
  const [siblingsStatus, setSiblingsStatus] = useState(LabData.map(_ => false))
  const router = useRouter();

  useEffect(() => {
    // console.log('Sibling Status updated')
    // console.log(siblingsStatus)
  },[siblingsStatus])

  const generateThumbnails = () => {
    return LabData.map((lab, i) => (
      <LabThumbnail
        lab={lab}
        expanded={viewingDetails}
        key={i}
        clicked={siblingsStatus[i]}
        onClick={() => {
          // console.log('running close siblings')
          let status = siblingsStatus.map(_ => false)
          // console.log(status)
          status[i] = true
          // console.log(status)

          setSiblingsStatus(status)
          router.push(`/lab/${lab.encoded}`)
        }}
      />)
    )
  }




  return(
    <motion.main
      className={'Labs'}
      initial={{  opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
    >
      <section className={'Labs--banner'}>
        <div className={'section-content'}>
          <DividedContent
            left={<h2>Labs</h2>}
            right={
              <>
                <h4>Labs are year long investigations, and experiments on a theme packaged for as a subscription service</h4>
                <StealthButton
                  label={'explore our services'}
                  icon={<Icon icon={ICONS.RIGHT} theme={THEME.DARK} />}
                  link={ROUTES.SERVICES}
                  onClick={() => {}}
                />
              </>
            }
          />
        </div>
      </section>
      <section className={'Labs--gallery'}>
        {/*<div className={'section-content'}>*/}
        {generateThumbnails()}
        {/*</div>*/}
      </section>
      <Footer/>
    </motion.main>
  )
}

export default Labs;