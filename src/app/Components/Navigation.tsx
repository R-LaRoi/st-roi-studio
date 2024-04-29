"use client"
import React, {useState} from "react";
import { Spin as Hamburger } from 'hamburger-react'
import './Stylesheets/nav.css'




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
</>


  :


<div onClick={showNavMenu} className="button">
 <Hamburger toggled={navActive} toggle={setNavActive} size={16} color="#292929" /> 

       
</div>

}


    </section>

  );
 
}