import Image from "next/image";
import { projectWork } from "../constants";

export const Projects = () => {
  return (
    <div className=" p-4 pb-20" id={"Projects"}>
      <div className="mt-20 ">
        <h1 className="text-[#fff] text-[35px] font-[900] text-center mb-3">
          Projects
        </h1>
        <div className="about relative mb-20"></div>
        <div className="grid justify-center  ">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectWork.map((data, ind) => (
              <div key={ind+'-project'} className="block relative group h-[400px] w-[100%] md:w-[320px] flex-col rounded-[3px] border border-[#151921] shadow-md">
                <div className="hidden bg-[rgba(0,0,0,0.7)] group-hover:flex absolute top-0 left-0 w-[100%] h-[100%] justify-center items-center">
                  <div className="z-[1]">
                    <div className="flex flex-col ">
                      <a className="bg-[#e28007] text-[#fff] font-bold px-8 py-3 rounded-[30px] hover:bg-transparent border-2 border-[#e28007] cursor-pointer hover:ease-in">
                        Live View
                      </a>
                      <a className="bg-[#e28007] font-bold text-[#fff] px-8 py-3 mt-5 rounded-[30px] hover:bg-transparent border-2 border-[#e28007] cursor-pointer hover:ease-in">
                        Git Hub
                      </a>
                    </div>
                  </div>
                </div>
                <Image
                  width={'100%'} height={'100%'}
                  className="h-[100%] max-w-[100%] rounded-[10px]"
                  src={data.path} alt={data.path}
                />
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
