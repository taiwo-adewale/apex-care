import { funFacts } from "../data";
import AnimatedNumbers from "./AnimatedNumbers";

const FunFacts = () => {
  return (
    <section
      className={`bg-map-pattern py-[3.75rem] md:py-[4.375rem] lg:py-[6.25rem] bg-cover bg-no-repeat bg-center bg-[#121521]`}
    >
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-2">
          {funFacts.map((fact, index) => (
            <div
              key={`fun-fact-${index}`}
              className="flex flex-col items-center text-primary"
            >
              <div className="flex justify-center mb-6 text-4xl md:text-5xl">
                {fact.icon}
              </div>
              <h3 className="block pl-3 mb-2 text-4xl font-semibold text-white md:pl-5 md:text-5xl">
                <AnimatedNumbers value={fact.value} />
                <sup className="font-poppins">{fact.suffix}</sup>
              </h3>
              <span className="block text-[13px] md:text-[15px]">
                {fact.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
