
import React from 'react'
import { motion} from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: 'fit-content' | "100%"};

export const Anime = ( {children, width = 'fit-content'}: Props) => {


  return (

<div style={{}}>
  <motion.button
whileHover={{scale:1.2 }}
whileTap={{ scale: .95, rotate: "2.5deg"}}

      >
        {children}
        </motion.button>

 {/* <motion.div
     variants ={{ 
      hidden: {left:0 },
       visible: {left:"100%" }
      }}
       initial="hidden"
      animate={slider}
      transition ={{ duration: 0.5, ease: 'easeIn'}} 
      style={{
position:'absolute',
top: 4,
bottom: 4,
left:0,
right:0,
background: '#f2f2f2',
zIndex:20,

      }}
      >
        {children}
        </motion.div> */}


</div>
  );
}

