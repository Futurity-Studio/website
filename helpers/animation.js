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