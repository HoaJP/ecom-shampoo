import React from "react";
import { useAppContext } from "../../context/AppContext";

const ListProduct = () => {
  const { products, currency, fetchProducts } = useAppContext();
  return (
    <div className="px-2 sm:px-6 py-12 m-2 h-[97vh] bg-primary overflow-y-scroll lg:w-11/12 rounded-xl">
      <div className="flex flex-col gap-2 lg:w-11/12">
        <div className="grid grid-cols-[1fr_3.5fr_1.5fr_1.5fr_1fr] items-center py-4 px-2 bg-secondary text-white font-bold rounded-xl">
          <h5>Image</h5>
          <h5>Title</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>InStock</h5>
        </div>
        {/* product list */}
        {products.map((product) => (
          <div
            key={product._id}
            className="grid grid-cols-[1fr_3.5fr_1.5fr_1.5fr_1fr] items-center gap-2 p-2 bg-white rounded-lg"
          >
            <img
              src={product.images[0]}
              alt=""
              className="w-12 bg-primary rounded-xs"
            />
            <h5 className="text-sm font-semibold">{product.title}</h5>
            <p className="text-sm font-semibold">{product.category}</p>
            <div className="text-sm font-semibold">
              From {currency}
              {product.price[product.sizes[0]]}
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  defaultChecked={product.inStock}
                />
                <div className="w-10 h-6 bg-slate-300 rounded-full peer peer-checked:bg-secondary transition-colors duration-200" />
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4" />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
