"use client"
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import { useRef } from "react";
import { Key } from "react";
import Character from "./Character";

export default function Words({paragraph}:any){

    
    const words  = paragraph.split(" ")
    return(
        <div>
            <div className="flex flex-row flex-wrap justify-center items-center w-[60vw] gap-8 font-bold text-9xl">
                {words.map((word: any , index: Key | null | undefined)=>(
                   <Character key={index} word={word}/>
                ))}
            </div>
        </div>
    )
}