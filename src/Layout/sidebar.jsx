import React from "react";
import { LuHome, LuBell } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import MenuOption from "../Components/Menuoption.jsx";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="p-6 lg:h-[100vh] col-span-1 md:col-span-1 border-r border-[#E0E0E0] bg-white shadow-sm">
      <div className="sticky top-0">
        <h3 className="mb-6 text-lg font-bold text-gray-800">
          Cipher Algorithms
        </h3>
        <div className="space-y-2">
          <MenuOption
            icon={LuHome}
            text="Caesar"
            link="caesar-cipher"
            isActive={location.pathname.includes("caesar-cipher")}
          />
          <MenuOption
            icon={LuHome}
            text="Monoalphabetic"
            link="monoalphabetic-cipher"
            isActive={location.pathname.includes("monoalphabetic-cipher")}
          />
          <MenuOption
            icon={LuHome}
            text="Playfair"
            link="playfair-cipher"
            isActive={location.pathname.includes("playfair-cipher")}
          />
          <MenuOption
            icon={LuHome}
            text="One Time Pad"
            link="onetimepad-cipher"
            isActive={location.pathname.includes("onetimepad-cipher")}
          />
          <MenuOption
            icon={LuHome}
            text="Transpositional"
            link="transpositional-cipher"
            isActive={location.pathname.includes("transpositional-cipher")}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
