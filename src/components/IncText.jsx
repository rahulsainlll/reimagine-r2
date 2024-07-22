import React, { useEffect, useRef, useState } from 'react'
import gsap , {ScrollTrigger} from 'gsap/all'

const IncText = () => {

const incPage = useRef(null)

const incNum = ()=>{
  const timeout = setTimeout(() => {
    setnum(prev=>prev+1)
  }, 3000);


}

const [num, setnum] = useState(0)

incNum()
useEffect(() => {



  gsap.registerPlugin(ScrollTrigger);
  gsap.to(incPage.current,{
    scrollTrigger:{
      trigger:incPage.current,
      start:"top top",
      end:"bottom bottom",
      pin:true,
      // markers:true,
    },


    onComplete:incNum
    
  })
  

}, [])

            
  return (
    <div ref={incPage} className='w-full px-1  pt-28 xl:pt-32  items-center  flex h-[80vh] sm:h-[90vh] xl:h-[80vh] '>
               <div className='w-[60%] xl:w-[59%] sm:text-[10rem]  flex  leading-none  justify-center xl:justify-end text-[21rem] xl:text-[29rem] font-light f1'>{num}</div>

               <div className=' w-[40%] leading-[18px] xl:leading-[15px] f1 pt-28 flex   flex-col items-start justify-center '>
                              <p className='text-[16px] md:text-[17px] xl:text-[12px]' >Warranty service</p>
                              <p className='text-[12.5px] md:text-[13.5px] xl:text-[12px]' >from 3 years to lifLong</p>
               </div>

    </div>
  )
}

export default IncText