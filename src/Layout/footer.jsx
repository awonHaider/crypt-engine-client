import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700" />

      <footer>
        {/* Copyright Secton */}
        <div className="flex items-center justify-center my-6">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">
            ©{" "}
            <Link to="/" className="hover:underline">
              CRYPT<span className="font-bold">ENGINE</span>
            </Link>
            . All rights reserved. Made by Awon, Mudassar & Huzaifa
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
