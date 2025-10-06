import { useUser } from "@clerk/clerk-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { dummyProducts } from "../assets/data";
import toast from "react-hot-toast";

const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const delivery_charges = 10;
  const [method, setMethod] = useState("COD");

  // clerk
  const { user } = useUser();
  // fetch all products
  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  // Add product to the cart
  const addToCart = (itemId, size) => {
    if (!size) return toast.error("Please select a size first!");
    let cartData = structuredClone(cartItems);
    cartData[itemId] = cartData[itemId] || {};
    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    setCartItems(cartData);
    toast.success("Add item to cart successfully!🏠");
  };
  // get Cart Count
  const getCartCount = () => {
    let count = 0;
    for (let itemId in cartItems) {
      for (let size in cartItems[itemId]) {
        count += cartItems[itemId][size];
      }
    }
    return count;
  };
  // get Cart Amount (total money)
  const getCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      let product = products.find((p) => p._id === itemId);
      if (!product) continue;
      for (let size in cartItems[itemId]) {
        total += product.price[size] * cartItems[itemId][size];
      }
    }
    return total;
  };
  // update cart quantity
  const updateCartQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const value = {
    navigate,
    user,
    products,
    currency,
    searchQuery,
    setSearchQuery,
    cartItems,
    setCartItems,
    method,
    setMethod,
    delivery_charges,
    addToCart,
    getCartCount,
    updateCartQuantity,
    getCartAmount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
