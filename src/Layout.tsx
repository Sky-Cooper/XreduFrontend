import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./UI/SideBar";
import { UserRole } from "./generals/Types";

function Layout({ role }: { role: UserRole }) {
  return (
    <div className="layout grid grid-cols-12 ml-[230px] mr-[64px] gap-x-[24px] gap-y-[32px] pt-[32px] h-full">
      <SideBar userRole={role} />
      <div className="content md:col-span-12">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
