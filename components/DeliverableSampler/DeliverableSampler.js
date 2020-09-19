import React from 'react';
import styles from "./DeliverableSampler.module.scss";

const DeliverableSampler = ({content, router = null}) => {
  return(
    <div className={styles.DeliverableSampler}  onClick={() => {
      if (content.button.link) {
        router.push(content.button.link).then(() => window.scrollTo(0,0));
      }
    }}>
      <em>{content.tag}</em>
      <h1>{content.header}</h1>
      <h4>{content.subHeader}</h4>
    </div>
  )
}

export default DeliverableSampler;
