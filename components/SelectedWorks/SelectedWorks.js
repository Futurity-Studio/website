import "./SelectedWorks.scss"
import {DividedContent, ICONS, THEME} from "../index";
import BorderButton from "../BorderButton/BorderButton";
import Icon from "../Icon/Icon";

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
      <div className={'work-banner'} key={w.title}>
        <div className={'work-banner--content'}>
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
    <div className={'selected-works'}>
      <div className={'section-content'}>
        <DividedContent
          leftHeader={
            <h2>Selected <br /> Works</h2>
          } >
          <span>With projects in <em>system design</em>, <em>tech prototyping</em>, and <em>interactive reports</em>, our studio a far cry from the traditional strategic consultancy.</span>
        </DividedContent>
      </div>
      <BorderButton content={<em>filter by lab <Icon icon={ICONS.FILTER} theme={THEME.DARK} /></em>} />
      { generateWorkTiles() }
      <BorderButton content={<em>explore offerings <Icon icon={ICONS.RIGHT} theme={THEME.DARK} /></em>} backwards={true}/>
    </div>
  )
}

export default SelectedWorks;