"use client";
import { useState, useEffect } from "react";
import {LoadPage} from './Components/LoadPage'
import {NavBar} from './Components/Navigation'



export default function Home() {

 const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return ( 
  <>
 { loading === false ? (
<section>
<NavBar/>

<main>
  <h1 className="header-text">creative developer designer</h1>
</main>
</section>

) 

: 
( <LoadPage />)
} 

</>
);
}