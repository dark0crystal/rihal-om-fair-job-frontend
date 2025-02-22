
import SummarizerForm from "@/components/form/SummarizerForm";


export default function Home() {
  return (
     <div>
      
      <div  className="h-[80vh] w-screen flex flex-col justify-center items-center bg-black">
        <div className="h-fit w-screen text-white">
            <h1 className="text-9xl font-semibold ">WOW</h1>
            <h1 className="text-9xl font-semibold">WOW</h1>
            <h1 className="text-9xl font-semibold">WOW</h1>
        </div>
      <div>
        <SummarizerForm/>
      </div>
      </div>
      <div className="h-[100vh] w-screen">

      </div>

     </div>
  );
}
