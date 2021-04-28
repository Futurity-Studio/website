import {motion} from "framer-motion";
import {apiRunnerIdeas, mapIdeaData} from "../helpers/api";
import React from "react";
import {Footer, Icon, ICONS, Idea, StealthButton, THEME} from "../components";
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

const Ideas = ({ideas}) => {
  // console.log(ideas)

  const ideaJSX = () => {
    return ideas.map((i,j) => {
      const descLong = hydrate(i.descLong)
      return(<Idea idea={i} key={j} descLong={descLong}/>)
    })
  }

  return(
    <motion.main
      className={'Ideas'}
      initial={{  opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      animate={{  opacity: 1, transition:{  delay: .25, duration: .25, easings: "linear" } }}
      exit={{     opacity: 0, transition:{  delay: .25, duration: .25, easings: "linear" } }}
    >
      <section>
        <div className={'section-content'}>
          <div className={'Ideas--container'}>
            <div>
              <div className={'details'}>
                <div>
                  <h1>Future Ideas</h1>
                  <div><em>Events</em><em>Podcasts</em><em>Blogs</em></div>
                </div>
                <p>
                  At Futurity Studio, we are constantly seeking opportunities to communicate our ideas. We value a forum to think and challenge our assumptions about the future of industry, society, technology, and design. Explore our events, podcasts, and blog posts. If you find anything intriguing or might want to invite us into your conversation, do not hesitate to contact us.
                </p>
                <StealthButton
                  label={'Contact Us about our content'}
                  onClick={() => (window.open('mailto:inquiry@futurity.studio', "") )}
                  icon={<Icon icon={ICONS.CHAT_BUBBLE} theme={THEME.DARK} />}
                />
              </div>
            </div>
            <div className={'content'}>
              {ideaJSX()}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.main>
  )

}
export async function getStaticProps(context) {
  const response = await apiRunnerIdeas();

  let ideas = mapIdeaData(response.data.values);

  const MDX = [];
  for(const i in ideas){
    MDX.push(await renderToString(ideas[i].descLong, { }));
  }
  ideas.forEach((i,j) => {
    i['descLong'] = MDX[j]
  })
  // console.log(ideas)


  // ideas.map(i => {
  //
  //
  //   const mdxObj = Object.assign({},i)
  //   mdxObj['descLong'] = await renderToString(card.descLong, { });
  //   return(mdxObj)
  // });

  return {
    props: {
      ideas,
    },
    revalidate: 1
  }
}
export default Ideas