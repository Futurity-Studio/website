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

import {Menu, Footer, DividedContent, SelectedWorks, ICONS, THEME} from "../components";

import '../theme/index.scss';
import BorderButton from "../components/BorderButton/BorderButton";
import Icon from "../components/Icon/Icon";


const Home = () => (
  <main className={'index'}>
    <Menu />
    <section className={'hero-banner'}>
      <div className={'hero-banner--content'}>
        <div className={'blob'}/>
        <div>
          <em>welcome to futurity studio</em>
          <h1>We're a R&D studio projecting and prototyping futures.</h1>
        </div>
      </div>
      <div><div className={'down-line'}/><em>explore more</em></div>
    </section>

    <section>
      <SelectedWorks />
    </section>

    <section className={'event-banner large'}>
      <div className={'section-content'}>
        <DividedContent
          leftHeader={
            <h2>Ideas <br /> Worth <br /> Sharing</h2>
          } >
          <h3>2030 by 2023</h3>
          <h4>How covid is accelerating a decade of innovation</h4>
          <em>explore more events <Icon icon={ICONS.RIGHT} theme={THEME.DARK} /></em>
        </DividedContent>
      </div>
    </section>

    <section className={'approach-banner large'}>
      <div className={'section-content'}>
        <em>approach</em>
        <h2>Our methods help us discover, de-risk, and create value in future domains</h2>
        <em>learn more <Icon icon={ICONS.RIGHT} theme={THEME.DARK} /></em>
      </div>
    </section>

    <Footer />
  </main>
)

export default Home