import { NextFunction, Request, Response } from "express"

export const setResponseStatusCode=(req:Request,res:Response,next:NextFunction)=>{
    const oldSend = res.send
    res.send = function(data:any) {
        res.send = oldSend // set function back to avoid the 'double-send'
        let statusCode=200
        if(data?.status){
            statusCode=data?.status
        }
        return res.status(statusCode).send(data) // just call as normal with data
    }
    next()
}