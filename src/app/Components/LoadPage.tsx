import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import '../Components/Stylesheets/loading.css'

export const LoadPage = ()=> {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);


  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });

    return animation.stop;
  }, []);

  return (
<section>
 <div className="text-center ">
  <motion.h1  className="load-body"
  style={{fontFamily:'var(--font-porlane)', fontSize:"15rem", color:"#f2f2f2"}}>{rounded}</motion.h1>
  </div>
<div className="load-name">rachelstroy_
</div>
  </section>
  )
 
}