import React, { useEffect, useRef } from 'react'
import MoreInsta from '../components/MoreInsta'
import Nav from '../components/Nav'
import SingleHero from '../components/SingleHero'
import VideoCont from '../components/VideoCont'
import LineText from '../components/LineText';
import IncText from '../components/IncText';
import ThirdSection from '../components/ThirdSection';
import MovingImage from '../components/MovingImage'
import Footer from '../components/Footer'
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import ScannerSection from '../components/ScannerSection'
import XlThird from '../components/XlThird'
import { useGSAP } from '@gsap/react'
import gsap , {Power4, ScrollTrigger} from 'gsap/all'
import LocomotiveScroll from 'locomotive-scroll'

let Dtext=[["curtains","blackout curtains", "sheer","anti-vandal sheers" ,"no-noice curtain rods" , "decorative pillows","table runner" , "table cloth","napkins"],["curtains","sheers","tablecloths" , "napkins" ,"wooden blinds" ,"sunshades"]]

const Landing = () => {


  const locomotiveScroll = new LocomotiveScroll({
    lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.8,
        normalizeWheel: true,
        // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    },
});





useEffect(() => {


  const arritems = document.querySelectorAll(".variableText")

const maxDistance = 300;
const maxWeight = 900;
const minWeight = 100;

let mouseX = 0;
let mouseY = 0;
let animationFrameId;



  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log("first")
    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(updateItems);
    }
  });
  
  function updateItems() {
    arritems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenterX = itemRect.left + itemRect.width / 2 + window.scrollX;
      const itemCenterY = itemRect.top + itemRect.height / 2 + window.scrollY;
  
      const distance = Math.sqrt(
        Math.pow(mouseX - itemCenterX, 2) + Math.pow(mouseY - itemCenterY, 2)
      );
  
      let fontWeight = distance < maxDistance
        ? gsap.utils.mapRange(0, maxDistance, maxWeight, minWeight, Math.max(0, maxDistance -200))
        : minWeight;
  
      gsap.to(item, {
        fontWeight,
        duration: 0.8,
        // backgroundColor:"red",
      });
    });
  
    animationFrameId = null;
  }
  

}, [])



  




  

const page1 = useRef(null)
const page2 = useRef(null)
const page3 = useRef(null)
const page4 = useRef(null)
useGSAP(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(page1.current, {
    scrollTrigger: {
      trigger: page1.current,
      start: "50px top",
      end: "bottom 300px",
      // markers: true,
      scrub: 5,
    },
    opacity: "70%",
    // backgroundColor:"red"
  });

  gsap.to(page2.current, {
    scrollTrigger: {
      trigger: page2.current,
      start: "500px center",
      end: "bottom 300px",
      // markers: true,
      scrub: 5,
    },
    opacity: "0%",
  });

  gsap.to(page2.current, {
    scrollTrigger: {
      trigger: page2.current,
      start: "700px top",
      end: "1050px top",
      // markers: true,
      scrub: 5,
    },
    opacity: "70%",
  });

  gsap.to(page3.current, {
    scrollTrigger: {
      trigger: page3.current,
      start: "100px top",
      end: "bottom bottom",
      // markers: true,
      scrub: 5,
    },
    opacity: "0%",
  });

  gsap.to(page3.current, {
    scrollTrigger: {
      trigger: page3.current,
      start: "1300px top",
      end: "1600px top",
      // markers: true,
      scrub: 5,
    },
    opacity: "70%",
  });
  gsap.to(page4.current, {
    scrollTrigger: {
      trigger: page4.current,
      start: "100px top",
      end: "bottom bottom",
      // markers: true,
      scrub: 5,
    },
    opacity: "0%",
  });

  gsap.to(page4.current, {
    scrollTrigger: {
      trigger: page4.current,
      start: "1800px top",
      end: "2500px top",
      // markers: true,
      scrub: 5,
    },
    opacity: "70%",
  });



  gsap.to(threeDText.current,{
    scrollTrigger:{
      trigger:DRef.current,
      start:"-100px top",
      end:"bottom bottom",
      // markers:true,
      scrub:5,
    },
    // opacity:"100%",
    stagger:0.1,
    rotateX:"6deg",
    opacity:"80%",
    rotateY:"-60deg"
  })
  gsap.to(threeDText2.current,{
    scrollTrigger:{
      trigger:DRef2.current,
      start:"-200px top",
      end:"bottom bottom",
      // markers:true,
      scrub:5,
    },
    // opacity:"100%",
    stagger:0.1,
    rotateX:"6deg",
    opacity:"80%",
    rotateY:"-60deg"
  })

  
  gsap.to(imgRef.current,{
    scrollTrigger:{
      trigger:imgDiv.current,
      start:"top top",
      end:"1000px bottom",
      scrub:5,
      // markers:true
    },
    duration:3,
    y:"150%"
  })

  gsap.to(loading1.current,{
    y:"-100%",
    delay:3,
    opacity:0,
  })
  gsap.to(loading2.current,{
    y:"100%",
    opacity:0,
    delay:3.5,
    display:"none"
  })

});

const DRef = useRef(null)
const DRef2 = useRef(null)
const imgRef= useRef(null)
const imgDiv= useRef(null)
const loading1 = useRef(null)
const loading2 = useRef(null)

const threeDText = useRef([])
const threeDText2 = useRef([])




  return (
    <div  className='w-full overflow-hidden relative'>

      
<div ref={loading2} className='w-full hidden text-black h-[100vh] fixed top-0 bg-black z-[2000]'>
        <div ref={loading1} className='w-full h-full bg-white absolute top-0 flex flex-col items-center p-10 justify-between'>
          <div className='f1 font-light tracking-tighter uppercase text-[12px]'>
              <p>since 2005</p>
          </div>
          <div className='f1 text-center leading-[18px] font-light tracking-tighter uppercase text-[1.5rem]'>
              <p>Azure</p>
              <p className='text-[10px] normal-case'>by airbnb</p>
          </div>
          <div className='f1 text-center leading-[18px] flex gap-1 font-light tracking-tighter uppercase text-[1rem]'>
              <p>loading</p>
              <p className='text-[10px] normal-case'>....</p>
          </div>
        </div>

      </div>
               {/* this is the first image gallery part */}
               <div className='w-full h-[400vh] relative '>
               <Nav/>     
               <div  className='w-full h-[100vh] z-10 box overflow-hidden relative '>
      <div className='fixed top-0 w-full h-full z-10'>

                              <h1 className='uppercase absolute top-[50%] z-30 left-[50%] -translate-x-1/2 -translate-y-1/2 text-[44px] md:text-[50px] xl:text-[56px] f4 font-bold tracking-wider text-white'>hotel</h1>
               <div ref={page1} className=' bg-black/10 xl:bg-black absolute  flex items-center justify-center w-full xl:pb-[56px]  h-full top-0'>
               </div>
               <img   className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f01781250e3c4f8ed19_hero-01-p-1080.webp" alt="not showing" />
      </div>
    </div>
               <div  className='w-full h-[100vh] z-10 box overflow-hidden relative '>
      <div className='fixed top-0 w-full h-full z-10'>

                              <h1 className='uppercase absolute top-[50%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2 text-[44px] md:text-[50px] xl:text-[56px] f4 font-bold tracking-wider text-white'>restaurant</h1>
               <div ref={page2} className=' bg-black/10 xl:bg-black absolute  flex items-center justify-center w-full xl:pb-[56px]  h-full top-0'>
               </div>
               <img   className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f00e43626f944ce0076_hero-02-p-1080.webp" alt="not showing" />
      </div>
    </div>

               {/* <SingleHero img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f011d36d94902bbbcd3_hero-03-p-1080.webp"} text={"catering"}/> */}
               <div  className='w-full h-[100vh] z-10 box overflow-hidden relative '>
      <div className='fixed top-0 w-full h-full z-10'>

                              <h1 className='uppercase absolute top-[50%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2 text-[44px] md:text-[50px] xl:text-[56px] f4 font-bold tracking-wider text-white'>catering</h1>
               <div ref={page3} className=' bg-black/10 xl:bg-black absolute  flex items-center justify-center w-full xl:pb-[56px]  h-full top-0'>
               </div>
               <img   className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f011d36d94902bbbcd3_hero-03-p-1080.webp" alt="not showing" />
      </div>
    </div>

               {/* <SingleHero img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f0015a49ebd0cb05e50_hero-04-p-1080.webp"} text={"+automative"}/> */}

               <div  className='w-full h-[100vh] z-10 box overflow-hidden relative '>
      <div className='fixed top-0 w-full h-full z-10'>

                              <h1 className='uppercase absolute top-[50%] left-[50%] z-20 -translate-x-1/2 -translate-y-1/2 text-[44px] md:text-[50px] xl:text-[56px] f4 font-bold tracking-wider text-white'>+automative</h1>
               <div ref={page4} className=' bg-black/10 xl:bg-black absolute  flex items-center justify-center w-full xl:pb-[56px]  h-full top-0'>
               </div>
               <img   className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/66267f0015a49ebd0cb05e50_hero-04-p-1080.webp" alt="not showing" />
      </div>
    </div>
               </div>

               {/* this is the second text wala part  */}

               <div className='w-full  h-[120vh] sm:h-[99vh] xl:h-[105vh] px-4   pt-32 sm:pt-24 xl:pt-[230px] leading-[42px]'>
                              {/* this is the variable weight text */}
                              <div className='w-full xl:h-[30%] h-fit f1  text-[32px] xl:text-[60px] xl:font-light xl:leading-[70px] font-semibold text-black uppercase '>
                                             <p className='xl:pl-10 flex flex-wrap xl:w-[92%]'><span className='pl-44  xl:pl-[400px]'>{"full".split("").map((e)=>(<span className='variableText'>{e}</span>))}</span>{" responsibility from project to implementation.".split("").map(el=>{if(el===" "){
                                              return <span>&nbsp;</span>
                                             }
                                             else{
                                              return <span className='block variableText'>{el}</span>
                                             }})}</p>
                              </div>


                                {/* this is the hidden section for the xl screen size */}
                              <div className='f4 text-[13px] xl:hidden sm:text-[14px] md:text-[14.5px] font-semibold mt-10 leading-none'>
                                             <p>More about us</p>
                                             <p className='mt-3 leading-[16px] sm:leading-[18px] sm:text-[13px] md:text-[14px] md:leading-[20px] font-semibold'>The textile production Velours HoReCa was founded in Lviv in 2005. <span className='opacity-60'>Our activity is focused on professionally outfitting the interiors of hotels, restaurants, cafes, and bars with textile products.</span></p>
                              </div>

                        

                              <div className='w-full xl:hidden flex h-[50vh]  mt-12  '>
                                             <div className='w-1/2 h-full flex justify-end pt-3'>
                                                            <VideoCont/>
                                             </div>
                                             <div className='w-1/2 h-full flex flex-col justify-between pl-3 pb-16 sm:pb-28 md:pb-[120px] f5 font-light'>

                                                            <div className='w-full leading-[17px] md:leading-[18px]  text-[13px] md:text-[13.5px]'>
                                                                           <p>With extensive experience in the Horeca sector - 18 years </p>
                                                                           <p className='opacity-70'>[as of 2024]</p>

                                                                           <div className='border-y-[1px] border-black/20 py-1 mt-3'>
                                                                                          <p>We offer both warranty and post-warranty servicing.</p>
                                                                           </div>
                                                            </div>

                                                            <div className='f4 pl-2'>
                                                                           <MoreInsta/>
                                                            </div> 

                                                        

                                             </div>
                              </div>

                          {/* this is the visible section for the xl size */}
                             <ScannerSection/>

               </div>

          <ThirdSection/>


          {/* this is the xl visible third section */}

         <XlThird text={"IDEAL TEXTILES FOR A COZY HOTEL AMBIANCE"} img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662a45b9e8c97f8a31a8f96a_slider-01-05-p-500.webp"}/>

                {/* this is the 3d text area */}
                <div ref={DRef} className='w-full xl:w-[100%]   pt-8  sm:pt-5 md:pt-0 flex h-[100vh] sm:h-[83vh] md:h-[77vh] xl:h-[130vh] xl:pl-4 xl:mt-20'>
               <div className='w-[80%] xl:w-[73%]    uppercase leading-none f1 text-[34px] sm:text-[35.5px] md:text-[36.5px] xl:text-[4.5rem]  pl-3 opacity-90 tracking  h-full '>

                              {Dtext[0].map((e,i)=>(<div ref={(el)=>threeDText.current[i] = el} className=' origin-left w-full'> <h1 key={i} className='mt-[14px] rote md:mt-[15px] xl:mt-[13px]'>{e}</h1></div>))}

               </div>

              <div className='hidden xl:block w-[27%]  h-full '>
                  <p className='text-[11.3px] f1 w-[69.5%] leading-[14px]  tracking-tight'>Create an atmosphere of comfort and coziness <span className='opacity-50'>in your hotel with our diverse range of high-quality textiles.</span> Our assortment includes curtains, sheers, decorative pillows, bed runners, and much more to meet all your room décor needs.</p>
              </div>
         </div>

            {/* this is the automative section */}
            {/*  this is a very big section literaly gand phat gayi or maybe mujhe neend aarahi thi isliye but almost hogaya*/}
            <div className='w-full xl:hidden h-[200vh] sm:h-[160vh] md:h-[150vh] px-4 '>
              {/* this is the video section */}
                      <div className='w-full h-[34vh] overflow-hidden rounded-lg'>
                            <video autoPlay muted loop className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d%2F6649e6d401492fd39ce57892_IMG_1559-transcode.webm"></video>
                      </div>
              {/* this is the main text area */}
                      <div className='w-[80%] f1 uppercase text-[28px] sm:text-[30px] md:text-[32px] leading-[31px] sm:leading-[33px] md:leading-[35px] mt-5'>
                          <h1>automated textile management</h1>
                      </div>

              {/* this is the paragraph area */}
                      <div>
                          <p className='leading-[16px]  mt-8 text-[12px] sm:text-[13px] md:text-[14px] sm:leading-[17px] md:leading-[18px] f5'>Creating comfort and efficiency: <span className='opacity-60'>automated control of blinds, curtains, and sheers opens up new possibilities for hotels and restaurants striving to create a unique atmosphere for their guests. </span> This technology allows easy control of lighting and privacy, ensuring comfortable conditions throughout the day.</p>
                          <p className='leading-[16px]  mt-6 text-[12px] sm:text-[13px] md:text-[14px] sm:leading-[17px] md:leading-[18px] f5'><span className='opacity-60'>Programming for efficiency: automated control allows</span> scheduling the opening and closing of textile products according to sleep schedules. <span className='opacity-60'>This ensures optimal energy usage and saves time and effort for staff, allowing them to focus on providing high-quality service to their guests.</span></p>
                      </div>

                      <div className='w-full h-[63vh] relative'>
                        {/* this is the black bg images of remote kinda thingy could be viberator if you have imagination or need  */}
                          <div className='w-[35%] absolute flex items-center justify-center top-10 right-8 sm:right-6 sm:top-8 h-[45%] bg-black rounded-lg'>
                            <img className='w-[90%] h-[90%] object-contain' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662b5a9bf1e1110165fff749_pult.webp" alt="not showing" />
                          </div>

                          {/* this is the video cont section  */}
                          <div className='w-[52%] h-[85%] absolute top-[215px] left-0'>
                              <VideoCont/>
                          </div>

                          <div className='absolute -bottom-20 sm:-bottom-4 md:-bottom-0 right-[60px] '>
                          <MoreInsta/>
                          </div>
                      </div>
                          <div className='mt-24 md:mt-20  h-[50vh] w-full pt-8 sm:pt-0 '>
                                   <LineText text={"Lighting control through blinds"}/>
                                   <LineText text={"Scheduling the opening/closing of curtains"}/>
                                   <LineText text={"Programmed opening of sheers for privacy"}/>
                                   <LineText text={"Data collection on energy consumption"}/>
                                   <LineText text={"Integration with smart home systems"}/>
                          </div>
            </div>

            {/* this is the xl visible automative section */}

            <div className='w-full h-[170vh] hidden xl:block px-5'>
                                {/* the image div */}
                                <div className='w-full h-[75vh] rounded-lg bg-black overflow-hidden relative'>
                                  <video className='w-full h-full object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d%2F6649e6d401492fd39ce57892_IMG_1559-transcode.webm"></video>
                                    <div className='w-[19%] h-[69%] p-[3px] bg-white rounded-lg  absolute top-20 right-20'>
                                      <div className='w-full h-[83%] rounded-lg '>
                                        <img className='w-full h-full rounded-lg object-cover' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662b9663c0b2b57483d6e6d8_auto-01-p-500.webp" alt="not showing" />
                                      </div>
                                      <div className='w-full h-[17%] flex justify-between  gap-2 items-center'>
                                        {/* the left arrow container */}
                                        <div className='relative w-[20%] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" viewBox="0 0 40 40" fill="none">  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9998 40H39H40V39V32.0001H39V39H31.9998V40ZM39 8.00008H40V1V0H39H31.9998V1H39V8.00008ZM7.99983 40V39H1V32.0001H0V39V40H1H7.99983ZM0 8.00008H1V1H7.99983L7.99983 0H1H0V1V8.00008Z" fill="black"></path></svg>
                                          <div className='absolute top-[10px] left-[16px] text-[16px]'>
                                          <GoArrowLeft/>
                                        </div>
                                        </div>
                                          {/* the main text section */}

                                        <div className='w-[60%] h-full flex items-center overflow-hidden justify-center'>
                                                <img className='w-[150%]  h-[140%] object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkwVgT13iPSw0noeEF86-_pArXP2suISkZiA&s" alt="not showing" />
                                        </div>

                                        {/* this is the right arrow section */}

                                        <div className='relative w-[20%] flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" viewBox="0 0 40 40" fill="none">  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.9998 40H39H40V39V32.0001H39V39H31.9998V40ZM39 8.00008H40V1V0H39H31.9998V1H39V8.00008ZM7.99983 40V39H1V32.0001H0V39V40H1H7.99983ZM0 8.00008H1V1H7.99983L7.99983 0H1H0V1V8.00008Z" fill="black"></path></svg>
                                        <div className='absolute top-[10px] left-[16px] text-[16px]'>
                                          <GoArrowRight/>
                                        </div>
                                        </div>
                                        
                                      </div>


                                    </div>
                                </div>
                                {/* below image section */}
                                <div className='w-full h-[120vh] xl:h-[90vh]  mt-16 flex'>
                                    {/* first section of the automated texttile section   */}
                                  <div className='w-[45%] mr-14 h-full'>
                                    {/* this is the text section  */}
                                    <div className='w-full leading-[2.2rem] h-[20%] flex uppercase text-[1.9rem] f1 tracking-tight items-start'>
                                      <p className='w-[60%]'>automated textile management</p>
                                    </div>
                                      {/* the below image */}
                                          <div className='w-full h-[80%] mt-7 flex justify-end'>
                                            <div className='w-[44%] flex items-center justify-center h-[85%] rounded-lg bg-black'>
                                              <img className='w-[81%] h-[75%] object-contain' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662b5a9bf1e1110165fff749_pult.webp" alt="not showing" />
                                            </div>
                                          </div>
                                  </div>
                                  {/* this is the second section  */}

                                  <div className='w-[24%] h-[100%] pb-10 pl-5'>
                                              <div className='w-full h-full flex flex-col justify-between  '>
                                                {/* this is the text line  */}
                                                <p className='text-[11.5px] w-[86%] tracking-tight f1 leading-[14px]'>Creating comfort and efficiency: <span className='opacity-50'>automated control of blinds, curtains, and sheers opens up new possibilities for hotels and restaurants striving to create a unique atmosphere for their guests.</span>This technology allows easy control of lighting and privacy, ensuring comfortable conditions throughout the day.</p>
                                                {/* this is the more insta section  */}
                                                <div className='w-[100%] h-[40%] mt-16 pr-[43px]' >
                                                <div className='w-[100%] mt-2 h-[50%] flex items-end '>
               <div className='w-[50%] pr-6 h-full pt-5 relative flex items-center justify-start  '>

               <svg xmlns="http://www.w3.org/2000/svg" width="85%" height="85%" viewBox="0 0 100 100" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M88.3333 100H99.1667H100V99.1667V88.3333H99.1667V99.1667H88.3333V100ZM99.1667 11.6667H100V0.833333V0H99.1667H88.3333V0.833333H99.1667V11.6667ZM11.6667 100V99.1667H0.833333V88.3333H0L0 99.1667V100H0.833333H11.6667ZM0 11.6667H0.833333V0.833333H11.6667V0H0.833333H0V0.833333L0 11.6667Z" fill="black"></path>
</svg>
                  <div className='absolute w-full h-full top-[87%] left-[64%] -translate-x-1/2 -translate-y-1/2  '>
                    <img className='w-[45%] h-[45%] object-contain' src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/6629ee86a7a7fd8fd9b2fae9_insta-main-img.svg" alt="not showing" />
                  </div>
               </div>

               <div className='flex items-end pb-8 -ml-7 w-[45%]'>
                 <MoreInsta/>
               </div>
                                                </div>
                                                </div>
                                              {/* this is the last line section */}
                                                <div className='w-full h-[30%]'>
                                                <div className='w-[85%] border-dashed border-b-[1px] border-black/30 py-[5px] text-[11.3px] f1 font-light'>
                                                                <p>lighting through blind controls</p>
                                                              </div>
                                                <div className='w-[85%] border-dashed border-b-[1px] mt-1 border-black/30 py-[5px] text-[11.3px] f1 font-light'>
                                                                <p>Scheduling the opening/closing of curtains</p>
                                                              </div>
                                                <div className='w-[85%] border-dashed border-b-[1px] mt-1 border-black/30 py-[5px] text-[11.3px] f1 font-light'>
                                                                <p>Programmed opening of sheers for privacy</p>
                                                              </div>
                                                <div className='w-[85%] border-dashed border-b-[1px] mt-1 border-black/30 py-[5px] text-[11.3px] f1 font-light'>
                                                                <p>Data collection on energy consumption</p>
                                                              </div>
                                                <div className='w-[85%] border-dashed border-b-[1px] mt-1 border-black/30 py-[5px] text-[11.3px] f1 font-light'>
                                                                <p>Integration with smart home systems</p>
                                                              </div>
                                                </div>
                                                             
                                              </div>
                                  </div>

                                  <div className='w-[24%] h-fit flex justify-end'>
                                    <p className='text-[11.5px] w-[84%] tracking-tight f1 leading-[14px]'> <span className='opacity-50  '>Programming for efficiency: automated control allows</span> scheduling the opening and closing of textile products according to sleep schedules. <span className='opacity-50'>This ensures optimal energy usage and saves time and effort for staff, allowing them to focus on providing high-quality service to their guests.</span></p>
                                  </div>

                                </div>
            </div>

          
{/* this is the increasing text animaiton  section */}
            <IncText/>

            <XlThird text={"MODERN TEXTILES FOR RESTAURANTS"} img={"https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662b9e759b6eb16c6b0bf81b_rest-01-p-500.webp"}/>


            <ThirdSection/>

            <div ref={DRef2} className='w-full xl:w-[100%]  pt-8 xl:mt-14 sm:pt-5 md:pt-0 flex h-[100vh] sm:h-[8vh] md:h-[45vh] xl:h-[105vh] xl:pl-4'>
               <div className='w-[80%] xl:w-[73%]    uppercase leading-none f1 text-[34px] sm:text-[35.5px] md:text-[36.5px] xl:text-[4.5rem]  pl-3 opacity-90 tracking  h-full '>

                              {Dtext[1].map((e,i)=>(<div ref={(el)=>threeDText2.current[i] = el} className=' w-full origin-left'> <h1 key={i} className='mt-[14px] md:mt-[15px] xl:mt-[9px]'>{e}</h1></div>))}

               </div>

              <div className='hidden xl:block w-[27%]  h-full'>
                  <p className='text-[11.3px] f1 w-[69.5%] leading-[14px]  tracking-tight'>Create an atmosphere of comfort and coziness <span className='opacity-50'>in your hotel with our diverse range of high-quality textiles.</span> Our assortment includes curtains, sheers, decorative pillows, bed runners, and much more to meet all your room décor needs.</p>
              </div>
         </div>


           <MovingImage/>

           {/* this is the xl visible moving images */}

           <div ref={imgDiv} className='w-full h-[150vh] relative hidden xl:flex '>
                <div className='w-[25%]  h-full pl-10 pt-10'>
                  <p className='text-[11px] f1  w-[50%] leading-[12px]'>Become our next client right now!</p>
                </div>
                <div className='w-[25%] h-full flex justify-center pl-3 pt-10'>
                  <div ref={imgRef} className='w-[68%] sticky top-0 flex-shrink-0 h-[31%] overflow-hidden rounded-lg'>
                    <img  className="w-full sticky top-0 h-full object-cover" src="https://cdn.prod.website-files.com/6613fb0aff6a7761bf9a817d/662d17f1f7bad2fd6211fa3f_works-03.webp" alt="not showing" />
                  </div>
                </div>
                <div className='w-[50%]  flex flex-col pl-5  h-full '>
                  {/*  */}
                  <div className='w-full h-[6vh] '>
                    <p className='text-[11px] f4 font-semibold opacity-80'>They have chosen us</p>
                  </div>

                  <div className='w-full   justify-start text-[3rem] f1 tracking-tighter uppercase leading-[3.4rem]'>
                 <h1>apartel</h1>
                 <h1 className='opacity-40'>bank hotel</h1>
                 <h1 className='opacity-40'>grand hotel</h1>
                 <h1 className='opacity-40'>glibivka family</h1>
                 <h1 className='opacity-40'>rafael hotel</h1>
                 <h1 className='opacity-40'>panaroma hotel</h1>
                 <h1 className='opacity-40'>lh hotel & spa</h1>
                 <h1 className='opacity-40'>status hotel</h1>
                 <h1 className='opacity-40'>bukovel</h1>
                 <h1 className='opacity-40'>swiss hotel</h1>
                 <h1 className='opacity-40'>eurohotel hotel</h1>
                 <h1 className='opacity-40'>svityaz resort</h1>
                 <h1 className='opacity-40'>kyivska rus</h1>
                 <h1 className='opacity-40'>play karpaty</h1>
               </div>
              
                </div>
           </div>

           <Footer/>






    </div>
  )
}

export default Landing