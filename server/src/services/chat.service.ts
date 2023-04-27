import { Error } from "../models/error.model";
import { oa, prisma } from "../configs/config"
import { SendMessageResponse } from "models/message.model";
import { Message } from "@prisma/client";

export const sendMessage=async(message:string,userId:number):Promise<SendMessageResponse|Error>=>{
    try{        
        // send message
        const response=await oa.openai.createCompletion({
            prompt:message,
            ...oa.modelConfiguration
        })        
        const reply=response?.data?.choices[0]?.text as string
        
        // Bulk insert is not supported in sqlite :((
        // save user message into database
        await prisma.message.create({
            data:{
                message,
                sender:"user",
                userId,
            }
        })
        // save chatGPT response into database
        await prisma.message.create({
            data:{
                message:reply,
                sender:"AI",
                userId,
            }
        })
        return {
            response:reply,
            status:200
        }; 

    }catch(err){
        return {
            error:"Failed to load response!",
            status:400
        }
    }
}

export const getMessages=async(userId:number,page:number):Promise<{page:number,total:number,itemPerPage:number,results:Message[]}|Error>=>{
    try{
        const itemPerPage=50   
        const totalItems=await prisma.message.count({where:{userId}})
        const messages=await prisma.message.findMany({
                where:{userId},
                include:{
                    user:{
                        select:{username:true}
                    }
                },
                skip:(page-1)*itemPerPage,
                take:itemPerPage,
                orderBy:{createdAt:"desc"}
            })
        return {
            page:page,
            total:totalItems,
            itemPerPage,
            results:messages
        };

    }catch(err){
        return {
            error:"Failed to load messages!",
            status:500
        }
    }
}

