import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "@/components/navbar/navbar.component"
import { Path } from "./path.routes";
import { AuthLayout } from "@/layouts/auth.layout";
import { LoginPage } from "@/pages/login.page";
import { RegisterPage } from "@/pages/register.page";
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
            element:<LoginPage/>
        },{
            path:Path.Register,
            element:<RegisterPage/>
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