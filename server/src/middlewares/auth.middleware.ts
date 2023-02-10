import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserRequest } from "models/user.model";

export const jwtAuth=(req:UserRequest|any,res:Response,next:NextFunction)=>{
    const authHeader=req.headers['authorization'];
    const token=authHeader?.split(" ")[1]

    if(token==null){
        res.status(403).send({error:"Unauthorize request !",status:403})
    }else{

        verify(token,process.env.TOKEN_SECRET as string,(err:any,user:any)=>{
            if(err)  res.status(403).send({error:"Forbidden !",status:403})
    
            req['user']=user?.username as string;
    
            next();
        })
    }

}