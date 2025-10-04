import { useUser } from "@clerk/clerk-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dummyProducts } from "../assets/data";

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user } = useUser();
  const currency = import.meta.env.VITE_CURRENCY;
  const [products, setProducts] = useState([]);
  // fetch all products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const value = { navigate, user, products, currency, searchQuery, setSearchQuery};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
