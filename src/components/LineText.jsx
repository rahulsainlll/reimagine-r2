import React from 'react'

const LineText = ({text}) => {
  return (
               <div className='p-[7px] xl:py-[10px] xl:leading-[15px] xl:text-[12px] xl:w-[80%] border-dashed border-b-[1px] text-[13px] sm:text-[13.8px] md:text-[14.5px] f1 border-black/30'>
               <p>{text}</p>
               </div>
  )
}

export default LineText