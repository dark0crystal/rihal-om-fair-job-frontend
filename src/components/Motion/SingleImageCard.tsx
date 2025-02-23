"use client"
import muchclicks from "../../../public/much-clicks.jpeg"
// import img1 from "../../../public/much-clicks.jpeg"
// import img1 from "../../../public/much-clicks.jpeg"
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SingleImageCard({customStyle ,bottomSectionHeight}:any){

  const targetRef = useRef<HTMLDivElement>(null);
  const{} = useScroll({
    target:targetRef,
    offset:["start start","end end"]
  })
  return(
    <div className={`${customStyle}`}>
      
      <div className="w-full h-full relative">
        <Image
        alt="img"
        src={muchclicks}
        objectFit="cover"
        fill
        className="absolute"
        />
      </div>
      <div className={`${bottomSectionHeight}`}/>

      

    </div>
  )
}