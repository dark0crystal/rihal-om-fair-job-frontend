"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import { useRef } from "react";
import { Key } from "react";
export default function ImagesCard( {cardInfo, customStyle , bgColor}:any){

    const targetRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:targetRef , 
        offset:["start end" , "end start"]
    })
    const y =useTransform ( scrollYProgress, [0,1] , [-100,150] )
    const left = "-55%";

    return(
        <motion.div ref={targetRef}
        style={{y}}
        className={` h-fit w-[150px] bg-white flex flex-col p-3 items-center ${bgColor}`}>

            <div
            className=""
           
            >
                {cardInfo.map((img: any , index: Key | null | undefined)=>(
                    <div key={index} className={`w-[130px] h-[130px] relative my-2 ${customStyle}`}>
                        <Image  src={img} alt="image" objectFit="cover" fill/>
                    </div>
                ))}
            </div>
           
        </motion.div>
    )
}