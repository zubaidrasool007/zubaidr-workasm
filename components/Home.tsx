import { useRef, useEffect } from "react";
import Typed from "typed.js";
import Image from "next/image";
import { icons } from "../constants";

export const Home = () => {
  const text = [" Zubaid Rasool", " Web Developer"];
  const divRef: any = useRef();
  useEffect(() => {
    const options = {
      strings: text,
      stringsElement: "#typed-string",
      typeSpeed: 50,
      showCursor: true,
      backSpeed: 20,
      smartBackspace: false,
      shuffle: true,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    };
    const typed = new Typed(divRef.current, options);
    return () => {
      typed.destroy();
    };
  }, [text]);

  return (
    <div
      className="bg-[url('/assets/images/home.png')] bg-no-repeat bg-cover bg-center bg-fixed w-full relative z-[1] h-[100vh] "
      id={"Home"}
    >
      <div className="absolute w-full h-[100%] top-0 left-0 bg-black opacity-[.6] z-[-1]"></div>
      <div className="flex flex-col justify-center items-center space-y-4 h-[100%] ">
        <div>
          <h1 className="text-[#fff] text-[18px] font-extrabold">
            WELCOME TO MY WEBSITE
          </h1>
        </div>
        <div>
          <span className="text-[#fff] text-[33px] sm:text-[50px] font-bold">
            I am&nbsp;
          </span>

          <span
            className="text-[#fff] text-[30px] sm:text-[50px] font-bold "
            ref={divRef}
          />
        </div>
        <div className="flex gap-5 pb-6">
          {icons.map(({ svg, path }) => (
            <div className="relative flex flex-rows justify-center items-center">
              <div className=" border-solid border-2 bg-[#e28007] border-[#e28007] rotate-[45deg] p-[18px] rounded-[10px] hover:bg-transparent hover:z-[1] cursor-pointer hover:ease-in"></div>
              <div className="absolute hover:z-[-1]">
                <a href={path} className="flex">
                  <Image src={svg} height={22} width={22}></Image>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="space-x-4">
          <a
            href={`#${"Portfolio"}`}
            className="bg-[#e28007] text-[#fff] font-bold px-8 py-3 rounded-[30px] hover:bg-transparent border-2 border-[#e28007] cursor-pointer hover:ease-in"
          >
            View work
          </a>
          <a
            href={`#${"Contact"}`}
            className="bg-[#e28007] font-bold text-[#fff] px-8 py-3 rounded-[30px] hover:bg-transparent border-2  border-[#e28007] cursor-pointer hover:ease-in"
          >
            Hire Me
          </a>
        </div>
      </div>
    </div>
  );
};
