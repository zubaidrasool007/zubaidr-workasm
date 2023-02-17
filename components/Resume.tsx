import { work, education } from "../constants";

export const Resume = () => {
  return (
    <div className="bg-[#10141b] mt-20 p-4 md:p-[20px]" id={"Resume"}>
      <div className="mt-20">
        <h1 className="text-[#fff] text-[35px] font-[900] text-center mb-3">
          Work & Education
        </h1>
        <div className="about relative mb-20"></div>
        <div className="flex flex-col md:flex-row justify-center space-x-0.9 md:space-x-6">
          <div className="flex justify-center items-center flex-col rounded-[3px] mb-10 px-10 py-5 bg-[#0c0f16] border border-[#151921] shadow-xl">
            {work.map((data, ind) => (
              <div className=" py-6 pl-[30px] md:pl-[50px] max-w-xl md:max-w-sm relative circle line" key={ind+'-work'}>
                <h5 className="mb-2 text-[20px] text-[#fff] font-[500] tracking-tight  ">
                  {data.title}
                </h5>
                <p className="bg-[#e28007] w-[90px] text-[10px] mb-[20px] px-[16px] py-[4px] font-[700] text-[#c5c5c5] ">
                  {data.date}
                </p>
                <p className="font-normal text-[14px] text-[#c5c5c5] ">
                  {data.content}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center flex-col rounded-[3px] mb-10 px-10 py-5 bg-[#0c0f16] border border-[#151921] shadow-[rgba(100, 100, 111, 0.2) 0px 7px 29px 0px]">
            {education.map((data, ind) => (
              <div className=" py-6 pl-[30px] md:pl-[50px] max-w-xl md:max-w-sm relative circle line" key={ind + '-edu'}>
                <h5 className="mb-2 text-[20px] text-[#fff] font-[500] tracking-tight">
                  {data.title}
                </h5>
                <p className="bg-[#e28007] w-[90px] text-[10px] mb-[20px] px-[16px] py-[4px] font-[700] text-[#c5c5c5]">
                  {data.date}
                </p>
                <p className="font-normal text-[14px] text-[#c5c5c5]">
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
