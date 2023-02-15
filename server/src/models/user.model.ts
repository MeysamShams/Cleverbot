import { Request } from "express"

export interface UserAuth{
    status:number
    token:string
}

export interface User{
    id?:number
    username?:string
    createdAt?:Date
    dailyRequests?: number
    remainingRequests?:number
}
export interface UserRequest extends Request {
    user:string
    userId:number
}   