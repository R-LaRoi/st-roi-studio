"use client";
import { useState, useEffect } from "react";
import {LoadPage} from './Components/LoadPage'
import {NavBar} from './Components/Navigation'
import { Intro } from "./Components/Intro";


export default function Home() {

 const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return ( 
  <>
 { loading === false ? (

  <>
  <NavBar/>
<section>
<main>

  <div id="scroll-container" >
  <div className="header-text" id='scroll-text'>
    creative developer&nbsp;& digital designer 
    </div>  

  </div>
</main>
</section>

<section className="--intro ">
<div className="col-1">  Hi! I'm Rachel Stroy. I work with people to create web experiences that are user friendly and designed to go places. </div>


<img  className="col-2" src="https://github.com/R-LaRoi/st-roi-studio/assets/114012059/ad4bc82d-3351-4f17-ae2a-66824e7bf460" alt="woman jumping rope"  />
</section>

<div className="horizontal-line"
></div>
<section className="about ">
  <div className="abt-title">
    about me
  </div>
<div>
As a creative developer, I focus on both design and development — allowing me to work on projects from concept until deployed. Focusing on unique layouts, interactions and great typography to offer user friendly web experiences.
</div>
</section>
<div className="horizontal-line"
></div>
<section className="about ">
  <div className="abt-title">
 Here's what I do
  </div>
<div className="--cards">
<div>
<div className="flex px-3 py-3 bg-neutral-700">
    <div className="max-w-sm rounded overflow-hidden ">
             <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
 
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 01-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z" />
    </svg>
        <div className="  py-2">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-white text-base pt-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className=" py-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
         
        </div>
    </div>
</div>
</div>
<div>
<div className="flex px-3 py-3 bg-neutral-700 ">
    <div className="max-w-sm rounded overflow-hidden ">
       <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
 
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 01-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z" />
    </svg>
        <div className="  py-2">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div className=" py-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
         
        </div>
    </div>
</div>
</div>
</div>
</section>

</>
) 

: 
( <LoadPage />)
} 

</>
);
}