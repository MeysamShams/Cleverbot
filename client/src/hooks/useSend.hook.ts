import { UseHttpInterface } from "@/types/http.type"
import { useState } from "react"

interface UseSend extends UseHttpInterface{
    sendData:Function
}
export const useSend=<T>(service:Function):UseSend=>{
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const [data,setData]=useState(null)
    const sendData=async(fields:T)=>{
        try{
            setIsError(false)
            setIsLoading(true)
            const data=await service(fields)
            setIsLoading(false);
            setData(data)
    
        }catch{
            setIsError(true)
            setIsLoading(false)
        }
    }

    return {isError,isLoading,data,sendData}
}