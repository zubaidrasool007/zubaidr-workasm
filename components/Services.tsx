import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, FreeMode } from "swiper";

const ServiceContent = [
  {
    title: " Web Developement",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: " UI Desigin",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "   UI Ux Desigin",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "  Responsive Desigin",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
];

export const Services = () => {
  return (
    <div className="px-5 sm:px-5">
      <div className="mt-20">
        <h1 className="text-[#fff] text-[40px] font-bold text-center mb-3 ">
          My Service
        </h1>
        <div className="about relative mb-20"></div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay, Pagination]}
          className="mySwiper  "
          breakpoints={{
            320: {
              width: 320,
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1110: {
              width: 1110,
              slidesPerView: 3,
            },
          }}
        >
          {ServiceContent.map((data) => (
            <SwiperSlide>
              <div className="block flex justify-center items-center flex-col rounded-[3px] mb-10 px-5 py-10 bg-[#151921] border border-[#151921] shadow-md">
                <div className="relative flex  justify-center items-center">
                  <div className=" rotate-[45deg]  rounded-[20px] bg-[#c8c8c812]   w-[70px] h-[70px] hover:bg-[#e28007]"></div>
                  <div className="r absolute ">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </a>
                  </div>
                </div>

                <h5 className="mb-2 text-2xl mt-[30px]  text-[#fff] text-center font-bold tracking-tight  ">
                  {data.title}
                </h5>
                <p className="font-normal text-center text-[#c5c5c5] ">
                  {data.content}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
