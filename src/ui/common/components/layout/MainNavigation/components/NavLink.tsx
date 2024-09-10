import React from "react";
import Link from "next/link";

export function NavLink() {
  return (
    <div className="flex flex-row gap-4 items-center bg-blue-900 font-semibold px-8 py-4 rounded-md">
      <Link href={"/"} className="text-white text-sm hover:underline">
        Pourquoi le CDC ?
      </Link>
      <Link href={"/"} className="text-white text-sm hover:underline">
        Les avantages du CDC
      </Link>
      <Link href={"/"} className="text-white text-sm hover:underline">
        Les membre du CDC
      </Link>
    </div>
  );
}
