import React from "react";
import Image from "next/image";
import Linkdin from "../public/assets/images/linkedin.svg";
import Github from "../public/assets/images/github.svg";
import Twitter from "../public/assets/images/twitter.svg";

const icons = [
  {
    svg: Linkdin,
    path: "https://www.linkedin.com/in/zubaid-rasool-3040b6135https://www.linkedin.com/in/zubaid-rasool-3040b6135",
  },
  {
    svg: Github,
    path: "https://github.com/zubaidrasool007",
  },
  {
    svg: Twitter,
    path: "https://twitter.com/Zubaid_Rasool9?t=NTma4cWg1kt1bLrOajelkA&s=09",
  },
];
export const Footer = () => {
  return (
    <footer className="p-4  sm:p-[100px] ">
      <div className="flex flex-col items-center">
        <div className="flex gap-4 pb-4">
          {icons.map(({ svg, path }) => (
            <div className="border-solid border-2  border-[#e28007] bg-[#e28007] p-1 rounded-[10px] hover:bg-transparent hover:border hover:border-2 cursor-pointer hover:ease-in ">
              <a href={path}>
                <Image src={svg} width={30} height={30}></Image>
              </a>
            </div>
          ))}
        </div>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
