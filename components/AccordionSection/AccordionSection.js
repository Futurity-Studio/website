import React, { useState, useEffect, useRef } from 'react';
import {Icon, ICONS, StealthButton, THEME} from "..";

import styles from './AccordionSection.module.scss'

const AccordionSection = ({header, children, toggle, className, reference, open, id}) => {
  const [ isOpen, setIsOpen ] = useState(open);
  const content = useRef(null);

  useEffect(() => {
    console.log(isOpen);
    // toggle(isOpen)
    // if (content && content.current){
    //   console.log('scrolling');
    //   // content.current.scrollTo(0,600);
    // }

    toggle(isOpen)
    // if (isOpen){
    // } else {
    // }
  }, [isOpen]);



  useEffect( () => {
    setIsOpen(open);
  }, [open]);

  return(
    <section
      className={`${styles.AccordionSection} ${isOpen ? 'open' : 'closed'} ${className}` }
      ref={reference}
      id={id}
    >
      <div
        className={'AccordionSection--header'}
        onClick={() => { setIsOpen(!isOpen) }}
      >
        {header}
        <div className={'AccordionSection--button'}>
          <StealthButton
            label={'learn more'}
            icon={(isOpen) ?
              <Icon icon={ICONS.MINUS} theme={THEME.DARK}/>
              :
              <Icon icon={ICONS.PLUS} theme={THEME.DARK}/>
            }
          />
        </div>
      </div>
      { isOpen && // todo - animate presence??
        <div className={'AccordionSection--contents'}>
          <div className={'section-content'} ref={content}>
            {children}
          </div>
        </div>
      }

    </section>
  )
}

export default AccordionSection;