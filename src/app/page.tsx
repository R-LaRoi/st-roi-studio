"use client";
import { useState, useEffect } from "react";
import {LoadPage} from './LoadPage'

export default function Home() {

 const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3500)
  }, [])

  return ( 
  
  <>

 { loading === false ? (
<section>
 <div>developer</div>
</section>

) 

: 
( <LoadPage />)
} 

</>
);
}