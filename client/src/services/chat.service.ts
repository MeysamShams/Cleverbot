import { ChatResponse } from '@/types/chat.type'
import http from './http.service'

export const getMessages=async(page=1)=>{
    return await http.get("/chat/messages",{params:{page}})
}

export const sendMessage=async(message:string):Promise<{data:ChatResponse}>=>{
    return await http.post("/chat",{message})
}