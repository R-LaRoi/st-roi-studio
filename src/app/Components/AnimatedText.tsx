import { motion, useInView} from "framer-motion";
import { useEffect, useRef } from "react";

// export const AnimatedText = ({children}:{ children?: React.ReactNode })

const phrase= "Hi! Im Rachel Stroy. I work with people to create web experiences that are user friendly and designed to go places."


export const AnimatedText = ()   => {

const ref = useRef(null)
const sentence = 
{
hidden: {opacity:1},
visible:{ 

  opacity:1,
  transition: {

    delay: 0.5,
    staggerChildren:0.08,
  },
  }
}

const letter = { 

  hidden: {opacity: 0, y:50 },
  visible: {

    opacity:1, y:0
  }
}

return(

<motion.div
ref={ref}
className="intro-text"
variants={sentence}
initial="hidden"
animate="visible">


{phrase?.toString().split('').map((char:String, index:number)=> {
  // console.log(children)
return(

  <motion.span 
  key={char + '-' + index} 
  variants = {letter}
   > 
   {char}

   </motion.span>
)


})}

</motion.div>

)


}

