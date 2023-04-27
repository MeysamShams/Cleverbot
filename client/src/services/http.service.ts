import axios, { InternalAxiosRequestConfig } from "axios";
import { toast } from "react-hot-toast";

// set jwt header
const handleAuthorizationHeader = (config: InternalAxiosRequestConfig) => {

    const usrtkn = localStorage.getItem("token");
    let authorizationHeader;
    usrtkn && typeof usrtkn == "string"
      ? (authorizationHeader = `JWT ${usrtkn}`)
      : (authorizationHeader = ``);
    config.headers.Authorization = authorizationHeader;

  return config;
};

// toast errors
const handleErrors = (error: any): void => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx      
      const statusCode = error.response.status;
      const errorMessage = extractErrorMessage(error.response.data);

      if (statusCode >= 500) {
        // redirect to 500 error page
        toast.error("Server Error :(", { id: "500" });
      } else if (statusCode >= 400 && statusCode < 500) {
        toast.error(errorMessage,{id:statusCode.toString()})

      } else {
        toast.error("Sorry, an error has occurred :(", { id: "unkown" });
      }
    } else if (error.request) {
      toast.error("Network Error !", {
        id: "networkError",
      });
    } else {
      toast.error("Sorry, an error has occurred :(", { id: "unkown" });
    }
  } else {
    toast.error("Sorry, an error has occurred :(", { id: "unkown" });
  }
  throw new Error(error)
};

const extractErrorMessage = (errors: any): string => {
  let errorMessage = "";
  if (errors && typeof errors==="object") {    
    Object.keys(errors).forEach((msg: string) => msg!="status" && (errorMessage += errors[msg] + "\n"));
  } else if (typeof errors === "string") errorMessage = errors;
  else errorMessage = "Sorry, an error has occurred :(";
  return errorMessage;
};

// base url
axios.defaults.baseURL = "http://127.0.0.1:5000";
// handle authorization
axios.interceptors.request.use(handleAuthorizationHeader);
// error handling
axios.interceptors.response.use(null, handleErrors);

const exportedProperties = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default exportedProperties;
