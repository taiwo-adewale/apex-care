import { GiLiver } from "react-icons/gi";

import missionImg from "../assets/mission-img.jpg";
import shape3 from "../assets/shape-3.png";
import SectionTitle from "./SectionTitle";

const MissionAndVision = () => {
  return (
    <section className="relative section-py">
      <div className="container lg:px-0 lg:mx-0 lg:max-w-none lg:w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            style={{ backgroundImage: `url('${missionImg}')` }}
            className="order-1 bg-center bg-no-repeat bg-cover lg:order-2"
          >
            <img
              src={missionImg}
              alt="apexcare doctor"
              className="w-full lg:hidden"
            />
          </div>

          <div className="lg:py-[3.75rem] lg:pr-30px lg:ml-auto lg:max-xl:max-w-[480px] xl:max-w-[584px] xl:pr-[3.125rem] order-2 lg:order-1">
            <SectionTitle
              title="Our Mission & Vision"
              heading="Better Information, Better Health"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              className="text-center mt-30px lg:mt-0 md:text-left"
            />

            <ul className="grid max-[359px]:grid-cols-1 grid-cols-2 pt-6 gap-x-2.5 gap-y-7">
              {[
                "professional staff",
                "Newborn Care",
                "Sufficient Lab Tests",
                "Tooth Extraction",
              ].map((item, index) => (
                <li
                  key={`mission-${index}`}
                  className="flex flex-col items-center text-center md:items-start md:text-start group"
                >
                  <div className="mb-2.5 md:mb-3.5 w-[2.8125rem] h-[2.8125rem] bg-white text-primary shadow-mission-circle rounded-[50%] group-hover:rounded-pick transition-all duration-500 flex justify-center items-center text-xl group-hover:bg-primary group-hover:text-white">
                    <GiLiver />
                  </div>

                  <span className="capitalize md:uppercase text-secondary text-base block font-semibold mb-1.5 md:text-17px">
                    {item}
                  </span>

                  <p className="text-13px md:text-15px">
                    Lorem ipsum dolor sit amet sit, consectetur adipiscing elit.
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 -z-1 select-none">
        <img src={shape3} alt="" className="opacity-60" />
      </div>
    </section>
  );
};

export default MissionAndVision;
