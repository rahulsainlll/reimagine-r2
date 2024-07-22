import gsap, { Power4 } from 'gsap/all';
import React, { useRef, useState } from 'react';
import MoreInsta from './MoreInsta';
import VideoCont from './VideoCont';

const ScannerComp = () => {
  const videoRef = useRef(null)
  const [visible, setVisible] = useState(false);

  document.addEventListener("mousemove",(e)=>{
    // console.log(e)
        gsap.to(videoRef.current,{
          x:e.clientX,
          y:e.clientY,
          duration:0.3,
        })
  })

  return (
    // this is the full scanner section
    <div 
      onMouseEnter={() => setVisible(true)} 
      onMouseLeave={() => setVisible(false)}
      className='w-[56%] relative cursor-pointer z-[250] mt-2 h-[50%]  flex  items-center'
    >
      <div className='w-[50%] z-[500] relative pr-4'>
        <div ref={videoRef}  className={`absolute transition-all -top-[650%]  -left-[300%] w-[160px] h-[370px] ${visible ? "block" : "hidden"}`}>
          <VideoCont />
        </div>
        <div className='absolute top-[50%] left-[38.5%] -translate-x-1/2 -translate-y-1/2'>
          <img 
            className='w-[80%] h-[80%] object-contain' 
            src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/6629ee86a7a7fd8fd9b2fae9_insta-main-img.svg" 
            alt="not showing" 
          />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="77%" height="77%" viewBox="0 0 100 100" fill="none">
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M88.3333 100H99.1667H100V99.1667V88.3333H99.1667V99.1667H88.3333V100ZM99.1667 11.6667H100V0.833333V0H99.1667H88.3333V0.833333H99.1667V11.6667ZM11.6667 100V99.1667H0.833333V88.3333H0L0 99.1667V100H0.833333H11.6667ZM0 11.6667H0.833333V0.833333H11.6667V0H0.833333H0V0.833333L0 11.6667Z" 
            fill="black"
          />
        </svg>
      </div>

      <div className='flex items-end w-[50%]'>
        <MoreInsta />
      </div>
    </div>
  );
}

export default ScannerComp;
