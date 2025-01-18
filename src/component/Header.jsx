import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SibebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

export default function Header() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header className={`${isActive ? "bg-white shadow-md" : "bg-none py-6"}  fixed w-full h-[50px] flex items-center  z-10 transition-all`}>
      <div className="container mx-auto  flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px] " src={Logo} alt="" />
          </div>
        </Link>
        {/* Cart */}
        <div
          className="cursor-pointer flex relative "
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}
