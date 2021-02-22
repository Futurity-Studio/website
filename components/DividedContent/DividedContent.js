import styles from "./DividedContent.module.scss"
// todo -- check with BEM

const DividedContent = ({left, right, hiddenBar = false, smallLeft = false, smallRight = false, medRight = false, medLeft=false}) => {
  const generateClassName = () => {
    // console.log({
    //   smallLeft, smallRight, medRight, medLeft
    // })
    let base = styles.DividedContent;
    if (smallLeft){
      base = styles.smallLeft;
    } else if (smallRight){
      base = styles.smallRight;
    } else if (medRight){
      base = styles.medRight;
    } else if (medLeft){
      base = styles.medLeft;
    }
    return base;
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