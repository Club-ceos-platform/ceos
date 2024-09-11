import React, { useMemo, useState } from "react";
import { UserInput } from "@/typings";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "primereact/button";
import { City, Country } from "country-state-city";
import { validateWithZod } from "@/ui/common/utils/validation-with-zod";
import { userSignupStepTwoSchema } from "@/validators/user.validation";
import { Dropdown } from "primereact/dropdown";

type Props = {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  formUserRegister: Partial<UserInput>;
  setFormUserRegister: React.Dispatch<React.SetStateAction<Partial<UserInput>>>;
};

export const SignupFormStepTwo = ({
  setActiveIndex,
  formUserRegister,
  setFormUserRegister,
}: Props) => {
  const [selectedCountry, setSelectedCountry] = useState<string>(
    formUserRegister.companyCountry || ""
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
          Informations Entreprises
        </h2>
        <p className="font-extralight text-sm text-gray-500 text-justify">
          Cette section contient des informations sur votre entreprise, telles
          que le nom de l&apos;entreprise, l&apos;adresse, et d&apos;autres
          détails importants.
          <span className="text-blue-900">
            Veuillez vous assurer que toutes les informations sont exactes et à
            jour.
          </span>
        </p>
      </div>
      <div className="w-full md:flex-1">
        <Formik
          initialValues={{
            companyName: formUserRegister.companyName || "",
            commercialName: formUserRegister.commercialName || "",
            companyPostCode: formUserRegister.companyPostCode || "",
            companyCity: formUserRegister.companyCity || "",
            companyCountry: formUserRegister.companyCountry || "",
            companyWebsite: formUserRegister.companyWebsite || "",
            companyLinkedInPage: formUserRegister.companyLinkedInPage || "",
            companyPhoneNumber: formUserRegister.companyPhoneNumber || "",
          }}
          validate={validateWithZod(userSignupStepTwoSchema)}
          onSubmit={(values) => {
            onSubmit(values);
          }}
        >
          {({ errors, setFieldValue }) => (
            <Form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-normal text-base text-gray-400">
                  Informations sur l&apos;entreprise
                </h4>
                <div className="flex flex-col md:flex-row gap-4 items-start  w-full">
                  <div className="p-field">
                    <label htmlFor="companyName">
                      Nom de l&apos;entreprise
                      <span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="companyName"
                      name="companyName"
                      type="text"
                      className={`p-inputtext p-component ${
                        errors.companyName && "border border-red-500"
                      }`}
                    />
                    <ErrorMessage
                      name="companyName"
                      component="div"
                      className="p-error"
                    />
                  </div>
                  <div className="p-field">
                    <label htmlFor="commercialName">
                      Nom commercial<span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="commercialName"
                      name="commercialName"
                      type="text"
                      className={`p-inputtext p-component ${
                        errors.commercialName && "border border-red-500"
                      }`}
                    />
                    <ErrorMessage
                      name="commercialName"
                      component="div"
                      className="p-error"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-normal text-base text-gray-400">
                  Coordonnées de l&apos;entreprise
                </h4>
                <div className="p-field">
                  <label htmlFor="companyCountry">
                    Pays<span className="text-red-500">*</span>
                  </label>
                  <Field name="companyCountry">
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
                          setFieldValue("companyCountry", e.value);
                          setSelectedCountry(e.value);
                          setFieldValue("companyCity", "");
                        }}
                        placeholder="Sélectionner un pays"
                        className={
                          errors.companyCountry && `border border-red-500`
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="companyCountry"
                    component="div"
                    className="p-error"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start w-full">
                  <div className="p-field">
                    <label htmlFor="companyPostCode">
                      Code postal<span className="text-red-500">*</span>
                    </label>
                    <Field
                      id="companyPostCode"
                      name="companyPostCode"
                      type="text"
                      className={`p-inputtext p-component ${
                        errors.companyPostCode && "border border-red-500"
                      }`}
                    />
                    <ErrorMessage
                      name="companyPostCode"
                      component="div"
                      className="p-error"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 items-start w-full">
                    <div className="p-field">
                      <label htmlFor="companyCity">
                        Ville<span className="text-red-500">*</span>
                      </label>
                      <Field name="companyCity">
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
                            onChange={(e) =>
                              setFieldValue("companyCity", e.value)
                            }
                            placeholder="Sélectionner une ville"
                            disabled={!selectedCountry}
                            className={
                              errors.companyCity && `border border-red-500`
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="companyCity"
                        component="div"
                        className="p-error"
                      />
                    </div>
                  </div>
                </div>

                <div className="p-field">
                  <label htmlFor="companyPhoneNumber">
                    Numéro de téléphone<span className="text-red-500">*</span>
                  </label>
                  <Field
                    id="companyPhoneNumber"
                    name="companyPhoneNumber"
                    type="text"
                    className={`p-inputtext p-component ${
                      errors.companyPhoneNumber && "border border-red-500"
                    }`}
                  />
                  <ErrorMessage
                    name="companyPhoneNumber"
                    component="div"
                    className="p-error"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-normal text-base text-gray-400">
                  Informations sur le site web
                </h4>
                <div className="p-field">
                  <label htmlFor="companyWebsite">
                    Site web<span className="text-red-500">*</span>
                  </label>
                  <Field
                    id="companyWebsite"
                    name="companyWebsite"
                    type="text"
                    placeholder="https://"
                    className={`p-inputtext p-component ${
                      errors.companyWebsite && "border border-red-500"
                    }`}
                  />
                  <ErrorMessage
                    name="companyWebsite"
                    component="div"
                    className="p-error"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 items-start">
                <h4 className="font-normal text-base text-gray-400">
                  Informations sur les réseaux sociaux
                </h4>
                <div className="p-field">
                  <label htmlFor="companyLinkedInPage">
                    Page LinkedIn<span className="text-red-500">*</span>
                  </label>
                  <Field
                    id="companyLinkedInPage"
                    name="companyLinkedInPage"
                    type="text"
                    placeholder="https://"
                    className={`p-inputtext p-component ${
                      errors.companyLinkedInPage && "border border-red-500"
                    }`}
                  />
                  <ErrorMessage
                    name="companyLinkedInPage"
                    component="div"
                    className="p-error"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between mt-6">
                <Button
                  type="button"
                  label="Retour"
                  outlined
                  onClick={() => setActiveIndex((prevValue) => prevValue - 1)}
                />
                <Button type="submit" label="Suivant" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
