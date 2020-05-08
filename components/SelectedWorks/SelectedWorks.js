import "./SelectedWorks.scss"
import {DividedContent} from "../index";
import BorderButton from "../BorderButton/borderButton";

const works = [
  {type:'artifact', lab:'acommerce',
    title:'Frictionless Kitchen', subheading:'Home delivery with optimized supply chains.',
    cta:'view work →', date:'q1 - 2020'},
  {type:'artifact', lab:'acommerce',
    title:'BannaWorld', subheading:'Gamifying a way to a better consumer.',
    cta:'view work →', date:'q1 - 2020'},
  {type:'artifact', lab:'acommerce',
    title:'aCommerce in Retail', subheading:'Circular disruptions in fast fashion.',
    cta:'view work →', date:'q1 - 2020'}
]

const SelectedWorks = () => {
  //todo setup pagination
  const generateWorkTiles = () =>{
    return(works.map((w) => (
      <div className={'work-banner'}>
        <div className={'work-banner--content'}>
          <div>
            <div><em>{`${w.type} - ${w.date}`}</em></div><div><em>{w.lab}</em></div>
          </div>
          <h2>{w.title}</h2>
          <div>
            <h3>{w.subheading}</h3>
            <span>View Work</span>
          </div>
        </div>
      </div>
    )));
  }


  return(
    <>
      <div className={'section-content'}>
        <DividedContent
          leftHeader={
            <h1>Selected <br /> Works</h1>
          } >
          <span>With projects in <em>system design</em>, <em>tech prototyping</em>, and <em>interactive reports</em>, our studio a far cry from the traditional strategic consultancy.</span>
        </DividedContent>
      </div>
      <BorderButton />
      { generateWorkTiles() }
    </>
  )
}

export default SelectedWorks;