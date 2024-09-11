"use client";

import React from "react";
import { LocationSection } from "./sections/LocationSection";
import { FollowUsSection } from "./sections/FollowUsSection";

export default function MainFooter() {
  return (
    <footer className="flex flex-col w-screen mt-20">
      <LocationSection />
      <FollowUsSection />
    </footer>
  );
}
