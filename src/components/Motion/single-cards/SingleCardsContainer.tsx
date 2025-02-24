import SingleImageCard from "./SingleImageCard";
import {motion} from "framer-motion"
import { useScroll,useTransform} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function SingleCardsContainer(){

    const targetRef = useRef<HTMLDivElement>(null);
    const{} = useScroll({
        target:targetRef,
        offset:["start start","end end"]
    })
    
    return(
        <div ref={targetRef}className="h-[100vh] w-screen z-0 relative">

            {/* first plane */}
          <div  className="h-full w-full z-10 absolute">
                
                <div className=" w-screen  flex flex-col justify-center items-center text-center">
                  <h1 className="text-8xl font-semibold">we are here to help you creating</h1>
                </div>
        
               
        
          </div>
          {/* second plane */}
          <div className="flex flex-col items-center w-screen bg-amber-200 h-full justify-center absolute z-0">

            <div className="grid grid-cols-4 grid-rows-1 ">
                        {/*  */}
                        <div className="">
                        <SingleImageCard customStyle=" w-[200px] h-[240px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
                        </div>
                        {/*  */}
                        <div>
                            <SingleImageCard customStyle=" w-[180px] h-[220px] bg-red-300 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[35px]"/>
                        </div>
                        {/*  */}
                        <div>
                        <SingleImageCard customStyle=" w-[200px] h-[240px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
                        </div>
                        {/*  */}
                        <div>
                        <SingleImageCard customStyle=" w-[200px] h-[240px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
                        </div>
                </div>
            </div>

        </div>
    )
}