import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "@/components/navbar/navbar.component"
import { Path } from "./path.routes";
export const router=createBrowserRouter([
    {
        path:Path.Home,
        element:<h1>home page</h1>
    },
    {
        path:Path.Auth,
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