import { motion, useInView} from "framer-motion";
import { useEffect, useRef } from "react";


export const AnimatedText = ({children}:{ children: React.ReactNode })   => {


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
className=""
variants={sentence}
initial="hidden"
animate="visible">


{children?.toString().split('').map((char:String, index:number)=> {
return(

  <motion.span 
  key={char + '-' + index} 
  variants = {letter}
   > 
   {char}
   
   </motion.span>
)


})}

<br/>
{/* {phrase2.split('').map((char, index)=> {
return(

  <motion.span 
  key={char + '-' + index} 
  variants = {letter}
   > {char}</motion.span>
)
})} */}

</motion.div>

)


}

// words = phrase.split('')

// return words.map((word:any, i:any ) => {
// console.log(word)
//   return(
//   <div key={phrase + i}
//         style={{ display: 'inline-block', overflow: 'hidden' }}
//       >
//         <motion.div
//         className="text-intro"
//           style={{ display: 'inline-block', willChange: 'transform' }}
//           custom={i}
          
//         >
//           {word + (i !== words.length - 1 ? '\u00A0' : '')}
//         </motion.div>
//       </div>
//   )
  

// }


//   <div>
// <motion.div ref={ref}
//   style={{ display: "inline-block" }}
//   initial="hidden"
//      animate="visible"

//           variants={container}>
// <div className="container">


// </div>

// </motion.div>

//   </div>
