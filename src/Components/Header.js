import React, { useState } from "react"
import pp from "../Images/profile-pic.png"
import Button from '@mui/material/Button'
import { Link, NavLink } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
let st1= {
    "border" : "5px solid #202225"
}
let st2= {
    "border" : "5px solid blue"
}
let st3= {
    "border" : "5px solid purple"
}
let st4= {
    "border" : "5px solid pink"
}
function Header(){
    let [show, setShow] = useState(false)

    function s(state){
        if(state === "show"){
            setShow(true)
        }
        else if(state === "hide"){
            setShow(false)
        }
    }
    return(
        <>
            <div className="overflow-x-visible overflow-y-visible  container-fluid  border-[2px] h-[fit-content]  animate-slideinup500 opacity-0 bg-greyblur fixed w-[100vw] z-[20]">
                <div style={st1} className="z-1   h-[110px] blur absolute top-0 w-[100%]"> </div>
                <div className="grid grid-cols-2 h-[fit-content]  z-2 relative" >
                    <div className="px-[.9rem] py-[.5rem] flex items-center">
                        <Link to="/" className="flex">
                        <img src={pp} alt="Profile" className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] sm:w-[70px] sm:h-[70px] ml-[1.5rem] mr-[1rem] mt-[.5rem]" />
                        <p className="text-[2rem] md:leading-[3] sm:leading-[2.5] leading-[2] tracking-wider text-[#e8e8e8]">AM</p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-evenly pl-[2rem]" >
                        <div className="md:hidden flex ml-[50%]">
                        <MenuIcon className="hidden  sm:ml-[20%] text-[#414549]" onClick={(e)=>{s("show")}} style={{fontSize :'2rem', cursor : "pointer"}} /> 
                        </div>
                        <ul className="md:flex hidden">
                            <NavLink to="/about" ><Button variant="text" className="" style={{"color":"#e8e8e8", "fontSize" : "1.05rem", "margin-right": "2vw"}}>About</Button></NavLink>
                            <Link to="/work"><Button variant="text" style={{"color":"#e8e8e8", "fontSize" : "1.05rem", "margin-right": "2vw"}}>Work</Button></Link>
                            <Link to="/contact"><Button variant="outlined" style={{"fontSize" : "1.05rem",}}>Get in Touch</Button></Link>
                        </ul>
                    </div>

                    <div className="">
                    <ul className={`flex flex-col absolute top-[30%] z-[50] duration-[.4s]  ${(show) ? 'right-[0%]' : 'right-[-100%]' } h-[100vh] z-[20] bg-[#202225] md:w-[50vw]`} >
                        <CloseIcon className="relative text-right text-[#414549]" style={{textAlign: "right",  margin: "5% 3%", fontSize :'2rem', cursor : "pointer"}} onClick={(e)=>{s("hide")}} />
                            <Link to="/about" className="text-center"><Button variant="text" className="" style={{"color":"#e8e8e8", "fontSize" : "1.05rem", "margin-right": "2vw", "marginTop": "5%"}}>About</Button></Link>
                            <Link to="/work" className="text-center"><Button variant="text" style={{"color":"#e8e8e8", "fontSize" : "1.05rem", "margin-right": "2vw", "marginTop": "5%"}}>Work</Button></Link>
                            <Link to="/contact" className="text-center"><Button variant="outlined" style={{"fontSize" : "1.05rem" , "margin": "none 2vw", "marginTop": "80px"}}>Get in Touch</Button></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Header}