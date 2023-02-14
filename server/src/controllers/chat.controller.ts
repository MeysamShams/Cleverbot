import express,{Router,Response} from 'express'
import { body } from 'express-validator';
import { sendMessage } from '../services/chat.service';
import { validateInputs } from '../middlewares/validator.middleware';
import { UserRequest } from '../models/user.model';
import { checkRemainingRequests } from '../middlewares/remainingRequests.middleware';

const router:Router=express.Router();

router.post("/",
    checkRemainingRequests,
    body("message").isLength({min:1}),
    validateInputs,
    async(req:UserRequest|any,res:Response)=>{
        res.send(await sendMessage(req.body?.message,req?.userId))
})

export const chatController=router;