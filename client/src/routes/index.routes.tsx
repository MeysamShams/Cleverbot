import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "@/components/navbar/navbar.component"
import { Path } from "./path.routes";
import { AuthLayout } from "@/layouts/auth.layout";
import { AuthPage } from "@/pages/auth.page";
import { NotFound } from "@/components/ui/404.component";
import { UserLayout } from "@/layouts/user.layout";
import { ChatPage } from "@/pages/chat.page";
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
        element:<UserLayout/>,
        children:[{
            path:Path.Chat,
            element:<ChatPage/>
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