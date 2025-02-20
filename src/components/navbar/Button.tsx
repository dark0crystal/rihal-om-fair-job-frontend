"use client"
import {motion} from "framer-motion"
type button = {
    isActive:boolean,
    toggleMenu :any
}
export default function Button({isActive , toggleMenu}:button){
    return(
            <div className="absolute top-0 right-0 w-[100px] h-[40px] rounded-3xl  overflow-hidden cursor-pointer">
                <motion.div
                className="relative w-full h-full   bg-black"
                animate={{top:isActive ? "-100%" : "0%"}}
                >
                    <div 
                    className=" w-full h-full bg-[#c9fd74]"
                    onClick={() => {toggleMenu()}}
                    >
                         <PerspectiveText  label="Menu"/>
                    </div>

                    <div 
                    className="w-full h-full bg-black text-white"
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
        <div className="  flex justify-center items-center w-full h-full hover:rotate-x-[90deg]  transform-3d translate-x-[0.76, 0, 0.24, 1] duration-75">
            <p className=" hover:opacity-0   hover:translate-y-[-100%]">{label}</p>
            <p className="absolute   opacity-0 hover:opacity-100 ">{label}</p>
        </div>
    )
}