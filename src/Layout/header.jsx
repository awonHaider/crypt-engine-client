import React, { useState } from "react";
import {
  HiOutlineDotsHorizontal,
  HiOutlineMenu,
  HiOutlineX,
} from "react-icons/hi";
import awonImg from "../Images/awon.jpg";
import mudasarImg from "../Images/mudasar.jpg";
import huzaifaImg from "../Images/huzaifa.jpg";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-300 p-4 flex justify-between items-center px-8">
      <div>
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse text-xl"
        >
          CRYPT<span className="font-bold">ENGINE</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {/* Three circular profile images */}
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={awonImg}
            alt="Profile 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={mudasarImg}
            alt="Profile 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={huzaifaImg}
            alt="Profile 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
