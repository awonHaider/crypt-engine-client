import React from "react";
import { Link } from "react-router-dom";

const MenuOption = ({ icon: Icon, text, link, isActive }) => {
  return (
    <Link
      to={link}
      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive
          ? "bg-gray-800 text-white font-medium border-l-4 border-gray-300"
          : "text-gray-400 hover:bg-gray-700 hover:text-gray-200"
      }`}
    >
      <Icon
        className={`mr-3 ${isActive ? "text-gray-300" : "text-gray-500"}`}
      />
      <span className="text-sm">{text}</span>
    </Link>
  );
};

export default MenuOption;
