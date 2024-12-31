import React, { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Item = ({ product }) => {
  const { addToCart, removeFromCart, cartItems, url } = useContext(ShopContext);

  return (
    <div>
      <Link
        to={`/product/${product._id}`}
        className="relative top-28 group bg-white flexCenter m-4 rounded-2xl ring-1 ring-slate-200/20 hover:shadow-sm"
      >
        <img
          src={product.image}
          alt={product.name}
          height={222}
          width={222}
          className="object-cover h-36"
        />
      </Link>

      <div className="p-3 pt-28 bg-primary rounded-xl">
        <h4 className="medium-18 line-clamp-1">{product.name}</h4>
        <h5 className="text-[16px] font-bold text-gray-900/50 mb-1 capitalize">
          {product.category}
        </h5>
        <p className="line-clamp-2">{product.description}</p>

        <div className="flexBetween mt-3">
          <div className="text-secondary bold-18">${product.price}</div>
          <div>
            {!cartItems[product._id] ? (
              <FaPlus
                onClick={() => addToCart(product._id)}
                className="bg-white h-8 w-8 p-1.5 rounded-full shadow-inner cursor-pointer"
              />
            ) : (
              <div className="bg-white rounded-full flexCenter gap-2 h-8">
                <FaMinus
                  onClick={() => removeFromCart(product._id)}
                  className="bg-primary h-6 w-6 p-1 ml-1 cursor-pointer rounded-full"
                />
                <p>{cartItems[product._id]}</p>
                <FaPlus
                  onClick={() => addToCart(product._id)}
                  className="bg-primary h-6 w-6 p-1 mr-1 cursor-pointer rounded-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
