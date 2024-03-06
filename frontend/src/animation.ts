export const homeProductLeftToRight = {
    hidden: {
        opacity: 0,
        x: 20,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.2,
        },
    },
};

export const homeProductRightToLeft = {
    hidden: {
        opacity: 0,
        x: -20,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.2,
        },
    },
};



export const boxVariant = {
    hidden: {
      opacity: 0,
      scale: 0, 
    },
    show: {
      opacity: 1,
      scale: 1, 
      transition: {
        duration: 2,
        type: 'spring',
        // stiffness: 300,
        // damping: 20, 
      },
    },
  };
  


export const textVarient = {
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            delay: 0.2,
        },
    },
};
