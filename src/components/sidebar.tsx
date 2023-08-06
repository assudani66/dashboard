import SidebarLayout from "@/layouts/SidebarLayout";
import { navigationOptions } from "@/navs/navigationOptions";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <SidebarLayout nav={navigationOptions} />
    </div>
  );
};

export default Sidebar;
