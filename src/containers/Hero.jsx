import { FaBell, FaPlay } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Button } from "../components";
import { heroItems } from "../data";

import circleShape1 from "../assets/circle-shape-1.png";
import circleShape2 from "../assets/circle-shape-2.png";
import shape1 from "../assets/shape-1.png";

const Hero = () => {
  return (
    <section className="relative hero">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {heroItems.map((item, index) => (
          <SwiperSlide key={`banner-${index}`}>
            <div
              style={{ backgroundImage: `url('${item.bgImage}')` }}
              className="bg-cover bg-no-repeat bg-center pt-[6.25rem] md:pt-[7.5rem] lg:pt-0 pb-[8.75rem] lg:pb-0 relative lg:h-[745px] flex items-center"
            >
              <div className="container">
                <div className="md:max-[645px] lg:max-w-[650px] xl:max-w-[850px] mr-auto text-center md:text-left relative z-[2]">
                  <span className="text-sm text-primary mb-1.5 block md:text-base md:mb-4 lg:text-17px font-medium">
                    {item.title}
                  </span>
                  <h1 className="font-bold text-secondary text-[2.1875rem] md:text-[3.4375rem] lg:text-[4.375rem] !leading-[1.2]">
                    {item.heading}
                  </h1>
                  <p className="text-sm mt-4 text-secondary md:max-w-[490px] md:text-15px md:mt-5 lg:max-w-[560px] xl:max-w-[670px] lg:text-base !leading-[1.8]">
                    {item.desc}
                  </p>

                  <div className="mt-6 lg:mt-30px flex justify-center md:justify-start max-[400px]:flex-wrap gap-y-2.5 gap-x-3">
                    <Button
                      icon={<FaBell />}
                      href="/appointment"
                      className="max-[400px]:flex-grow"
                    >
                      Make Appointment
                    </Button>
                    <Button
                      alt={true}
                      icon={<FaPlay className="translate-x-[1px]" />}
                      className="max-[400px]:flex-grow"
                      href="https://youtube.com"
                    >
                      Play Now
                    </Button>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 select-none max-sm:w-72 -z-1 animate-spin-reverse-slow">
                <img
                  src={circleShape2}
                  alt=""
                  className="w-full h-full opacity-80"
                />
              </div>
              <div className="absolute select-none top-12 left-12 sm:top-20 sm:left-20 max-sm:w-48 -z-1 animate-spin-slow">
                <img
                  src={circleShape1}
                  alt=""
                  className="w-full h-full opacity-80"
                />
              </div>
              <div className="absolute select-none top-3/4 sm:top-1/4 md:top-3/4 lg:top-1/4 right-6 -z-1 animate-spin-slow">
                <img src={shape1} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="static md:absolute lg:static right-1.5 bottom-2.5 z-[2] flex gap-x-2.5 lg:gap-x-0">
        <button className="swiper-button-prev w-10 h-10 md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center text-secondary bg-white cursor-pointer absolute md:static lg:absolute lg:-translate-y-1/2 lg:top-1/2 bottom-4 lg:bottom-auto left-4 z-10 hover:text-white hover:bg-primary transition-500 text-3xl md:text-4xl lg:opacity-0 lg:pointer-events-none">
          <MdOutlineKeyboardArrowLeft />
        </button>

        <button className="swiper-button-next w-10 h-10 md:w-[50px] md:h-[50px] rounded-full flex justify-center items-center text-secondary bg-white cursor-pointer absolute md:static lg:absolute lg:-translate-y-1/2 lg:top-1/2 bottom-4 lg:bottom-auto right-4 z-10 hover:text-white hover:bg-primary transition-500 text-3xl md:text-4xl lg:opacity-0 lg:pointer-events-none">
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Hero;
