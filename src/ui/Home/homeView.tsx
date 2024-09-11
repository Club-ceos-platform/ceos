"use client";

import React from "react";
import { Hero } from "./sections/Hero";
import { PartnershipLogos } from "./sections/PartnershipLogos";
import { TeamMembers } from "./sections/TeamMembers";
import { Benefits } from "./sections/Benefits";
import { Testimonials } from "./sections/Testimonials";

const HomeView: React.FC = () => {
  return (
    <main className="flex flex-col gap-24 items-start">
      <Hero />
      <PartnershipLogos />
      <TeamMembers />
      <Benefits />
      <Testimonials />
    </main>
  );
};
export default HomeView;
