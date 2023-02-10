import { Error } from '../models/error.model'
import { hashPassword } from '../utils/bcrypt'
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