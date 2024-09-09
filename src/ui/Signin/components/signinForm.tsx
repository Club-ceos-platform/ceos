"use client";

import { useRef, useEffect } from "react";
import { useSigninForm } from "./signinForm.hooks";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { validateWithZod } from "@/ui/common/utils/validation-with-zod";
import { signinSchema } from "@/validators/auth.validator";

const SigninForm = () => {
  const { onSubmit, success, error, isLoading } = useSigninForm();
  const toast = useRef<Toast>(null);

  useEffect(() => {
    if (success) {
      showToast("Success de connection", "success");
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      showToast(error, "error");
    }
  }, [error]);

  const showToast = (message: string, severity: "success" | "error") => {
    if (toast.current) {
      toast.current.show({ severity, summary: message, life: 3000 });
    }
  };

  return (
    <>
      <Toast ref={toast} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={validateWithZod(signinSchema)}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="p-field">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="p-inputtext p-component"
              />
              <ErrorMessage name="email" component="div" className="p-error" />
            </div>
            <div className="p-field">
              <label htmlFor="password">Mot de passe</label>
              <Field
                id="password"
                name="password"
                type="password"
                className="p-inputtext p-component"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="p-error"
              />
            </div>
            <Button
              type="submit"
              label={isLoading ? "Chargement..." : "Se connecter"}
              icon={isLoading ? "pi pi-spin pi-spinner" : undefined}
              disabled={isSubmitting || isLoading}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SigninForm;
