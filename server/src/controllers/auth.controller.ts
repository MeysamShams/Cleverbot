import express,{Router,Request,Response} from 'express'
import { createUser, login } from '../services/auth.service';
import { body, validationResult } from 'express-validator';

const router:Router=express.Router();

router.post("/register",body("username").isLength({min:4,max:50}),body("password").isLength({min:6}),async(req:Request,res:Response)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(),status:400 });
    }
    res.send(await createUser(req.body?.username,req.body?.password))
})

router.post("/login",body("username").isLength({min:4,max:50}),body("password").isLength({min:6}),async(req:Request,res:Response)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(),status:400 });
    }
    res.send(await login(req.body?.username,req.body?.password))
})
export const authController=router;