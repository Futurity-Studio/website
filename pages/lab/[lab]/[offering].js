import {apiRunnerLabOfferings, defaultOffering, mapOfferingData} from "../../../helpers/api";
import {Footer, Icon, ICONS, Image, OfferingButton, THEME} from "../../../components";
import {motion} from "framer-motion";
import React from "react";
import {LabData} from "../../../constants";
import {LabThumbnail} from "../../../components/Labs/Lab";
import {useRouter} from "next/router";

const Offering = ({offering, lab}) => {
  const router = useRouter();
  return (
    <motion.main
      className={'Offering'}
      initial={{  opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
    >
      { (offering && lab) &&
        <>
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
                  icon={<Icon icon={ICONS.ARROW_RIGHT} theme={THEME.TRANSPARENT}/>}
                  lab={offering.lab.toLowerCase()}
                />
              </div>
              <div>
                  <Image src={offering.photoFile} alt={offering.name}/>
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
        </>
      }
      <Footer />
    </motion.main>
  )
};

export async function getStaticProps(context) {

  const response = await apiRunnerLabOfferings();
  let offeringData;
  if (response.data) {
    offeringData = mapOfferingData(response.data.values)
  } else {
    offeringData = [defaultOffering]
  }

  // console.log({params: context.params})

  let offering;
  if (context.params.offering.length > 1) {
    offering = offeringData.find(o => (encodeURI(o.name.replace(/ /g, '').replace(/\//g, '').replace(/:/g, '').replace(/\./g, '')) === context.params.offering));
  } else {
    console.log('no param given')
    offering = defaultOffering;
  }
  let lab = LabData.find(l => l.encoded === offering.lab.toLowerCase())

  return {
    props: {
      offering,
      lab
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
  } else {
    const offeringData = mapOfferingData(response.data.values)
    const paths = offeringData.map(o => {
      return ({
        params: {
          lab: o.lab.toLowerCase(),
          offering: encodeURI(o.name.replace(/ /g, '').replace(/\//g, '').replace(/:/g, '').replace(/\./g, ''))
        }
      })
    })
    // console.log(paths)
    return {paths, fallback: true}
  }
}

export default Offering;