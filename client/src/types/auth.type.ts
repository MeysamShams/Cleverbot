export interface AuthCredential{
    username:string
    password:string
}

export interface LoginResponse{
    token?:string
    error?:string
    status:number
}