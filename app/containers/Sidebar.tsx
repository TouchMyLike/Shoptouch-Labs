import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Sidebar() {
  const classActive = "bg-gray-300 rounded-lg";
  const menu = [
    {
      title: "Dashboard",
      active: true,
    },
    {
      title: "Products",
      active: false,
    },
    {
      title: "Orders",
      active: false,
    },
    {
      title: "Users",
      active: false,
    },
  ];
  return (
    <div className="absolute md:static h-full flex flex-col justify-between px-2 bg-white w-[250px] text-gray-700">
      <div className="menu_top">
        <div className="text-xl text-gray-500">Menu</div>
        <div className="submenu mt-1">
          {menu.map((el, i) => (
            <div
              className={`cursor-pointer transition
                                hover:scale-110 hover:bg-gray-300 rounded-lg flex justify-between items-center p-2 ${
                                  el.active ? classActive : ""
                                }`}
              key={i}
            >
              <div className="flex gap-3">
                <div>{el.title}</div>
              </div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="menu_bottom mt-1">
        <div
          className={`cursor-pointer transition hover:scale-110 hover:bg-gray-300 rounded-lg flex justify-between items-center p-2`}
        >
          <div className="flex gap-3">
            <div>Setting</div>
          </div>
          <div>
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
