import React, { useState, useEffect } from 'react';
import { Icon, ICONS, THEME } from "..";

import './AccordionSection.scss'

const AccordionSection = ({header, children, toggle, className}) => {
  const [ isOpen, setIsOpen ] = useState(false);

  useEffect(() => {
    // console.log('effect hit');
      toggle(isOpen)
  }, [isOpen]);

  return(
    <section
      className={`AccordionSection ${isOpen ? 'open' : 'closed'} ${className}` }
      onClick={() => { setIsOpen(!isOpen) }}
    >
      <div className={'AccordionSection--header'}>
        {header}
        <div className={'AccordionSection--button'}>
          learn more
          { isOpen ?
            <Icon icon={ICONS.MINUS} theme={THEME.DARK} />
            :
            <Icon icon={ICONS.PLUS} theme={THEME.DARK} />
          }
        </div>
      </div>
      { isOpen && // todo - animate presence??
        <div className={'AccordionSection--contents'}>
          <div className={'section-content'}>
            {children}
          </div>
        </div>
      }

    </section>
  )
}

export default AccordionSection;