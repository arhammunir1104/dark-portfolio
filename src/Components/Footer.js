import { BorderBottom } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'
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
let b3= {
    "borderTop" : ".5px solid #F0F0F080"
}
function Footer() {
  return (
    <>
    <div className=''>
        <div className='px-[20px] py-[10px] flex justify-between ' style={b3}>
            <div className='w-[auto]'>
                <p className='text-[#e8e8e8] ml-[20px] text-[1.2rem]'>Developed by ~ <span className='text-indigo-500'>Arham Munir.</span> </p>
            </div>

            <div className='mr-[20px]'>
                <NavLink to={"https://github.com/arhammunir1104"} target='_blank'>
                <i className="fa fa-github text-[2rem] mx-[10px] text-[#e8e8e8] duration-[.4s] ease-out hover:text-indigo-500"></i>
                </NavLink>
                
                <NavLink to={"https://www.linkedin.com/in/arham-munir/"} target='_blank'>
                <i className="fa fa-linkedin-square text-[2rem] mx-[10px] text-[#e8e8e8] duration-[.4s] ease-out hover:text-indigo-500"></i>
                </NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export {Footer}