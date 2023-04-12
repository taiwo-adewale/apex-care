import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import SectionTitle from "./SectionTitle";

const Feedback = () => {
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const currentSlide = swiperRef.current.swiper.realIndex;
    console.log(`Current slide is ${currentSlide}`);
  };

  return (
    <section className="section-py">
      <div className="container">
        <SectionTitle
          center={true}
          title="Feedback"
          heading="Our Happy Clients Says About Us"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          className="mb-[2.1875rem] md:mb-[3.75rem]"
        />

        <div>
          <div>
            <Swiper
              ref={swiperRef}
              onSlideChange={handleSlideChange}
              slidesPerView={5}
              loop={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div></div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="mx-auto max-w-[900px]">
            <div
              className="shadow-faq md:shadow-feedback pt-[3.4375rem] md:pt-[4.6875rem] px-5 md:px-[5.625rem] md:pb-2.5 mb-[3.4375rem] md:mb-[4.0625rem] mt-[2.1875rem] mx-1.5 md:mx-[3.125rem] text-center rounded-[0.3125rem] relative

            before:absolute before:content-[''] before:opacity-90 before:h-1/2 before:-bottom-5 before:left-0 before:right-0 before:rounded-[0.1875rem] before:mx-5 before:shadow-feedback-layer before:bg-white before:z-[1]

            after:absolute after:content-[''] after:opacity-70 after:h-1/2 after:-bottom-10 after:left-0 after:right-0 after:rounded-[0.1875rem] after:mx-10 after:shadow-feedback-layer-2 after:bg-white after:z-[1]
            "
            >
              <div className="relative z-[2]">
                <h3 className="text-17px font-bold text-secondary md:text-[1.25rem]">
                  John Smith
                </h3>
                <span className="text-13px text-primary block mt-1.5 mb-4 md:text-sm">
                  Web Developer
                </span>
                <p className="text-textPrimary text-sm md:text-base !leading-[1.8]">
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
