import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col text-tertiary">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/:productId" element={<ProductDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};


export default App;
