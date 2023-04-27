import { UseHttpInterface } from "@/types/http.type"
import { AxiosResponse } from "axios"
import { useEffect, useState } from "react"

export const useFetch=<T>(service:Promise<any>):UseHttpInterface<T>=>{
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const [data,setData]=useState<T|undefined>()
    const getData=async()=>{
        try{
            setIsError(false)
            setIsLoading(true)
            const data=await service;
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