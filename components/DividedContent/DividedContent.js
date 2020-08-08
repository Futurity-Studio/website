import "./DividedContent.scss"

const DividedContent = ({left, right, hiddenBar = false, smallLeft = false, smallRight = false}) => {
  return(
    <div className={`DividedContent ${smallLeft ? 'smallLeft' : ''} ${smallRight ? 'smallRight' : ''}`}>
      {left}
      <div className={'--vr ' + ((hiddenBar) ? 'hidden' : '')}/>
      <div>
        {right}
      </div>
    </div>
  )
}

export default DividedContent