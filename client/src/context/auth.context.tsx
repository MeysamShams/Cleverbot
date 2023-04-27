import { IsTokenValid } from "@/services/jwt.service";
import { ReactNode, createContext, useState } from "react";

interface AuthContext{
    isLoggedIn:boolean
    login:Function,
    logout:Function
}
const token = localStorage.getItem("token");
export const AuthContext=createContext<AuthContext>({
    isLoggedIn: IsTokenValid(token),
    login:()=>{},
    logout:()=>{}
})

export const AuthContextProvider=(props:{children:ReactNode})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(()=>IsTokenValid(token))
    const login=()=>setIsLoggedIn(true)
    const logout=()=>{
        localStorage.removeItem("token")
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider value={{isLoggedIn,login,logout}}>
        {props.children}
    </AuthContext.Provider>
}
