"use client"
import 
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SingleImageCard(){

  const targetRef = useRef<HTMLDivElement>(null);
  const{} = useScroll({
    target:targetRef,
    offset:["start start","end end"]
  })
  return(
    <div >
      <div>
        
      </div>
      <div>
        <Image
        src={}
        objectFit="cover"
        fill
        />
      </div>

    </div>
  )
}