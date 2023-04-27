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
    <section className=" sm:w-full md:w-96 mx-2 md:mx-auto my-3 p-5">
        <Outlet/>
    </section>
    </>
}