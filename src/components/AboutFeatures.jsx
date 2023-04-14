import { GiLiver } from "react-icons/gi";

const AboutFeatures = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-30px">
          {["Our Mission", "Our Planning", "Our Vision"].map(
            (feature, index) => (
              <div
                key={`feature-${index}`}
                className={`relative bg-white z-[1] shadow-pick py-5 px-4 md:py-6 md:px-5 overflow-hidden transition-500 group hover:-translate-y-2 after:absolute after:content-[''] after:w-[6.25rem] after:h-[6.25rem] after:border-[0.625rem] after:rounded-full after:opacity-[0.15] after:transition-500 after:z-[1] after:-left-20 after:-bottom-20 hover:after:-left-[3.125rem] hover:after:-bottom-[3.125rem]`}
              >
                <div className="flex flex-col relative z-[2] text-center md:text-left items-center md:items-start">
                  <div className="mb-5 w-[3.4375rem] h-[3.4375rem] md:w-[3.75rem] md:h-[3.75rem] bg-primary group-hover:bg-[#49d685] text-white rounded-pick flex justify-center self-center md:self-start items-center text-3xl transition-500">
                    <GiLiver />
                  </div>

                  <h3 className="block relative text-17px transition-500 text-secondary md:text-[1.25rem] font-bold group-hover:text-white before:content-[''] before:w-0 before:h-[1px] before:absolute before:left-1/2 before:max-md:-translate-x-1/2 before:md:left-0 before:bottom-0 before:bg-white before:group-hover:w-20 before:transition-500">
                    {feature}
                  </h3>

                  <p className="block mt-3 transition-500 text-13px md:text-15px group-hover:text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse.
                  </p>
                </div>

                <div className="absolute top-0 left-0 w-0 h-full transition-500 z-[1] bg-primary group-hover:w-full"></div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
