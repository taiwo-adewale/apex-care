import { GiLiver } from "react-icons/gi";
import { FaChevronRight, FaCheck } from "react-icons/fa";

import approachImg from "../assets/approach-img.jpg";
import { SectionTitle, Button, Section } from "../components";

const OurApproach = () => {
  return (
    <Section>
      <div className="container lg:px-0 lg:mx-0 lg:max-w-none lg:w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            style={{ backgroundImage: `url('${approachImg}')` }}
            className="order-1 bg-center bg-no-repeat bg-cover lg:order-2"
          >
            <img
              src={approachImg}
              alt="apexcare doctor"
              className="w-full lg:hidden"
            />
          </div>

          <div className="lg:py-[3.75rem] lg:pr-30px lg:ml-auto lg:max-xl:max-w-[480px] xl:max-w-[584px] xl:pr-[3.125rem] order-2 lg:order-1">
            <SectionTitle
              title="Our Approach"
              heading="High Quality Health Care Services"
              desc="At Apex Care, our approach is patient-centered, providing individualized care and attention to every patient to achieve optimal health outcomes"
              className="text-center mt-30px lg:mt-0 md:text-left"
            />

            <ul className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-1 gap-x-2">
              {[
                "Scientific Skills For getting a better result",
                "Communication Skills to getting in touch",
                "A Career Overview opportunity Available",
                "A good Work Environment For work",
              ].map((item, index) => (
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

            <div className="text-center pt-30px lg:text-left">
              <Button icon={<FaChevronRight />} href="/appointments">
                Make Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurApproach;
