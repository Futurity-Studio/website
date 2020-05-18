import './BorderButton.scss'

const BorderButton = ({backwards = false, content}) => {

  return( (!backwards) ?
    <div className={'border-button'}>
      <div />
      <div className={'border-button--button'}>
        <div className={'border-button--content'}>
          { content }
        </div>
      </div>
      <div className={'border-button--line'} />
    </div>
    :
    <div className={'border-button reverse'}>
      <div className={'border-button--line'} />
      <div className={'border-button--button'}>
        <div className={'border-button--content'}>
          { content }
        </div>
      </div>
      <div />
    </div>
  );
}

export default BorderButton