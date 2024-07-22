import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import ScannerComp from './ScannerComp';
const XlThird = ({text,img}) => {
  return (

               <div className=' hidden xl:flex w-full mt-40 h-[90vh] px-7 relative '>
               <div className='w-[24%] h-full text-[2rem] uppercase tracking-tighter leading-[2.1rem] f1'>
                         <p className='w-[82%] opacity-90'>{text}</p>
               </div>
   
               <div className='w-[65%] h-[100%] flex justify-start'>
                         {/*this is the first prev section   */}
                       <div className='w-[18%] pb-[90px] h-full flex items-end'>
                                   <div className='flex text-[13px] items-center uppercase gap-3  f4 font-semibold '>
                                         <p>prev.</p>
                                         <div className='relative ' >
   
                                         <svg className='flex items-center justify-center' xmlns="http://www.w3.org/2000/svg" width="26%" height="26%" viewBox="0 0 40 40" fill="none">
                                     <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9998 40H39H40V39V32.0001H39V39H31.9998V40ZM39 8.00008H40V1V0H39H31.9998V1H39V8.00008ZM7.99983 40V39H1V32.0001H0V39V40H1H7.99983ZM0 8.00008H1V1H7.99983L7.99983 0H1H0V1V8.00008Z" fill="black"></path>
   </svg>
                               <GoArrowLeft className='absolute top-[18%] opacity-70 left-[4%] text-lg' />
                                         </div>
                                   </div>
   
                       </div>
                                   {/* this is the main image div */}
   
                                   <div className='w-[42%] h-full mr-14'>
                                           <div className='w-full h-[85%] rounded-lg overflow-hidden'>
                                             <img className='w-full h-full object-coverd' src={img} alt="not showing" />
                                           </div>
                                   </div>
   
                                   {/* this is the second next section  */}
   
                                   <div className='w-[18%] pt-[10px] justify-end   h-full flex items-start'>
                                   <div className='flex   text-[13px] items-center uppercase gap-3  f4 font-semibold '>
                                         <p>next.</p>
                                         <div className='relative ' >
   
                                         <svg  xmlns="http://www.w3.org/2000/svg" width="26%" height="26%" viewBox="0 0 40 40" fill="none">
                                     <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9998 40H39H40V39V32.0001H39V39H31.9998V40ZM39 8.00008H40V1V0H39H31.9998V1H39V8.00008ZM7.99983 40V39H1V32.0001H0V39V40H1H7.99983ZM0 8.00008H1V1H7.99983L7.99983 0H1H0V1V8.00008Z" fill="black"></path>
   </svg>
                               <GoArrowRight className='absolute top-[18%] opacity-70 left-[4%] text-lg' />
                                         </div>
                                   </div>
   
                       </div>
               </div>
   
               <div className='absolute bottom-[25%] right-0'>
               <ScannerComp/>
               </div>
   
             </div>
  )
}

export default XlThird