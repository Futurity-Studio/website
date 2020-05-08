import "./dividedContent.scss"

const DividedContent = ({leftHeader, children}) => {
  return(
    <div className={'divided_content'}>
      {leftHeader}
      <div className={'--vr'} />
      <div>
        {children}
      </div>
    </div>
  )
}

export default DividedContent