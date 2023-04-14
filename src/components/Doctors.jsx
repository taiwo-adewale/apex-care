import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import SectionTitle from "./SectionTitle";
import SocialIcons from "./SocialIcons";
import { doctors } from "../data";

const Doctors = () => {
  return (
    <section className="section-py bg-section-main">
      <div className="container">
        <SectionTitle
          center={true}
          title="Doctors"
          heading="Meet Our Qualified Doctors"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="mb-3 md:mb-9"
        />

        <div className="relative">
          <Swiper
            spaceBetween={30}
            loop={true}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={700}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
          >
            {[...doctors, ...doctors].map((doctor, index) => (
              <SwiperSlide key={`doctor-${index}`} className="py-6">
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="text-center bg-white p-6 rounded-[0.3125rem] shadow-doctor"
                >
                  <div>
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="rounded-full"
                    />
                  </div>

                  <div className="mt-[1.375rem] text-center">
                    <h3 className="text-secondary font-bold text-17px md:text-[1.125rem] block">
                      {doctor.name}
                    </h3>

                    <span className="text-primary mt-1.5 text-sm md:text-15px">
                      {doctor.role}
                    </span>
                  </div>

                  <SocialIcons center={true} dark={false} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-x-2 mt-30px min-[1120px]:mt-0 min-[1200px]:mt-30px min-[1320px]:mt-0">
            <button className="swiper-button-prev w-10 h-10 lg:w-[45px] lg:h-[45px] rounded-full flex justify-center items-center text-xl lg:text-2xl text-secondary bg-[#f0f0f0] cursor-pointer min-[1120px]:absolute min-[1200px]:static min-[1320px]:absolute -translate-y-1/2 top-1/2 min-[1120px]:-left-8 min-[1320px]:-left-12 z-10 hover:text-white hover:bg-primary transition-500">
              <BsArrowLeft />
            </button>
            <button className="swiper-button-next w-10 h-10 lg:w-[45px] lg:h-[45px] rounded-full flex justify-center items-center text-xl lg:text-2xl text-secondary bg-[#f0f0f0] cursor-pointer min-[1120px]:absolute min-[1200px]:static min-[1320px]:absolute -translate-y-1/2 top-1/2 min-[1120px]:-right-8 min-[1320px]:-right-12 z-10 hover:text-white hover:bg-primary transition-500">
              <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
