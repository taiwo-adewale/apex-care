import { AnimatedNumbers, Section } from "../components";

import mapBg from "../assets/map-bg.png";
import { funFacts } from "../data";

const FunFacts = () => {
  return (
    <Section bgImg={mapBg} padding={true} className="bg-secondary">
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
    </Section>
  );
};

export default FunFacts;
