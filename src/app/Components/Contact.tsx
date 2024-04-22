import './Stylesheets/contact.css'
import React, { useEffect } from "react";


export const Contact = (): React.ReactElement => {
return(
<section className="--contact p-8 ">
<div className="contact-card-container rounded-3xl p-5">
 <div className="ct-col-1">
Designer & Developer

 </div>

  <div className=" ct-col-2">
rachelstroy
 </div>
   <div className=" ct-col-3">
Available for freelance work.
 </div>
 <div className="">

 </div>
<div className=" ct-col-2 ">


<div className="center-text">Interested in <br/>
working together
</div>


<br/>
<div>Always happy to hear from you! </div>
<div>Send an email: </div>
<span><b>rachel@stroy.dev</b></span>
 </div>
   <div className=" ct-col-3">

 </div><div className="ct-col-1">
<div> 
<button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:bg-neutral-700 dark:hover:border-neutral-600 dark:focus:ring-neutral-700">
Back to top
<span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold  bg-slate-50 rounded-full">
<svg className="h-3 w-3 text-slate-500"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="18" y1="11" x2="12" y2="5" />  <line x1="6" y1="11" x2="12" y2="5" /></svg>
</span>
</button>

</div>
 </div>

  <div className=" ct-col-2">
<ul className= 'grid-link'>
<li className="ct-links">github</li>
<li className="ct-links">linkedin</li>
<li className="ct-links">
studio
</li>
</ul>
 </div>
   <div className=" ct-col-3">
 <small>2024 -- All Rights Reserved</small>
 </div>
</div>



</section>


)



}




