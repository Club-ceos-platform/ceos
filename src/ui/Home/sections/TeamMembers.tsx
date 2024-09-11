import React from "react";
import { Button } from "primereact/button";
import { AnimatedMembersList } from "../components/AnimatedMembersList";

export function TeamMembers() {
  return (
    <div className="flex flex-row items-center justify-between px-4 w-screen">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl mb-8">
          Nos membres
        </h2>
        <h3 className="text-gray-700 pb-8">
          Rejoins notre collectiif grandissant de{" "}
          <span className="text-fuchsia-500">+100</span> Entrepreneur(e)s
          Bootstrap
        </h3>
        <Button label=" Nous rejoindre" outlined />
      </div>
      <div className="overflow-hidden px-4">
        <AnimatedMembersList />
      </div>
    </div>
  );
}
