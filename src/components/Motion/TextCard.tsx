"use client"
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import { useRef } from "react";
import { Key } from "react";

export default function TextCard( {cardInfo, customStyle , bgColor}:any){
    const targetRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:targetRef , 
        offset:["start end" , "end start"]
    })
    const x =useTransform ( scrollYProgress, [0,1] , [-100,150] )
    const left = "-55%";
    return(
        <div ref={targetRef}>
            <motion.div  className="flex flex-row p-4 items-center justify-center bg-[#f8fe23]  h-[100px] overflow-hidden">
                {[...cardInfo,...cardInfo].map((content: string , index: Key | null | undefined)=>(
                    <motion.div 
                    style={{left , x}}
                     key={index} className={`mx-8  ${customStyle}`}>
                        <h1 className="text-3xl font-semibold">{content}</h1>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}