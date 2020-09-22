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
      className={`${styles.AccordionSection} ${isOpen ? styles.open : styles.closed} ${className}` }
      ref={reference}
    >
      <div onClick={() => { setIsOpen(!isOpen) }} lab={id}>
        {header}
        <div className={styles.buttonWrapper}>
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
        <div>
          <div className={'section-content'} ref={content}>
            {children}
          </div>
        </div>
      }

    </section>
  )
}

export default AccordionSection;