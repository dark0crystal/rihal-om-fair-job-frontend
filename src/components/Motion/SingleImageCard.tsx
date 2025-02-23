"use client"
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import { useRef } from "react";

export default function SingleImageCard(){

  const targetRef = useRef<HTMLDivElement>(null);
  const{} = useScroll({
    target:targetRef,
    offset:["start start","end end"]
  })
  return(
    <div ref={targetRef}>
      <motion.div>

      </motion.div>

    </div>
  )
}