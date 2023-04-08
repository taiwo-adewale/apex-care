import { FaPaperPlane } from "react-icons/fa";

import Button from "./Button";
import SocialIcons from "./SocialIcons";
import { departments, links } from "../data";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-[3.125rem] md:pt-[3.75rem] lg:pt-20">
      <div className="container">
        <div className="border-b border-b-[#272a35] pb-[3.125rem] mb-[3.125rem] lg:pb-[3.75rem] lg:mb-[3.75rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-white text-[1.5625rem] font-semibold md:text-[1.875rem]">
                Join Our Newsletter
              </h2>

              <p className="text-[#cecece] max-w-[400px] mt-2.5 text-13px mx-auto md:text-15px lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>

            <form className="relative text-center w-full mt-30px md:max-lg:max-w-[500px] md:max-lg:mx-auto lg:mt-0">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Enter your email"
                className="h-[3.4375rem] px-4 text-15px block w-full bg-white rounded-full text-secondary md:h-[4.375rem] md:pl-6 md:pr-[10.3125rem] md:text-17px outline-none focus:outline-none font-medium placeholder:font-normal"
              />

              <Button
                icon={<FaPaperPlane />}
                className="w-full mt-4 py-4 text-sm sm:absolute sm:w-auto sm:right-1 sm:top-1/2 sm:mt-0 sm:-translate-y-1/2 sm:h-[3rem] md:right-2 md:h-[3.4375rem]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-30px">
          <div>
            <span className="font-semibold font-poppins text-white text-3xl">
              ApexCare
            </span>

            <p className="!text-[#cecece] mt-4 text-13px md:text-15px">
              Powerfully flexible html template for medical & health related
              organizations, institutes, clinics and businesses.
            </p>

            <SocialIcons center={false} dark={true} />
          </div>

          <div>
            <h3 className="mb-5 text-17px text-white font-bold md:mb-30px md:text-[1.125rem]">
              Departments
            </h3>

            <ul>
              {departments.map((dept, index) => (
                <li
                  key={`dept-${index}`}
                  className="text-13px mb-2.5 text-[#cecece] md:text-15px hover:text-primary transition-all duration-300 cursor-pointer w-fit last:mb-0"
                >
                  {dept}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-17px text-white font-bold md:mb-30px md:text-[1.125rem]">
              Links
            </h3>

            <ul>
              {links.map((link, index) => (
                <li
                  key={`dept-${index}`}
                  className="text-13px mb-2.5 text-[#cecece] md:text-15px hover:text-primary transition-all duration-300 cursor-pointer w-fit last:mb-0"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-30px">
            <h3 className="mb-5 text-17px text-white font-bold md:mb-30px md:text-[1.125rem]">
              Opening Hours
            </h3>

            <ul>
              <li className="text-13px mb-2.5 text-[#cecece] md:text-sm flex justify-between uppercase border-b border-b-[#393c49] pb-2.5">
                <span>MON - TUES</span>
                <span>9.00AM - 17.00PM</span>
              </li>
              <li className="text-13px mb-2.5 text-[#cecece] md:text-sm flex justify-between uppercase border-b border-b-[#393c49] pb-2.5">
                <span>WEDNESDAY</span>
                <span>9.00AM - 17.00PM</span>
              </li>
              <li className="text-13px mb-2.5 text-[#cecece] md:text-sm flex justify-between uppercase border-b border-b-[#393c49] pb-2.5">
                <span>THURSDAY</span>
                <span>9.00AM - 17.00PM</span>
              </li>
              <li className="text-13px mb-2.5 text-[#cecece] md:text-sm flex justify-between uppercase border-b border-b-[#393c49] pb-2.5">
                <span>FRIDAY</span>
                <span>9.00AM - 17.00PM</span>
              </li>
              <li className="text-13px text-[#cecece] md:text-sm flex justify-between uppercase">
                <span>SATURDAY</span>
                <span>CLOSED</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 py-6 text-center border-t border-t-[#272a35] md:py-30px md:mt-[2.1875rem] lg:mt-[3.125rem]">
          <p className="text-white text-13px leading-snug md:text-15px">
            © ApexCare is Proudly Owned by Team Okay Observation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
