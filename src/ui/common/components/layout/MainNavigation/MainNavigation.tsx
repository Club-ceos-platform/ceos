"use client";

import React from "react";
import { MobileNavBar } from "./components/MobileNavBar";
import { NavBar } from "./components/NavBar";
import { useWindow } from "@/hooks/useWindow";
import "./MainNavigation.modules.css";

export default function MainNavigation() {
  const { isDesktop } = useWindow();

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-70 shadow-md px-4 py-2 mb-2">
      {isDesktop ? <NavBar /> : <MobileNavBar />}
    </nav>
  );
}
