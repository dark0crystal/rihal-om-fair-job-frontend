

export default function CircleDesign({bgColor, innerColor ,width ,height }:any){

  return(
    <div className={`${bgColor}  ${width} ${height} rounded-full grid grid-cols-2 grid-rows-2 overflow-hidden ` }>
        <div className="min-w-[30px] min-h-[30px] bg-amber-200 rounded-br-4xl"/>
        <div className="min-w-[30px] min-h-[30px] bg-amber-200 rounded-bl-4xl"/>
        <div className="min-w-[30px] min-h-[30px] bg-amber-200 rounded-tr-4xl"/>
        <div className="min-w-[30px] min-h-[30px] bg-amber-200 rounded-tl-4xl"/>

    </div>
  )
}