import React from "react";
import Header from "./components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import AddressForm from "./pages/AddressForm";
import MyOrders from "./pages/MyOrders";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/owner/Dashboard";
import Sidebar from "./components/owner/sidebar";
import AddProduct from "./pages/owner/AddProduct";
import ListProduct from "./pages/owner/ListProduct";
import TestI18n from "./pages/TestI18n";
const App = () => {
  const location = useLocation();
  const isOwner = location.pathname.includes("/owner");
  return (
    <div className="min-h-screen flex flex-col text-tertiary">
      {!isOwner && <Header />}
      <Toaster position="bottom-right" />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:productId" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address-form" element={<AddressForm />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/owner" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="/owner/add-product" element={<AddProduct />} />
            <Route path="/owner/list-product" element={<ListProduct />} />
          </Route>

          {/* test language */}
          <Route path="/test" element={<TestI18n />} />
        </Routes>
      </main>
      {!isOwner && <Footer />}
    </div>
  );
};

export default App;
