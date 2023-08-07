import React from "react";
import Income from "./overview/income";
import UserGrowth from "./overview/userGrowth";
import Balance from "./overview/balance";

const Overview = () => {
  return (
    <div className="flex">
      <div>
        <Income amount={110000} yearlyGoal={120000} changePercentage={12} />
        <UserGrowth
          percentage={92}
          graphs={[60, 50, 20, 10, 50, 10, 10, 20]}
          changePercentage={12}
        />
      </div>
      <Balance earnings={92} salesValue={121} changePercentage={12} />
    </div>
  );
};

export default Overview;
