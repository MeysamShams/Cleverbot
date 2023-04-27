import { UseHttpInterface } from "@/types/http.type"
import { useEffect, useState } from "react"

export const useFetch=(service:Promise<unknown>):UseHttpInterface=>{
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const [data,setData]=useState<any>(null)
    const getData=async()=>{
        try{
            setIsError(false)
            setIsLoading(true)
            const data=await Promise.all([service]);
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