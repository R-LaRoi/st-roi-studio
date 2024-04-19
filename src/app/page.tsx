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

<section className="intro-container ">
  <div className="cards">
    <div className="card-one">
      Hi! I'm Rachel Stroy. I work with people to create web experiences that are user friendly and designed to go places. 
    </div>
 <div className="">
  <video playsInline autoPlay muted loop className='card-two' >
        <source
          src="https://github-production-user-asset-6210df.s3.amazonaws.com/114012059/324076058-6db53246-f840-47c1-981d-590307ba2fd4.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240419%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240419T183427Z&X-Amz-Expires=300&X-Amz-Signature=3569fd2904e6d86036241533e3be4aa4ab3da7a6ff2e3c31accefa051acfefa1&X-Amz-SignedHeaders=host&actor_id=114012059&key_id=0&repo_id=788236026"
          type="video/mp4"
        />
      </video>


     {/* <img  className="card-two" src="https://github.com/R-LaRoi/st-roi-studio/assets/114012059/ad4bc82d-3351-4f17-ae2a-66824e7bf460" alt="woman jumping rope"  /> */}
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