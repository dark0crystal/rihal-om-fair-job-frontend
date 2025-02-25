"use client"
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import { useRef } from "react";


export default function Paragraph({paragraph ,customStyle}:any){
    // const paragraph = "let's begin"

    const targetRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =useScroll({
        target:targetRef , 
        offset: ["start 0.4" , "end 0.25"]
    })

    // const yb= useTransform(scrollYProgress ,[0 ,1],["-10%" , "100%"])
    // console.log(yb)
    // const left ="40%"
    const words  = paragraph.split(" ")
    return(
        <div ref={targetRef} className={` ${customStyle}  `}>
        {words.map((word: any , index:number)=>{
            const character = word.split("")
            return(
                <span key={index} className="mx-1">
                { 
                character.map((char: any, index: number)=>{
                    const start=(index+1)/100  ;
                    const mid  = (index+5)/100  ;
                    const min  = (index+10)/100  ;
                    const end  = (index+15)/100  ;
                    
                    return <Word scrollYProgress={scrollYProgress} range={[start,mid,min,end]}  key={index}>{char}</Word>
                })}
            </span>
            )
        })}
    </div>
    )
}

const Word =({children ,scrollYProgress, range }:any)=>{
    // const y= useTransform(scrollYProgress ,range,[0 , 1])
    const y= useTransform(scrollYProgress ,range,["40%","-55%","-70%","-80%"])
    // const x =0.4
    // const z =20

    return(
        <motion.span  className="inline-block"  >
            {children}
        </motion.span>
    )

}