import "./DividedContent.scss"

const DividedContent = ({left, right, hiddenBar = false, smallLeft = false}) => {
  return(
    <div className={`DividedContent ${smallLeft ? 'smallLeft' : ''}`}>
      {left}
      <div className={'--vr ' + ((hiddenBar) ? 'hidden' : 'no')}/>
      <div>
        {right}
      </div>
    </div>
  )
}

export default DividedContent