import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import React from "react";
const workingSkills = [
  {
    title: "Html",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Css",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "JavaScript",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "MUI",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Tailwind",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Angular",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-[url('https://cutesolution.com/html/lavina/assets/img/review-bg.png')] bg-no-repeat bg-cover bg-center  p-100">
      <div className="mt-20 ">
        <h1 className="text-[#fff] pt-[80px] text-[35px] font-[900] text-center mb-3 ">
          Testimonials
        </h1>
        <div className="about relative mb-20"></div>
        <Swiper
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
          modules={[Autoplay, Pagination]}
          className="mySwiper   "
        >
          {workingSkills.map((data) => (
            <SwiperSlide>
              <div className="block flex justify-center items-center flex-col  mb-10 px-5 py-10 ">
                <img
                  className="p-1 w-[110px] h-[110px] mb-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://im.indiatimes.in/content/itimes/photo/2016/Jul/21/1469099514-cutest-baby-images-newborn-babies.jpg"
                  alt="avatar"
                />

                <p className="font-normal text-center mb-10 text-[#c5c5c5] ">
                  {data.content}
                </p>
                <h5 className="mb-2 text-2xl  text-[#fff]  font-bold tracking-tight  ">
                  {data.title}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
