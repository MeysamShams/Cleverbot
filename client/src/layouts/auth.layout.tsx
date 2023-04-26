import { Navbar } from "@/components/navbar/navbar.component"
import { Outlet } from "react-router-dom"

export const AuthLayout=()=>{
    return <>
    <Navbar/>
    <section className=" sm:w-full md:w-96 mx-2 md:mx-auto my-3 p-5">
        <Outlet/>
    </section>
    </>
}