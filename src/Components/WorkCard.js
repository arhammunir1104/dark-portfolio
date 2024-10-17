import React, { useEffect, useState } from 'react'
import backPic from "../Images/gradient.png"
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import pp from "../Images/portfolio.png"
let st1= {
    "border" : "5px solid red"
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

let b2={
    "border" : "2px solid #F0F0F080"
}
function WorkCard({sno, title, des, t ,skills, plink, git, pic}) {
 
  return (
    <>
    
    <div className='px-[5%] py-[2%] animate-slidein200 opacity-0'>
        <div style={b2} className='grid sm:grid-cols-2 grid-cols-1 relative rounded-[40px]'>
            <div className='absolute w-full h-full z-0 blur rounded-[40px]'><img src={backPic} className='w-[100%] h-[100%] rounded-[40px]' /></div>
            <div className='relative z-1 px-[5%] py-[5%]'>
                <div>
                    <p className='text-[1.5rem] text-[#e8e8e8] my-[5px]'>{sno} - {title}</p>
                </div>    
                <div>
                    <p  className='text-[.9rem] leading- text-[#F0F0F080] my-[10px]'>{des}</p>
                </div>    
                <div>
                    <p className='text-indigo-500 text-[1.2rem] py-[10px]'>Tech Stacks</p>
                    {/* {skills.map((val)=>{return(<><p>{val}</p></>)})} */}
                    <div className='flex flex-wrap p-[20px]' >
                        {skills.map((val)=>{
                            return(
                            <>
                                <div className='px-[10px] py-[5px] m-[1%] text-[#e8e8e8] rounded-md'  style={{border : "2px solid #F0F0F080"}}>{val}</div>
                            </>
                            )
                        })}
                    </div>
                </div>
                <div className='my-[2%] grid md:grid-cols-2 grid-cols-2'>
                    <a href={plink} target='_blank' className='px-[4%] text-center py-[2%] my-[2%] mx-[5%] rounded-md bg-indigo-500 text-[#e8e8e8] duration-[.4s] ease-in-out hover:bg-indigo-600'>Preview Link <ArrowOutwardOutlinedIcon /> </a>
                    <a href={git}  target='_blank' className='px-[4%] text-center py-[2%] my-[2%] mx-[5%] rounded-md bg-indigo-500 text-[#e8e8e8] duration-[.4s] ease-in-out hover:bg-indigo-600'><i className="fa fa-github mr-[2%]"></i>Source Code</a>
                </div>
            </div>    
            <div className='relative z-1 px-[5%] py-[5%]'>
                <div className='flex flex-wrap justify-center items-center' >
                    <img src={pic} className='w-[100%] h-[50%]' />
                </div>
            </div>
        </div>   
    </div>
    </>
  )
}

export {WorkCard}