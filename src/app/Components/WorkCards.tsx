"use client";
import React, {useEffect, useRef} from 'react';
import { projectData } from './projectData';
import './Stylesheets/workCards.css'
import {motion, useScroll, useTransform} from 'framer-motion'
import Lenis from '@studio-freight/lenis'



export const WorkCards = ()=> {
  
const offset = -15;
const scaleCard = 0.009;
const container = useRef(null);

const {scrollYProgress} = useScroll({target:container,
offset:['start start', 'end end']})

const scale = useTransform (scrollYProgress, [0,1], [2,1])

useEffect(() => {
  const lenis = new Lenis()

  function raf(time: any) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


}, [])

let showCards = projectData.map((item, index)=> {


if(index < 3)

return(
<div ref={container} className='wrapper' key={item?.id} >
      <motion.div className='wk-card-container ' key={item?.id} style={{scale}}
         animate={{
                top: index * - offset,
                scale: 1 + index * scaleCard,
              }}
      
      >
        <div className='wk-col-1'>
        <h2 className="h2-title" >{item?.title}</h2>
        <p>{item?.text}</p> 
        </div>

<img className='wk-col-2' src={item?.photo} alt="" />


</motion.div>  

</div>

)

})


return(

  <>
  <section className=' '>
    {showCards}
  </section>
  
  </>
)



 
}