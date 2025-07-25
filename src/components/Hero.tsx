import React from "react";
import Image from "next/image";
import Profilepic from "@/assets/profile.png";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col items-center w-[80%] mx-auto justify-center gap-4 p-6 text-center md:flex-row md:justify-between md:gap-8">
      <div>
        <span>Frontend Developer</span>
        <h1 className="text-4xl font-bold">
          Hi, I'm <br /> Jeffrey Irukeh{" "}
        </h1>
        <p>I excel at building responsive and accessible web applications.</p>
        <p>Let's work together to create something amazing!</p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Button>Download CV</Button>
          <div className="flex items-center gap-4">
            <FaGithub cursor="pointer" />
            <FaLinkedin cursor="pointer" />
            <FaXTwitter cursor="pointer" />
          </div>
        </div>
      </div>
      <Image src={Profilepic} alt="Hero Image" height={200} width={200} />
    </section>
  );
};

export default Hero;
