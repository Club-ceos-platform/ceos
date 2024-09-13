import React from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const MenuItem: React.FC<{
  label: string;
  path?: string;
  icon: string;
  onClick?: () => void;
}> = ({ label, path, icon, onClick }) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <li
      className="flex items-center justify-between mt-2 mb-4"
      onClick={handleClick}
    >
      <div className="flex items-start gap-2 text-gray-500 hover:text-gray-900 text-sm">
        <span className={"pi pi-" + icon} />
        <a href={path} className="cursor-pointer">
          {label}
        </a>
      </div>
      {isActive && <span className="pi pi-angle-right text-gray-900" />}
    </li>
  );
};

export const NavBar: React.FC = () => {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const menuItems = [
    { label: "Accueil", path: "/admin/home", icon: "home" },
    {
      label: "Demandes d'inscription",
      path: "/admin/registration-requests",
      icon: "user-plus",
    },
    {
      label: "Déconnexion",
      icon: "sign-out",
      onClick: handleLogout,
    },
  ];

  return (
    <div className="navbar hidden lg:flex">
      <ul className="w-full">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};
