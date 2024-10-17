import React from "react";
import reactlogo from "../Images/react.png"
import mongologo from "../Images/mongodb.png"
import expresslogo from "../Images/express.png"
import nodelogo from "../Images/node-js.png"
import jslogo from "../Images/javascript.png"
import tailwindlogo from "../Images/tailwindcss.png"
import bootstraplogo from "../Images/bootstrap.png"
import portfolioPic from "../Images/portfolio.png"
import portfolio from "../Images/resume.pdf"
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';
import { Link, NavLink } from "react-router-dom";
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
function Card(){
    return(
        <>
            <div className="homeCardContainer "> 
                <div className="grid sm:grid-cols-5 grid-cols-1 p-[20px] sm:px-[80px] px-[30px] gap-3 relative animate-slidein500 opacity-0  ">
                    <div className="col-span-2  p-[40px] py-[50px] pt-[50px] bg-[#414549] rounded-[20px] relative z-0 overflow-hidden group z-1 cursor-pointer">
                        <p className="text-[2rem] font-bold text-indigo-500 py-[10px]">Hello 👋</p>
                        <p className="text-[2.5rem] font-bold text-[#e8e8e8] py-[10px]">I'm Arham Munir</p>
                        <p className="text-[1.3rem] text-[#F0F0F080] py-[10px]">~Lets Connect, Build & Grow Together</p>
                        {/* */}
                        <div className="absolute w-[100%] mx-[-40px] z-[20] duration-[.4s] ease-in-out bg-indigo-500 cursor-pointer bottom-[-10%] z-0 rounded-2xl h-[0%]   group-hover:h-[100%] group-hover:bottom-[0%]">
                            <Link to="/about" className="grid grid-cols-2 relative h-[100%]">
                            <div className="h-[100%] px-[10%] py-[30%]">
                                <p className="text-[2.8rem] font-bold  w-[100%] h-[100%] text-[#e8e8e8] group-hover:animate-slidein200 opacity-0"> Learn More About Me</p>
                            </div>
                            <div className="flex items-center justify-center p-[10%]">
                                <ArrowCircleRightOutlinedIcon className="group-hover:animate-slidein200 opacity-0" style={{fontSize: "3rem", color: "#e8e8e8"}}/>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-[#414549] w-[100%] rounded-[20px] col-span-3"  >
                        <div className="py-[30px]">
                            <p className="text-[#F0F0F080] text-[1.5rem] text-center">My <span className="text-indigo-500"> Core </span> Technologies</p>
                        </div>
                        <div className="grid sm:grid-cols-4 grid-cols-3 px-[20px] py-[20px] ">
                            <img src={reactlogo} className="w-[65px] h-[60px] m-[20px]"/>
                            <img src={nodelogo} className="w-[65px] h-[60px] m-[20px]"/>
                            <img src={expresslogo} className="w-[65px] h-[60px] m-[20px]"/>
                            <img src={mongologo} className="w-[65px] h-[60px] m-[20px]"/>
                            <img src={jslogo} className="w-[65px] h-[60px] m-[20px]"/>
                            <img src={tailwindlogo} className="w-[65px] h-[60px] m-[20px]"/>
                            <img src={bootstraplogo} className="w-[65px] h-[60px] m-[20px]"/>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-flow-col md:grid-rows-1 sm:grid-rows-2 grid-rows-4 gap-2 p-[20px] animate-slidein500 opacity-0">

                    <div  className="flex flex-col cursor-pointer group bg-[#414549] rounded-[20px] justify-center items-center">
                        <NavLink to={"https://github.com/arhammunir1104"} target="_blank">
                            <i className="fa fa-github text-[5rem] duration-[.3s] m-[10px] text-[#e8e8e8] group-hover:text-indigo-500 group-hover:scale-[1.2]"></i>
                            <p className="text-[1.5rem] text-[#e8e8e8] m-[10px]">GitHub</p>
                        </NavLink>
                    </div>

                    <div className=" relative flex flex-col cursor-pointer group bg-[#414549] overflow-hidden rounded-[20px] justify-center items-center">
                        <NavLink to={"https://www.linkedin.com/in/arham-munir/"} target="_blank">
                            <i className="fa fa-linkedin-square text-[5rem] duration-[.3s] m-[10px] text-[#e8e8e8]"></i>
                            <p className="text-[1.5rem] text-[#e8e8e8] m-[10px]">Linkedin</p>
                            
                            <div className="absolute w-[120%] md:mx-[-33%] sm:mx-[-33%] mx-[-42%] duration-[.4s] bg-indigo-500 cursor-pointer bottom-[-10%] z-0  h-[0%]  group-hover:h-[100%] group-hover:bottom-[0%]">
                            <NavLink to={"https://www.linkedin.com/in/arham-munir/"} target="_blank" className="grid grid-cols-2 relative h-[100%]">
                            <div className="h-[100%] px-[10%] py-[30%]">
                                <p className="sm:text-[2rem] text-[1.5rem] font-bold sm:mx-[0] ml-[15%] w-[100%] h-[100%] text-[#e8e8e8] group-hover:animate-slidein200 opacity-0">Let's Connect</p>
                            </div>
                            <div className="flex items-center justify-center p-[10%]">
                            <i className="fa fa-linkedin-square text-[3rem] duration-[.4s] z-[10] m-[10px] text-[#e8e8e8] group-hover:animate-slidein200 opacity-0"></i>
                            </div>
                            
                            </NavLink >
                        </div>
                        </NavLink>
                    </div>
                    <div className="h-[250px] relative flex flex-col cursor-pointer group bg-[#414549] overflow-hidden rounded-[12%] group duration-[.4s] ease-in hover:bg-indigo-500">
                    <NavLink to={"/work"}>
                        <div className="p-[10px]">
                            <p className="text-[2.5rem] text-left duration-[.4s] z-[10] text-indigo-500  group-hover:text-[#e8e8e8]">Portflio</p>
                        </div>
                        <div className="w-[100%]  absolute flex justify-center items-center mt-[-12%]">
                        <img src={portfolioPic} className="w-[250px] h-[200px] duration-[.4s] group-hover:scale-[1.05] "/>
                        </div>
                        </NavLink>
                    </div>
                    <div className="cursor-pointer group bg-[#414549] overflow-hidden rounded-[12%]">
                        <a href={portfolio} download={true}className="w-[100vw]">
                            <div className="h-[40%] flex justify-center items-center">
                                <SimCardDownloadOutlinedIcon className="text-[#e8e8e8]" style={{fontSize : "4rem"}}/>
                            </div>
                            <div className="h-[40%]">   
                                <p className="text-indigo-500 text-[1.5rem] text-center">Download</p>
                                <p className="text-[#e8e8e8] text-[1.5rem] text-center">Resume</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export {Card}