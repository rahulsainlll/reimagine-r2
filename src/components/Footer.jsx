import { useGSAP } from '@gsap/react';
import gsap ,{ScrollTrigger}from 'gsap/all';
import React, { useRef } from 'react'
import { GoArrowUp } from "react-icons/go";

const Footer = () => {
  const mainText = useRef(null)
  const fullDiv = useRef(null)

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(mainText.current,{
      scrollTrigger:{
        trigger:fullDiv.current,
        start:"-100px top",
        end:"bottom bottom",
        scrub:5,
      },
      // opacity:"0%",
      duration:0.7,
      letterSpacing:"15rem"
    })
  })

  return (
    <div ref={fullDiv} className='w-full h-[100vh] sm:h-[100vh] '>

                              <div className='h-[85%] w-full relative text-center pt-20 sm:pt-32 leading-none tracking-wide uppercase '>
                                          <h1 ref={mainText} className='text-[5.1rem] xl:text-[15.5rem] sm:text-[5rem] z-10 sm:tracking-[5px] relative origin-center f1 xl:font xl:tracking-[53px] xl:leading-[10px]'>airbnb</h1>
                                          <h2 className='tracking-[14px] text-[12px] mt-1 z-10 relative font-bold xl:font-semibold xl:pr-[270px] f1 xl:mt-[110px] xl:text-[1.65rem] xl:tracking-[38px] xl:f4'>hotels</h2>
                                          <div className='absolute top-0 w-full h-full bg-black '>
                                                    <img className='w-full h-full object-cover '  src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/663e0bd810d15c2ecfd40722_bg-curt-3.png" alt="not showing" />
                                          </div>

                              </div>
                              <div className='h-[15%] w-full relative xl:hidden px-4'>
                                <div className='w-full h-1/2 text-[14px] border-b-[1px] border-black/30 font-bold flex justify-between items-center f1 tracking-tighter'>
                                  <p>+8005602458</p>
                                  <p className='flex items-center gap-2'>Back to top <GoArrowUp/></p>
                                </div>
                                <div className='w-full h-1/2 text-[13px] f1 opacity-70 flex justify-between items-center '>
                                    <div>
                                      <p>© 2024</p>
                                    </div>
                                    <div>
                                      <p>By Niko<span className='text-red-900 text-[15px]'>C</span>han</p>
                                    </div>
                                </div>
                              </div>

                              <div className='h-[13%] w-full px-5 pt-3 relative hidden xl:block'>
                                <div className='w-full h-[55%] border-dashed border-black/30 border-b-[1px] flex  '>
                                                        <div className='h-full f5 tracking-tight leading-[15px] font-extrabold text-[11.3px] pl-2  w-[22%] '>
                                                              <p className='w-[55%]'>Full responsibility from project to implementation.</p>
                                                        </div>
                                                        <div className='h-full flex justify-end f1 tracking-tight leading-[15px] font-semibold text-[11.3px] pl-12  w-[14%] '>
                                                              <p className='w-[100%]'>Chandigarh, Lviv, kharar road Street 53</p>
                                                        </div>

                                                        <div className=' w-[38.5%] h-full'></div>

                                                        <div className='w-fit h-full mr-24 f1 tracking-tighter leading-[15px] font-semibold text-[12px] '>
                                                          <p>+38 067 718 3556</p>
                                                        </div>

                                                        <div className='w-[10%]  flex justify-end h-full f1 items-start  tracking-tighter leading-[15px] font-semibold text-[12px] '>
                                                          <p className='flex items-center  w-fit gap-1'>Back to top <GoArrowUp/></p>
                                                        </div>
                                </div>

                                <div className='w-full h-[45%] pt-1 flex '>
                                <div className='h-full f5 tracking-tight leading-[15px] font-extrabold text-[10px] pl-2  w-[22%] '>
                                                              <p className='w-[60%] opacity-45'>@2024</p>
                                                        </div>
                                                        <div className='h-full flex justify-end f1 tracking-tight leading-[15px] font-semibold text-[10px] pl-12  w-[14%] '>
                                                              <p className='w-[100%]  opacity-45'>By-NikoChan</p>
                                                        </div>

                                                        <div className=' w-[38.5%] h-full'></div>

                                                        <div className='w-fit h-full mr-24 f1 tracking-tighter leading-[15px] font-semibold text-[10px] '>
                                                          <p className='opacity-50'>ApSiAyNaAm</p>
                                                        </div>

                                                        <div className='w-[10%]  flex justify-end h-full f1 items-start  tracking-tighter leading-[15px] font-semibold text-[12px] '>
                                                        
                                                        </div>
                                </div>
                              </div>
    </div>
  )
}

export default Footer