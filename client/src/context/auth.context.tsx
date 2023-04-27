import { extractUserInfoFromToken, isTokenValid } from "@/services/jwt.service";
import { UserInfo } from "@/types/auth.type";
import { ReactNode, createContext, useState } from "react";

interface AuthContext{
    isLoggedIn:boolean
    userInfo:UserInfo|null
    setUserInfoOnLogin:Function
    login:Function,
    logout:Function
}
const token = localStorage.getItem("token");
export const AuthContext=createContext<AuthContext>({
    isLoggedIn: isTokenValid(token),
    userInfo: extractUserInfoFromToken(token),
    login:()=>{},
    logout:()=>{},
    setUserInfoOnLogin:()=>{}
})

export const AuthContextProvider=(props:{children:ReactNode})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(()=>isTokenValid(token))
    const [userInfo,setUserInfo]=useState<UserInfo|null>(()=>extractUserInfoFromToken(token))

    const login=()=>{        
        setIsLoggedIn(true)
        // setUserInfo(extractUserInfoFromToken(token))
    }
    const setUserInfoOnLogin=(info:UserInfo)=>setUserInfo(info)
    const logout=()=>{
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        setUserInfo(null)
    }

    return <AuthContext.Provider value={{isLoggedIn,setUserInfoOnLogin,userInfo,login,logout}}>
        {props.children}
    </AuthContext.Provider>
}
