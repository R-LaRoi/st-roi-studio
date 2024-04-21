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


<Intro />

</>
) 

: 
( <LoadPage />)
} 

</>
);
}