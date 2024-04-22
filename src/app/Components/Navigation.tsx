"use client"
import React, {useState} from "react";
import { Spin as Hamburger } from 'hamburger-react'
import './Stylesheets/nav.css'

import{Anime} from './Anime'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
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

<div onClick={showNavMenu} className="button">


     <Hamburger toggled={navActive} toggle={setNavActive}   /> 

        
  <div className="overlay">

  <ul className="nav-list w-full flex flex-col items-start text-3xl">
    <li>close</li>
    <li>
   home
    </li>
    <li>
      work
    </li>
    <li>
      connect
    </li>
  </ul> 
  </div>

  </div>

  :


<div onClick={showNavMenu} className="button">
 <Hamburger toggled={navActive} toggle={setNavActive} size={16} color="#292929" /> 

       
</div>

}


    </section>

  );
 
}