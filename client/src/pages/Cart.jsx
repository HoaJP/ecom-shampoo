import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import Title from "./../components/Title";
import { assets } from "../assets/data";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const {
    navigate,
    products,
    currency,
    cartItems,
    updateCartQuantity,
    getCartAmount,
  } = useAppContext();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let tempData = [];
      for (let itemId in cartItems) {
        for (let size in cartItems[itemId]) {
          if (cartItems[itemId][size] > 0) {
            tempData.push({
              _id: itemId,
              size: size,
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  const increment = (id, size) => {
    const currentQuantity = cartItems[id][size];
    updateCartQuantity(id, size, currentQuantity + 1);
  };
  const decrement = (id, size) => {
    const currentQuantity = cartItems[id][size];
    if (currentQuantity > 1) {
      updateCartQuantity(id, size, currentQuantity - 1);
    }
  };
  //

  return products && cartItems ? (
    <div className="max-padd-container pt-28 bg-primary py-16">
      <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
        {/* left side */}
        <div className="flex flex-2 flex-col gap-3 text-[95%]">
          <Title title1={"Cart"} title2={"Overview"} titleStyles={"pb-5"} />
          <div className="grid grid-cols-[6fr_2fr_1fr] font-medium bg-white p-2 rounded-xl">
            <h5 className="text-left">Product Details</h5>
            <h5 className="text-center">Subtotal</h5>
            <h5 className="text-center">Action</h5>
          </div>
          {cartData.map((item, i) => {
            const product = products.find(
              (product) => product._id === item._id
            );
            const quantity = cartItems[item._id][item.size];
            return (
              <div
                key={i}
                className="grid grid-cols-[6fr_2fr_1fr] items-center bg-white rounded-xl"
              >
                <div className="flex items-center md:gap-6 gap-3">
                  <div className="flex bg-primary rounded-xl">
                    <img src={product.images[0]} className="w-20" alt="" />
                  </div>
                  <div>
                    <h5 className="hidden sm:block h-5 line-clamp-1">
                      {product.title}
                    </h5>
                    <div className="flexStart gap-2 mb-1">
                      Size: <p>{item.size}</p>
                    </div>
                    <div className="flexBetween">
                      <div className="flex items-center ring-1 ring-slate-900/15 rounded-full overflow-hidden bg-primary">
                        <button
                          onClick={() => decrement(item._id, item.size)}
                          className="p-1.5 bg-secondary text-white rounded-full shadow-md cursor-pointer"
                        >
                          <img
                            src={assets.minus}
                            width={11}
                            className="invert"
                            alt=""
                          />
                        </button>
                        <p className="px-2">{quantity}</p>
                        <button
                          onClick={() => increment(item._id, item.size)}
                          className="p-1.5 bg-secondary text-white rounded-full shadow-md cursor-pointer"
                        >
                          <img
                            src={assets.plus}
                            width={11}
                            className="invert"
                            alt=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center font-bold">
                  {currency}
                  {product.price[item.size] * quantity}
                </div>
                <button
                  onClick={() => updateCartQuantity(item._id, item.size, 0)}
                  className="cursor-pointer mx-auto"
                >
                  <img src={assets.cartRemove} width={22} alt="" />
                </button>
              </div>
            );
          })}
        </div>
        {/* right side */}
        <div className="flex-1 ">
          <div className="max-w-[379px] w-full bg-white p-5 rounded-xl">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;
