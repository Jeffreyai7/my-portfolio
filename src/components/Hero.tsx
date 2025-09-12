import React from "react";
import Image from "next/image";
import Profilepic from "@/assets/profile.png";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse text-center justify-center items-center md:text-left md:flex-row md:items-center md:justify-between gap-4 p-6">
      <div>
        <span className="font-bold">Frontend Developer</span>
        <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] font-bold">
          Hi, I&apos;m <br /> Jeffrey Irukeh{" "}
        </h1>
        <p>I excel at building responsive and accessible web applications.</p>
        <p>Let&apos;s work together to create something amazing!</p>
        <div className="flex flex-col md:flex-row items-center  gap-4 mt-4">
          <div>
            <Link
              href="https://drive.google.com/file/d/15SFvd1aeQoYPNMskrNUNsko2Sb0Zh1OU/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant={"outline"}
                className="
            rounded-[3rem]"
              >
                View CV
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:border-secondary hover:text-secondary transition-colors duration-200 cursor-pointer">
              <Link
                href="https://github.com/Jeffreyai7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </Link>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:border-secondary hover:text-secondary transition-colors duration-200 cursor-pointer">
              <Link
                href="https://linkedin.com/in/jirukeh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </Link>
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary text-primary hover:border-secondary hover:text-secondary transition-colors duration-200 cursor-pointer">
              <Link
                href="https://x.com/jirukeh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={20} />
              </Link>
            </div>
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
