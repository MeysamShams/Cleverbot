import { Error } from 'models/error.model'
import {prisma} from '../configs/config'
import { UserAuth } from '../models/user.model'

export const createUser=async(username:string,password:string):Promise<UserAuth|Error|undefined>=>{
    try{
        await prisma.user.create({
            data:{
                username,
                password
            }
        })

        return {
            token:"test",
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