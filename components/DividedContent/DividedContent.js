import styles from "./DividedContent.module.scss"
// todo -- check with BEM

const DividedContent = ({left, right, hiddenBar = false, smallLeft = false, smallRight = false, medRight = false}) => {
  const generateClassName = () => {
    let className;
    if (smallLeft){
      return styles.smallLeft;
    } else if (smallRight){
      return styles.smallRight;
    } else if (medRight){
      return styles.medRight;
    } else {
      return styles.DividedContent;
    }
  }

  return(
    <div className={generateClassName()}>
      {left}
      <div className={`${styles.vr} + ${(hiddenBar) ? styles.hidden : ''}`}/>
      <div>
        {right}
      </div>
    </div>
  )
}

export default DividedContent