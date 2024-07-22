import React from 'react'

const VideoCont = () => {
  return (
    <div className='w-[100%] h-[50%] sm:h-[73%]  sm:w-full bg-black rounded-lg  z-[500] pt-[3px] px-[2px] '>
               <div className='w-full h-[87%]  overflow-hidden rounded-lg'>
                              <video autoPlay muted loop className='w-full h-full object-cover' src="https://s3.amazonaws.com/webflow-prod-assets/6613fb0aff6a7761bf9a817d/663bcfe77765a0f1702b036f_insta-3.mp4"></video>
               </div>
               <div className='w-full text-white text-[12px] sm:text-[13.5px] tracking-tight f1 h-[13%] pt-1 flex items-center pb-[2px] gap-2'>
                              <img className='w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/663bcbd3012e5e6821be914c_logo-horeca.png" alt="not showing" />
                              <p>Velorus_horeca</p>
               </div>
    </div>
  )
}

export default VideoCont