import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const Item = ({ product }) => {
  const { navigate, currency } = useAppContext();
  const [hovered, setHovered] = useState(false);
  const [size, setSize] = useState(product.sizes[0]);
  return (
    <div>
      <div className="overflow-hidden shadow-md rounded-xl p-2">
        {/* image */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flexCenter h-[182px] w-full transition-all duration-300 rounded-xl group relative bg-amber-50/30"
        >
          <img
            src={
              product.images.length > 1 && hovered
                ? product.images[1]
                : product.images[0]
            }
            alt=""
            height={144}
            width={144}
          />
          <div className="absolute bottom-1 left-1 right-1 hidden group-hover:block">
            <button
              onClick={() => {
                navigate(`/collection/${product._id}`);
                scrollTo(0, 0);
            }}
            className = "btn-secondary !py-2 !px-0 w-full !text-xs"
            >
              Quick View
            </button>
          </div>
          <p className="absolute top-2 right-2 ring-1 ring-slate-900/10 px-5 bg-white/50 rounded-full">
            {product.type}
          </p>
        </div>
        {/* info */}
        <div className="flexBetween">
          <h5 className="uppercase line-clamp-1">{product.title}</h5>
          <p>
            {currency}{product.price[size]}
          </p>
        </div>
        <p className="line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};

export default Item;
