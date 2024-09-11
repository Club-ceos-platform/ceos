import { Logo } from "../../../Logo/Logo";
import { Button } from "primereact/button";
import { MenuOption } from "./MenuOption";
import { NavLink } from "./NavLink";

export function NavBar() {
  return (
    <div className="flex flex-col gap-1">
      {/* First Section */}
      <div className="flex flex-row gap-4">
        <div className="flex-1 flex justify-center">
          <div className="h-14 w-full pl-[8rem] ">
            <Logo />
          </div>
        </div>
        <div>
          <Button
            label="Accessibilité"
            outlined
            onClick={() => (window.location.href = "/signin")}
          />
        </div>
      </div>
      {/* Second section */}
      <div className="flex justify-between items-center">
        <MenuOption />
        <NavLink />
        <Button
          outlined
          label="Adhérer"
          onClick={() => (window.location.href = "/signup")}
        />
      </div>
    </div>
  );
}
