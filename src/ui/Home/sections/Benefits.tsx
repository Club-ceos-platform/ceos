import React from "react";
import Image from "next/image";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

export function Benefits() {
  return (
    <div className="">
      <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl mb-8 text-center">
        Adhérer au club des CEOs c&apos;est:
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* First Benefit */}
        <Card className="w-full">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <Image
              src="/devenir-developpeur-web-mobile_LE_auto_x2.jpg"
              alt="Anonymous benefits"
              width={300}
              height={300}
              className="rounded-md w-full lg:w-auto"
            />
            <div className="flex flex-col gap-4 lg:ml-4">
              <h3 className="text-lg font-semibold text-blue-900">
                Ea cupidatat irure eiusmod duis Lorem commodo Lorem incididunt.
              </h3>
              <p className="text-sm text-gray-500">
                Ex non anim ullamco duis cupidatat adipisicing ipsum. Incididunt
                adipisicing dolore quis voluptate aute commodo velit consectetur
              </p>
              <Button
                label="En savoir plus"
                className="p-button-outlined p-button-sm mt-4 self-start"
              />
            </div>
          </div>
        </Card>
        {/* Second Benefit */}
        <Card className="w-full">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <Image
              src="/devenir-developpeur-web-mobile_LE_auto_x2.jpg"
              alt="Anonymous benefits"
              width={300}
              height={300}
              className="rounded-md w-full lg:w-auto"
            />
            <div className="flex flex-col gap-4 lg:ml-4">
              <h3 className="text-lg font-semibold text-blue-900">
                Ea cupidatat irure eiusmod duis Lorem commodo Lorem incididunt.
              </h3>
              <p className="text-sm text-gray-500">
                Ex non anim ullamco duis cupidatat adipisicing ipsum. Incididunt
                adipisicing dolore quis voluptate aute commodo velit consectetur
                labore velit eu eiusmod consequat veniam. Cillum irure in fugiat
              </p>
              <Button
                label="En savoir plus"
                className="p-button-outlined p-button-sm mt-4 self-start"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
