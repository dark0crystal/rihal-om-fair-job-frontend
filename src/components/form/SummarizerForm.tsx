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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                {...register("summarizedUrl")}
                className="border-2"
                />
                {errors.summarizedUrl && <p className="mt-2 text-xs text-red-500">{errors.summarizedUrl.message}</p>}


                <button
                type="submit"
                disabled={isSubmitting || loading} // Disable button during loading or submitting
                className="w-full lg:w-fit lg:h-fit p-3 bg-blue-600/90 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400"
              >
                {loading ? <RiLoader2Line size={26} className="animate-spin" /> : <FaSearch size={26} />}
              </button>
            </form>
        </div>
    )
}