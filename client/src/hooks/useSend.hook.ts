import { UseHttpInterface } from "@/types/http.type"
import { useState } from "react"

interface UseSend<T> extends UseHttpInterface<T>{
    sendData:Function
}
export const useSend=<T>(service:Function):UseSend<T>=>{
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const [data,setData]=useState(undefined)
    const sendData=async(...fields:any)=>{
        try{
            setIsError(false)
            setIsLoading(true)
            const data=await service(...fields)
            setIsLoading(false);
            setData(data)
    
        }catch{
            setIsError(true)
            setIsLoading(false)
        }
    }

    return {isError,isLoading,data,sendData}
}