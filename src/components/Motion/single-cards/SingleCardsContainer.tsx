import SingleImageCard from "./SingleImageCard";
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SingleCardsContainer(){

    const targetRef = useRef<HTMLDivElement>(null);
    const{scrollYProgress} = useScroll({
        target:targetRef,
        offset:["start start","end end"]
    })

    
    const y = useTransform(scrollYProgress ,[0 ,1] , ["10%" ,"15%" ])
    const scale =useTransform(scrollYProgress ,[0, 1], [1, 4])
    
    return(
        <div ref={targetRef}className="h-[100vh] w-screen z-0 relative">

            {/* first plane */}
          <div  className="h-full w-full z-10 absolute">
                
                <div className=" w-screen mt-[10vw] flex flex-col justify-center items-center text-center">
                    <div className="w-[60vw]">
                        <h1 className="text-8xl font-semibold">we are here to help you </h1>
                    </div>
                </div>
        
               
        
          </div>
          {/* second plane */}
          <div className="flex flex-col items-center w-screen bg-amber-200 h-full justify-center absolute z-0">

            <div className="grid grid-cols-4 grid-rows-1 relative h-full w-full">
                        {/*  */}
                        <motion.div style={{y,scale}} className=" absolute top-[40%] right-[40%] rotate-12">
                            <SingleImageCard customStyle=" w-[160px] h-[200px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
                        </motion.div>
                        {/*  */}
                        <div className=" absolute top-[55%] left-[25%] -rotate-15">
                            <SingleImageCard customStyle=" w-[180px] h-[220px] bg-red-300 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[35px]"/>
                        </div>
                        {/*  */}
                        <div className=" absolute top-[20%] left-[10%] rotate-6">
                        <SingleImageCard customStyle=" w-[200px] h-[240px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
                        </div>
                        {/*  */}
                        <div className=" absolute top-[20%] right-[10%] -rotate-22">
                        <SingleImageCard customStyle=" w-[240px] h-[280px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[50px]"/>
                        </div>
                </div>
            </div>

        </div>
    )
}