import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { reviews } from "../constants";
export const Testimonials = () => {
  return (
    <div
      className="bg-[url('/assets/images/testimonial.png')] bg-no-repeat bg-cover bg-center p-100"
      id={"Testimonials"}
    >
      <div className="mt-20 ">
        <h1 className="text-[#fff] pt-[80px] text-[35px] font-[900] text-center mb-3">
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
          {reviews.map((data) => (
            <SwiperSlide>
              <div className="flex justify-center items-center flex-col mb-10 px-5 py-10">
                <img
                  className="p-1 w-[110px] h-[110px] mb-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                  src="https://im.indiatimes.in/content/itimes/photo/2016/Jul/21/1469099514-cutest-baby-images-newborn-babies.jpg"
                  alt="avatar"
                />
                <p className="font-normal text-center mb-10 text-[#c5c5c5]">
                  {data.content}
                </p>
                <h5 className="mb-2 text-2xl text-[#fff] font-bold tracking-tight">
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
