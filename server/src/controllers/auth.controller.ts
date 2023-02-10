import express,{Router,Request,Response} from 'express'
import { createUser, login } from '../services/auth.service';
const router:Router=express.Router();

router.post("/register",async(req:Request,res:Response)=>{
    res.send(await createUser(req.body?.username,req.body?.password))
})

router.post("/login",async(req:Request,res:Response)=>{
    res.send(await login(req.body?.username,req.body?.password))
})
export const authController=router;