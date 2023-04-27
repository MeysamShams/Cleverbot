import { Navbar } from "@/components/navbar/navbar.component"
import { AuthContext } from "@/context/auth.context"
import { Path } from "@/routes/path.routes"
import { useContext, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const AuthLayout=()=>{
    const authCtx=useContext(AuthContext)
    const navigator=useNavigate()
    useEffect(()=>{
        if(authCtx.isLoggedIn){
            navigator(Path.User+Path.Chat,{replace:true,})
        }
    },[authCtx.isLoggedIn])
    return <>
    <Navbar/>
    <section className=" sm:w-full md:w-96 mx-2 md:mx-auto my-3 p-5">
        <Outlet/>
    </section>
    </>
}