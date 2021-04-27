import {apiRunnerLabOfferings, defaultOffering, mapOfferingData} from "../../../helpers/api";
import {DividedContent, Footer, Icon, ICONS, Image, OfferingButton, THEME} from "../../../components";
import {motion} from "framer-motion";
import React from "react";
import {LabData} from "../../../constants";
import {LabThumbnail} from "../../../components/Labs/Lab";
import {useRouter} from "next/router";

const Offering = ({offering}) => {
  const router = useRouter();
  // console.log({offering})
  const lab = LabData.find(l => l.encoded === offering.lab.toLowerCase())

  return (
    <motion.main
      className={'Offering'}
      initial={{  opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
    >
      <section className={'Offering--details'}>
        <div className={'Offering--thumbnail'}>
          <div>
            <em>{offering.codedName}</em>
            <h2>{offering.name}</h2>
          </div>
          <div>
            <div>
              <em>{`${offering.contentType} Description`}</em>
              <p>{offering.descLong}</p>
              <em>{`${offering.contentType} Contents`}</em>
              <p>{offering.descContents}</p>
            </div>
            <OfferingButton
              externalLink={offering.storeLink}
              label={`View in store`}
              icon={<Icon icon={ICONS.ARROW_RIGHT} theme={THEME.TRANSPARENT} />}
              lab={offering.lab.toLowerCase()}
            />
          </div>
          <div>
            {
              <Image src={offering.photoFile} alt={offering.name}/>
            }
          </div>
        </div>
      </section>
      <section>
        <div className={'section-content'}>
          <LabThumbnail
            lab={lab}
            onClick={() => {
              router.push(`/lab/${lab.encoded}`)
            }}
          />
        </div>
      </section>
      <Footer />
    </motion.main>
  )
}

export async function getStaticProps(context) {
  const response = await apiRunnerLabOfferings();
  let offeringData;
  if (response.data) {
    offeringData = mapOfferingData(response.data.values)
  } else {
    offeringData = [defaultOffering]
  }
  const offering = offeringData.find(o => (encodeURI(o.name.replace(/ /g,'').replace(/\//g,'').replace(/:/g,'')) === context.params.offering));
  return {
    props: {
      offering:  offering
    },
    revalidate: 1
  }
}
export async function getStaticPaths() {
  const response = await apiRunnerLabOfferings();
  if (!response.data) {
    return {
      notFound: true,
    }
  }
  const offeringData = mapOfferingData(response.data.values)
  const paths = offeringData.map(o => ({
    params: {
      lab: o.lab.toLowerCase(),
      offering:encodeURI(o.name.replace(/ /g,'').replace(/\//g,'').replace(/:/g,''))
    }})
  )
  return { paths, fallback: true }
}

export default Offering;