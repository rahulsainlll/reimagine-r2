import React from 'react'
import MoreInsta from './MoreInsta'
import VideoCont from './VideoCont'
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const ThirdSection = () => {
  return (
               <div className='w-full h-[160vh] sm:h-[145vh] px-4 pt-12 xl:hidden'>
               <div className='  text-[30px] md:text-[32px] tracking-tight w-full leading-[35px] md:leading-[37px] f1  '>
                                             <p className='w-[80%] uppercase opacity-90 tracking-tight'>ideal textile for a cozy hotel ambiance</p>

                                             <div className='w-full flex h-[53vh] mt-8'>
                                                            <div className='w-[30%] flex items-end  gap-2 h-full'>
                                                                                          <div className='w-9 h-9 border-black/50 rounded flex items-center text-xl justify-center border-[1px]'><GoArrowLeft/></div>
                                                                                          <div className='w-9 h-9 border-black/50 rounded flex items-center text-xl justify-center border-[1px]'><GoArrowRight/></div>
                                                            </div>         
                                                            <div className='w-[79%] h-full rounded-lg overflow-hidden'>
                                                                           <img className='w-full h-full rounded-lg ' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662a45b943d2e1892a8fff8e_slider-01-04-p-800.webp" alt="not showing" />
                                                            </div>
                                             </div>

                                             <p className='text-[12.5px] leading-[16px] sm:text-[13px] md:text-[14px] sm:leading-[17px] md:leading-[18px] f5 font- tracking-wide mt-10 opacity-90'>Create an atmosphere of comfort and coziness <span className='opacity-50'> in your hotel with our diverse range of high-quality textiles.</span>Our assortment includes curtains, sheers, decorative pillows, bed runners, and much more to meet all your room décor needs.</p>
                              </div>


                              <div className='w-full flex h-[60vh] sm:h-[55vh]  mt-14'>
                                             <div className='w-[55%] h-full '>
                                                            <VideoCont/>
                                             </div>
                                             <div className='w-[45%] h-full pb-20 sm:pb-[135px] pl-3 sm:pl-[15px] flex items-end '>
                                                            <MoreInsta/>
                                             </div>
                              </div>
               </div>
  )
}

export default ThirdSection