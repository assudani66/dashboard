"use client";
import React from "react";
import { Icons } from "../home/icons";

const Balance = ({
  earnings,
  salesValue,
  changePercentage,
}: {
  earnings: number;
  salesValue: number;
  changePercentage: number;
}) => {
  return (
    <div className="w-3/6 border rounded m-4 flex flex-col space-y-3">
      <header className="p-4 border-b-2 flex justify-between items-center">
        <p className="font-bold text-2xl">Balance</p>
        <div className="border px-4 py-2 flex space-x-1">
          <p>Monthly</p>
          <Icons iconName="dropdown" />
        </div>
      </header>
      <main className="flex flex-col space-y-6 p-4">
        <div className="flex space-x-4">
          <section className="flex w-3/6 flex-col border p-4 ">
            <p>Earnings</p>
            <div className="flex items-center space-x-2">
              <p className="text-4xl font-semibold">120%</p>
              <div className="px-2 py-2.5 flex items-center text-xs bg-green-600 rounded-full ">
                <p className="text-white -my-1">+{changePercentage}%</p>
              </div>
            </div>
          </section>
          <section className="flex w-3/6 flex-col border p-4 ">
            <p>Sales Value</p>
            <div className="flex items-center space-x-2">
              <p className="text-4xl font-semibold">${salesValue}</p>
              <div className="px-2 py-2.5 flex items-center text-xs bg-green-600 rounded-full ">
                <p className="text-white -my-1">+{changePercentage}%</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div></div>
    </div>
  );
};

export default Balance;
