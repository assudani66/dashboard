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
        <p className="text-slate-400">Total income</p>
      </header>
      <main className="flex flex-col space-y-6">
        <section className="flex items-center space-x-2">
          <p className="text-4xl font-semibold">${amount}</p>
          <div className="px-2 py-2.5 flex items-center text-xs bg-green-600 rounded-full ">
            <p className="text-white -my-1">+{changePercentage}%</p>
          </div>
        </section>
        <section className="flex flex-col space-y-2">
          <div className="w-full bg-slate-200 rounded-full h-1">
            <div
              className="bg-purple-600 h-1 rounded-full"
              style={{
                width: `${100 - (100 * (yearlyGoal - amount)) / yearlyGoal}%`,
              }}
            ></div>
          </div>
          <p className="text-slate-400">Yearly Goal</p>
        </section>
      </main>
    </div>
  );
};

export default Income;
