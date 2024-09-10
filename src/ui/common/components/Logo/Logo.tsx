"use client";

import "./Logo.modules.css";

export function Logo() {
  return (
    <div className={`logoJDG cursor-pointer`} title="Joueur du Grenier">
      <span className="Joueur">
        <s>C</s>lub
      </span>
      <span className="du">des</span>
      <span className="Grenier">CEos</span>
    </div>
  );
}
