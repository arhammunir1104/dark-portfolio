import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { Heading } from './Heading'
import { height } from '@mui/system';
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
let b={
    "borderBottom" : ".5px solid #F0F0F080"
}
function Contact() {
      useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
    <Heading heading={"Let's Connect Together"} />
    <div >
        <div className='grid md:grid-cols-2 grid-cols-1 px-[5%] gap-3  py-[5%] animate-slidein500 opacity-0' >
            <div  className='px-[1%] py-[5%]'>
                <div style={b} className='my-[2%]'>
                    <p className='text-[2rem] font-bold text-[#e8e8e8] py-[5px]'>Get in touch ✨</p>
                </div>
                <div className='my-[2%]'>
                    <p className='text-[.9rem] text-[#F0F0F080] py-[5px]'>If you are looking for a Web Developer with skills and experience, please feel free to get in touch with me.</p>
                </div>
                <div className='my-[2%]'>
                    <p className='text-indigo-500 font-bold'>WANT TO CALL ME?</p>
                    <p  className='text-[#e8e8e8] font-bold'>+92 301 2865 213</p>
                </div>
                
                <div className='my-[2%]'>
                    <p className='text-indigo-500 font-bold'>WANT TO EMAIL ME?</p>
                    <p className='text-[#e8e8e8] font-bold'>arhammunir1104@gmail.com</p>
                </div>
            </div>
            <div className='' >
                <div className='w-[100%] h-[100%] rounded-[20px] p-[20px] bg-[#414549]'>
                    <form className='flex flex-col'>
                        <input className='w-[100%] h-[40px] bg-[#5c5b5b80] placeholder-[#e8e8e8] text-[#e8e8e8] p-[20px] my-[2%]  b-none outline-none rounded-[2px]' type='text' placeholder='Name' />
                        <input className='w-[100%] h-[40px] p-[20px] my-[2%] bg-[#5c5b5b80] placeholder-[#e8e8e8] text-[#e8e8e8]  b-none outline-none rounded-[2px]' type='email' placeholder='Email' />
                        <textarea className='w-[100%] h-[150px] p-[20px] my-[2%] bg-[#5c5b5b80] placeholder-[#e8e8e8] text-[#e8e8e8]  b-none outline-none rounded-[2px]' placeholder='Type your Message' />
                        <Button type='submit' variant="contained" style={{height : "40px"}}>Send a Message</Button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export {Contact}