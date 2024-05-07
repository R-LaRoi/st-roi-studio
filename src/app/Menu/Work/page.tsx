"use client";

import React, {useEffect, useRef} from 'react';
import { projectData } from '../../Components/projectData';
import {motion, useScroll, useTransform} from 'framer-motion'
import Lenis from '@studio-freight/lenis'

import { NavBar } from "../../Components/Navigation";
import '../../Components/Stylesheets/workCards.css'
import '../../Components/Stylesheets/intro.css'



export default function ExploreWork() {

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


if(index < 5)

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

          <br/>     <br/> <br/>   
        <p className='wk-text-p  '>{item?.text}</p> 
 <div className='card-links'>
    <ul className= 'grid-link'>
      <a href={item?.git} target='_blank' >
        <li className="g-link"> github
        </li></a>
        <a href={item?.link} target='_blank'>
          <li className="g-link ">
          view
            </li></a>


        </ul></div>
        </div>

<img className='wk-col-2' src={item?.photo} alt="" />


</motion.div>  

</div>

)

})






  
return(

  <>
<NavBar />
<section className='pt-1'>
 

</section>
<section className='mp4-wrapper'>

  <div  className='parallax text-center' >

  </div>
 
 <img  className="mq-parallax" src="https://github.com/R-LaRoi/st-studio-app/assets/114012059/11968111-d19c-4f65-b09d-eefb362fbfad" alt="" />
<section className='p-12'>

{showCards}
</section>

</section>

  </>
)



}