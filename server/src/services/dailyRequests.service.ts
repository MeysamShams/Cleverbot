import { prisma } from "../configs/config"

export const getRemainingRequests=async(username:string):Promise<number>=>{
    try{
        const user=await prisma.user.findUnique({
            where:{username},
            select:{
                dailyRequests:true,
                _count:{
                    select:{
                        messages: {
                            where: {
                                createdAt:{
                                    gte: new Date(new Date().setUTCHours(0,0,0,0))
                                } 
                             },
                        },                    
                    }
                }
            }
        })
        const userDailyRequests=user?.dailyRequests;
        const userMessagesCount=user?._count.messages
        if(userDailyRequests && userMessagesCount)
        return userDailyRequests-userDailyRequests
        else
        return 0
    }catch(err){
        return 0
    }
}
