import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/data";
import { Link, NavLink } from "react-router";
import { UserButton } from "@clerk/clerk-react";
const Sidebar = () => {
  const { navigate, isOwner, user } = useAppContext();
  const navItems = [
    { path: "/owner", label: "Dashboard", icon: assets.dashboard },
    {
      path: "/owner/add-product",
      label: "Add Product",
      icon: assets.squarePlus,
    },
    { path: "/owner/list-product", label: "List Product", icon: assets.list },
  ];
  useEffect(() => {
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner]);
  return (
    <div>
      <div>
        {/* Sidebar */}
        <div className="max-md:flexCenter flex flex-col justify-between bg-primary sm:m-3 md:min-w-[20%] md:min-h-[97vh] rounded-xl shadow">
          <div className="flex flex-col gap-y-6 max-md:items-center md:flex-col md:pt-5 ">
            <div className="w-full flex justify-between md:flex-col">
              {/* Logo */}
              <div className="flex flex-1 p-3 lg:pl-12">
                <Link to={"/"} className="flex items-end">
                  <img src={assets.logoImg} alt="logoImg" className="h-11" />
                  <span className="hidden sm:block font-bold relative top-0 right-2">
                    ietnam
                  </span>
                </Link>
              </div>
              <div className="md:hidden flex items-center gap-3 md:bg-primary rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10">
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "42px",
                        height: "42px",
                      },
                    },
                  }}
                />
                <div className="text-sm font-semibold text-gray-800 capitalize">
                  {user?.firstName} {user?.lastName}
                </div>
              </div>
            </div>
            {/* Nav Items */}
            <div className="flex md:flex-col md:gap-x-5 gap-y-8 md:mt-4">
              {navItems.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  end={link.path === "/owner"}
                  className={({ isActive }) =>
                    isActive
                      ? "flexStart gap-x-2 p-5 lg:pl-12 font-bold sm:!text-sm cursor-pointer h-10 bg-secondary/10 max-md:border-b-4 md:border-r-4 border-secondary"
                      : "flexStart gap-x-2 lg:pl-12 p-5 font-bold sm:!text-sm cursor-pointer h-10 rounded-xl"
                  }
                >
                  <img
                    src={link.icon}
                    alt=""
                    className="hidden md:block"
                    width={11}
                  />
                  <div>{link.label}</div>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 md:bg-primary border-t border-slate-900/15 rounded-b-xl p-2 pl-5 lg:pl-10 md:mt-10">
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: {
                    width: "42px",
                    height: "42px",
                  },
                },
              }}
            />
            <div>
              {user?.firstName} {user?.lastName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
