import { useRouter } from 'next/router'

import './Button.scss'


export const StealthButton = ({label, icon, link}) => {
  const router = useRouter();

  return(
    <div
      className={`Button-Stealth ${(link) ? 'link' : ''}`}
      onClick={ () => {
        if (link){
          router.push(link)
        }
      }}
    >
      <em>{ label }</em>
      { icon }
    </div>
  )
};
