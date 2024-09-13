import React, { useState, useEffect } from "react";
import Image from "next/image";
import { UserOutput } from "@/typings";
import { Card } from "primereact/card";
import { Carousel } from "primereact/carousel";

export function UsersAwaitingApproval() {
  const [users, setUsers] = useState<UserOutput[] | []>([]);

  useEffect(() => {
    async function getUsersAwaitingApproval() {
      const response = await fetch(
        "/api/admin?action=getUsersAwaitingApproval"
      );
      const { users } = await response.json();

      setUsers(users);
    }
    getUsersAwaitingApproval();
  }, []);

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const cardUsersTemplate = (user: UserOutput) => {
    return (
      <div className="flex flex-col border surface-border border-round rounded-md m-2 text-center py-5 px-3 max-w-[300px] transition hover:bg-gray-100">
        <div className="flex flex-col items-center justify-center mb-3">
          <Image
            src="/profil.jpeg"
            alt="anonymous profil"
            width={200}
            height={200}
            className="h-20 w-20 shadow-sm object-cover rounded-full"
          />
          <h4 className="mb-1 mt-4 font-normal">
            Nom : {user.lastName} {user.firstName}
          </h4>
          <h6>Chiffre d&apos;affaire : {user.revenue}</h6>
        </div>
      </div>
    );
  };
  return (
    <Card>
      <div className="mb-4">
        <h2 className="text-lg font-normal">
          Liste d&apos;inscription en attente de validation
        </h2>
      </div>
      <Carousel
        value={users}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={(user) => cardUsersTemplate(user)}
      />
    </Card>
  );
}
