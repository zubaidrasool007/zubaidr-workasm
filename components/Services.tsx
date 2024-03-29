import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, FreeMode } from "swiper";
import { servicesContent } from "../constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Services = () => {
  // Created a state variable to make sure DOM has been rendered before Swiper target DOM' window.
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="px-2 sm:px-5" id={"Service"}>
      <div className="my-40">
        <h1
          className="text-[#fff] text-[40px] font-bold text-center mb-3"
          id={"Services"}
        >
          My Service
        </h1>
        <div className="about relative mb-20"></div>
        {domLoaded && (
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
            className="mySwiper"
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
              },

              640: {
                width: 640,
                slidesPerView: 2,
              },

              1110: {
                width: 1110,
                slidesPerView: 3,
              },
            }}
          >
            {servicesContent.map((data, ind) => (
              <SwiperSlide key={ind + "-service"}>
                <div className="flex justify-center items-center flex-col rounded-[3px] mb-10 px-5 py-10 bg-[#151921] border border-[#151921] shadow-md">
                  <div className="relative flex  justify-center items-center">
                    <div className="rotate-[45deg] rounded-[20px] bg-[#c8c8c812] w-[70px] h-[70px]"></div>
                    <div className="absolute flex">
                      <Image src={data.svg} height={30} width={30} alt={data.svg} />
                    </div>
                  </div>

                  <h5 className="mb-2 text-2xl mt-[30px] text-[#fff] text-center font-bold tracking-tight">
                    {data.title}
                  </h5>
                  <p className="font-normal text-center text-[#c5c5c5]">
                    {data.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
