import { Error } from '../models/error.model'
import { User } from '../models/user.model'
import {prisma} from '../configs/config'

export const getUserByUsername=async(username:string):Promise<User|null|Error>=>{
    try{
        return await prisma.user.findUnique({
            where:{
                username
            },
            select:{
                username:true,
                id:true,
                dailyRequests:true,
                createdAt:true
            }
        })
    }catch(err){
        return {error:"Failed to load profile data!",status:503}
    }
}