import { NextFunction, Response } from "express";
import { UserRequest } from "../models/user.model";
import { getRemainingRequests } from "../services/dailyRequests.service";

export const checkRemainingRequests=async(req:UserRequest|any,res:Response,next:NextFunction):Promise<void>=>{
    const remainingRequests=await getRemainingRequests(req?.user);
    if(remainingRequests<1){
        res.status(403).send({error:"You have exceeded your daily request!"})
    }else{
        next()
    }
}