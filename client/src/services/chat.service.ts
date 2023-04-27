import http from './http.service'

export const getMessages=async(page=1)=>{
    return await http.get("/chat/messages",{params:{page}})
}