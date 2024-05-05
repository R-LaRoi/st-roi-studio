"use client"
import React, {useState} from "react";
import { Spin as Hamburger } from 'hamburger-react'
import './Stylesheets/nav.css'
import {motion} from "framer-motion";
import Link from "next/link"


const menu = {
  open: {transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}},
      closed: {

        // width: "100px",

        // height: "40px",

        top: "0px",

        right: "0px",

        transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}

    }

}



export const NavBar = (): React.ReactElement => {
const [navActive, setNavActive] = useState(false);

const showNavMenu = () => {
   setNavActive(!navActive)
  }

  return (

    <section className='nav-container'>
        <div className="-nav p-6">
       rachelstroy
              {/* <button className=" pill text-white font-bold ext-white font-bold py-1 px-3  rounded-full">
--
</button> */}
        </div>
 

        

{ navActive ? 
<>
<div onClick={showNavMenu} className="button">
     <Hamburger toggled={navActive} toggle={setNavActive}   /> 

        </div>  
 <motion.div 
 variants={menu}

                animate={navActive ? "open" : "closed"}

                initial="closed">

 <div className="overlay">

  <ul className=" nav-list text-left">

    <Link href ="/" ><li className='li-list'>
      <span className='number'>00.</span>
      <span>home</span>
      </li>

    </Link>
    <Link href ="/Menu/Work" > <li className='li-list'>
     <span className='number'>01.</span><span>work</span>
    </li></Link>
   <Link href ="/Menu/Connect"> <li className='li-list'>
     <span className='number'>02.</span><span>CONNECT</span>
    </li>
    </Link>
   
 <li className='li-list'>
     <span className='number'>03.</span><span><a href="https://www.rachelstroy.com/" target="_blank"> Studio_</a></span>
    </li>

 
  </ul> 


  </div>
 </motion.div>
 
</>


  :


<div onClick={showNavMenu} className="button">
 <Hamburger toggled={navActive} toggle={setNavActive} size={16} color="#292929" /> 

       
</div>

}


    </section>

  );
 
}


{/* <ul className=' wk-list mt-12'>
<li className='li-list'><span className='number'>01.</span><span>VIEW PROJECTS</span></li>
  <li className='li-list'><span className='number'>02.</span><span> DESIGN & DEVELOP</span></li>
  
  <li className='li-list'><span className='number'>03.</span><span><a href="https://www.rachelstroy.com/" target="_blank"> studio_ </a></span></li>
</ul> */}