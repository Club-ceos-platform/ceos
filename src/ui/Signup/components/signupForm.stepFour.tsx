import React from "react";
import { Toast } from "primereact/toast";

export function SignupFormStepFour() {
  const toast = React.useRef<Toast>(null);

  React.useEffect(() => {
    localStorage.removeItem("formUserRegister");
  }, []);

  return (
    <div>
      <Toast ref={toast} />
      <div className="p-6 rounded-lg text-green-500 border border-green-300 text-center mx-4 mt-4">
        <div className="flex items-center justify-center mb-4">
          <i className="pi pi-check-circle text-green-500 text-5xl"></i>
        </div>
        <p>
          Votre inscription a été réalisée avec succès ! Nous avons bien reçu
          toutes les informations. L&apos;administrateur va maintenant les
          examiner et vous contactera dans les plus brefs délais avec un retour
          détaillé.
        </p>
      </div>
    </div>
  );
}
