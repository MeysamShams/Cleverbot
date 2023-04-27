import { AuthCredential, LoginResponse } from "@/types/auth.type";
import http from './http.service'
export const loginService=async(authCredential:AuthCredential):Promise<boolean>=>{
    try{
        const {data}=await http.post<LoginResponse>("/auth/login",authCredential)
        if(data.status===200){
            localStorage.setItem("token",data.token!)
            return true
        }else{
            return false;
        }    
    }catch(e:any){
        return false
    }
}