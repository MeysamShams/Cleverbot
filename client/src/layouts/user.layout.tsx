import { Navbar } from "@/components/navbar/navbar.component"
import { AuthContext } from "@/context/auth.context"
import { Path } from "@/routes/path.routes"
import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"

export const UserLayout=()=>{
    const authCtx=useContext(AuthContext)
    return <>
    {!authCtx.isLoggedIn && <Navigate to={Path.Auth+Path.Login} replace={true}/>}
    <Navbar/>
    <section className="w-full">
        <Outlet/>
    </section>
    </>
}