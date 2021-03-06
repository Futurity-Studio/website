import {DividedContent, ICONS, THEME, BorderButton, Icon} from "../index";
import styles from "./SelectedWorks.module.scss"

const works = [
  {type:'artifact', lab:'acommerce',
    title:'Frictionless Kitchen', subheading:'Home delivery with optimized supply chains.',
    cta:'view work →', date:'q1 - 2020'},
  {type:'action', lab:'acommerce',
    title:'BannaWorld', subheading:'Gamifying a way to a better consumer.',
    cta:'view work →', date:'q1 - 2020'},
  {type:'analysis', lab:'acommerce',
    title:'aCommerce in Retail', subheading:'Circular disruptions in fast fashion.',
    cta:'view work →', date:'q1 - 2020'}
]

const SelectedWorks = () => {
  //todo setup pagination
  const generateWorkTiles = () =>{
    return(works.map((w) => (
      <div className={styles.WorkBanner} key={w.title}>
        <div>
          <div>
            <div><em>{`${w.type} - ${w.date}`}</em></div><div><em>{w.lab}</em></div>
          </div>
          <h3>{w.title}</h3>
          <div>
            <h4>{w.subheading}</h4>
            <span>View Work</span>
          </div>
        </div>
      </div>
    )));
  }


  return(
    <div className={styles.SelectedWorks}>
      <div className={'section-content'}>
        <DividedContent
          leftHeader={
            <h2>Selected <br /> Works</h2>
          } >
          <span>With projects in <em>system design</em>, <em>tech prototyping</em>, and <em>interactive reports</em>, our studio a far cry from the traditional strategic consultancy.</span>
        </DividedContent>
      </div>
      <BorderButton
        content={<em>filter by lab</em>}
        icon={<Icon icon={ICONS.FILTER} theme={THEME.DARK} /> }
      />
      { generateWorkTiles() }
      <BorderButton
        content={<em>explore offerings</em>}
        icon={<Icon icon={ICONS.RIGHT} theme={THEME.DARK} /> }
        backwards={true}
      />
    </div>
  )
}

export default SelectedWorks;