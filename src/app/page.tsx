
import SummarizerForm from "@/components/form/SummarizerForm";
import Image from "next/image";
import Ximg from "../../public/xxx.png"
import {first} from "../../public/images"
import ImagesCard from "@/components/Motion/ImagesCard";

export default function Home() {
  return (
     <div>
      
      <div  className="h-[80vh] w-screen flex flex-col justify-center items-center bg-[#f9f5ec]">
        <div className=" w-screen flex flex-col justify-center items-center h-[40vh] text-[#131313] text-center">
            <Image src={Ximg} width={200} height={150} alt="xx"/>
            <h1 className=" text-8xl  font-semibold "><span className="text-[#7546ff]">Ready</span> to get insightful summaries?<span className="text-[#7546ff]"> Let&apos;s dive in</span></h1>   
        </div>
      <div>
        <SummarizerForm/>
      </div>
      </div>
      <div className="h-[100vh] w-screen bg-[#f9f5ec]">
          <ImagesCard cardInfo={first} customStyle="" bgColor=""/>
      </div>

     </div>
  );
}

// #f8fe23 green

// #7546ff purple

// #131313 black

// #f9f5ec near to white
