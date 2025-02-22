import { Key } from "react";

export default function TextCard( {cardInfo, customStyle , bgColor}:any){
    return(
        <div>
            <div className="flex flex-row p-4 items-center justify-center bg-[#f8fe23]  h-[100px] overflow-hidden">
                {[...cardInfo,...cardInfo].map((content: string , index: Key | null | undefined)=>(
                    <div key={index} className={`mx-8  ${customStyle}`}>
                        <h1 className="text-3xl font-semibold">{content}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}