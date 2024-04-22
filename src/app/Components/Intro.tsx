import React from 'react';
import {Contact} from './Contact'
import {Reveal} from './Reveal'
import {ScrollPage}  from './Scroll'
import {Btn} from './Btn'

import './Stylesheets/intro.css'
import { WorkCards } from './WorkCards';

export const Intro = (): React.ReactElement => {
return(
<section>
<section className="--intro ">
<Reveal>
<div className= 'double-cards'>
<div className="col-1"> 
<ScrollPage>
<div className='text-intro'>
 Hi! I &apos;m Rachel Stroy. I work with people to create web experiences that are user friendly and designed to go places. 
</div></ScrollPage>

<div>
<Btn>
  <span>meet rachel</span>
  </Btn>
  
</div>



</div>

 <video playsInline autoPlay muted loop className="col-2 rounded-2xl" id='jmp'>
        <source
          src="
https://github.com/R-LaRoi/st-studio-app/assets/114012059/dc455318-5eea-48d3-9e8a-7aeb69cf2166
"  type="video/mp4"
        />
      </video>

{/* <img  className="col-2 rounded-2xl" src="https://github.com/R-LaRoi/st-roi-studio/assets/114012059/ad4bc82d-3351-4f17-ae2a-66824e7bf460" alt="woman jumping rope"  /> */}

</div>
</Reveal>
</section>

<div className="horizontal-line">

</div>

<section className="about">
<Reveal>
  <div className="abt-title">
    about me
  </div>
</Reveal>
<Reveal>
<div>
As a creative developer, I focus on both design and development — allowing me to work on projects from concept until deployed. Focusing on unique layouts, interactions and great typography to offer user friendly web experiences.
</div>
</Reveal> 
</section>

<div className="horizontal-line"
>

</div>
<section className="about
">
  <ScrollPage>
  <div className="abt-title">
 Here&apos;s what I do
  </div>
  </ScrollPage>
<Reveal>
<div className="--cards ">
<div>
<div className=" h-full flex px-3 py-5 bg-neutral-700 rounded-lg ">
    <div className="max-w-sm rounded overflow-hidden ">
             <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="2em"
      width="2em"
 
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 01-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z" />
    </svg>
        <div className="  py-2">
            <div className="font-bold text-3xl pb-12">Web Development</div>
            <p className="text-white text-base mt-12 pt-20">
                Unique layouts, interactions and great typography is what I focus on when working on websites.
            </p>
        </div>
        <div className=" py-2">
            <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">React</span>
            <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Mongo</span>
         
        </div>
    </div>
</div>
</div>

<div>
<div className="h-full flex px-3 py-5 bg-neutral-700 rounded-lg ">
    <div className="max-w-sm rounded overflow-hidden ">
             <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="2em"
      width="2em"
 
    >
      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM513.1 518.1l-192 161c-5.2 4.4-13.1.7-13.1-6.1v-62.7c0-2.3 1.1-4.6 2.9-6.1L420.7 512l-109.8-92.2a7.63 7.63 0 01-2.9-6.1V351c0-6.8 7.9-10.5 13.1-6.1l192 160.9c3.9 3.2 3.9 9.1 0 12.3zM716 673c0 4.4-3.4 8-7.5 8h-185c-4.1 0-7.5-3.6-7.5-8v-48c0-4.4 3.4-8 7.5-8h185c4.1 0 7.5 3.6 7.5 8v48z" />
    </svg>
        <div className="  py-2">
            <div className="font-bold text-3xl pb-12">UX | UI Design</div>
            <p className="text-white text-base mt-12 pt-20">
              Designing for the web is not static. It&apos;s about interactions, animations, usability, consistency and so much more.
            </p>
        </div>
        <div className=" py-2">
            <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Figma</span>
            <span className="inline-block border border-white rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">Tailwind</span>
        </div>
    </div>
</div>

</div>
</div>

</Reveal>
</section>
<br/><br/><br/>
{/* <Contact/> */}

<WorkCards/>
</section>




);}