import React from "react";
import Image from "next/image";
import Profilepic from "@/assets/profile.png";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse text-center justify-center items-center md:text-left md:flex-row md:items-center md:justify-between gap-4 p-6">
      <div>
        <span>Frontend Developer</span>
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold">
          Hi, I'm <br /> Jeffrey Irukeh{" "}
        </h1>
        <p>I excel at building responsive and accessible web applications.</p>
        <p>Let's work together to create something amazing!</p>
        <div className="flex flex-col md:flex-row items-center  gap-4 mt-4">
          <Button>
            Download CV
            <Download className="ml-2" />
          </Button>
          <div className="flex items-center gap-4">
            <FaGithub size={24} cursor="pointer" className="hover:scale-110" />
            <FaLinkedin
              size={24}
              cursor="pointer"
              className="hover:scale-110"
            />
            <FaXTwitter
              size={24}
              cursor="pointer"
              className="hover:scale-110"
            />
          </div>
        </div>
      </div>
      <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] flex items-center justify-center">
        {/* Spinning Ring */}
        <div className="absolute w-full h-full rounded-full border-t-4 border-primary border-r-transparent border-b-transparent border-l-transparent animate-[spin_5s_linear_infinite]"></div>

        {/* Inner Image */}
        <div className="relative w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] overflow-hidden rounded-full z-10">
          <Image
            src={Profilepic}
            alt="Hero Image"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 280px"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
