"use client"
import {motion} from "framer-motion"
type button = {
    isActive:boolean,
    toggleMenu :any
}
export default function Button({isActive , toggleMenu}:button){
    return(
            <div className="absolute top-12 right-9 w-[100px] h-[40px]  overflow-hidden">
                <motion.div
                className="relative w-full h-full   bg-black"
                animate={{top:isActive ? "-100%" : "0%"}}
                >
                    <div 
                    className=" w-full h-full bg-amber-200"
                    onClick={() => {toggleMenu()}}
                    >
                         <PerspectiveText label="Menu"/>
                    </div>

                    <div 
                    className="w-full h-full bg-red-300"
                    onClick={() => {toggleMenu()}}
                    >
                         <PerspectiveText label="Close"/>
                    </div>
        
                </motion.div>
            </div>
       
    )
}

type perspectiveText={
    label :string
}

function PerspectiveText({label}:perspectiveText) {
    return (    
        <div className=" flex justify-center items-center w-full h-full">
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}