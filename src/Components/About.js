import React, { useEffect } from 'react'
import { Heading } from './Heading'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import pp from "../Images/profile-pic.png"
import pp2 from "../Images/profile-pic-2.png"
import { NavLink } from 'react-router-dom';
import portfolio from "../Images/resume.pdf"

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
let b={
    "borderBottom" : ".5px solid #F0F0F080"
}

let b2={
    "border" : ".5px solid #F0F0F080"
}
function About() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      }, [])
  return (
    <>
    <div>
        <Heading heading={"About Me"}/>
        <div>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-3 px-[5%] py-[2%] animate-slidein500 opacity-0 '>
            <div className='md:col-span-3 '>
                <div className='rounded-[20px] px-[4%] py-[3%] bg-[#414549] my-[2%]'>
                    <div>
                        <p className='text-[2rem] text-[#e8e8e8] font-bold py-[5px]'>Arham Munir.</p>
                    </div>
                    <div>
                        <p className='text-[.9rem] text-[#F0F0F080] text-wrap py-[10px]'>I'm Arham Munir, a results-driven full-stack developer constantly driven to learn and evolve. My passion lies in crafting functional, user-friendly web experiences, from dynamic frontends to robust backends. Whether tackling performance optimization on an existing website or building custom applications from the ground up, I'm dedicated to solving challenges, adapting to new technologies, and delivering projects that shine.</p>
                    </div>
                    <div>
                        <a href={portfolio} download={true} className='text-indigo-500 text-[1.05rem] duration-[.4s] py-[20px] hover:text-indigo-600'>See Resume <ArrowForwardOutlinedIcon /></a>
                    </div>
                </div>
                <div className='row-span-2 col-span-1 rounded-[20px] px-[4%] bg-[#414549] my-[2%]'>
                    <div className='p-[20px]' style={b}>
                        <p className='text-[1.5rem] text-indigo-500 '>Education</p>
                        <hr />
                    </div>
                    <div>
                         <div className='p-[10px] px-[20px] '>
                            <p className='text-[1.05rem] text-[#F0F0F080] py-[5px]'>Bachelor's in Data Science <span>Continue</span></p>
                            <p className='text-[1.2rem] text-[#e8e8e8] py-[5px]'>NED University of Engineering & Technology</p>
                            <p className='text-[1.05rem] text-[#F0F0F080] py-[5px]'>2023</p>
                        </div>

                        <div className='p-[10px] px-[20px]'>
                            <p className='text-[1.05rem] text-[#F0F0F080] py-[5px]'>Intermediate</p>
                            <p className='text-[1.2rem] text-[#e8e8e8] py-[5px]'>Govt Dehli College</p>
                            <p className='text-[1.05rem] text-[#F0F0F080] py-[5px]'>2021 - 2023</p>
                        </div>
                        
                        <div className='p-[10px] px-[20px]'>
                            <p className='text-[1.05rem] text-[#F0F0F080] py-[5px]'>Matric</p>
                            <p className='text-[1.2rem] text-[#e8e8e8] py-[5px]'>Hayat ul Islam Academy</p>
                            <p className='text-[1.05rem] text-[#F0F0F080] py-[5px]'>2010 - 2021</p>
                        </div>
                    </div>
                </div>
                </div>

                <div className='col-span-2'>
                <div className='rounded-[20px] bg-[#414549] md:flex hidden my-[2%]'>
                    <div className='w-[100%] h-[300px] flex items-center justify-center'>
                        <img src={pp2} className='w-[300px] h-[300px]' />
                    </div>
                </div>
                <div className='p-[20px]   rounded-[20px] bg-[#414549] my-[2%]'>
                <div className='p-[10px]' style={b}>
                        <p className='text-[1.5rem] text-indigo-500 '>Skills</p>
                </div>

                    <div className='flex flex-wrap p-[20px]' >
                        <div className='px-[10px] py-[5px] m-[2%] text-[#F0F0F080] rounded-md'  style={{border : "2px solid #F0F0F080"}} >HTML</div>
                        <div className='px-[10px] py-[5px] m-[2%] text-[#F0F0F080] rounded-md'  style={{border : "2px solid #F0F0F080"}}>CSS</div>
                        <div className='px-[10px] py-[5px] m-[2%] text-[#F0F0F080] rounded-md'  style={{border : "2px solid #F0F0F080"}}>JavaScript</div>
                        <div className='px-[10px] py-[5px] m-[2%] text-[#F0F0F080] rounded-md'  style={{border : "2px solid #F0F0F080"}}>Tailwind CSS</div>
                        <div className='px-[10px] py-[5px] m-[2%] text-[#F0F0F080] rounded-md'  style={{border : "2px solid #F0F0F080"}}>Bootstrap</div>
                        <div className='px-[10px] py-[5px] m-[2%] text-[#F0F0F080] rounded-md'  style={{border : "2px solid #F0F0F080"}}>React JS</div>
                        <div className='px-[10px] py-[5px] m-[2%] text-[#F0F0F080] rounded-md'  style={{border : "2px solid #F0F0F080"}}>MongoDB</div>
                        <div className='px-[10px] py-[5px] m-[2%] text-[#F0F0F080] rounded-md'  style={{border : "2px solid #F0F0F080"}}>Node JS</div>
                    </div>
                </div>
                <div className='p-[20px] rounded-[20px] bg-[#414549] my-[2%]'>
                    <div className='p-[10px]' style={b}>
                            <p className='text-[1.5rem] text-[#e8e8e8]'> ~Let's Connect <span className='text-indigo-500'>together</span> </p>
                    </div>

                    <div className='flex p-[3%]'>
                        <NavLink to={"https://www.linkedin.com/in/arham-munir/"} target='_blank' className='m-[5%] px-[10px] py-[5px] flex justify-center items-center text-[#F0F0F080] duration-[.4s] group ease-in-out hover:bg-indigo-500' style={b2}>
                        <div className='px-[15px] py-[5px] flex justify-center items-center text-[#F0F0F080] duration-[.4s] ease-in-out  group-hover:text-[#e8e8e8]'>
                            <i className="fa fa-linkedin-square"> Linked in</i>
                        </div>
                        </NavLink>
                        
                        <NavLink to='https://github.com/arhammunir1104' target='_blank' className='m-[5%] px-[10px] py-[5px] flex justify-center items-center text-[#F0F0F080] duration-[.4s] group ease-in-out hover:bg-indigo-500' style={b2}>
                        <div className='px-[15px] py-[5px] flex justify-center items-center text-[#F0F0F080] duration-[.4s] ease-in-out  group-hover:text-[#e8e8e8]'>
                            <i className="fa fa-github"> <span className='mx-[5px]'>Github</span> </i>
                        </div>
                        </NavLink>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export  {About}