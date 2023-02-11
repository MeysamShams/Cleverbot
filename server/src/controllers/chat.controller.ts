import express,{Router,Response} from 'express'
import { body } from 'express-validator';
import { validateInputs } from '../middlewares/validator.middleware';
import { UserRequest } from '../models/user.model';

const router:Router=express.Router();

router.post("/",
    body("message").isLength({min:1}),
    validateInputs,
    async(req:UserRequest|any,res:Response)=>{
        res.send()
})

export const chatController=router;