import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
const workingSkills = [
  {
    title: "Html",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "Css",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "JavaScript",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "MUI",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "Tailwind",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "Angular",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "Node Js",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "ReactJS",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "MongoDB",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "MSSQL",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "PostgreSQL",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
  {
    title: "ExpressJS",
    content:
      "Lorem ipsum dolor sit amet, id lacus consectetur adipiscingelit. Vivamus egestas, luctus eni",
  },
];

export const Skills = () => {
  return (
    <div className="bg-[#10141b]  p-4 md:p-[20px] ">
      <div className="mt-20">
        <h1 className="text-[#fff] text-[35px] font-[900] text-center mb-3 ">
          My Skills
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
          {workingSkills.map((data) => (
            <SwiperSlide>
              <div className="block flex justify-center items-center flex-col rounded-[3px] mb-10 px-5 py-10 bg-[#151921] border border-[#151921] shadow-md ">
                <div className=" rotate-[45deg]  rounded-[20px] bg-[#c8c8c812]  mb-[30px] w-[70px] h-[70px] hover:bg-[#e28007]"></div>
                <h5 className="mb-2 text-2xl  text-[#fff] text-center font-bold tracking-tight  ">
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
