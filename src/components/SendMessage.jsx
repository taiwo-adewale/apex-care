import {
  FaChevronRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import Button from "./Button";

import contactMap from "../assets/contact-map.png";

const SendMessage = () => {
  return (
    <section className="relative section-py">
      <div className="container">
        <SectionTitle
          center={true}
          title="Send Message"
          heading="Drop us message for any query"
          desc="If you have an idea, we would love to hear about it."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />

        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-6">
          <form className="flex flex-col md:flex-row md:flex-wrap w-full lg:w-3/5 gap-x-3.5">
            <div className="w-full mb-4 md:w-[calc(50%-7px)]">
              <input
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                className="text-sm h-[3.4375rem] w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>
            <div className="w-full mb-4 md:w-[calc(50%-7px)]">
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                className="text-sm h-[3.4375rem] w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>
            <div className="w-full mb-4 md:w-[calc(50%-7px)]">
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                id="phone"
                className="text-sm h-[3.4375rem] w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>
            <div className="w-full mb-4 md:w-[calc(50%-7px)]">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                id="subject"
                className="text-sm h-[3.4375rem] w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>
            <div className="w-full mb-4">
              <textarea
                placeholder="Your Message"
                name="subject"
                id="subject"
                className="text-sm h-[10rem] pt-4 w-full bg-white shadow-input text-secondary px-4 focus:outline-none"
              />
            </div>

            <div className="w-full md:w-1/22 text-center mt-2.5">
              <Button icon={<FaChevronRight />}>Send Message</Button>
            </div>
          </form>

          <div className="w-full lg:w-2/5 lg:pl-6">
            <ul>
              <li className="mb-9 relative pl-[5.125rem] md:pl-[5.9375rem]">
                <div className="absolute border text-white text-xl md:text-2xl border-dashed border-primary w-[4.0625rem] md:w-[4.6875rem] h-[4.0625rem] md:h-[4.6875rem] rounded-full top-0 left-0 before:absolute before:content-[''] before:inset-0 before:bg-primary before:rounded-full before:m-1.5 before:shadow-contact-icon flex justify-center items-center">
                  <FaMapMarkerAlt className="relative z-[2]" />
                </div>
                <div>
                  <span className="block font-semibold mb-1.5 text-17px text-secondary font-poppins md:mb-2 md:text-20px">
                    Address
                  </span>
                  <span className="block text-textPrimary text-13px md:text-15px">
                    CA 560 Bush St & 20th Ave, Apt 5
                  </span>
                  <span className="block text-textPrimary text-13px md:text-15px">
                    San Francisco, 230909, Canada
                  </span>
                </div>
              </li>
              <li className="mb-9 relative pl-[5.125rem] md:pl-[5.9375rem]">
                <div className="absolute border text-white text-xl md:text-2xl border-dashed border-primary w-[4.0625rem] md:w-[4.6875rem] h-[4.0625rem] md:h-[4.6875rem] rounded-full top-0 left-0 before:absolute before:content-[''] before:inset-0 before:bg-primary before:rounded-full before:m-1.5 before:shadow-contact-icon flex justify-center items-center">
                  <FaEnvelope className="relative z-[2]" />
                </div>
                <div>
                  <span className="block font-semibold mb-1.5 text-17px text-secondary font-poppins md:mb-2 md:text-20px">
                    Email
                  </span>
                  <a
                    href="mailto:observation@okay.com"
                    className="block text-textPrimary text-13px md:text-15px hover:text-primary transition-300"
                  >
                    observation@okay.com
                  </a>
                  <a
                    href="mailto:fax@observation-okay.com"
                    className="block text-textPrimary text-13px md:text-15px hover:text-primary transition-300"
                  >
                    fax@observation-okay.com
                  </a>
                </div>
              </li>
              <li className="mb-9 relative pl-[5.125rem] md:pl-[5.9375rem]">
                <div className="absolute border text-white text-xl md:text-2xl border-dashed border-primary w-[4.0625rem] md:w-[4.6875rem] h-[4.0625rem] md:h-[4.6875rem] rounded-full top-0 left-0 before:absolute before:content-[''] before:inset-0 before:bg-primary before:rounded-full before:m-1.5 before:shadow-contact-icon flex justify-center items-center">
                  <FaPhoneAlt className="relative z-[2]" />
                </div>
                <div>
                  <span className="block font-semibold mb-1.5 text-17px text-secondary font-poppins md:mb-2 md:text-20px">
                    Phone
                  </span>
                  <a
                    href="tel:+2345543323224"
                    className="block text-textPrimary text-13px md:text-15px hover:text-primary transition-300"
                  >
                    +234 554 332 3224
                  </a>
                  <a
                    href="tel:+2343783243224"
                    className="block text-textPrimary text-13px md:text-15px hover:text-primary transition-300"
                  >
                    +234 378 324 3224
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 -translate-y-1/2 top-1/2 -z-[1] opacity-40">
        <img src={contactMap} alt="" />
      </div>
    </section>
  );
};

export default SendMessage;
