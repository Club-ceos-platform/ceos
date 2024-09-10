import React from "react";
import { MenuItem } from "primereact/menuitem";
import { Steps } from "primereact/steps";

type Props = {
  activeIndex: number;
};

const items: MenuItem[] = [
  {
    label: "Information Personnelles",
    icon: "pi pi-user",
  },
  {
    label: "Information Entreprises",
    icon: "pi pi-building",
  },
  {
    label: "Chiffres d'affaires",
    icon: "pi pi-chart-line",
  },
  {
    label: "Information complète",
    icon: "pi pi-info-circle",
  },
];

export function SignupFormStepper({ activeIndex }: Props) {
  return (
    <>
      <div className="card sticky top-[4rem] md:top-[7rem] bg-white bg-opacity-70 pb-4 pt-8 w-screen -ml-4 z-50">
        <Steps
          model={items}
          readOnly={true}
          activeIndex={activeIndex}
          className="min-w-full custom-steps"
        />
      </div>
    </>
  );
}
