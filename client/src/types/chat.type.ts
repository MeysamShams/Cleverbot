export interface ChatMessage{
    id:number        
    message:string   
    user:{
        username:string
    }      
    userId:string   
    sender:"AI"|"user"    
    createdAt:string
    isLoading?:boolean
}
export interface ChatResponse{
    response:string,
    status:number
}