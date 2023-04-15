import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Collapse } from "react-collapse";

import faqImg from "../assets/faq-img.jpg";
import { SectionTitle, Section } from "../components";

import { faqs } from "../data";

const Faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (index) => {
    open === index ? setOpen(null) : setOpen(index);
  };

  return (
    <Section padding={true} className="!pt-0">
      <div className="container lg:px-0 lg:mx-0 lg:max-w-none lg:w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            style={{ backgroundImage: `url('${faqImg}')` }}
            className="bg-center bg-no-repeat bg-cover"
          >
            <img
              src={faqImg}
              alt="apexcare doctor"
              className="w-full lg:hidden relative z-[1]"
            />
          </div>

          <div className="lg:py-[3.75rem] lg:pl-30px lg:mr-auto lg:max-xl:max-w-[480px] xl:max-w-[584px] xl:pl-[3.125rem]">
            <SectionTitle
              title="Frequently Asked Questions"
              heading="Get Every Single Answers There if you want"
              className="text-center mt-30px lg:mt-0 md:text-left"
            />

            <ul className="mt-30px">
              {faqs.map((ques, index) => (
                <li
                  key={`faq-${index}`}
                  className="block bg-white shadow-faq mb-2.5 last:mb-0 first:rounded-t-[0.375rem] last:rounded-b-[0.375rem] border border-t-0 first:border-t border-[#dee2eb] cursor-pointer overflow-hidden"
                  onClick={() => handleOpen(index)}
                >
                  <span
                    className={`border-b block py-3.5 pr-5 pl-[3.1875rem] text-sm md:text-15px text-secondary relative font-medium -mb-[1px] ${
                      open === index
                        ? "border-b-[#eeeeee]"
                        : "border-b-transparent"
                    }`}
                  >
                    {ques.title}

                    <span
                      className={`text-white absolute left-0 top-0 w-10 flex justify-center items-center h-full transition-500 text-xs ${
                        open === index ? "bg-primary" : "bg-[#d2f5e1]"
                      }`}
                    >
                      {open === index ? (
                        <FaMinus className="text-white" />
                      ) : (
                        <FaPlus className="text-primary" />
                      )}
                    </span>
                  </span>

                  <Collapse isOpened={open === index}>
                    <p className="p-4 text-13px md:text-sm !leading-[1.8] transition-500 block">
                      {ques.content}
                    </p>
                  </Collapse>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Faq;
