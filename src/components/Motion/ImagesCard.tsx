import Image from "next/image"
import { Key } from "react"

export default function ImagesCard( {cardInfo, customStyle , bgColor}:any){

    // const ImagesArr = [
    //     {img:},
        
    // ]
    return(
        <div className={`h-fit w-[150px] bg-white flex flex-col p-3 items-center ${bgColor}`}>

            <div>
                {cardInfo.map((img: any , index: Key | null | undefined)=>(
                    <div key={index} className={`w-[130px] h-[130px] relative my-2 ${customStyle}`}>
                        <Image  src={img} alt="image" objectFit="cover" fill/>
                    </div>
                ))}
            </div>
           
        </div>
    )
}