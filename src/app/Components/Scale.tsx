"use client";
import React, {useRef} from 'react';
import { projectData } from './projectData';
import './Stylesheets/workCards.css'
import {motion, useScroll, useTransform} from 'framer-motion'

export const WorkCards = ()=> {

const container = useRef(null);
const {scrollYProgress} = useScroll({target:container,
offset:['start end', 'start start']})
const scale = useTransform (scrollYProgress, [0,1], [2,1])

let showCards = projectData.map((item, index)=> {

if(index < 4)
return(
  
<div ref={container} className='wrapper'>
<motion.div style={{scale}}>
      <div className='wk-card-container ' key={item?.id} >
        <div className='wk-col-1'>
        <h2 style={{fontFamily:"Porlane" , fontSize:"4rem"}}>{item?.title}</h2>
        <p>{item?.text}</p> 
        </div>

<img className='wk-col-2' src={item?.photo} alt="" />


</div>  
</motion.div>
</div>

)

})


return(

  <>
  <section className='mt-12 p-8'>
    {showCards}
  </section>
  
  </>
)



 
}