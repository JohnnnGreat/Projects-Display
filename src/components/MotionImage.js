import React from "react";
import localFont from "@next/font/local";
import Link from "next/link";
import Image from "next/image";

const myFont = localFont({ src: "../../public/Akira.otf" });
const MotionImage = ({ dataAos, path, first, second, work }) => {
  return (
    <div
      className="md:h-screen flex items-center justify-center overflow-hidden"
      data-aos={`${dataAos}`}
      data-aos-duration="1000"
    >
      <div className="w-[95%] sm:w-[85%] p-[1rem] sm:p-[1rem] h-[80%] bg-[#161616] rounded-md flex items-center sm:px-[1.4rem] sm:flex-nowrap flex-wrap gap-[2.3rem]">
        <div className=" overflow-hidden relative w-[80%] h-[80%] flex items-center justify-center">
          <Image
            src={path}
            className="w-[100%] sm:w-[70%] h-[1200px] sm:h-[auto]  rounded-md absolute top-0 img-a"
          />
        </div>
        <div>
          <h1
            className={` ${myFont.className} lg:text-[64px] text-[35px] text-white leading-[1] c-text`}
          >
            {first}
          </h1>
          <h1
            className={`  lg:text-[64px] text-[35px] text-white leading-[1] c-text ${myFont.className}`}
          >
            {second}
          </h1>
          <p className="m-text my-[.5rem] text-[.87rem] text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            sequi nesciunt possimus dolore sunt quidem facilis voluptatem nihil
            eum amet?
          </p>
          <p className="m-text mt-[.5rem] text-[.7rem] bg-[#242424] inline-block text-white py-[.6rem] px-[1rem] rounded-md border-[1px] border-gray-600">
            {work}
          </p>
          <Link
            href={"/"}
            className={`${myFont.className} py-[.7rem] text-[.5rem] font-light sm:text-[1rem] rounded-md c-text text-white bg-red rounder-md mt-[1.3rem] bg-gradient-to-r from-[#005317] to-[#101010] flex justify-center items-center border-[1px] border-gray-800 hover:bg-none hover:transition-all`}
          >
            VIEW PROJECT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MotionImage;
