import "./DividedContent.scss"

const DividedContent = ({left, right, hiddenBar = false}) => {
  return(
    <div className={'divided_content'}>
      {left}
      <div className={'--vr ' + ((hiddenBar) ? 'hidden' : 'no')}/>
      <div>
        {right}
      </div>
    </div>
  )
}

export default DividedContent