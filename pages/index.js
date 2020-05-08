// import Layout from '../components/layout'
// import { attributes, html } from '../content/home.md'
//
// const Home = () => (
//   <Layout>
//     <h1>{attributes.title}</h1>
//     <div dangerouslySetInnerHTML={{ __html: html }} />
//     <style jsx>{`
//       h1,
//       div {
//         text-align: center;
//       }
//     `}</style>
//   </Layout>
// )
//
// export default Home

import {Menu, Footer, DividedContent, SelectedWorks} from "../components";

import './index.scss';
import BorderButton from "../components/BorderButton/borderButton";


const Home = () => (
  <main className={'index'}>
    <Menu />
    <section className={'hero-banner'}>
      <div className={'hero-banner--content'}>
        <div className={'blob'}/>
        <div>
          <em>we are futurity studio</em>
          <h1>A strategic R&D studio projecting and prototyping futures</h1>
          <em>learn more →</em>
        </div>
      </div>
      <div><em>explore more</em></div>
    </section>

    <section>
      <SelectedWorks />
    </section>

    <section className={'event-banner'}>
      <div className={'section-content'}>

        <DividedContent
          leftHeader={
            <h1>Ideas <br /> Worth <br /> Sharing</h1>
          } >
          <h2>2030 by 2023</h2>
          <h3>How covid is accelerating a decade of innovation</h3>
          <em>explore more events →</em>
        </DividedContent>
      </div>
    </section>

    <section className={'approach-banner'}>
      <div className={'section-content'}>
        <em>approach</em>
        <h1>Our methods help us discover, de-risk, and create value in future domains</h1>
        <em>learn more →</em>
      </div>
    </section>

    <Footer />
  </main>
)

export default Home