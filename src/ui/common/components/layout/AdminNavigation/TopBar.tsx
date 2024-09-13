import React from "react";
import { Menubar } from "primereact/menubar";
import { Avatar } from "primereact/avatar";

const Logo = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <span className="pi pi-cog" />
      <p>Gestion Club CEOs</p>
    </div>
  );
};

const User = (
  <div className="flex align-items-center gap-2">
    <Avatar
      image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
      shape="circle"
    />
  </div>
);

export const TopBar: React.FC = () => {
  return <Menubar start={<Logo />} end={User} />;
};
