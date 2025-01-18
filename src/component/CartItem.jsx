import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
export default function CartItem({ item }) {
  const { id, title, category, image, price, amount } = item;
  const {removeFromCart, increaseAmount, decreaseAmount}  = useContext(CartContext)
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200  w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 ">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt={title} />
        </Link>

        <div className="w-full flex flex-col">
          {/* title & remove & icon */}
          <div className="flex justify-between mb-2">
            {/* Title */}
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-slate-600 hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            {/* Remove icon */}
            <div className="text-xl cursor-pointer">
              <IoMdClose onClick={()=> removeFromCart(id)} className="text-gray-500 hover:text-red-500 transition duration-300" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px]  ">
            {/* Quantity */}
            <div className="flex flex-1 max-w-[100px]  h-full border text-slate-500 font-medium">
              {/* minus icon */}
              <div onClick={()=> decreaseAmount(id)} className="flex-1 flex justify-center items-center cursor-pointer h-full ">
                <IoIosRemove />
              </div>

              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">{amount}</div>
              {/* Plus icon */}
              <div onClick={()=> increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoAddOutline />
              </div>
            </div>

            {/* item price */}
            <div className="flex-1 flex items-center justify-around">${price}</div>

            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-slate-500 font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
