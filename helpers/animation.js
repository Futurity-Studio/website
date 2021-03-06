export const cubicBezier = [0.61, 1, 0.88, 1];
const easeF = 'easeInOut';

// ~~ index ~~
export const indexBannerContainer = {
  initial:{
    opacity: 0
  },
  animate:{
    opacity: 1,
    transition: {
      duration: .25,
      delay: .5,
      staggerChildren: .2,
      ease: 'easeInOut',
    }
  },
  exit:{
    opacity: 0
  }
}

// ~~~~~~~

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


export const thumbnailBackgroundSize = {
  backgroundSize: '100% 150%',
  transition: {
    duration: 6,
    easings: "backInOut",
    repeat: Infinity,
    repeatType: "mirror"
  }
};

export const chatBubble = {
  initial: {
    y: 0,
    x:0
  },
  hover: {
    scale:[1, 1.1, .9],
    times: [0, .5, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeIn",
    }
  }
}
