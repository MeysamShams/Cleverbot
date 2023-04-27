import { Navbar } from "@/components/navbar/navbar.component"
import { AuthContext } from "@/context/auth.context"
import { Path } from "@/routes/path.routes"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

export const AuthLayout=()=>{
    const authCtx=useContext(AuthContext)
    return <>
    {authCtx.isLoggedIn && <Navigate to={Path.User+"/"+Path.Chat} replace={true}/>}
    <Navbar/>
    <section className=" sm:w-full md:w-[420px] mx-2 md:mx-auto mt-7 mb-4 p-2">
        <Outlet/>
    </section>
    </>
}