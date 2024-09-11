import React from "react";
import Image from "next/image";
import { Button } from "primereact/button";
import { MemberState } from "../data-home";

type Props = {
  member: MemberState;
};

export function CardMember({ member }: Props) {
  return (
    <div className="flex flex-col items-center gap-3 border border-gray-200 shadow-sm rounded-xl p-4 w-48 bg-white transition-transform hover:shadow-md hover:scale-105">
      <div className="w-16 h-16 mb-2">
        <Image
          src="/profil.jpeg"
          alt={member.firstName}
          width={64}
          height={64}
          className="border border-gray-300 rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col text-center text-gray-700">
        <span className="text-md font-semibold">{member.firstName}</span>
        <span className="text-xs text-gray-500">{member.lastName}</span>
      </div>
      <Button
        label="Visiter"
        rounded
        outlined
        className="mt-2 p-button-outlined p-button-sm text-xs text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
      />
    </div>
  );
}
