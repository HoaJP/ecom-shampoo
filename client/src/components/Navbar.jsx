import React from "react";
import { NavLink } from "react-router";

const Navbar = ({ containerStyles, setMenuOpened }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/collection", title: "Collection" },
    { path: "/blog", title: "Blog" },
    { path: "/contact", title: "Contact" },
  ];
  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink
          onClick={() => setMenuOpened(false)}
          key={link.title}
          to={link.path}
          className={({ isActive }) =>
            `${isActive ? "active-link" : ""} p-2 px-4 rounded-full capitalize`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
