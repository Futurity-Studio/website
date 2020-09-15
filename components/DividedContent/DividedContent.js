import styles from "./DividedContent.module.scss"
// todo -- check with BEM

const DividedContent = ({left, right, hiddenBar = false, smallLeft = false, smallRight = false}) => {
  let className = styles.DividedContent;
  className = (smallLeft && styles.smallLeft) || className
  className = (smallRight && styles.smallRight) || className

  return(
    <div className={className}>
      {left}
      <div className={`${styles.vr} + ${(hiddenBar) ? styles.hidden : ''}`}/>
      <div>
        {right}
      </div>
    </div>
  )
}

export default DividedContent