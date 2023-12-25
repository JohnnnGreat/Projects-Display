import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import localFont from "@next/font/local";
import Project from "@/components/Project";

const myFont = localFont({ src: "../../public/Akira.otf" });

export default function Home() {
  const [openProjects, setOpenProjects] = useState(false);

  const handleShowProjects = () => {
    setOpenProjects((prev) => (prev = true));
  };
  return (
    <>
      <div
        className={`${
          !openProjects && "h-screen"
        } md:h-screen  py-[3rem] flex items-center justify-center`}
      >
        <div className=" lg-[80%] py-[7rem] p-[1rem] sm:p-[0] h-[90%] bg-gradient-to-br from-[#005317] to-[#101010] rounded-md flex items-center justify-center w-[90%]">
          <div className=" ">
            <h1 className="leading-[1] text-white m-text">MY PROJECTS</h1>
            <h1
              className={`leading-[1] c-text lg:text-[96px] text-[40px] mt-[.3rem] text-white ${myFont.className}`}
            >
              SHOWCASE
            </h1>
            <div className="text-[.7rem] md:text-[1rem] flex mt-[.5rem] sm:justify-center text-[#1AE953] mt-text font-semibold hover:underline sm:mt-[2rem]">
              <button onClick={handleShowProjects}>
                Click to View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      {openProjects && (
        <div className="projects-container">
          <Project />
          <Project />
          <Project />
        </div>
      )}
    </>
  );
}
