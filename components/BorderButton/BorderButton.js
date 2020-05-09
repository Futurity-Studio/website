import './BorderButton.scss'

const BorderButton = ({backwards, content}) => {

  return( (!backwards) ?
    <div className={'border-button'}>
      <div />
      <div className={'border-button--button'}>
        { content }
      </div>
      <div className={'border-button--line'} />
    </div>
    :
    <div className={'border-button reverse'}>
      <div className={'border-button--line'} />
      <div className={'border-button--button'}>
        { content }
      </div>
      <div />
    </div>
  );
}

export default BorderButton