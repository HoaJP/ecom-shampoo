import { Link } from "react-router";
import { assets } from "../assets/data";

const Hero = () => {
  return (
    <section className="max-padd-container">
      <div className="bg-[url('/src/assets/bg.png')] bg-cover bg-center bg-no-repeat h-[89vh] w-full mt-18 rounded-2xl relative">
        <div className="mx-auto max-w-[1440px] px-4 pt-1 sm:pt-8 flex flex-col justify-between h-full">
          <div className="max-w-3xl">
            <h1 className="h1 !font-[400] capitalize">
              Enhance Your
              <span className="!font-[600] text-secondary">Look </span> With
              <span className="!font-[600] text-secondary"> Glam</span>{" "}
              Essentials
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
              ullam. Sequi exercitationem et placeat recusandae minus dolore
              saepe dolor consequatur hic nam corrupti veniam, maiores ut,
              soluta possimus. Atque, provident.
            </p>
            <div className="flex">
              <Link
                to={"/collection"}
                className="bg-secondary text-white text-xs font-medium capitalize pl-5 rounded-full flexCenter gap-x-2 mt-7 group"
              >
                Check Our Modern Collection
                <img
                  src={assets.forward}
                  alt=""
                  width={41}
                  className="bg-white rounded-full flexCenter p-2 m-1 group-hover:translate-x-2 transition-all duration-500"
                />
              </Link>
            </div>
          </div>
          {/* Card */}
          <div className="bg-white p-3 max-w-[249px] rounded-2xl mb-4">
            <div className="h-32 w-56 overflow-hidden">
              <img
                src={assets.hero}
                alt=""
                className="h-28 object-cover w-full rounded-2xl"
              />
            </div>
            <p className="text-[13px] pt-2">
              <b className="uppercase">UNLOCK</b> your best look, one click at a
              time, Your style upgrade starts here, shop today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
