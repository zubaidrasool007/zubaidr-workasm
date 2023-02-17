import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";
import { workingSkills } from "../constants";
import { useEffect, useState } from "react";
export const Skills = () => {
  // Created a state variable to make sure DOM has been rendered before Swiper target DOM' window.
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <div className="bg-[#10141b] px-2 sm:px-5 py-4 md:py-[20px] " id={"Skills"}>
      <div className="my-40">
        <h1 className="text-[#fff] text-[35px] font-[900] text-center mb-3">
          My Skills
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
            {workingSkills.map((data, ind) => (
              <SwiperSlide key={ind + "-skill"}>
                <div className="flex justify-center items-center flex-col rounded-[3px] mb-10 px-1 sm:px-5 py-10 bg-[#151921] border border-[#151921] shadow-md">
                  <div className="relative flex justify-center items-center">
                    <div className=" rotate-[45deg] rounded-[20px] bg-[#c8c8c812] w-[70px] h-[70px]"></div>
                    <div className=" absolute  ">
                      <a href={data.href} className="flex">
                        <Image src={data.svg} alt={data.svg} height={30} width={30}></Image>
                      </a>
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
