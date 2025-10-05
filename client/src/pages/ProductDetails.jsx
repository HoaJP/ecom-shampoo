import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/data";
import ProductDescription from "../components/ProductDescription";
import ProductFeatures from "./../components/ProductFeatures";
import RelatedProducts from "./../components/RelatedProducts";

const ProductDetails = () => {
  const { products, currency } = useAppContext();
  const { productId } = useParams();
  const [image, setImage] = useState(null);
  const [size, setSize] = useState(null);

  const product = products.find((p) => p._id === productId);

  useEffect(() => {
    if (product) {
      setImage(product.images[0]);
      setSize(product.sizes[0]);
    }
  }, [product]);

  return (
    product && (
      <div className="max-padd-container pt-20">
        {/* product data */}
        <div className="flex gap-10 flex-col xl:flex-row mt-3 mb-6">
          {/* image  */}
          <div className="flex flex-1 gap-x-2 max-w-[535px]">
            <div className="flex-1">
              {product.images.map((item, i) => (
                <div key={i} className="bg-primary rounded-xl">
                  <img
                    onClick={() => setImage(item)}
                    src={item}
                    alt="productImg"
                    className="object-cover aspect-square"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-[4] bg-primary rounded-xl">
              <img src={image} alt="" />
            </div>
          </div>
          {/* product info */}
          <div className="flex-1 px-5 py-2 bg-primary rounded-2xl">
            <h3 className="leading-none">{product.title}</h3>
            {/* rating & price */}
            <div className="flex items-center gap-x-2 pt-2">
              <div className="flex gap-x-2 text-yellow-400">
                <img src={assets.star} width={19} alt="" />
                <img src={assets.star} width={19} alt="" />
                <img src={assets.star} width={19} alt="" />
                <img src={assets.star} width={19} alt="" />
                <img src={assets.star} width={19} alt="" />
              </div>
              <p>(222)</p>
            </div>
            <div className="flex items-baseline my-2">
              <h3 className="h3 text-secondary">
                {currency}
                {product.price[size]}
              </h3>
            </div>
            <p className="max-w-[555px]">{product.description}</p>
            <div className="flex gap-2 my-4">
              {[...product.sizes].map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSize(item)}
                  className={`${
                    item === size ? "bg-primary-dark" : "bg-white"
                  } h-8 w-16 ring-slate-300 rounded-lg`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-x-4">
              <button className="btn-dark sm:w-1/2 flexCenter gap-x-2 capitalize">
                Add to Cart
                <img src={assets.cartAdd} width={19} alt="" />
              </button>
              <button className="btn-white">
                <img src={assets.heartAdd} width={19} alt="" />
              </button>
            </div>
            <div className="flex items-center gap-x-2 mt-3">
              <img src={assets.delivery} width={17} alt="" />
              <span>Free Delivery on orders over 500$</span>
            </div>
            <hr className="w-2/3 my-3" />
            <div className="mt-2 flex flex-col gap-1 text-gray-300 text-[14px]">
              <p>Authenticy You Can Trust</p>
              <p>Enjoy Cash on Delivery for Your Convenience</p>
              <p>Easy Returns and Exchanges within 7 Days</p>
            </div>
          </div>
        </div>
        <ProductDescription />
        <ProductFeatures />
        {/* related product */}
        <RelatedProducts product={product} id={productId} />
      </div>
    )
  );
};

export default ProductDetails;
