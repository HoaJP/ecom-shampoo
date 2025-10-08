import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/data";

const AddProduct = () => {
  const { currency } = useAppContext();
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    category: "",
    type: "",
    popular: false,
  });
  const [sizePrices, setSizePrices] = useState([]);
  const [newSize, setNewSize] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [loading, setLoading] = useState(false);

  const allCategories = ["Hair Care", "Body Care", "Face Care"];
  const allTypes = [
    "Body-Spry",
    "Cleaner",
    "Hand-Wash",
    "Lip-Product",
    "Lotion",
    "Oil",
    "Perfume",
    "Serum",
    "Shampoo",
  ];

  // handle
  const addSizePrice = () => {
    if (!newSize || !newPrice) {
      toast.error("please enter size and price");
      return;
    }
    if (sizePrices.some((sp) => sp.size === newSize)) {
      toast.error("size already exists");
      return;
    }
    setSizePrices([...sizePrices, { size: newSize, price: newPrice }]);
    setNewSize("");
    setNewPrice("");
  };

  const removeSizePrice = (size) => {
    setSizePrices(sizePrices.filter((sp) => sp.size !== size));
  };

  return (
    <div className="md:px-8 py-6 xl:py-8 m-1.5 sm:m-3 h-[97vh] overflow-y-scroll lg:w-11/12 bg-primary shadow rounded-xl">
      <form className="flex flex-col gap-y-3.5 px-2 text-sm w-full lg:w-11/12">
        <div className="w-full">
          <h5>Product Name</h5>
          <input
            type="text"
            placeholder="Product name..."
            className="px-3 py-1.5 ring-slate-900/15 rounded-lg bg-white text-gray-600 mt-1 w-full"
          />
        </div>
        <div className="w-full">
          <h5>Product Description</h5>
          <textarea
            type="text"
            placeholder="Product description..."
            className="px-3 py-1.5 ring-slate-900/15 rounded-lg bg-white text-gray-600 mt-1 w-full"
          />
        </div>
        <div className="flex gap-4 flex-wrap">
          <div className="">
            <select className="px-4 py-2 ring-1 ring-slate-900/15 rounded-lg bg-white text-gray-600 mt-0 w-fit">
              <option value="">Select Category</option>
              {allTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <select className="px-4 py-2 ring-1 ring-slate-900/15 rounded-lg bg-white text-gray-600 mt-0 w-fit">
              <option value="">Select Type</option>
              {allCategories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* size & price pairs */}
        <div className="w-full mt-4">
          <h5>Sizes and Prices</h5>
          <div className="flex gap-4 mt-2">
            <input
              onChange={(e) => setNewSize(e.target.value)}
              value={newSize}
              type="text"
              placeholder="Size (e.g. 50ml)"
              className="px-3 py-1.5 ring-slate-900/15 rounded-lg bg-white text-gray-600 mt-1 w-full"
            />
            <input
              onChange={(e) => setNewPrice(e.target.value)}
              value={newPrice}
              type="text"
              placeholder="Price"
              className="px-3 py-1.5 ring-slate-900/15 rounded-lg bg-white text-gray-600 mt-1 w-full"
            />
            <button onClick={addSizePrice}>Add</button>
          </div>
          <div className="mt-2">
            {sizePrices.map((sp, index) => (
              <div key={index}>
                <span>{sp.size}</span>
                <span>
                  {currency} {sp.price}
                </span>
                <button
                  onClick={() => removeSizePrice(sp.size)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Images */}
        <div className="flex gap-2 mt-2">
          {Object.keys(images).map((key) => (
            <label
              key={key}
              htmlFor={`productImage${key}`}
              className="ring-1 ring-slate-900/10 overflow-hidden rounded-xl"
            >
              <input
                onChange={(e) =>
                  setImages({ ...images, [key]: e.target.files[0] })
                }
                type="file"
                accept="image/* id={`productImage${key}`}"
                hidden
              />
              <div className="h-16 w-22 bg-white flexCenter">
                <img
                  src={
                    images[key]
                      ? URL.createObjectURL(images[key])
                      : assets.uploadIcon
                  }
                  alt=""
                />
              </div>
            </label>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <h5>Add to Popular</h5>
          <input
            type="checkbox"
            checked={inputs.popular}
            onChange={(e) =>
              setInputs({ ...inputs, popular: e.target.checked })
            }
          />
        </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-secondary font-semibold mt-3 p-2 max-w-36 sm:w-full rounded-xl"
          >
            {loading ? "Adding" : "Add Product"}
          </button>
      </form>
    </div>
  );
};

export default AddProduct;
