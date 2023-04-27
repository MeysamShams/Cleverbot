import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "@/components/navbar/navbar.component"
import { Path } from "./path.routes";
import { AuthLayout } from "@/layouts/auth.layout";
import { AuthPage } from "@/pages/auth.page";
import { NotFound } from "@/components/ui/404.component";
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
            element:<AuthPage type="login"/>
        },{
            path:Path.Register,
            element:<AuthPage type="register"/>
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
    {
        path:'*',
        element:<NotFound/>
    }
])