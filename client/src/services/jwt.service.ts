import jwtDecode from "jwt-decode";
interface JWTPayload{
    username:string
    id:string,
    exp:number
}
export const IsTokenValid = (token: string | undefined | null): boolean => {
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
  