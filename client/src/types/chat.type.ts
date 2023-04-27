export interface ChatMessage{
    id:number        
    message:string   
    user:{
        username:string
    }      
    userId:string   
    sender:"AI"|"user"    
    createdAt:string
}