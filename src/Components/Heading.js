import React from "react";
import pp from "../Images/profile-pic.png";
import Button from '@mui/material/Button';
import { motion } from "framer-motion"
let st1= {
    "border" : "5px solid red"
}
let st2= {
    "border" : "2px solid blue"
}
let st3= {
    "border" : "2px solid purple"
}
let st4= {
    "border" : "2px solid pink"
}
function Heading({heading}){
    return(
        <>
        <motion.div layout animate={{y: -10, scale: 1, }} initial={{scale : 0}} transition={{duration: 1}}>
        {/* animate-slidein300 opacity-0 */}
            <div  className="h-[fit-content] p-[1rem] " >
                <p className="text-[2rem] sm:text-[3rem] md:text-[4rem] mt-[100px] tracking-[.7rem]  font-bold text-center text-[#F0F0F080]" style={{"transform" : "scale(1.05, 1.05)"}}>{heading}</p>
            </div>
        </motion.div>
        </>
    )
}

export {Heading}