import styles from './BorderButton.module.scss'

const BorderButton = ({id, backwards = false, content, icon, light}) => {

  return( (!backwards) ?
    <div className={styles.BorderButton} id={(id || '')}>
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
      <div className={styles.BorderButtonReverse} id={(id || '')}>
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