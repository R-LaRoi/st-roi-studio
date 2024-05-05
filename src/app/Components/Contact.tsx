import './Stylesheets/contact.css'
import React, { useEffect } from "react";
import { Btn } from './Btn';

export const Contact = (): React.ReactElement => {
return(
<section className="--contact" >
<div className="contact-card-container rounded-3xl p-5 ">
 <div className="ct-col-1" id="contact">
Designer & Developer
 </div>
  <div className="  ct-col-2"  id="name">
rachelstroy
 </div>
   <div className=" ct-col-3">

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
<Btn>
  <span> back to top</span>
</Btn>

</div>
 </div>

  <div className=" ct-col-2">
<ul className= 'grid-link'>
<li className="ct-links">
  <a href="https://github.com/R-LaRoi">github</a>
  </li>
<li className="ct-links">
  <a href="https://www.linkedin.com">linkedin</a>
  </li>
<li className="ct-links">
  <a href="https://www.linkedin.com">studio</a>

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




