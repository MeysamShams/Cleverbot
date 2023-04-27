export interface AuthCredential{
    username:string
    password:string
}

export interface LoginResponse{
    token?:string
    error?:string
    status:number
}

export interface UserInfo{
    username:string|null
    userId:string|null
}