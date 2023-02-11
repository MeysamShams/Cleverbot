import express,{Router,Request,Response} from 'express'
import { createUser, login } from '../services/auth.service';
import { body } from 'express-validator';
import { validateInputs } from '../middlewares/validator.middleware';

const router:Router=express.Router();

router.post("/register",
    body("username").isLength({min:4,max:50}),
    body("password").isLength({min:6}),
    validateInputs,
    async(req:Request,res:Response)=>{  
      res.send(await createUser(req.body?.username,req.body?.password))
})

router.post("/login",
    body("username").isLength({min:4,max:50}),
    body("password").isLength({min:6}),
    validateInputs,
    async(req:Request,res:Response)=>{  
      res.send(await login(req.body?.username,req.body?.password))
})
export const authController=router;