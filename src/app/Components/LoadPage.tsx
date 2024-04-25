import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const LoadPage = ()=> {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);


  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });

    return animation.stop;
  }, []);

  return (

 <div className="bg-zinc-800 text-center">
  <motion.h1  
  style={{fontFamily:'Porlane', fontSize:"50rem", color:"#f2f2f2"}}>{rounded}</motion.h1>
  </div>
  )
 
}