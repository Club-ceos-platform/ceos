"use client";

import { useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { useSignupForm } from "./signupForm.hooks";
import { validateWithZod } from "@/ui/common/utils/validation-with-zod";
import { signupSchema } from "@/validators/auth.validator";

const SignupForm = () => {
  const { onSubmit, success, error, isLoading } = useSignupForm();
  const toast = useRef<Toast>(null);

  useEffect(() => {
    if (success) {
      showToast("Inscription réussie !", "success");
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
        initialValues={{ name: "", email: "", password: "" }}
        validate={validateWithZod(signupSchema)}
        onSubmit={(values) => onSubmit(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="p-field">
              <label htmlFor="name">Nom</label>
              <Field
                id="name"
                name="name"
                type="text"
                className="p-inputtext p-component"
              />
              <ErrorMessage name="name" component="div" className="p-error" />
            </div>
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
              label={isLoading ? "Chargement..." : "S'inscrire"}
              icon={isLoading ? "pi pi-spin pi-spinner" : undefined}
              disabled={isSubmitting || isLoading}
            />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
