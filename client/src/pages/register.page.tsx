import { Path } from "@/routes/path.routes";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { User, Lock, UserPlus } from "react-feather";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={() => {}}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="text-center mb-4">
              <UserPlus className="mb-1 mx-auto" size={30} />
              <h1 className="font-bold">Create an account</h1>
            </div>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text flex">
                  <User className="pr-2" />
                  Username
                </span>
              </label>
              <Field
                type="text"
                placeholder="At least 4 characters"
                className="text-sm input input-bordered w-full"
                name="username"
              />
              <ErrorMessage name="username" component="div" />
            </div>
            <div className="form-control w-full mb-5">
              <label className="label">
                <span className="label-text flex">
                  <Lock className="pr-2" />
                  Password
                </span>
              </label>
              <Field
                type="password"
                placeholder="At least 6 characters"
                className="text-sm input input-bordered w-full"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <button
              type="submit"
              className={`btn btn-primary btn-block ${
                isSubmitting ? "loading" : ""
              }`}
            >
              Register
            </button>
            <Link
              to={Path.Auth + Path.Login}
              className="text-xs btn-block mt-2 hover:bg-transparent font-light btn btn-ghost btn-sm"
            >
              Do you have an account?
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
