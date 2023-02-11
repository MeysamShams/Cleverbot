import { Error } from "../models/error.model";
import { oa } from "../configs/config"
import { SendMessageResponse } from "models/message.model";
import { updateRemainingRequests } from "./dailyRequests.service";

export const sendMessage=async(message:string,username:string):Promise<SendMessageResponse|Error>=>{
    try{
        // send message
        const response=await oa.openai.createCompletion({
            prompt:message,
            ...oa.modelConfiguration
        })

        // update remaining requests
        const remainingRequests:number=await updateRemainingRequests(username)
        return {
            response:response?.data?.choices[0]?.text as string,
            remainingRequests,
            status:200
        }; 

    }catch(err){
        return {
            error:"Failed to load response!",
            status:400
        }
    }
}