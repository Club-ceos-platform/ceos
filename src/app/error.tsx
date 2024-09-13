"use client";

import { Button } from "primereact/button";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col justify-between h-[80vh] ">
      <div className="flex-grow flex px-4 flex-col gap-4 items-center justify-center ">
        <h4 className="scroll-m-20 text-[16px] font-bold tracking-normal">
          Désolé, quelque chose s&apos;est mal passé !
        </h4>
        <Button outlined size="small">
          <Link href={"/"}>Retour</Link>
        </Button>
      </div>
    </div>
  );
}
