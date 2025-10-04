import Hero from "./../components/Hero";
import Features from "../context/Features";
import NewArrivals from "../components/NewArrivals";
import PopularProducts from "../components/PopularProducts";
import Tesimonial from "../components/Tesimonial";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features/>
      <NewArrivals/>
      <PopularProducts/>
      <Tesimonial/>
    </div>
  );
};

export default Home;
