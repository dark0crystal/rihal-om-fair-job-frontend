"use client"
import {useForm, SubmitHandler} from "react-hook-form"
import { z } from "zod"


type FormFields = {
    example: string
    exampleRequired: string
  }
export default function SummarizerForm(){

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<FormFields>()
      const onSubmit: SubmitHandler<FormFields> = (data) => console.log(data)

    return(
        <div>
            <form>
                
            </form>
        </div>
    )
}