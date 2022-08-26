import { icons } from "../constants";
import Image from "next/image";
export const Footer = () => {
  return (
    <footer className="p-4 bg-[#10141b]  ">
      <div className="flex  flex-col items-center">
        <div className="flex space-x-20 py-3">
          {icons.map(({ svg, path }) => (
            <div className="relative flex flex-rows   justify-center items-center">
              <div className=" border-solid border-2 hover:z-[1] bg-[#e28007]  border-[#e28007]  rotate-[45deg] rounded-[10px]  p-[15px] rounded-[10px]  hover:bg-transparent cursor-pointer hover:ease-in"></div>
              <div className="absolute hover:z-[-1] ">
                <a href={path} className="flex">
                  <Image src={svg} height={20} width={20}></Image>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
