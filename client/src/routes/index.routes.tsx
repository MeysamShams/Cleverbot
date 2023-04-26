import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "@/components/navbar/navbar.component"
import { Path } from "./path.routes";
import { AuthLayout } from "@/layouts/auth.layout";
export const router=createBrowserRouter([
    {
        path:Path.Home,
        element:<Navbar/>
    },
    {
        path:Path.Auth,
        element:<AuthLayout/>,
        children:[{
            path:Path.Login,
            element:<h1>Login</h1>
        },{
            path:Path.Register,
            element:<h1>Register</h1>
        }]
    },

    {
        path:Path.User,
        children:[{
            path:Path.Chat,
            element:<h1>Chat</h1>
        },{
            path:Path.Profile,
            element:<h1>Profile</h1>
        }]
    },
])