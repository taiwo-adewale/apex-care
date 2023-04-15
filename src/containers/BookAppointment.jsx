import { useState, useEffect, useRef } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { BsTelephone, BsEnvelope, BsPerson } from "react-icons/bs";

import { SectionTitle, Button, Section } from "../components";
import appointmentBg from "../assets/appointment-bg.jpg";

import { servicesList } from "../data";

const BookAppointment = () => {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const [currentService, setCurrentService] = useState("cardiology");

  const handleOpen = () => {
    setOpen((prevVal) => !prevVal);
  };

  const handleChangeService = (service) => {
    setCurrentService(service);
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        e.target.id !== "service-select"
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.body.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [open]);

  return (
    <Section bgImg={appointmentBg} padding={true} className="bg-fixed">
      <div className="container flex justify-center">
        <div className="md:max-w-[630px] relative lg:max-w-[700px] w-full bg-white px-6 py-30px md:p-[3.125rem] shadow-appointment md:ml-auto lg:mr-28 before:absolute before:content-[''] before:bg-white before:w-[96%] before:opacity-60 before:h-1/2 before:-bottom-5 before:left-0 before:right-0 before:m-auto before:rounded-[3px]">
          <SectionTitle
            center={false}
            title="Book Appointment"
            heading="We are here for you"
            className="text-center md:text-left mb-6 md:mb-30px"
          />

          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 md:gap-y-30px">
              <div className="relative pl-10 md:pl-[3.25rem] flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 uppercase text-textPrimary font-medium text-xs md:text-13px font-poppins"
                >
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                  name="name"
                  className="border-b border-b-[#eeeeee] font-semibold pb-2 text-secondary transition-500 outline-none focus:border-b-primary focus:outline-none text-sm md:text-15px lg:text-17px placeholder:text-secondary font-poppins"
                />

                <div className="absolute left-0 top-1/2 -translate-y-[50%] text-primary text-3xl">
                  <BsPerson />
                </div>
              </div>

              <div className="relative pl-10 md:pl-[3.25rem] flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 uppercase text-textPrimary font-medium text-xs md:text-13px font-poppins"
                >
                  Your email
                </label>

                <input
                  type="text"
                  placeholder="Enter Email Address"
                  id="email"
                  name="email"
                  className="border-b border-b-[#eeeeee] font-semibold pb-2 text-secondary transition-500 outline-none focus:border-b-primary focus:outline-none text-sm md:text-15px lg:text-17px placeholder:text-secondary font-poppins"
                />

                <div className="absolute left-0 top-1/2 -translate-y-[50%] text-primary text-3xl">
                  <BsEnvelope />
                </div>
              </div>

              <div className="relative pl-10 md:pl-[3.25rem] flex flex-col">
                <label
                  htmlFor="name"
                  className="mb-2 uppercase text-textPrimary font-medium text-xs md:text-13px font-poppins"
                >
                  Select your services
                </label>

                <span
                  id="service-select"
                  className="border-b border-b-[#eeeeee] font-semibold pb-2 text-secondary transition-500 text-sm md:text-15px lg:text-17px capitalize flex items-center justify-between cursor-pointer font-poppins"
                  onClick={handleOpen}
                >
                  {currentService}{" "}
                  <FaChevronDown
                    className={`text-sm transition-500 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </span>

                <div className="absolute left-0 top-1/2 -translate-y-[50%] text-primary text-3xl">
                  <BsEnvelope />
                </div>

                <ul
                  ref={ref}
                  className={`absolute left-10 md:left-[3.25rem] right-0 overflow-x-hidden overflow-y-scroll py-2.5 bg-white z-20 transition-500 h-[260px] top-full origin-top shadow-[0_0_29px_0_rgba(102,102,102,0.1)] ${
                    open
                      ? "opacity-100 pointer-events-auto scale-100"
                      : "opacity-0 pointer-events-none scale-50"
                  }`}
                >
                  {servicesList.map((service, index) => (
                    <li
                      key={`service-${index}`}
                      onClick={() => handleChangeService(service)}
                      className={`text-15px font-poppins px-5 cursor-pointer leading-[2.5rem] min-h-[2.5rem] capitalize transition-300 hover:bg-primary  hover:text-white ${
                        currentService === service ? "font-bold" : ""
                      }`}
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative pl-10 md:pl-[3.25rem] flex flex-col">
                <label
                  htmlFor="phone"
                  className="mb-2 uppercase text-textPrimary font-medium text-xs md:text-13px font-poppins"
                >
                  Your phone
                </label>

                <input
                  type="text"
                  placeholder="Enter Your Phone"
                  id="phone"
                  name="phone"
                  className="border-b border-b-[#eeeeee] font-semibold pb-2 text-secondary transition-500 outline-none focus:border-b-primary focus:outline-none text-sm md:text-15px lg:text-17px placeholder:text-secondary font-poppins"
                />

                <div className="absolute left-0 top-1/2 -translate-y-[50%] text-primary text-3xl">
                  <BsTelephone />
                </div>
              </div>
            </div>

            <div className="text-center mt-30px md:mt-[2.25rem]">
              <Button icon={<FaChevronRight />}>Make Appointment</Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default BookAppointment;
