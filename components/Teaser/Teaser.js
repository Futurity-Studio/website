import React from 'react';

import './Teaser.scss';

const Teaser = ({label}) => {
  return(
    <div className={'Teaser'}>
      <div className={'down-line'}/><em>{label}</em>
    </div>
  )
}

export default Teaser;