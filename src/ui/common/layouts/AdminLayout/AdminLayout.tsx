"use client";

import React from "react";
import { TopBar } from "../../components/layout/AdminNavigation/TopBar";
import { NavBar } from "../../components/layout/AdminNavigation/NavBar";

type Props = {
  children: React.ReactNode;
};

export const AdminLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="flex flex-col h-full">
        <TopBar />
        <div className="flex flex-row h-full lg:ml-4 lg:my-4">
          <NavBar />
          <div className="flex flex-col lg:px-[1.67vw] flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
};
