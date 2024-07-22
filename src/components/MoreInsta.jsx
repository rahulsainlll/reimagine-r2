import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const MoreInsta = () => {
  return (
    <div className=' leading-[16px] md:leading-[18px]  tracking-tighter  text-[13px] md:text-[14.8px] xl:text-[12.5px]  xl:leading-[15px] text-black f5 font-light'>
               <p>More in Ours</p>
               <p className='flex items-center gap-1'>instagram <span><GoArrowUpRight/></span></p>
    </div>
  )
}

export default MoreInsta