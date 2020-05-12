import Link from 'next/link';
import React, { useState } from 'react';
import Icon, { ICONS, THEME, SIZE } from "../Icon/Icon";
import { motion } from 'framer-motion';
import "./menu.scss"


const menuAnimation_variants = {
  open: {
    backgroundColor: 'black'
  },
  close: {
    backgroundColor: 'white'
  }
}

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return(
    <motion.div
      className={'menu'}
      animate={isOpen ? "open" : "close"}
      variants={menuAnimation_variants}
    >
      <div>
      <div className={'logo'}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 38">
        <path fill="#3A3A3A" fillRule="nonzero" d="M38.36.37c3.3.8 6.07 2.81 7.82 5.66a12.06 12.06 0 011.28 9.86l-1.24 4.02a3.45 3.45 0 01-4.28 2.25 3.35 3.35 0 01-2.35-4l.05-.17 1.33-4.34.04-.12a5.7 5.7 0 00-4.32-6.65 5.86 5.86 0 00-7.08 4.15c-.05.19-.11.37-.19.54L25.06 28.6a12.7 12.7 0 01-15.43 9.04A12.4 12.4 0 01.38 22.58c.04-.17.1-.33.17-.5l1.24-4.03a3.45 3.45 0 014.25-2.3 3.35 3.35 0 012.36 4.14l-.03.09-1.33 4.34-.05.15a5.71 5.71 0 004.6 6.7 5.85 5.85 0 006.85-4.4L22.9 9.4c.05-.22.13-.42.23-.63 1.96-6.25 8.65-10 15.23-8.39zM5.06 16A3.02 3.02 0 002 18.98a3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 005.05 16zm18.83 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0023.89 16zm19.06 0a3.02 3.02 0 00-3.05 2.98 3.02 3.02 0 003.05 2.98 3.02 3.02 0 003.06-2.98A3.02 3.02 0 0042.95 16z"/>
      </svg>
      </div>
        <h4>Futurity Studio</h4>
      </div>
      <div onClick={() => setIsOpen(!isOpen)}>
        <Icon icon={ICONS.MENU} theme={THEME.DARK} />
      </div>
    </motion.div>
  )
}

export default Menu;