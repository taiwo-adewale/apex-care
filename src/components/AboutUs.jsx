import { FaChevronRight, FaCheck } from "react-icons/fa";

import aboutImg from "../assets/about-img.jpg";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

import { aboutList } from "../data";

const AboutUs = ({ padding, slice }) => {
  const aboutListItems = slice ? aboutList.slice(0, slice) : aboutList;

  return (
    <section className={padding ? "section-py" : ""}>
      <div className="container lg:px-0 lg:mx-0 lg:max-w-none lg:w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            style={{ backgroundImage: `url('${aboutImg}')` }}
            className="bg-center bg-no-repeat bg-cover"
          >
            <img
              src={aboutImg}
              alt="apexcare doctor"
              className="w-full lg:hidden relative z-[1]"
            />
          </div>

          <div className="lg:py-[3.75rem] lg:pl-30px lg:mr-auto lg:max-xl:max-w-[480px] xl:max-w-[584px] xl:pl-[3.125rem]">
            <SectionTitle
              title="About Us"
              heading="Short Story About ApexCare Clinic Since 1999"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis."
              className="text-center mt-30px lg:mt-0 md:text-left"
            />

            <ul className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-1 gap-x-2">
              {aboutListItems.map((item, index) => (
                <li
                  key={`about-${index}`}
                  className="relative mb-4 pl-[2.125rem] text-[#212529] text-13px last:mb-0 md:text-15px group w-fit"
                >
                  {item}
                  <div className="absolute w-[1.5625rem] h-[1.5625rem] rounded-pick group-hover:bg-primary group-hover:text-white flex justify-center items-center bg-[#d2f5e1] text-primary transition-500 left-0 -top-0.5 text-xs">
                    <FaCheck />
                  </div>
                </li>
              ))}
            </ul>

            {slice ? (
              <div className="text-center pt-30px lg:text-left">
                <Button icon={<FaChevronRight />} href="/about">
                  Learn More
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
