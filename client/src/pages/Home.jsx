import Hero from "./../components/Hero";
import Features from "../context/Features";
import NewArrivals from "../components/NewArrivals";
import PopularProducts from "../components/PopularProducts";
import Tesimonial from "../components/Tesimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <NewArrivals />
      <PopularProducts />
      <div className="hidden sm:block max-padd-container mt-28 bg-[url('/src/assets/banner.png')] bg-cover  bg-center bg-no-repeat h-[288px]"></div>
      <Tesimonial />
    </div>
  );
};

export default Home;
