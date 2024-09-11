import React from "react";
import Link from "next/link";
// import { useSigninForm } from "./signinForm.hooks";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "primereact/button";
import { validateWithZod } from "@/ui/common/utils/validation-with-zod";
import { AuthInput } from "@/typings/auth";
import { authSchema } from "@/validators/auth.validation";
import "./signinForm.modules.css";

const SigninForm = () => {
  const onSubmit = async (data: AuthInput) => {
    console.log(data);
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={validateWithZod(authSchema)}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors }) => (
        <Form className="flex flex-col gap-8 items-start w-full">
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="p-field">
              <label htmlFor="email">
                E-mail <span className="text-red-500">*</span>
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className={`p-inputtext p-component ${
                  errors.email && "border border-red-500"
                }`}
              />
              <ErrorMessage name="email" component="div" className="p-error" />
            </div>
            <div className="p-field">
              <label htmlFor="email">
                Mot de passe <span className="text-red-500">*</span>
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className={`p-inputtext p-component ${
                  errors.password && "border border-red-500"
                }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="p-error"
              />
            </div>
            <Link href="/" className="text-blue-900 text-sm hover:underline">
              Mot de passe oublier ?
            </Link>
          </div>
          <Button className="w-full" label="Se connecter" />
        </Form>
      )}
    </Formik>
  );
};

export default SigninForm;
