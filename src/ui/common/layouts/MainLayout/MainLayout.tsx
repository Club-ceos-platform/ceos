import React from "react";
import MainNavigation from "../../components/layout/MainNavigation/MainNavigation";
import MainFooter from "../../components/layout/MainFooter/MainFooter";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="xl:mx-auto min-h-screen">
      <section className="flex-1 flex flex-col">
        <MainNavigation />
        {children}
        <MainFooter />
      </section>
    </main>
  );
};