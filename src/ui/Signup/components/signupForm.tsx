"use client";

import React from "react";
import { UserInput } from "@/typings";
import LazyLoad from "react-lazyload";
import { SignupFormStepOne } from "./signupForm.stepOne";

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
    </div>
  );
};

export default SignupForm;
