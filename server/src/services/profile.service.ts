import { Error } from '../models/error.model'
import { User } from '../models/user.model'
import {prisma} from '../configs/config'
import { getRemainingRequests } from './dailyRequests.service'

export const getUserByUsername=async(username:string):Promise<User|null|Error>=>{
    try{
        const user=await prisma.user.findUnique({
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
        const remainingRequests=await getRemainingRequests(username)
        return {
            ...user,
            remainingRequests
        }
    }catch(err){        
        return {error:"Failed to load profile data!",status:503}
    }
}