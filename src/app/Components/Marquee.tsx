import React from "react";
import {motion} from "framer-motion";

import "./Stylesheets/marquee.css"

interface Props {
  children: JSX.Element;
 };

export const Marquee = ( {children}: Props) => {

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition:{
    x:{
      repeat: Infinity,
      reactType: "loop",
      duration: 7, 
      ease: "linear"
    },
  },
    },
}


  return(

<main>

  <div className= "marquee" >
    <motion.div
    className="track"
    variants={marqueeVariants}
    animate = 'animate'>
{children}
    </motion.div>
 

  </div>
</main>

  )


}