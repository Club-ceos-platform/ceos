"use client";
import Link from "next/link";
import { Button } from "primereact/button";

export default function MainNavigation() {
  return (
    <header className="h-96px" aria-label="Main Navigation">
      <nav
        style={{ backgroundColor: "#ffffff5e" }}
        className="flex flex-col px-4 py-2 fixed  top-0 left-0 w-full z-50 shadow-md sm:px-6 lg:px-8"
      >
        <div className="flex w-full justify-end">
          <div className="flex inline-center justify-between w-[57%]">
            <Link
              href="/"
              className="bg-blue-900 text-white font-bold px-4 py-2 rounded-2xl"
            >
              Club des CEOs
            </Link>
            <Button>Accessibilité</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
