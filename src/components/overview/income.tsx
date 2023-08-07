import React from "react";

const Income = ({
  amount,
  yearlyGoal,
  changePercentage,
}: {
  amount: number;
  yearlyGoal: number;
  changePercentage: number;
}) => {
  return (
    <div className="p-4 border rounded m-4 flex flex-col space-y-4">
      <header>
        <p>Total income</p>
      </header>
      <main className="flex flex-col space-y-6">
        <section className="flex items-center space-x-2">
          <p className="text-4xl font-semibold">${amount}</p>
          <p className="px-2 bg-green-600 rounded-full text-white h-fit">
            +{changePercentage}%
          </p>
        </section>
        <div className="w-full bg-slate-200 rounded-full h-1">
          <div
            className="bg-purple-600 h-1 rounded-full"
            style={{
              width: `${100 - (100 * (yearlyGoal - amount)) / yearlyGoal}%`,
            }}
          ></div>
        </div>
      </main>
    </div>
  );
};

export default Income;
