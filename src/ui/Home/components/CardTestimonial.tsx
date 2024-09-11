import React from "react";
import Image from "next/image";
import Link from "next/link";

export function CardTestimonial() {
  return (
    <div className="flex flex-row gap-4 p-4 rounded-md border border-gray-300 bg-white">
      <Image
        src="/profil.jpeg"
        alt="alt"
        width={400}
        height={400}
        className="h-60 w-40 object-cover rounded-md"
      />
      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col">
          <h2 className="text-base text-blue-900 font-bold">
            Sint id et sunt esse.
          </h2>
          <p className="text-sm text-gray-700">
            Dolore officia aliquip aliqua nisi do velit do exercitation deserunt
            nostrud mollit culpa nostrud labore.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-base text-blue-900 font-bold">
            Consectetur velit proident.
          </h2>
          <p className="text-sm text-gray-700">
            Cupidatat aute consectetur consectetur veniam dolore. Incididunt.
          </p>

          <Link href="/" className="text-blue-900 font-bold underline mt-2">
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}
