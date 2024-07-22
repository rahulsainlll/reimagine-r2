import { useGSAP } from '@gsap/react'
import gsap , {ScrollTrigger} from 'gsap/all'
import React, { useRef } from 'react'

const SingleHero = ({img , text}) => {
 const page = useRef(null)
  // useGSAP(()=>{
  //   gsap.registerPlugin(ScrollTrigger)
  //   gsap.to(page.current,{
  //     scrollTrigger:{
  //       trigger:page.current,
  //       start:"top top",
  //       end:"bottom 150px",
  //       markers:true,
  //       scrub:5
  //     },
  //     opacity:"90%",
   
      
  //   })
  // })

  return (
    <div  className='w-full h-[100vh] z-10 box overflow-hidden relative '>
      <div className='fixed top-0 w-full h-full z-10'>

                              <h1 className='uppercase absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-[44px] md:text-[50px] xl:text-[56px] f4 font-bold tracking-wider text-white'>{text}</h1>
               <div ref={page} className=' bg-black/10 xl:bg-black absolute  flex items-center justify-center w-full xl:pb-[56px]  h-full top-0'>
               </div>
               <img   className='w-full h-full object-cover' src={img} alt="not showing" />
      </div>
    </div>
  )
}

export default SingleHero