import React, { useEffect } from "react"
import pp from "../Images/profile-pic.png"
import Button from '@mui/material/Button'
import { Heading } from './Heading';
import { Card } from './Card';
import { Footer } from "./Footer";
import { motion, useScroll } from "framer-motion";


// let st1= {
//     "border" : "5px solid red"
// }
// let st2= {
//     "border" : "2px solid blue"
// }
// let st3= {
//     "border" : "2px solid purple"
// }
// let st4= {
//     "border" : "2px solid pink"
// }
function Home(){
    const { scrollYProgress } = useScroll();
      useEffect(()=>{
        window.scrollTo(0, 0);
      }, [])
    return(
        <>
        
            <motion.div style={{ scaleX: scrollYProgress }} /> 
            <Heading heading={"Full Stack Web Developer"} />
            <Card />
        </>
    )
}

export {Home}