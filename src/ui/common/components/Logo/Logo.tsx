"use client";

import "./Logo.modules.css";
import { useWindow } from "@/hooks/useWindow";

export function Logo() {
  const { isMobile } = useWindow();

  return (
    <div
      onClick={() => (window.location.href = "/")}
      className={`logoJDG cursor-pointer`}
      title="Joueur du Grenier"
    >
      <span style={{ fontSize: "1.5rem" }} className="Joueur">
        <s>C</s>lub
      </span>
      <span style={{ left: "80px" }} className="du">
        des
      </span>
      <span
        style={{ fontSize: "2rem", top: isMobile ? "-65px" : "-62px" }}
        className={`Grenier`}
      >
        CEos
      </span>
    </div>
  );
}
