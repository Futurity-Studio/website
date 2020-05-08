import './borderButton.scss'

const BorderButton = () => {
  return(
    <div className={'button-border'}>
      <div />
      <div className={'button-border--button'}>
        <em>filter by lab →</em>
      </div>
      <div className={'button-border--line'} />
    </div>
  )
}

export default BorderButton