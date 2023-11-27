import { useState } from "react";
import Button from "../Button/Button";
import { FaShop } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative z-50 mx-auto my-4 flex justify-between items-center w-11/12">
      <div id="logoCont" className="flex items-center space-x-2">
        <span className="text-ctaColor">
          <FaShop />
        </span>
        <a id="logoText" href="/" className="font-semibold text-xl">
          Energy Marketplace
        </a>
      </div>
      <button
        id="menu-btn"
        className={`block hamburger lg:hidden focus:outline-none ${
          isMenuOpen === false ? "" : "open"
        }`}
        onClick={onMenuClick}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      <div
        id="menu"
        className={`absolute flex flex-col items-center self-end py-6 top-14 space-y-4 font-bold bg-black text-darkGrey sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
          isMenuOpen === false ? "" : "flex"
        } ${isMenuOpen === false ? "hidden" : ""}`}
      >
        <a
          href="marketplace"
          className="font1 p-3 rounded-full hover:border border-ctaColor"
        >
          Marketplace
        </a>
        <a
          href="#"
          className="font1 p-3 rounded-full hover:border border-ctaColor"
        >
          Login
        </a>
        <a
          href="connect-wallet"
          className="font1 p-3 rounded-full hover:border border-ctaColor"
        >
          Connect a wallet
        </a>
        <Button
          className="py-4 px-5 rounded-2xl rounded-full flex items-center space-x-2 hover:border border-ctaColor"
          href="register"
        >
          <GoPerson />
          <span>Sign Up</span>
        </Button>
      </div>
      <div className="hidden justify-center justify-between items-center w-1/2 lg:space-x-4 md:text-sm xxl:w-1/2 lg:text-base md:w-3/5 lg:w-3/5 lg:flex">
        <a href="marketplace" className="font1">
          Marketplace
        </a>
        <a href="login" className="font1">
          Login
        </a>
        <a href="connect-wallet" className="font1">
          Connect a wallet
        </a>
        <Button
          className="py-4 px-5 bg-ctaColor rounded-2xl flex items-center space-x-2"
          href="register"
        >
          <GoPerson />
          <span>Sign Up</span>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
