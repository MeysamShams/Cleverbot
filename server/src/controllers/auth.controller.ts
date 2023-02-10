import express,{Router,Request,Response} from 'express'
import { createUser } from '../services/auth.service';
const router:Router=express.Router();

router.post("/register",async(req:Request,res:Response)=>{
    res.send(await createUser(req.body?.username,req.body?.password))
})
export const authController=router;