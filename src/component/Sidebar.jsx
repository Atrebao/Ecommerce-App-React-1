import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import CardItem from "../component/CartItem";
import { SidebarContext } from "../contexts/SibebarContext";
import { CartContext } from "../contexts/CartContext";

import CartItem from "../component/CartItem";

export default function Sidebar() {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart,increaseAmount, itemAmount, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-default w-8 h-8 flex justify-center items-center"
        >
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden"> 
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <div className=" flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* Total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total</span> $ {parseFloat(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl "
          >
            <MdDeleteForever />
          </div>
        </div>
      </div>
    </div>
  );
}
