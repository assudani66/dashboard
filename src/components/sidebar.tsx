import SidebarLayout from "@/layouts/SidebarLayout";
import { navigationOptions } from "@/navs/navigationOptions";
import React from "react";

const Sidebar = () => {
  return <SidebarLayout nav={navigationOptions} />;
};

export default Sidebar;
