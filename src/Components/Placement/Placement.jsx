"use client"

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import logo1 from '../../../public/logo1.png';
import logo2 from '../../../public/logo2.png';
import logo3 from '../../../public/logo3.png';
import logo4 from '../../../public/logo4.png';
import logo5 from '../../../public/logo5.png';




const NewSection = () => {
    return (

        <div className="container mx-auto placement_comapny_slider">
            {/* First row */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold placement_heading">Get your hands on Industry Relevant Courses <br></br>in Mass Communication, Media, Fashion, and Commerce</h2>
            </div>
            {/* Second row */}
            <div className="mb-8 placement_paragraph">
                <p className="text-gray-600">Gyanarthi is the only college affiliated with the Kumaon University in Kashipur that<br></br> offers courses in Fine Arts and professional fields of Commerce.</p>
            </div>
            {/* Third row */}
            <div className="swiper-container pt-32 px-4 md:px-8 lg:px-16">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={100}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    navigation={false}
                    modules={[Autoplay, Navigation]}

                    className="mySwiper"
                >
                    <SwiperSlide><Image src={logo1} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo2} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo3} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo4} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo5} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo1} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo2} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo3} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo4} alt="amazon" /></SwiperSlide>
                    <SwiperSlide><Image src={logo5} alt="amazon" /></SwiperSlide>

                </Swiper>
            </div>
        </div>

    );
};

export default NewSection;
