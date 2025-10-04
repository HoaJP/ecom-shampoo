import { Link } from "react-router";
import { assets } from "../assets/data";

const Footer = () => {
  return (
    <footer className="pt-16 xl:pt-20 w-full text-gray-500 bg-primary">
      <div className="max-padd-container">
        <div className="flex flex-wrap justify-between gap-12 md:gap-6">
          <div className="max-w-80">
            {/* logo */}
            <div className="flex flex-1">
              <Link to={"/"} className="flex items-end">
                <img src={assets.logoImg} alt="logoImg" className="h-11" />
                <span className="text-tertiary hidden sm:block bold-24 relative top-1 right-2">
                  ietnam
                </span>
              </Link>
            </div>
            <p className="text-sm mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img src={assets.facebook} alt="" />
              <img src={assets.instagram} alt="" />
              <img src={assets.twitter} alt="" />
              <img src={assets.linkedin} alt="" />
            </div>
          </div>

          <div>
            <p className="text-lg text-gray-800">COMPANY</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg text-gray-800">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Safety Information</a>
              </li>
              <li>
                <a href="#">Cancellation Options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>
            </ul>
          </div>

          <div className="max-w-80">
            <p className="text-lg text-gray-800">STAY UPDATED</p>
            <p className="mt-3 text-sm">
              Subscribe to our newsletter for inspiration and special offers.
            </p>
            <div className="flex items-center mt-4">
              <input
                type="text"
                className="bg-white border border-gray-300 h-9 px-3 outline-none"
                placeholder="Your email"
              />
              <button className="flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r">
                {/* Arrow icon */}
                <i className="ri-arrow-right-line text-white"></i>
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-8" />
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
          <p>
            © {new Date().getFullYear()}{" "}
            <a href="https://prebuiltui.com">PrebuiltUI</a>. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;