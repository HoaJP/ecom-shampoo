import React from "react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { dummyAddress } from "../assets/data";

const CartTotal = () => {
  const {
    navigate,
    user,
    products,
    currency,
    cartItems,
    setCartItems,
    method,
    setMethod,
    delivery_charges,
    getCartCount,
    getCartAmount,
  } = useAppContext();

  const [addresses, setAddresses] = useState(dummyAddress);
  const [showAddress, setShowAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);

  return (
    <div>
      <h3 className="font-bold">
        Order Details{" "}
        <span className="bold-14 text-secondary">({getCartCount()}) items</span>
      </h3>
      <hr className="border-gray-300 my-5" />
      {/* payment && address */}
      <div className="mb-5">
        <div className="my-5">
          <div className="font-bold mb-4">Where to ship your order?</div>
          <div className="relative flex justify-between items-center mt-2 gap-2">
            <p >
              {selectedAddress
                ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state} ,${selectedAddress.country}`
                : "No address found"}
            </p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-gray-600 underline cursor-pointer hover:text-blue-600"
            >
              Change
            </button>
            {showAddress && (
              <div className="absolute top-10 p-2 rounded-xs bg-amber-50 ring-slate-600 text-sm w-full">
                {addresses.map((address, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedAddress(address), setShowAddress(false);
                    }}
                    className="p-2 cursor-pointer hover:bg-gray-50 hover:text-white"
                  >
                    {address.street}, {address.city}, {address.state},{" "}
                    {address.country}
                  </p>
                ))}
                <p
                  onClick={() => {
                    navigate("/address-form"), scrollTo(0, 0);
                  }}
                  className="p-2 text-center cursor-pointer hover:bg-tertiary hover:text-white"
                >
                  Add Address
                </p>
              </div>
            )}
          </div>
        </div>
        <hr className="border-gray-300 mt-5" />
        <div className="my-6">
          <h4 className="font-bold mb-4">Payment Method</h4>
          <div className="flex gap-3">
            <div
              onClick={() => setMethod("COD")}
              className={`${
                method === "COD" ? "btn-secondary" : "btn-outline"
              } text-xs cursor-pointer`}
            >
              Cash on Delivery
            </div>
            <div
              onClick={() => setMethod("stripe")}
              className={`${
                method === "stripe" ? "btn-secondary" : "btn-outline"
              } text-xs cursor-pointer`}
            >
              Stripe
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-5" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <h5>Price</h5>
          <p className="font-bold">
            {currency}
            {getCartAmount()}
          </p>
        </div>
        <div className="flex justify-between">
          <h5>Shipping Fee</h5>
          <p className="font-bold">
            {currency}
            {getCartCount() > 0 ? delivery_charges : 0}
          </p>
        </div>
        <div className="flex justify-between">
          <h5>Tax (2%)</h5>
          <p className="font-bold">
            {currency}
            {(getCartCount() * 2) / 100}
          </p>
        </div>
        <div className="flex justify-between text-lg mt-3">
          <h5>Total Amount </h5>
          <p className="font-bold">
            {currency}
            {getCartCount() === 0
              ? "0.00"
              : getCartAmount() +
                delivery_charges +
                (getCartAmount() * 2) / 100}
          </p>
        </div>
      </div>
      <button className="btn-dark rounded-md w-full mt-5">
        Proceed to Order
      </button>
    </div>
  );
};

export default CartTotal;
