import { UserInfo } from "@/types/auth.type";
import jwtDecode from "jwt-decode";
interface JWTPayload{
    username:string
    id:string,
    exp:number
}
export const isTokenValid = (token: string | undefined | null): boolean => {
    if (token && token.length) {
      const decodedJwt = jwtDecode<JWTPayload>(token);      
      if (decodedJwt.exp) {
        if (decodedJwt.exp * 1000 > new Date().getTime()) {
          return true;
        } else {
          return false;
        }
      } else return false;
    } else {
      return false;
    }
  };
  
export const extractUserInfoFromToken=(token: string | undefined | null):UserInfo|null=>{
  if (token && token.length) {
    const decodedJwt = jwtDecode<JWTPayload>(token);      
    if (decodedJwt.exp) {
      if (decodedJwt.exp * 1000 > new Date().getTime()) {
        return {userId:decodedJwt.username,username:decodedJwt.username}
      } else {
        return null;
      }
    } else return null;
  } else {
    return null;
  }
}