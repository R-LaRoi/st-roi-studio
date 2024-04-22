"use client";

import React from 'react';
import { projectData } from './projectData';
import './Stylesheets/workCards.css'

export const WorkCards = ()=> {

let showCards = projectData.map((item, index)=> {

if(index < 2)
return(

      <div className='wk-card-container ' key={item?.id} >
        <div className='wk-col-1'>
        <h2 style={{fontFamily:"Porlane" , fontSize:"4rem"}}>{item?.title}</h2>
        <p>{item?.text}</p> 
        </div>
  <div >
<img className='wk-col-2' src={item?.photo} alt="" />
  </div>
    
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