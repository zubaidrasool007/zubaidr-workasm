import React from "react";

const work = [
  {
    title: "Full stack Web Developer",
    date: "2018 - 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Back-End Developer",
    date: "2018 - 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "UI Designer",
    date: "2018 - 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

const education = [
  {
    title: "Academic Degree",
    date: "2018 - 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Bachelor’s Degree",
    date: "2018 - 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    title: "Specialization Course",
    date: "2018 - 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
];

export const WorkEducation = () => {
  return (
    <div className="bg-[#10141b] mt-20 p-4 md:p-[20px]">
      <div className="mt-20">
        <h1 className="text-[#fff] text-[35px] font-[900] text-center mb-3 ">
          Work & Education
        </h1>
        <div className="about relative mb-20"></div>
        <div className="flex flex-col md:flex-row justify-center space-x-0.9 md:space-x-6">
          <div className="block flex justify-center items-center flex-col rounded-[3px] mb-10 px-10 py-5 bg-[#0c0f16] border border-[#151921] shadow-xl">
            {work.map((data) => (
              <div className=" py-6 pl-[30px] md:pl-[50px] max-w-xl md:max-w-sm relative circle line">
                <h5 className="mb-2 text-[20px]  text-[#fff]  font-[500] tracking-tight  ">
                  {data.title}
                </h5>
                <p className="font-normal bg-[#e28007] w-[90px] text-[10px] mb-[20px] px-[16px] py-[4px] font-[700] text-[#c5c5c5] ">
                  {data.date}
                </p>
                <p className="font-normal text-[14px]  text-[#c5c5c5] ">
                  {data.content}
                </p>
              </div>
            ))}
          </div>
          <div className="block flex justify-center items-center flex-col rounded-[3px] mb-10 px-10 py-5 bg-[#0c0f16] border border-[#151921] shadow-[rgba(100, 100, 111, 0.2) 0px 7px 29px 0px]">
            {eduction.map((data) => (
              <div className=" py-6 pl-[30px] md:pl-[50px] max-w-xl md:max-w-sm relative circle line">
                <h5 className="mb-2 text-[20px]  text-[#fff]  font-[500] tracking-tight  ">
                  {data.title}
                </h5>
                <p className="font-normal bg-[#e28007] w-[90px] text-[10px] mb-[20px] px-[16px] py-[4px] font-[700] text-[#c5c5c5] ">
                  {data.date}
                </p>
                <p className="font-normal text-[14px]  text-[#c5c5c5] ">
                  {data.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
