import SingleImageCard from "./SingleImageCard";

export default function SingleCardsContainer(){
    return(
         <div className="h-[100vh] w-screen  bg-violet-200 ">
        
                <div className=" h-[50vh] w-screen bg-amber-100 flex flex-col justify-center items-center text-center">
                  <h1 className="text-8xl font-semibold">we are here to help you creating</h1>
                </div>
        
                <div className="grid grid-cols-4 grid-rows-1">
                    {/*  */}
                    <div>
                      <SingleImageCard customStyle=" w-[200px] h-[240px] bg-amber-100 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
                    </div>
                    {/*  */}
                    <div>
                        <SingleImageCard customStyle=" w-[200px] h-[240px] bg-red-300 flex flex-col justify-center items-center p-3 " bottomSectionHeight="h-[40px]"/>
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
    )
}