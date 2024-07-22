import React from 'react'

const CurtainText = ({text , height}) => {

  return (
               <div className='w-full pt-8 flex ' style={{height:height}}>
               <div className='w-[80%]  uppercase leading-none f1 text-[34px] sm:text-[35.5px] pl-3 opacity-90 tracking  h-full '>

                              {text.map((e,i)=>( <h1 key={i} className='mt-[14px]'>{e}</h1>))}

               </div>
         </div>
  )
}

export default CurtainText