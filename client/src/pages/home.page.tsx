import { Navbar } from "@/components/navbar/navbar.component"
import { Path } from "@/routes/path.routes"
import { UserPlus } from "react-feather"
import { Link } from "react-router-dom"

export const HomePage=()=>{
    return <>
        <Navbar/>
        <div className="flex h-[calc(100vh_-_80px)]">
        <div className="text-center w-full md:w-9/12 lg:w-7/12 m-auto">
        <h1 className="mb-10 poppins animate-text  text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400  text-transparent bg-clip-text">
        CELEVER BOT
        </h1>
        <p className="text-lg leading-8 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, fuga dicta aliquam illum optio odio minus beatae, vero nesciunt nisi totam dolore? Voluptas sequi quo nobis exercitationem dolores, quasi eius.</p>
        <div className="mt-10 flex flex-col md:flex-row items-center gap-3 justify-center">
        <Link className="btn btn-ghost text-white bg-gradient-to-r from-cyan-500 border-0 to-blue-500 " to={Path.Auth+Path.Register}>
            <UserPlus size={20} className="mr-3"/>
               Create an account
            </Link>
            <div className="divider flex w-48 mx-auto md:hidden">OR</div>
            <Link className="btn" to={Path.Auth+Path.Login}>
                Login to your account
            </Link>
        </div>
        </div>
        </div>
    </>
}