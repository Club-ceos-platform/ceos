"use client";

import React from "react";
import { UserInput } from "@/typings";
import LazyLoad from "react-lazyload";
import { SignupFormStepFour } from "./signupForm.stepFour";
import { SignupFormStepThree } from "./signupForm.stepThree";
import { SignupFormStepTwo } from "./signupForm.stepTwo";
import { SignupFormStepOne } from "./signupForm.stepOne";
import "./signupForm.modules.css";

type Props = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  formUserRegister: Partial<UserInput>;
  setFormUserRegister: React.Dispatch<React.SetStateAction<Partial<UserInput>>>;
};

const SignupForm = ({
  activeIndex,
  setActiveIndex,
  formUserRegister,
  setFormUserRegister,
}: Props) => {
  return (
    <div className="w-full">
      {activeIndex === 0 && (
        <LazyLoad>
          <SignupFormStepOne
            setActiveIndex={setActiveIndex}
            formUserRegister={formUserRegister}
            setFormUserRegister={setFormUserRegister}
          />
        </LazyLoad>
      )}
      {activeIndex === 1 && (
        <LazyLoad>
          <SignupFormStepTwo
            setActiveIndex={setActiveIndex}
            formUserRegister={formUserRegister}
            setFormUserRegister={setFormUserRegister}
          />
        </LazyLoad>
      )}
      {activeIndex === 2 && (
        <LazyLoad>
          <SignupFormStepThree
            setActiveIndex={setActiveIndex}
            formUserRegister={formUserRegister}
            setFormUserRegister={setFormUserRegister}
          />
        </LazyLoad>
      )}
      {activeIndex === 3 && (
        <LazyLoad>
          <SignupFormStepFour />
        </LazyLoad>
      )}
    </div>
  );
};

export default SignupForm;
