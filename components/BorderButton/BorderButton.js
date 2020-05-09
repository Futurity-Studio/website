import './BorderButton.scss'

const BorderButton = ({backwards, content}) => {

  return( (!backwards) ?
    <div className={'button-border'}>
      <div />
      <div className={'button-border--button'}>
        { content }
      </div>
      <div className={'button-border--line'} />
    </div>
    :
    <div className={'button-border reverse'}>
      <div className={'button-border--line'} />
      <div className={'button-border--button'}>
        { content }
      </div>
      <div />
    </div>
  );
}

export default BorderButton