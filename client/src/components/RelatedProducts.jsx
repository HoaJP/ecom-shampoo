import Title from "./Title";
import { Autoplay } from "swiper/modules"; // 👈 thêm dòng này

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import Item from "./Item";
const RelatedProducts = ({ product, productId }) => {
  const { products } = useAppContext();
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => item.category === product.category && productId !== item._id
      );
      setRelatedProducts(productsCopy.slice(0, 6));
    }
  }, [products]);
  return (
    <section className="mt-28">
      <Title title1={"Related"} title2={"Products"} titleStyles={"pb-10"} />
      {/* container */}
      {
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
          className="min-h-[399px]"
        >
          {relatedProducts.map((product) => (
            <SwiperSlide key={product._id}>
              <Item product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </section>
  );
};

export default RelatedProducts;
