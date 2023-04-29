import { createBrowserRouter } from "react-router-dom";
import { Path } from "./path.routes";
import { AuthLayout } from "@/layouts/auth.layout";
import { AuthPage } from "@/pages/auth.page";
import { NotFound } from "@/components/ui/404.component";
import { UserLayout } from "@/layouts/user.layout";
import { ChatPage } from "@/pages/chat.page";
import { HomePage } from "@/pages/home.page";
export const router=createBrowserRouter([
    {
        path:Path.Home,
        element:<HomePage/>
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