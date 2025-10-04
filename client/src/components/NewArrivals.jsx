import Title from "./Title";
import { Autoplay } from "swiper/modules"; // 👈 thêm dòng này

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import Item from "./Item";
const NewArrivals = () => {
  const { products } = useAppContext();
  const [newArrivals, setNewArrivals] = useState([]);
  useEffect(()=>{
    const data = products.filter((item)=>item.inStock).slice(0, 10) 
    setNewArrivals(data)
  }, [products])
  return (
    <section className="max-padd-container mt-28">
      <Title title1={"New"} title2={"Arrivals"} titleStyles={"pb-10"} />
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
          {newArrivals.map((product)=>(
            <SwiperSlide key={product._id}>
                <Item product={product}/>
            </SwiperSlide>

          ))}
        </Swiper>
      }
    </section>
  );
};

export default NewArrivals;
