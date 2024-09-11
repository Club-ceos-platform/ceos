import { SideBar } from "./SideBar";
import { Logo } from "../../../Logo/Logo";
import { Button } from "primereact/button";

export function MobileNavBar() {
  return (
    <div className="flex flex-row justify-between gap-4">
      <SideBar />
      <Logo />
      <Button label="Accessibilité" outlined size="small" />
    </div>
  );
}
