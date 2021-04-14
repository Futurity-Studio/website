import {useRouter} from 'next/router'
import {LabData} from "../../../constants";
import {apiRunnerLabOfferings} from "../../../helpers/api";

const Offering = ({offering}) => {
  const router = useRouter()
  console.log({offering})
  const { id, comment } = router.query

  return (
    <>
      <h1>Post: {id}</h1>
      <h1>Comment: {comment}</h1>
    </>
  )
}

const testData = {
  acommerce: ['that', 'that1'],
  foodturity: ['thattt', 't', 'd','g'],
  neuiro: ['this', 'this1','this3']
}

export async function getStaticProps(context) {
  const offeringData = await apiRunnerLabOfferings();
  // console.log(context.params.offering)
  return {
    props: {
      offering:  offeringData.find(o => (
        encodeURI(o.name.replace(/ /g,'').replace(/\//g,'')) === context.params.offering)
      )
    },
  }
}
export async function getStaticPaths() {
  const offeringData = await apiRunnerLabOfferings();
  const paths = offeringData.map(o => ({
    params: {
      lab: o.lab.toLowerCase(),
      offering:encodeURI(o.name.replace(/ /g,'').replace(/\//g,''))
    },
  }))
  console.log(paths)
  return { paths, fallback: false }
}

export default Offering