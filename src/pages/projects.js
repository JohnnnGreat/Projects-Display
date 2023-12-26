import Project from "@/components/Project";
import React from "react";
import ImageOne from "../../public/MainP.jpg";
import ImageTwo from "../../public/ImageTwo.png";
import ImageThree from "../../public/ImageThree.png";
import ImageFour from "../../public/ImageFour.jpg";
import ImageFive from "../../public/ImageFive.png";
import ImageSix from "../../public/One.jpg";
import ImageSeven from "../../public/Twi.jpg";

import Link from "next/link";
import ProfileImg from "../../public/josd.jpg";
import Image from "next/image";
import MotionImage from "@/components/MotionImage";

const Projects = () => {
  return (
    <>
      <div className="h-[100px] ">
        <div className="flex justify-between items-center max-w-[1000px] mx-auto h-full">
          <Link
            href={"/"}
            className="m-text text-[1.23rem] font-normal inline-block text-[#918f8f]"
          >
            Back
          </Link>
          <div className="flex gap-[.7rem] items-center">
            <h1 className="m-text text-[#918f8f]"> John Ossai</h1>
            <Image
              src={ProfileImg}
              className="w-[50px] h-[50px] rounded-full flex-1"
            ></Image>
          </div>
        </div>
      </div>
      <div className="projects-container overflow-hidden">
        <Project
          dataAos="fade-right"
          path={ImageOne}
          first={"Job"}
          second={"Space"}
          work={"UI DESIGN"}
        />
        <Project
          dataAos="fade-left"
          path={ImageTwo}
          first={"Real"}
          second={"Base"}
          work={"UI DESIGN"}
        />
        <Project
          dataAos="fade-right"
          path={ImageThree}
          first={"House"}
          second={"of Max"}
          work={"WEB DEVELOPMENT"}
        />
        <MotionImage
          dataAos="fade-right"
          path={ImageFive}
          first={"Veronicas"}
          second={"Kitchen"}
          work={"WEB DEVELOPMENT"}
        />
        <Project
          dataAos="fade-left"
          path={ImageFour}
          first={"Food"}
          second={"Green"}
          work={"UI DESIGN"}
        />
        <Project
          dataAos="fade-right"
          path={ImageSix}
          first={"Property"}
          second={"Wise"}
          work={"UI DESIGN"}
        />
        <MotionImage
          dataAos="fade-left"
          path={ImageSeven}
          first={"Potfolio"}
          second={"Design"}
          work={"UI DESIGN"}
        />
      </div>
    </>
  );
};

export default Projects;
