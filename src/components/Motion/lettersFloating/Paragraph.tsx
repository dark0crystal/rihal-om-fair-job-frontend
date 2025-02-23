"use client"
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import { useRef } from "react";


export default function Paragraph(){
    const paragraph = "let's begin"

    const targetRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =useScroll({
        target:targetRef , 
        offset: ["start 0.8" , "end 0.25"]
    })

    // const yb= useTransform(scrollYProgress ,[0 ,1],["-10%" , "100%"])
    // console.log(yb)
    // const left ="40%"
    const words  = paragraph.split(" ")
    return(
        <div ref={targetRef} className="flex flex-row flex-wrap justify-center items-center w-[60vw] gap-8 font-bold text-9xl h-full  bg-red-200 ">
        {words.map((word: any , index:number)=>{
            const character = word.split("")
            return(
                <h1 key={index} className="bg-amber-100">
                { 
                character.map((char: any, index: number)=>{
                    const start  = index *10  ;
                    console.log(start)
                    const end =start *2 ;
                    console.log(end)
                    return <Word scrollYProgress={scrollYProgress} range={[start ,end]}  key={index}>{char}</Word>
                })}
            </h1>
            )
        })}
    </div>
    )
}

const Word =({children ,scrollYProgress, range }:any)=>{
    // const y= useTransform(scrollYProgress ,range,[0 , 1])
    const y= useTransform(scrollYProgress ,[0.1 ,0.25 ,0.7,1],["0%","-55%","-70%","-80%"])
    // const x =0.4
    // const z =20

    return(
        <motion.span  className="inline-block" style={{y}} >
            {children}
        </motion.span>
    )

}