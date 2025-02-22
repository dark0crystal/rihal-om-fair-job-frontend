"use client"
import SummarizerForm from "@/components/form/SummarizerForm";
import Image from "next/image";
import Ximg from "../../public/xxx.png"
import {first} from "../../public/assets"
import { firstContent } from "../../public/assets";
import ImagesCard from "@/components/Motion/ImagesCard";
import TextCard from "@/components/Motion/TextCard";
import {motion} from "framer-motion"
import { useScroll,useTransform } from "framer-motion";
import { useRef } from "react";


export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:["start start","end start"]
  })
// Default: ["start start", "end end"]
// offset describes intersections, points where the target and container meet.
// For example, the intersection "start end" means when the start of the target on the tracked axis meets the end of the container.
// So if the target is an element, the container is the window, 
// and we're tracking the vertical axis then "start end" is where the top of the element meets the bottom of the viewport.

  const scale= useTransform(scrollYProgress , [1,0], [0.7, 1])
  return (
     <div ref={targetRef} className="overflow-hidden"> 
      <div className="h-[80vh] w-screen flex flex-col justify-center items-center bg-[#f9f5ec]">
        {/* Hero Paragraph */}
        <motion.div style={{scale}} className="p-10 lg:p-2 w-screen flex flex-col justify-center items-center md:min-h-[30vh] min-h-[40vh] h-fit text-[#131313] text-center">
            <Image src={Ximg} width={200} height={150} alt="xx"/>
            <h1  className="text-3xl md:text-6xl lg:text-8xl font-bold   lg:font-semibold "><span className="text-[#7546ff]">Ready</span> to get insightful summaries?<span className="text-[#7546ff]"> Let&apos;s dive in</span></h1>   
        </motion.div>
        {/* Form */}
      <div className="mt-10">
        <SummarizerForm/>
      </div>
      </div>
      {/*  */}
      <div className="absolute bottom-0 rotate-6">
        <TextCard cardInfo={firstContent}/>
      </div>
      {/*  */}
      <div className=" relative h-[100vh] w-screen bg-[#f9f5ec]">
        {/* left image section */}
        <div className="absolute left-0 top-6 -rotate-20">
          <ImagesCard cardInfo={first} customStyle="" bgColor=""/>
        </div>
        {/* right image section */}
        <div className="absolute right-0 top-6 rotate-20">
          <ImagesCard cardInfo={first} customStyle="" bgColor=""/>
        </div>
          
      </div>
      
       {/* floating images section */}
       <motion.div 
        className=""
        >
          <ImagesCard cardInfo={first} customStyle="" bgColor=""/>
        </motion.div>

     </div>
  );
}

// #f8fe23 green

// #7546ff purple

// #131313 black

// #f9f5ec near to white
