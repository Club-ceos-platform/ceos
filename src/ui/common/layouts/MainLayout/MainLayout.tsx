import React from "react";
import MainNavigation from "../../components/layout/MainNavigation/MainNavigation";
import MainFooter from "../../components/layout/MainFooter/MainFooter";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <main className="xl:mx-auto min-h-screen">
      <section className="flex flex-col">
        <MainNavigation />
        <div>{children}</div>
        <MainFooter />
      </section>
    </main>
  );
};
