import {sign} from 'jsonwebtoken'

export const generateAccessToken=(payload:Object):string|undefined=>{
    try{
        
        const token:string=sign(payload,process.env.TOKEN_SECRET as string,{expiresIn:process.env.TOKEN_EXPIRE_TIME})
        return token;

    }catch(err:any){
        throw new Error("An error occurred while generating access token!");
    }
}