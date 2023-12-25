import React from "react";
import localFont from "@next/font/local";
import Link from "next/link";
import Image from "next/image";

const myFont = localFont({ src: "../../public/Akira.otf" });

const Project = ({ dataAos }) => {
  return (
    <div
      className="md:h-screen py-[3rem]  flex items-center justify-center"
      data-aos={`${dataAos}`}
      data-aos-duration="1000"
    >
      <div className="w-[90%] p-[1rem] sm:p-[1rem] h-[80%] bg-[#161616] rounded-md flex items-center sm:px-[1.4rem] sm:flex-nowrap flex-wrap gap-[2.3rem]">
        <Image
          src={require("../../public/sws.jpg")}
          className="w-[100%] h-[300px] sm:h-[100%] rounded-md object-cover"
        />
        <div>
          <h1
            className={` ${myFont.className} lg:text-[96px] text-[40px] text-white leading-[1] c-text`}
          >
            Job
          </h1>
          <h1
            className={`  lg:text-[96px] text-[40px] text-white leading-[1] c-text ${myFont.className}`}
          >
            Space
          </h1>
          <p className="m-text my-[1rem] text-[.87rem] text-gray-400 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
            sequi nesciunt possimus dolore sunt quidem facilis voluptatem nihil
            eum amet?
          </p>
          <Link
            href={"/"}
            className={`${myFont.className} py-[.7rem] text-[.9rem] sm:text-[1rem] rounded-md c-text text-white bg-red rounder-md mt-[1.3rem] bg-gradient-to-r from-[#005317] to-[#101010] flex justify-center items-center border-[1px] border-gray-800 hover:bg-none hover:transition-all`}
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
