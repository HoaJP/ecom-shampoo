import Title from "./Title";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import Item from "./Item";
const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const { products } = useAppContext();
  useEffect(() => {
    const data = products.filter((item) => item.popular && item.inStock);
    setPopularProducts(data.slice(0, 4));
  }, [products]);
  return (
    <section className="max-padd-container mt-28">
      <Title title1={"Popular"} title2={"Products"} titleStyles={"pb-10"} />
      {/* container */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-12">
        {popularProducts.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
