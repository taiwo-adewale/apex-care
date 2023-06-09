import { SectionTitle, Section } from "../components";
import { featuredCustomers } from "../data";

const FeaturedCustomers = () => {
  return (
    <Section padding={true} className="bg-[#f4f9fd]">
      <div className="container">
        <SectionTitle
          center={true}
          heading="Featured Customers & Partners"
          desc="Discover our valued partners who share our commitment to delivering exceptional healthcare solutions."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />

        <div className="flex flex-wrap justify-center">
          {featuredCustomers.map((cust, index) => (
            <div
              key={`customer-${index}`}
              className="px-[0.3125rem] max-[359px]:w-1/2 mb-2.5 w-1/3 md:w-1/5"
            >
              <a
                href={cust.url}
                className="relative block p-2.5 md:p-4 lg:p-6 bg-white group 
              before:w-0 before:h-0 before:absolute before:left-0 before:top-0 before:border-t-[3px] before:border-l-[3px] before:border-t-transparent before:border-l-transparent before:content-[''] before:transition-500 before:hover:w-6 before:sm:hover:w-10 before:hover:h-6 before:sm:hover:h-10 before:hover:border-l-primary before:hover:border-t-primary
              after:w-0 after:h-0 after:absolute after:right-0 after:bottom-0 after:border-b-[3px] after:border-r-[3px] after:border-b-transparent after:border-r-transparent after:content-[''] after:transition-500 after:hover:w-6 after:sm:hover:w-10 after:hover:h-6 after:sm:hover:h-10 after:hover:border-r-primary after:hover:border-b-primary
              "
              >
                <img
                  src={cust.image}
                  alt=""
                  className="w-full group-hover:scale-[0.8] transition-500"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FeaturedCustomers;
