"use client";

import React from "react";
import { Card } from "primereact/card";
import SigninForm from "./components/signinForm";
import { Logo } from "../common/components/Logo/Logo";

const SigninView = () => {
  return (
    <main className="flex flex-col items-center justify-center bg-blue-950 min-h-screen">
      <Card
        header={
          <div className="border-b border-gray-300 py-6">
            <Logo />
          </div>
        }
        className="card w-[30rem]"
      >
        <div className="flex flex-col gap-4 items-start px-4">
          <h2 className="text-2xl font-semibold text-blue-900">Se connecter</h2>
          <SigninForm />
        </div>
      </Card>
    </main>
  );
};
export default SigninView;
