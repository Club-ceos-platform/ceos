import React, { useState } from "react";
import { Logo } from "../../../Logo/Logo";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export function SideBar() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className="card">
      <Button
        icon={<i className="pi pi-bars" style={{ color: "#d946ef" }}></i>}
        className="bg-blue-900 border-none"
        onClick={() => setVisible(true)}
      />
      <Sidebar
        visible={visible}
        position="top"
        header={
          <div className="flex flex-row justify-between w-full gap-4 py-1">
            <Button
              icon={
                <i className="pi pi-times" style={{ color: "#d946ef" }}></i>
              }
              className="bg-blue-900 border-none"
              onClick={() => setVisible(false)}
            />
            <Logo />
            <Button label="Accessibilité" outlined size="small" />
          </div>
        }
        onHide={() => setVisible(false)}
        className="bg-blue-950 text-white h-screen"
      >
        <h2>Top Sidebar</h2>
      </Sidebar>
    </div>
  );
}
