import { prisma } from "../configs/config"

export const updateRemainingRequests=async(username:string):Promise<number>=>{
    try{
        const user=await prisma.user.update({
            where:{username},
            data:{
                remainingRequests:{
                    decrement:1
                }
            }
        })
        return user?.remainingRequests
    }catch(err){
        return 0
    }
}

export const getRemainingRequests=async(username:string):Promise<number>=>{
    try{
        const user=await prisma.user.findUnique({where:{username}})
        return user?.remainingRequests || 0
    }catch(err){
        return 0
    }
}
