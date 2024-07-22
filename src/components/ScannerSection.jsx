import React from 'react'
import MoreInsta from './MoreInsta'
import ScannerComp from './ScannerComp'

const ScannerSection = () => {
  
  return (
    
               <div className='w-full hidden xl:flex relative z-[500] h-[70%] justify-between items-start pt-[73px] px-[10px]  '>
                {/* this is not the full scanner section */}
               {/* this is the about us section for the xl screen */}
                   <div className='text-[11.5px] f4 font-semibold w-[24%] tracking-tight'><p>More about us</p></div>

                   {/* this is the first qr scanner section  */}
                   <div className='h-full w-[30%] pt-3 '>
                     <p className='text-[11.5px] h-fit mb-[10px] tracking-tight relative z-[500] cursor-pointer f4 font-semibold leading-[14px] w-[52%] '>The textile production Velours HoReCa was founded in Lviv in 2005. <span className='opacity-50'>Our activity is focused on professionally outfitting the interiors of hotels, restaurants, cafes, and bars with textile products.</span></p>
                     {/* this is the scanner component */}
                              <ScannerComp/>
                   </div>

                   {/* this is the text line content section */}

                   <div className='w-[44%] pr-12 h-full flex flex-col items-end'>
                     <div className='w-[53%]'>
                       <div className='w-full p-[6px] f1 text-[12px] tracking-tighter leading-[17px] border-dashed border-b-[1px] border-black/20 '>
                                 <p>With extensive experience in the Horeca sector - 18 years <span className='opacity-50'>[as of 2024]</span></p>
                       </div>
                       
                       <div className='w-full p-[6px] f1 text-[12px]  tracking-tighter leading-[17px] border-dashed border-b-[1px] border-black/20 mt-2 '>
                                 <p>With extensive experience in the Horeca sector - 18 years <span className='opacity-50'>[as of 2024]</span></p>
                       </div>

                     </div>

                   </div>    
             </div>
  )
}

export default ScannerSection