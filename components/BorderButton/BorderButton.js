import styles from './BorderButton.module.scss'

const BorderButton = ({id, backwards = false, content, icon, light, smallPadding = false}) => {

  const generateClassName = () => {
    if (!backwards){
      return (smallPadding) ? styles.smallPadding : styles.BorderButton;
    }else {
      return (smallPadding) ? styles.smallPaddingReverse : styles.BorderButtonReverse;
    }
  }

  return( (!backwards) ?
    <div className={generateClassName()} id={(id || '')}>
      <div />
      <div>
        <div className={styles.content}>
          { content }
          { icon }
        </div>
      </div>
      <div className={`${light ? styles.lightRule : styles.darkRule}`}/>
    </div>
    :
      <div className={generateClassName()} id={(id || '')}>
        <div className={`${light ? styles.lightRule : styles.darkRule}`}/>
        <div>
        <div className={styles.content}>
          { content }
          { icon }
        </div>
      </div>
      <div />
    </div>
  );
}

export default BorderButton;