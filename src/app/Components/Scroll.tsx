
import React, {useEffect, useRef} from 'react'
import { motion, useInView, useAnimation, useScroll } from "framer-motion";

const titleOne ="about me"
const title = {
  hiden:{opacity:1},
  visible:{ opacity: 1,
  transition:{
    delay: 0.5,
    staggerChildren:0.08,
  },},
  }
 const letter = {
    hiden:{opacity: 1},
  visible:{ opacity: 1, y:0,
  },}


type Props = 
 {
  children: JSX.Element;
  width?: 'fit-content' | "100%"};

export const ScrollPage = ( {children, width = 'fit-content'}: Props) => {

  return (

<div>
 <motion.div

 initial={{opacity:0 }}
 whileInView={{opacity:1 , x:0}}
  transition ={{ duration: 1, delay: .5}} 
  viewport={{ once:true}}

>
        {children}
        </motion.div>


</div>

  );
}

