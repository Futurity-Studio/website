export const cubicBezier = [0.61, 1, 0.88, 1];

export const staggerContent ={
  animate: {
    transition: {
      delayChildren: 1.75,
      staggerChildren: 0.25
    }
  }
};

export const animateInUp= {
  initial: {
    opacity: 0,
    y: 15
  },
  animate: {
    opacity: 1,
    y: 0,
    transition:{
      duration: .2,
      ease: 'easeOut'
    }
  }
};

export const landingContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: .5,
      staggerChildren: .4,
      delayChildren: .2,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: .5,
      staggerChildren: .2,
      delayChildren: .1,
    }
  },
}

export const landingItems = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

// Todo finish this!
export const landingItemsHeading = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: {
    position: "fixed",
    top: 10,
  },
}