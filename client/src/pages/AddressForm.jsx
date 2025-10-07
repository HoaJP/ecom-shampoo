import React from "react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import Title from "./../components/Title";
import CartTotal from "../components/CartTotal";
const AddressForm = () => {
  const { navigate, user, method, setMethod } = useAppContext();
  const [address, setAddresses] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  return (
    <div className="max-padd-container pt-28 bg-primary py-16">
      {/* container */}
      <div className="flex flex-col xl:flex-row xl:gap-20">
        {/* left side */}
        <form className="flex flex-col flex-2 gap-3 ">
          <Title
            title1={"Delivery"}
            title2={"Information"}
            titleStyles={"pb-5"}
          />
          <div className="flex gap-3">
            <input
              value={address.firstName}
              name="firstName"
              type="text"
              placeholder="First Name"
              className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
            />
            <input
              value={address.lastName}
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
            />
          </div>
          <input
            value={address.email}
            name="email"
            type="email"
            placeholder="Email"
            className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-full"
          />
          <input
            value={address.phone}
            name="phone"
            type="text"
            placeholder="Phone"
            className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-full"
          />
          <input
            value={address.street}
            name="street"
            type="text"
            placeholder="Street"
            className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-full"
          />
          <div className="flex gap-3">
            <input
              value={address.city}
              name="City"
              type="text"
              placeholder="Last Name"
              className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
            />
            <input
              value={address.state}
              name="state"
              type="text"
              placeholder="State"
              className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
            />
          </div>
          <div className="flex gap-3">
            <input
              value={address.zipcode}
              name="zipcode"
              type="text"
              placeholder="Zipcode"
              className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
            />
            <input
              value={address.country}
              name="country"
              type="text"
              placeholder="Country"
              className="ring-1 ring-slate-300 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
            />
          </div>
          <button type="submit" className="btn-dark rounded-md w-1/2 mt-2">
            Add Address
          </button>
        </form>
        {/* right side */}
        <div className="flex-1 ">
          <div className="max-w-[379px] w-full bg-white p-5 rounded-xl shadow-2xl">
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
