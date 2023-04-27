import { AuthContext } from "@/context/auth.context";
import { useSend } from "@/hooks/useSend.hook";
import { Path } from "@/routes/path.routes";
import { loginService } from "@/services/auth.service";
import { AuthCredential } from "@/types/auth.type";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useEffect } from "react";
import { User, Lock, LogIn } from "react-feather";
import { Link } from "react-router-dom";
import { object } from "yup";
import {string} from 'yup'
export const LoginPage = () => {

  const {isLoading,data,sendData}=useSend<AuthCredential>(loginService)
  const authCtx=useContext(AuthContext)

  useEffect(()=>{
    if(data){
     authCtx.login()
    }
    
  },[data])
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={
            object({
                username:string().required().matches(/^[a-zA-Z0-9]*$/,"only characters and digits").min(4).max(50),
                password:string().required().min(6).max(50)
            })
        }
        onSubmit={(values:AuthCredential) =>sendData(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="text-center mb-4">
              <LogIn className="mb-1 mx-auto" size={30} />
              <h1 className="font-bold">Login to your account</h1>
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text flex">
                  <User className="pr-2" />
                  Username
                </span>
              </label>
              <Field
                type="text"
                placeholder="Enter your username"
                className="text-sm input input-bordered w-full"
                name="username"
              />
              <ErrorMessage name="username" className="text-xs mt-2 text-error" component="div" />
            </div>
            <div className="form-control w-full mb-3">
              <label className="label">
                <span className="label-text flex">
                  <Lock className="pr-2" />
                  Password
                </span>
              </label>
              <Field
                type="password"
                placeholder="Enter your password"
                className="text-sm input input-bordered w-full"
                name="password"
              />
              <ErrorMessage name="password" className="text-xs mt-2 text-error" component="div" />
            </div>
            <button
              type="submit"
              className={`btn btn-primary btn-block ${
                isLoading ? "loading" : ""
              }`}
            >
              Login
            </button>
            <Link
              to={Path.Auth + Path.Register}
              className="text-xs btn-block mt-2 hover:bg-transparent font-light btn btn-ghost btn-sm"
            >
              Don't have an account?
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
