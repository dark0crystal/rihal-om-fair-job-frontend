import SingleImageCard from "./SingleImageCard";
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SingleCardsContainer(){

    const targetRef = useRef<HTMLDivElement>(null);
    const{scrollYProgress} = useScroll({
        target:targetRef,
        offset:["start end" , "end start"]
    })

    
    const y1 =useTransform ( scrollYProgress, [0,1] , [-10,150] )
    const y2 =useTransform ( scrollYProgress, [0,1] , [-10,150] )
    const y3 =useTransform ( scrollYProgress, [0,1] , [-10,150] )
    const y4 =useTransform ( scrollYProgress, [0,1] , [-10,130] )
    const scale =useTransform(scrollYProgress ,[0, 1], [1, 0.8])
    const opacity =useTransform(scrollYProgress ,[0, 0.8 ], [1, 0.8])
    
    return(
        <div ref={targetRef}className="h-[100vh] w-screen lg:z-0  relative bg-amber-100">

            {/* first plane */}
          <div  className="lg:h-full lg:w-full lg:z-10 lg:absolute">
                
                <div className=" w-screen mt-24  flex flex-col  items-center text-center">
                    <div className="w-[90vw] lg:w-[80vw]">
                        <motion.h1 style={{scale}} className=" text-[calc(41px+61.5*(100vw-375px)/584)] leading-[1] font-black">we are here to <span className="text-[#7546ff]">help you</span> </motion.h1>
                    </div>
                </div>
        
               
        
          </div>
          {/* second plane */}
          <div className="flex flex-col h-fit items-center w-screen lg:bg-amber-200 lg:h-full lg:justify-center lg:absolute lg:z-0">

            {/* big screen view */}
                <div className="lg:grid lg:grid-cols-4 lg:grid-rows-1 lg:relative lg:h-full lg:w-full hidden">
                        {/* 1 */}
                        <motion.div style={{y:y1}}  className=" absolute top-[80%] flex justify-center  w-screen">
                            <SingleImageCard customStyle="w-[450px] h-[400px] lg:w-[300px] lg:h-[340px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
                        </motion.div>
                        {/* 2 */}
                        <motion.div style={{y:y2}} className=" hidden lg:flex  absolute top-[85%] left-[25%] -rotate-15">
                            <SingleImageCard customStyle=" w-[180px] h-[220px] bg-red-300 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[35px]"/>
                        </motion.div>
                        {/*3 */}
                        <motion.div style={{y:y3}} className="hidden lg:flex absolute top-[40%] left-[10%] rotate-6">
                        <SingleImageCard customStyle=" w-[180px] h-[240px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[20px]"/>
                        </motion.div>
                        {/* 4 */}
                        <motion.div style={{y:y4}} className="hidden lg:flex absolute top-[50%] right-[10%] -rotate-22">
                        <SingleImageCard customStyle=" w-[240px] h-[280px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[50px]"/>
                        </motion.div>
                </div>
                {/* Tablets and mobiles view */}
                <div className=" h-full w-full ">
                        {/* 1 */}
                        <motion.div style={{y:y1}}  className="lg:hidden flex justify-center items-center w-screen">
                            <SingleImageCard customStyle="w-[450px] h-[400px] lg:w-[300px] lg:h-[340px] bg-amber-500 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
                        </motion.div>
                </div>
            </div>

        </div>
    )
}