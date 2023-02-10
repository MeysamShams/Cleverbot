import {genSalt,hash,compare} from 'bcrypt'

export const hashPassword=async(password:string):Promise<string|undefined>=>{
    try{
        const salt:string=await genSalt(10);
        const hashedPassword:string=await hash(password,salt);
        return hashedPassword;
    }catch(err){
        throw new Error("An error occurred while hashing the password!")
    }
}

export const comparePassword=async(plainTextPassword:string,hashedPassword:string):Promise<boolean|undefined>=>{
    try{
        return await compare(plainTextPassword,hashedPassword);
    }catch(err){
        throw new Error("An error occurred while comparing passwords!")
    }
}
