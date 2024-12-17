import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as BagIcon } from "../../../assets/icons/bag.svg";
import { ReactComponent as Bag2Icon } from "../../../assets/icons/bag-2.svg";
import { ReactComponent as ArrowDownIcon } from "../../../assets/icons/arrow-down.svg";
import { ReactComponent as CoinStackIcon } from "../../../assets/icons/coins-stacked-full.svg";
import { ReactComponent as CategoryIcon } from "../../../assets/icons/category.svg";
import { ReactComponent as HeadphoneIcon } from "../../../assets/icons/headphone.svg";

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation(); // Lấy đường dẫn hiện tại

  const toggleMenu = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navLinks = [
    {
      label: "Danh sách dịch vụ",
      to: "/danh-sach-dich-vu",
      icon: <CategoryIcon className="mr-3 w-5 h-5" />,
    },
    {
      label: "Quản lý hồ sơ",
      to: "/quan-ly-ho-so",
      icon: <CoinStackIcon className="mr-3 w-5 h-5" />,
    },
    {
      label: "Hướng dẫn thủ tục",
      to: "/huong-dan-thu-tuc",
      icon: <Bag2Icon className="mr-3 w-5 h-5" />,
    },
    {
      label: "Quản lý tài khoản",
      to: "#",
      icon: <BagIcon className="mr-3 w-5 h-5 " />,
      subLinks: [
        { label: "Tài khoản của tôi", to: "/tai-khoan-cua-toi" },
        { label: "Tài khoản nhân viên", to: "/tai-khoan-nhan-vien" },
      ],
    },
    {
      label: "Hỗ trợ",
      to: "/ho-tro",
      icon: <HeadphoneIcon className="mr-3 w-5 h-5" />,
    },
  ];

  const renderSubLinks = (subLinks) =>
    subLinks.map((subLink, subIndex) => (
      <li key={subIndex}>
        <Link
          to={subLink.to}
          className={`rounded-lg py-3 px-4 flex items-center navlink cursor-pointer hover:bg-[#0242a3] hover:text-white ${
            location.pathname === subLink.to ? "bg-[#0242a3] !text-white" : ""
          }`}
        >
          {subLink.label}
        </Link>
      </li>
    ));

  const renderNavLinks = () =>
    navLinks.map((link, index) => (
      <li key={index}>
        {link.subLinks ? (
          <>
            <div
              className={`rounded-lg py-3 px-4 flex items-center justify-between cursor-pointer hover:bg-[#0242a3] hover:text-white `}
              onClick={() => toggleMenu(index)}
            >
              <div className="flex items-center">
                {link.icon}
                {link.label}
              </div>
              <ArrowDownIcon
                className={`w-4 h-4 transition-transform ${
                  openMenus[index] ? "rotate-180" : ""
                }`}
              />
            </div>
            {openMenus[index] && (
              <ul className="pl-6 space-y-2 mt-2">
                {renderSubLinks(link.subLinks)}
              </ul>
            )}
          </>
        ) : (
          <Link
            to={link.to}
            className={`rounded-lg py-3 px-4 flex items-center navlink justify-between cursor-pointer hover:bg-[#0242a3] hover:text-white ${
              (link.to === "/danh-sach-dich-vu" && location.pathname === "/") ||
              location.pathname === link.to
                ? "bg-[#0242a3] !text-white"
                : ""
            }`}
          >
            <div className="flex items-center">
              {link.icon}
              {link.label}
            </div>
          </Link>
        )}
      </li>
    ));

  return (
    <div className="sidebar fixed top-0 left-0 h-screen w-[264px] z-10">
      <div className="bg-white absolute top-0 left-0 w-full h-full z-10">
        {/* Sidebar Header */}
        <div className="p-4 flex items-center space-x-2">
          <img
            src="/favicon/favicon-32x32.png"
            alt="logo page"
            className="w-8 h-8"
          />
          <h1 className="font-sf-semibold text-[#0267FF] text-xl">
            Sohuutritue
          </h1>
        </div>

        <div className="flex flex-col justify-between h-4/5 px-4">
          {/* Navigation Menu */}
          <nav>
            <ul className="space-y-1">{renderNavLinks()}</ul>
          </nav>
          {/* User Info */}
          {/* <div className="flex gap-2 items-center">
            <img
              src="/images/user-avatar.png"
              alt="user avatar"
              className="rounded-full w-10 h-10"
            />
            <div className="flex flex-col justify-center text-white font-inter">
              <p className="text-base">TimCook</p>
              <p className="text-sm">timcook@force.com</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* Sidebar background image */}
      {/* <img
        src="/images/sidebar-bg.png"
        alt="hexagon in the background"
        className="absolute top-0 left-0 w-full h-full rounded-r-3xl z-0"
      /> */}
    </div>
  );
};

export default Sidebar;
