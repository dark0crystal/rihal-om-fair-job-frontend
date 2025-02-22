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
    const y =useTransform ( scrollYProgress, [0,1] , [100,-140] )
    const left = "-55%";

    return(
        <motion.div ref={targetRef}
        style={{y}}
        className={` h-fit w-[70px] md:w-[150px] lg:w-[170px] bg-white flex flex-col p-3 items-center ${bgColor}`}>

            <div className="" >
                {cardInfo.map((img: any , index: Key | null | undefined)=>(
                    <div key={index} className={`w-[60px] h-[80px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] relative my-2 overflow-hidden ${customStyle}`}>
                        <Image  src={img} alt="image" objectFit="cover" fill/>
                    </div>
                ))}
            </div>
           
        </motion.div>
    )
}