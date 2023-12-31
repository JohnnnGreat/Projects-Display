import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import localFont from "@next/font/local";
import Project from "@/components/Project";

const myFont = localFont({ src: "../../public/Akira.otf" });
import ImageOne from "../../public/MainP.jpg";
import ImageTwo from "../../public/ImageTwo.png";
import ImageThree from "../../public/ImageThree.png";
import ImageFour from "../../public/ImageFour.jpg";

export default function Home() {
  const [openProjects, setOpenProjects] = useState(false);

  const handleShowProjects = () => {
    setOpenProjects((prev) => (prev = true));
  };
  return (
    <>
      <div
        className={`${
          !openProjects && "h-screen overflow-hidden"
        } md:h-screen  py-[3rem] flex items-center justify-center `}
      >
        <div className="overflow-hidden  py-[7rem] p-[1rem] sm:p-[0] h-[90%] bg-gradient-to-br from-[#005317] to-[#101010] rounded-md flex items-center justify-center w-[95%] sm:w-[80%]">
          <div className=" ">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="leading-[1] text-white m-text"
            >
              MY PROJECTS
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className={`leading-[1] c-text lg:text-[96px] text-[40px] mt-[.3rem] text-white ${myFont.className}`}
            >
              SHOWCASE
            </h1>
            <div className="text-[.7rem] md:text-[1rem] flex mt-[.2rem] sm:justify-center text-[#1AE953] mt-text font-semibold  sm:mt-[2rem]">
              <Link
                href="/projects"
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="1000"
                // onClick={handleShowProjects}
                className="border-[1px] border-white py-[.8rem] px-[1.2rem] rounded-full hover:bg-white hover:border-none hover:text-[#1AE953] font-bold"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="m-text flex items-center justify-center p-[1.4rem] bg-[#161616] text-white font-bold underline">
        <Link href={"/about"}>ABOUT ME</Link>
      </footer>
    </>
  );
}
