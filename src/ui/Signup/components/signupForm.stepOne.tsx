import React, { useMemo, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "primereact/button";
import { UserInput } from "@/typings";
import { userSignupStepOneSchema } from "@/validators/user.validation";
import { City, Country } from "country-state-city";
import { validateWithZod } from "@/ui/common/utils/validation-with-zod";
import { Dropdown } from "primereact/dropdown";

type Props = {
  formUserRegister: Partial<UserInput>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setFormUserRegister: React.Dispatch<React.SetStateAction<Partial<UserInput>>>;
};

export const SignupFormStepOne = ({
  formUserRegister,
  setActiveIndex,
  setFormUserRegister,
}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    formUserRegister.country || ""
  );

  const countries = useMemo(() => Country.getAllCountries(), []);

  const cities = useMemo(() => {
    return selectedCountry ? City.getCitiesOfCountry(selectedCountry) : [];
  }, [selectedCountry]);

  const onSubmit = async (data: Partial<UserInput>) => {
    const newValue = { ...formUserRegister, ...data };
    setFormUserRegister(newValue);
    setActiveIndex((prevValue) => prevValue + 1);
  };
  return (
    <div className="flex flex-col md:flex-row gap-16 items-start justify-between">
      <div className="w-full md:flex-1 flex flex-col gap-4 pr-8">
        <h2 className="text-2xl md:text-4xl text-center font-bold text-blue-900">
          Informations personnelles
        </h2>
        <p className="font-extralight text-sm text-gray-700 text-justify">
          Cette section contient vos informations personnelles, telles que votre
          nom, votre adresse, et d&apos;autres détails importants.
          <span className="text-blue-900">
            Veuillez vous assurer que toutes les informations sont exactes et à
            jour.
          </span>
        </p>
      </div>
      <div className="w-full md:flex-1 ">
        <Formik
          initialValues={{
            lastName: formUserRegister.lastName || "",
            firstName: formUserRegister.firstName || "",
            country: formUserRegister.country || "",
            city: formUserRegister.city || "",
            email: formUserRegister.email || "",
            phoneNumber: formUserRegister.phoneNumber || "",
            linkedInUrl: formUserRegister.linkedInUrl || "",
            jobTitle: formUserRegister.jobTitle || "",
            postCode: formUserRegister.postCode || "",
          }}
          validate={validateWithZod(userSignupStepOneSchema)}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ errors, setFieldValue }) => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-normal text-base text-gray-400">
                  Informations sur d&apos;identité
                </h4>
                <div className="flex flex-col md:flex-row gap-4 items-start  w-full">
                  <div className="p-field">
                    <label htmlFor="lastName">
                      Nom<span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="lastName"
                      name="lastName"
                      type="text"
                      className={`p-inputtext p-component ${
                        errors.lastName && "border border-red-500"
                      }`}
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="p-error"
                    />
                  </div>
                  <div className="p-field">
                    <label htmlFor="firstName">
                      Prénom<span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="firstName"
                      name="firstName"
                      type="text"
                      className={`p-inputtext p-component ${
                        errors.firstName && "border border-red-500"
                      }`}
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="p-error"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-normal text-base text-gray-400">
                  Informations du Coordonnées
                </h4>
                <div className="p-field">
                  <label htmlFor="email">
                    E-mail<span className="text-red-500">*</span>
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="text"
                    className={`p-inputtext p-component ${
                      errors.email && "border border-red-500"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="p-error"
                  />
                </div>

                <div className="p-field">
                  <label htmlFor="country">
                    Pays<span className="text-red-500">*</span>
                  </label>
                  <Field name="country">
                    {({ field }: any) => (
                      <Dropdown
                        {...field}
                        filter
                        optionLabel="label"
                        value={field.value}
                        options={countries.map((country) => ({
                          label: country.name,
                          value: country.isoCode,
                        }))}
                        onChange={(e) => {
                          setFieldValue("country", e.value);
                          setSelectedCountry(e.value);
                          setFieldValue("city", "");
                        }}
                        placeholder="Sélectionner un pays"
                        className={errors.country && `border border-red-500`}
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="p-error"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start w-full">
                  <div className="p-field">
                    <label htmlFor="postCode">
                      Code postal<span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="postCode"
                      name="postCode"
                      type="text"
                      className={`p-inputtext p-component ${
                        errors.postCode && "border border-red-500"
                      }`}
                    />
                    <ErrorMessage
                      name="postCode"
                      component="div"
                      className="p-error"
                    />
                  </div>
                  <div className="p-field">
                    <label htmlFor="city">
                      Ville<span className="text-red-500">*</span>
                    </label>
                    <Field name="city">
                      {({ field }: any) => (
                        <Dropdown
                          {...field}
                          value={field.value}
                          filter
                          optionLabel="label"
                          options={cities?.map((city) => ({
                            label: city.name,
                            value: city.name,
                          }))}
                          onChange={(e) => setFieldValue("city", e.value)}
                          placeholder="Sélectionner une ville"
                          disabled={!selectedCountry}
                          className={errors.city && `border border-red-500`}
                        />
                      )}
                    </Field>
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="p-error"
                    />
                  </div>
                </div>
                <div className="p-field">
                  <label htmlFor="phoneNumber">
                    Téléphone<span className="text-red-500">*</span>
                  </label>
                  <Field
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    className={`p-inputtext p-component ${
                      errors.phoneNumber && "border border-red-500"
                    }`}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="p-error"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-normal text-base text-gray-400">
                  Informations sur le réseaux sociaux
                </h4>
                <div className="p-field">
                  <label htmlFor="linkedInUrl">
                    Url de linkedIn<span className="text-red-500">*</span>
                  </label>
                  <Field
                    id="linkedInUrl"
                    name="linkedInUrl"
                    type="text"
                    placeholder="https://"
                    className={`p-inputtext p-component ${
                      errors.linkedInUrl && "border border-red-500"
                    }`}
                  />
                  <ErrorMessage
                    name="linkedInUrl"
                    component="div"
                    className="p-error"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-normal text-base text-gray-400">
                  Informations professionnelles
                </h4>
                <div className="p-field">
                  <label htmlFor="jobTitle">
                    Post<span className="text-red-500">*</span>
                  </label>
                  <Field
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    className={`p-inputtext p-component ${
                      errors.jobTitle && "border border-red-500"
                    }`}
                  />
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="p-error"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between mt-6">
                <Button
                  type="button"
                  label="Annuler"
                  outlined
                  onClick={() => (window.location.href = "/")}
                />
                <Button type="submit" label="Continuer" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
