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
              src="/assets/images/Muhammad-zubaid-rasool.jpg"
              width={250}
              height={250}
              alt="Muhammad Zubaid Rasool"
            ></Image>
          </div>
          <div className="flex flex-col p-4 sm:w-full md:max-w-xl">
            <div className="mb-5">
              <span className="text-[#fff] text-[25px] font-bold"> I am</span>
              <span className="text-[#ffc209] text-[25px] font-bold">
                Zubaid Rasool
              </span>
              <p className="text-[#fff]">WEB DEVELOPER</p>
            </div>
            <p className="mb-5 text-[#fff] font-normal">
              Primarily a MEAN/ MERN stack developer for last 4+ years.
              However, I adopted Angular as my first framework. Through these
              years I have learnt React.JS, Node.JS, Express, MongoDB and SQL. I
              have lead a team of 5 people to transform an Angular.JS product
              into Angular 10. Worked with Socket.io and AWS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
