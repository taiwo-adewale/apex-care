import { Link } from "react-router-dom";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";

import { SectionTitle, Button, Section } from "../components";
import { services } from "../data";

const OurServices = ({ sectionTitle, slice }) => {
  const serviceItems = slice ? services.slice(0, slice) : services;

  return (
    <Section padding={true} className="bg-alt-section">
      <div className="container">
        {sectionTitle ? (
          <SectionTitle
            center={true}
            title="Our Services"
            heading="Our Healthcare Services"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            className="mb-[2.1875rem] md:mb-[3.75rem]"
          />
        ) : (
          ""
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-30px">
          {serviceItems.map((service, index) => (
            <div
              key={`service-${index}`}
              style={{ backgroundImage: `url('${service.bgImg}')` }}
              className={`relative bg-white p-6 md:py-10 md:px-[2.375rem] overflow-hidden transition-500 bg-center bg-cover bg-no-repeat group`}
            >
              <div className="flex flex-col relative z-[2] text-center md:text-left items-center md:items-start">
                <div className="mb-6 w-[4.6875rem] h-[4.6875rem] bg-white text-primary shadow-pick rounded-pick group-hover:rounded-[50%] transition-500 flex justify-center self-center md:self-start items-center text-3xl">
                  {service.icon}
                </div>

                <h3>
                  <Link
                    to={service.url}
                    className="block text-17px transition-500 text-secondary md:text-[1.25rem] font-bold group-hover:text-white"
                  >
                    {service.name}
                  </Link>
                </h3>

                <p className="block mt-3 text-13px md:text-15px transition-500 group-hover:text-white !line-clamp-3">
                  {service.desc}
                </p>

                <Link
                  to={service.url}
                  className="uppercase w-fit mt-[1.125rem] transition-500 font-medium text-primary text-sm hover:!text-secondary group-hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  Read More <FaArrowRight />
                </Link>
              </div>

              <div className="absolute inset-0 transition-500 z-[1] bg-white group-hover:bg-primary/80"></div>
            </div>
          ))}
        </div>

        {slice ? (
          <div className="text-center pt-[3.125rem]">
            <Button icon={<FaChevronRight />} href="/services">
              More Services
            </Button>
          </div>
        ) : (
          ""
        )}
      </div>
    </Section>
  );
};

export default OurServices;
