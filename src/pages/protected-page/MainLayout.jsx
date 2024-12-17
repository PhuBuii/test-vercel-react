import React from "react";
import "./MainLayout.css";
import Navbar from "./components/SideBar";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div className="flex bg-gray-200">
      {/* Sidebar */}
      <Navbar />
      {/* Main Content */}
      <div className="ml-[264px] w-[calc(100vw-264px)]">
        <Header />
        <div className="h-screen pt-[88px] p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
