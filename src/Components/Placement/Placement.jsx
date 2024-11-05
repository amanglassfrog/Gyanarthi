"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import logo1 from "../../../public/placement1.png";
import logo2 from "../../../public/placement2.png";
import logo3 from "../../../public/placement3.png";
import logo4 from "../../../public/placement4.png";
import logo5 from "../../../public/placement5.png";
import logo6 from "../../../public/placement6.png";
import logo7 from "../../../public/placement7.png";
import logo8 from "../../../public/placement8.png";
import logo9 from "../../../public/placement9.png";
import logo10 from "../../../public/placement10.png";
import logo11 from "../../../public/placement11.png";
import logo12 from "../../../public/placement12.png";
import logo13 from "../../../public/placement13.png";
import logo14 from "../../../public/placement14.png";
import logo15 from "../../../public/placement15.png";
import logo16 from "../../../public/placement16.png";
import logo17 from "../../../public/placement17.png";
import logo18 from "../../../public/placement18.png";

const NewSection = () => {
  return (
    <main>
      <section className=" placement_comapny_slider">
        <div className="container mx-auto ">
          {/* First row new section*/}
          <div className="mb-8">
            <h2 className="placementheading md:text-center text-left">
              Transform Your Future with Industry-Backed Programs{" "}
              <br className="hidden md:inline" /> in Mass Communication, Media,
              Fashion and Commerce
            </h2>
          </div>
          {/* Second row */}
          <div className="mb-8">
            <p className="placementpara">
              Gyanarthi is the only university under the umbrella of Kumaon
              University in Kashipur and is known for its unique course teaching
              in Fine Arts and Business Administration.{" "}
            </p>
          </div>
          {/* Third row */}
          <div className="swiper-container pt-8 md:pt-16 sm:pt-32  px-4 md:px-8 lg:px-16">
            <Swiper
              spaceBetween={100}
              breakpoints={{
                640: {
                  slidesPerView: 1, // Display 1 slide in mobile view
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1, // Display 1 slide in tablet view
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 5, // Display 5 slides in laptop screen
                  spaceBetween: 40,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={logo10} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo11} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo12} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo13} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo14} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo15} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo16} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo17} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo18} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo1} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo2} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo3} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo4} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo5} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo6} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo7} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo8} alt="amazon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={logo9} alt="amazon" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewSection;
