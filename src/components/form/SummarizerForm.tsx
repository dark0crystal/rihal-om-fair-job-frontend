"use client"
import {useForm, SubmitHandler} from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSearch } from "react-icons/fa";
import { RiLoader2Line } from "react-icons/ri";
import { useState } from "react";



  const schema = z.object({
    summarizedUrl:z.string().url(),
    
  });
  
  type FormFields = z.infer<typeof schema>;
 
export default function SummarizerForm(){
    const [loading, setLoading] = useState(false); // Loading state

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormFields>({
        resolver: zodResolver(schema),
      });
    
      const onSubmit: SubmitHandler<FormFields> = async (data) => {
        setLoading(true); // Start loading
        console.log(data);
      
        reset();
        setLoading(false); // Stop loading
      };

    return(
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row  gap-2 border rounded-4xl justify-center items-center w-[300px] md:w-[600px]  md:p-2">
                <div className="w-full h-[40px] md:h-[50px] ">
                <input 
                {...register("summarizedUrl")}
                className="text-xl px-2 rounded-3xl w-full  h-full "
                />
                
                </div>
                <div>
                <button
                    type="submit"
                    disabled={isSubmitting || loading} // Disable button during loading or submitting
                    className="w-[60px] lg:w-[80px] lg:h-fit p-3 bg-green-400 text-white font-semibold rounded-3xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400"
              >
                {loading ? <RiLoader2Line size={26} className="animate-spin" /> : <FaSearch size={26} />}
              </button>
              </div>
            </form>
            {errors.summarizedUrl && <p className="mt-2 text-xs text-red-500">{errors.summarizedUrl.message}</p>}
        </div>
    )
}