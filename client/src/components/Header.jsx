import { Link } from "react-router-dom";
import { assets } from "../assets/data.js";
import Navbar from "./Navbar";
import { useState } from "react";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext.jsx";
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { user, navigate, getCartCount } = useAppContext();
  const { openSignIn } = useClerk();
  const toggleMenu = () => setMenuOpened((prev) => !prev);
  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white py-3">
      <div className="max-padd-container flexBetween">
        {/* logo */}
        <div className="flex flex-1">
          <Link to={"/"} className="flex items-end">
            <img src={assets.logoImg} alt="logoImg" className="h-11" />
            <span className="hidden sm:block bold-24 relative top-1 right-2">
              ietnam
            </span>
          </Link>
        </div>
        {/* navbar */}
        <div className="flex-1">
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={`${
              menuOpened
                ? "flex flex-col items-start gap-y-8 fixed top-16 right-6 p-6 bg-white rounded-xl shadow-md w-52 z-50"
                : "hidden lg:flex flexCenter gap-x-5 xl:gap-x-8 medium-15 bg-secondary/10 rounded-full p-1 flexCenter"
            }`}
          />
        </div>
        {/* Button & Profile icon */}
        <div className="flex flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
          <div>
            <button className="btn-outline px-2 py-1 text-xs font-semibold">
              Dashboard
            </button>
          </div>
          {/* Menu Toggle */}
          <div className="relative lg:hidden w-7 h-6 cursor-pointer">
            <img
              onClick={toggleMenu}
              src={assets.menu}
              alt="menu icon"
              className={`absolute inset-0 transition-opacity duration-700 ${
                menuOpened ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              onClick={toggleMenu}
              src={assets.menuClose}
              alt="menu icon"
              className={`absolute inset-0 transition-opacity duration-700 ${
                menuOpened ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img src={assets.cartAdded} alt="cart added" className="min-w-7" />
            <label className="absolute bottom-6 right-0 left-0 text-xs font-bold bg-secondary/15 flexCenter rounded-full">
              {getCartCount()}
            </label>
          </div>
          {/* user profile */}
          <div className="group relative top-1">
            {user ? (
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: {
                      width: "42px",
                      height: "42px",
                    },
                  },
                }}
              >
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="My Orders"
                    labelIcon={<i className="ri-shopping-bag-line"></i>}
                    onClick={() => navigate("/my-orders")}
                  ></UserButton.Action>
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <button
                onClick={openSignIn}
                className="btn-secondary flexCenter gap-2 rounded-full"
              >
                Login
                <img src={assets.user} alt="user icon" className="invert w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
