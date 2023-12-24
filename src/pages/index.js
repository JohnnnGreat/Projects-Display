import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openProjects, setOpenProjects] = useState(false);

  const handleShowProjects = () => {
    alert("sss");

    setOpenProjects((prev) => (prev = true));
  };
  return (
    <>
      <div className="md:h-screen py-[3rem] flex items-center justify-center ">
        <div className=" lg-[80%] py-[7rem] p-[1rem] sm:p-[0] h-[80%] bg-gradient-to-br from-[#005317] to-[#101010] rounded-md flex items-center justify-center w-[90%]">
          <div className=" ">
            <h1 className="leading-[1] text-white m-text">MY PROJECTS</h1>
            <h1 className="leading-[1] c-text lg:text-[96px] text-[40px] mt-[.3rem] text-white">
              SHOWCASE
            </h1>
            <div className="flex mt-[.5rem] sm:justify-center text-[#1AE953] mt-text font-semibold hover:underline sm:mt-[2rem]">
              <button onClick={handleShowProjects}>
                Click to View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      {openProjects && (
        <div className="projects-container">
          <div className="md:h-screen py-[3rem]  flex items-center justify-center">
            <div className="w-[90%] p-[1rem] sm:p-[0] h-[80%] bg-[#161616] rounded-md flex items-center sm:px-[1.4rem] sm:flex-nowrap flex-wrap gap-[2.3rem]">
              <Image
                src={require("../../public/sws.jpg")}
                className="w-[100%] h-[300px] rounded-md object-cover"
              />
              <div>
                <h1 className="lg:text-[96px] text-[40px] text-white leading-[1] c-text">
                  Job
                </h1>
                <h2 className="text-[40px] lg:text-[96px] text-white leading-[1] c-text">
                  Space
                </h2>
                <p className="m-text my-[1rem] text-[.87rem] text-gray-400 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, sequi nesciunt possimus dolore sunt quidem facilis
                  voluptatem nihil eum amet?
                </p>
                <Link
                  href={"/"}
                  className="py-[.7rem] text-[.9rem] sm:text-[1rem] rounded-md c-text text-white bg-red rounder-md mt-[1.3rem] bg-gradient-to-r from-[#005317] to-[#101010] flex justify-center items-center border-[1px] border-gray-800 hover:bg-none hover:transition-all"
                >
                  VIEW MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="md:h-screen py-[3rem]  flex items-center justify-center">
            <div className="w-[90%] p-[1rem] sm:p-[0] h-[80%] bg-[#161616] rounded-md flex items-center sm:px-[1.4rem] sm:flex-nowrap flex-wrap gap-[2.3rem]">
              <Image
                src={require("../../public/sws.jpg")}
                className="w-[100%] h-[300px] rounded-md object-cover"
              />
              <div>
                <h1 className="lg:text-[96px] text-[40px] text-white leading-[1] c-text">
                  Job
                </h1>
                <h2 className="text-[40px] lg:text-[96px] text-white leading-[1] c-text">
                  Space
                </h2>
                <p className="m-text my-[1rem] text-[.87rem] text-gray-400 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, sequi nesciunt possimus dolore sunt quidem facilis
                  voluptatem nihil eum amet?
                </p>
                <Link
                  href={"/"}
                  className="py-[.7rem] text-[.9rem] sm:text-[1rem] rounded-md c-text text-white bg-red rounder-md mt-[1.3rem] bg-gradient-to-r from-[#005317] to-[#101010] flex justify-center items-center border-[1px] border-gray-800 hover:bg-none hover:transition-all"
                >
                  VIEW MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="md:h-screen py-[3rem]  flex items-center justify-center">
            <div className="w-[90%] p-[1rem] sm:p-[0] h-[80%] bg-[#161616] rounded-md flex items-center sm:px-[1.4rem] sm:flex-nowrap flex-wrap gap-[2.3rem]">
              <Image
                src={require("../../public/sws.jpg")}
                className="w-[100%] h-[300px] rounded-md object-cover"
              />
              <div>
                <h1 className="lg:text-[64px] text-[40px] text-white leading-[1] c-text">
                  Job
                </h1>
                <h2 className="text-[40px] lg:text-[96px] text-white leading-[1] c-text">
                  Space
                </h2>
                <p className="m-text my-[1rem] text-[.87rem] text-gray-400 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, sequi nesciunt possimus dolore sunt quidem facilis
                  voluptatem nihil eum amet?
                </p>
                <Link
                  href={"/"}
                  className="py-[.7rem] text-[.9rem] sm:text-[1rem] rounded-md c-text text-white bg-red rounder-md mt-[1.3rem] bg-gradient-to-r from-[#005317] to-[#101010] flex justify-center items-center border-[1px] border-gray-800 hover:bg-none hover:transition-all"
                >
                  VIEW MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
