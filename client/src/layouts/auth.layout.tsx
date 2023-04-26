import { Navbar } from "@/components/navbar/navbar.component"
import { Outlet } from "react-router-dom"

export const AuthLayout=()=>{
    return <>
    <Navbar/>
    <Outlet/>
    </>
}