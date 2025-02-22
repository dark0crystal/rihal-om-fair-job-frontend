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
    offset:["start end","start end"]
  })
// Default: ["start start", "end end"]
// offset describes intersections, points where the target and container meet.
// For example, the intersection "start end" means when the start of the target on the tracked axis meets the end of the container.
// So if the target is an element, the container is the window, 
// and we're tracking the vertical axis then "start end" is where the top of the element meets the bottom of the viewport.

  const scale= useTransform(scrollYProgress , [0,0.5], [1,0.5])
  return (
     <div ref={targetRef} className="overflow-hidden"> 
      <div  className=" relative h-[80vh] w-screen flex flex-col justify-center items-center bg-[#f9f5ec]">
        {/* floating images section */}
        <motion.div 
        className="absolute top-8 left-20 -z-0"
        style={{scale}}
        >
          <ImagesCard cardInfo={first} customStyle="" bgColor=""/>
        </motion.div>
        <div className="z-10 w-screen flex flex-col justify-center items-center h-[40vh] text-[#131313] text-center">
            <Image src={Ximg} width={200} height={150} alt="xx"/>
            <h1 className=" text-8xl  font-semibold "><span className="text-[#7546ff]">Ready</span> to get insightful summaries?<span className="text-[#7546ff]"> Let&apos;s dive in</span></h1>   
        </div>
      <div className="mt-10">
        <SummarizerForm/>
      </div>
      </div>
      <div>
        <TextCard cardInfo={firstContent}/>
      </div>
      <div className="h-[100vh] w-screen bg-[#f9f5ec]">
          <ImagesCard cardInfo={first} customStyle="" bgColor=""/>
          <ImagesCard cardInfo={first} customStyle="" bgColor=""/>
          
      </div>

     </div>
  );
}

// #f8fe23 green

// #7546ff purple

// #131313 black

// #f9f5ec near to white
