import { UseHttpInterface } from "@/types/http.type"
import { useEffect, useState } from "react"

export const useFetch=(service:Function):UseHttpInterface=>{
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const [data,setData]=useState(null)
    const getData=async()=>{
        try{
            setIsError(false)
            setIsLoading(true)
            const data=await service()
            setIsLoading(false);
            setData(data)
    
        }catch{
            setIsError(true)
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    return {isError,isLoading,data}
}