import React from 'react'

const MovingImage = () => {
  return (
               <div className='w-full xl:hidden mt-10 xl:pl-10 px-3 h-[100vh] sm:h-[80vh] md:h-[70vh] border-b-[1px] border-black/40 relative overflow-hidden '>
               <div className='w-[40%] h-[33%] rounded-lg overflow-hidden absolute z-10  top-0 right-3 bg-black'>
                 <img className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662d1ba1a5fd67fafdc76bf5_works-12.webp" alt="not showing" />
               </div>
               <h1 className='text-[13px] md:text-[14px] f1 font-light opacity-90 '>They have chosen us</h1>
   
               <div className='w-full h-[80vh] mt-7 text-[30px] f1 tracking-tighter uppercase leading-[37px]'>
                 <h1>apartel</h1>
                 <h1 className='opacity-60'>bank hotel</h1>
                 <h1 className='opacity-60'>grand hotel</h1>
                 <h1 className='opacity-60'>glibivka family</h1>
                 <h1 className='opacity-60'>rafael hotel</h1>
                 <h1 className='opacity-60'>panaroma hotel</h1>
                 <h1 className='opacity-60'>lh hotel & spa</h1>
                 <h1 className='opacity-60'>status hotel</h1>
                 <h1 className='opacity-60'>bukovel</h1>
                 <h1 className='opacity-60'>swiss hotel</h1>
                 <h1 className='opacity-60'>eurohotel hotel</h1>
                 <h1 className='opacity-60'>svityaz resort</h1>
                 <h1 className='opacity-60'>kyivska rus</h1>
                 <h1 className='opacity-60'>play karpaty</h1>
               </div>
              
   
               </div>
  )
}

export default MovingImage