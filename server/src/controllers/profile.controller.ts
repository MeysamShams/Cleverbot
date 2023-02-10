import express,{Router,Response} from 'express'
import { UserRequest } from '../models/user.model';
import { getUserByUsername } from '../services/profile.service';

const router:Router=express.Router();

router.get("/",async(req:UserRequest|any,res:Response)=>{
    res.send(await getUserByUsername(req?.user))
})

export const profileController=router;