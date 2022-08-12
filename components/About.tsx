export const About = () => {
  return (
    <div className="bg-[#10141b] p-4 md:p-[100px]">
      <div className="flex flex-col">
        <h1 className="text-[#fff] text-[40px] font-bold text-center mb-3 relative">
          About Me
        </h1>
        <div className="about relative mb-20"></div>
        <div className="flex flex-col justify-center items-center bg-[#10141b] md:flex-row  ">
          <div className="border-solid border-[10px] border-[#fff]">
            <img
              className=" w-full h-96  md:h-auto md:w-[500px] md:rounded-none "
              src="https://cutesolution.com/html/lavina/assets/img/about.jpg"
            />
          </div>
          <div className="flex flex-col  p-4 sm:w-full md:max-w-xl ">
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
