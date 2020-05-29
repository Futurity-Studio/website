import './Button.scss'

export const StealthButton = ({label, icon}) => {
  return(
    <div className={'Button-Stealth'}>
      <em>{ label }</em>
      { icon }
    </div>
  )
};
