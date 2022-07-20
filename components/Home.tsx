import { useRef, useEffect, useMemo } from "react";
import Typed from "typed.js";
// import { Linkedin, Facebook } from "../public/assets/images";
import { Facebook } from "../public/assets/images";
export const Home = () => {
  const text = useMemo(() => [" Zubaid Rasool", " Web develper"], []);
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
    <div className="bg-[url('https://cutesolution.com/html/lavina/assets/img/home-bg.jpg')]">
      <div className="flex flex-col justify-center  items-center min-h-[660px]  space-y-4  ">
        <div>
          <h1 className="text-[#fff] text-[18px]  font-extrabold">
            WELCOME TO MY WEBSITE
          </h1>
        </div>
        <div>
          <span className="text-[#fff] text-[33px] sm:text-[50px]  font-bold  ">
            I am&nbsp;
          </span>

          <span
            className="text-[#fff]  text-[33px] sm:text-[50px] font-bold "
            ref={divRef}
          />
        </div>
        {/* <div className="flex">
          <img src={Facebook} />
         
        </div> */}
        <div className="space-x-4">
          <button className="bg-[#e28007] text-[#fff] font-bold px-8 py-3 rounded-[20px]">
            View work
          </button>
          <button className="bg-[#e28007] font-bold text-[#fff] px-8 py-3 rounded-[20px]">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};
