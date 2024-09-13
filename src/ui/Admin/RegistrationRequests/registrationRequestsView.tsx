"use client";

import { UsersPendingPayment } from "./components/UsersPendingPayment";
import { UsersAwaitingApproval } from "./components/UsersAwaitingApproval";

export function RegistrationRequestsView() {
  return (
    <div className="flex flex-col mx-auto gap-4 lg:px-8 lg:py-4">
      <h1 className="text-lg md:text-2xl font-bold w-[98vw] lg:w-[70vw]">
        Détails des demandes d&apos;inscription
      </h1>
      <div>
        <UsersAwaitingApproval />
        <UsersPendingPayment />
      </div>
    </div>
  );
}
