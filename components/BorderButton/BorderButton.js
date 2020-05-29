import './BorderButton.scss'

const BorderButton = ({id, backwards = false, content, icon}) => {

  return( (!backwards) ?
    <div className={'border-button'} id={(id || '')}>
      <div />
      <div className={'border-button--button'}>
        <div className={'border-button--content'}>
          { content }
          { icon }
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
          { icon }
        </div>
      </div>
      <div />
    </div>
  );
}

export default BorderButton;