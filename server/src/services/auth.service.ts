import { Error } from '../models/error.model'
import { comparePassword, hashPassword } from '../utils/bcrypt'
import {prisma} from '../configs/config'
import { UserAuth } from '../models/user.model'
import { generateAccessToken } from '../utils/jwt'

export const createUser=async(username:string,password:string):Promise<UserAuth|Error|undefined>=>{
    const hashedPassword=await hashPassword(password);
    try{
        const user=await prisma.user.create({
            data:{
                username,
                password:hashedPassword
            }
        })

        return {
            token:generateAccessToken({username,id:user.id}) as string,
            status:200
        }
    }catch(err:any){
        if(err.code==="P2002"){
            // duplicated username
            return {error:"Duplicated username!",status:409}
        }else{
            return {error:"Error on creating user!",status:503}
        }
    }
}


export const login=async(username:string,password:string):Promise<UserAuth|Error|undefined>=>{
    try{
        const user=await prisma.user.findUnique({where:{username}})
        const errorMessage:Error={
            error:"Username or password is wrong!",
            status:401
        }

        if(user){
            if(await comparePassword(password,user.password as string)){
                return {
                    token:generateAccessToken({username,id:user?.id}) as string,
                    status:200
                }
            }else{
                return errorMessage
            }
        }else{
            return errorMessage
        }

    }catch(err:any){
        return {error:"An error occurred on checking credentials!",status:503}
    }
}