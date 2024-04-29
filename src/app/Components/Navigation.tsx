"use client"
import React, {useState} from "react";
import { Spin as Hamburger } from 'hamburger-react'
import './Stylesheets/nav.css'
import {motion} from "framer-motion";


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
              <button className=" pill text-white font-bold ext-white font-bold py-1 px-3  rounded-full">
  Button
</button>
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

    <li>
   home
    </li>
    <li>
      work
    </li>
    <li>
      connect
    </li>
<li>studio </li>
{/* <div style={{ fontFamily:"Visby", fontSize:".8rem"}}>2024</div> */}
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