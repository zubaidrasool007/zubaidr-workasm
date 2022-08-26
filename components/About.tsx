import Image from "next/image";

export const About = () => {
  return (
    <div className="bg-[#10141b] p-4 md:py-[200px]" id={"About"}>
      <div className=" flex flex-col ">
        <h1 className="text-[#fff] text-[40px] font-bold text-center mb-3 relative">
          About Me
        </h1>
        <div className="about relative mb-20"></div>
        <div className="flex flex-col justify-center items-center bg-[#10141b] md:flex-row py-50">
          <div className="flex rounded-[50%] p-2 overflow-hidden border-[4px] border-[#fff]">
            <Image
              className="rounded-[50%]"
              src="/assets/images/zubidrasool.png"
              width={250}
              height={250}
              alt="data"
            ></Image>
          </div>
          <div className="flex flex-col p-4 sm:w-full md:max-w-xl ">
            <div className="mb-5">
              <span className="text-[#fff] text-[25px] font-bold"> I am</span>
              <span className="text-[#ffc209] text-[25px] font-bold">
                {" "}
                Zubaid Rasool
              </span>
              <p className="text-[#fff]">WEB DEVELOPER & PHOTOGRAPHER</p>
            </div>
            <p className="mb-5 text-[#fff] font-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
