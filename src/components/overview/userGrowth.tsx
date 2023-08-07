import React from "react";

const UserGrowth = ({
  percentage,
  graphs,
  changePercentage,
}: {
  percentage: number;
  graphs: number[];
  changePercentage: number;
}) => {
  return (
    <div className="p-4 border rounded m-4 flex flex-col space-y-4">
      <header>
        <p>New Users</p>
      </header>
      <main className="flex flex-col space-y-6">
        <section className="flex items-center space-x-2">
          <p className="text-4xl font-semibold">{percentage}%</p>
          <p className="px-2 bg-green-600 rounded-full text-white h-fit">
            +{changePercentage}%
          </p>
        </section>
        <div className="flex space-x-4">
          {graphs.map((amount, index) => {
            return (
              <div
                key={index}
                className="bg-slate-200 rounded h-20 w-10 flex items-end"
              >
                <div
                  className="bg-blue-600 h-1 rounded w-10"
                  style={{
                    height: `${amount}%`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default UserGrowth;
