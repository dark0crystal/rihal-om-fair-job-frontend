
"use client"
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import { , useRef } from "react";
import { Key } from "react";
export default function Character({word}:any){

    const targetRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =useScroll({
        target:targetRef , 
        offset: ["end end" , "end start"]
    })
    
    const character = word.split("")
    return(
        <div ref={targetRef}>
            {character.map((char: any, index: Key | null | undefined)=>(
                <motion.span key={index}>{char}</motion.span>
            ))}
        </div>
    )
}