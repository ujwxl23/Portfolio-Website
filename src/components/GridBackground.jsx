import React from "react";
import StackIcon from "tech-stack-icons";
import sol from "../assets/solidity.png";
import rust from "../assets/rust.png";
import next from "../assets/nextjs2.png";
import three from "../assets/threejs.png";
import git from "../assets/github.png";

export function GridBackgroundDemo() {
  return (
    <div className="h-[30rem] w-full bg-black  bg-grid-white/[0.2]  relative flex flex-wrap items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="flex flex-wrap justify-center w-full space-x-3 sm:space-x-12">
        <StackIcon name="html5" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="css3" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="js" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="reactjs" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="typescript" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="vitejs" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="nodejs" className="w-10 h-9 sm:w-15 sm:h-14" />
      </div>

      <div className="flex flex-wrap justify-center w-full space-x-3 sm:space-x-12">
        <StackIcon name="nodejs" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="algorand" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="aws" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="azure" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="bootstrap5" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="c++" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="canva" className="w-10 h-9 sm:w-15 sm:h-14" />
      </div>

      <div className="flex flex-wrap justify-center w-full space-x-3 sm:space-x-12">
        <StackIcon name="dart" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="digitalocean" className="w-10 h-9 sm:w-15 sm:h-14" />
        <img src={git} className="w-10 h-9 sm:w-15 sm:h-14" alt="Git" />
        <img src={three} className="w-10 h-9 sm:w-15 sm:h-14" alt="Three.js" />
        <img src={next} className="w-10 h-9 sm:w-15 sm:h-14" alt="Next.js" />
        <img src={rust} className="w-10 h-9 sm:w-15 sm:h-14" alt="Rust" />
        <img src={sol} className="w-10 h-9 sm:w-15 sm:h-14" alt="Solidity" />
      </div>

      <div className="flex flex-wrap justify-center w-full space-x-3 sm:space-x-12">
        <StackIcon name="mongodb" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="mysql" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="nodejs" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="postman" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="ps" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="python" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="firebase" className="w-10 h-9 sm:w-15 sm:h-14" />
      </div>

      <div className="flex flex-wrap justify-center w-full space-x-3 sm:space-x-12">
        <StackIcon name="java" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="materialui" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="algorand" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="chakraui" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="git" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="tailwindcss" className="w-10 h-9 sm:w-15 sm:h-14" />
        <StackIcon name="figma" className="w-10 h-9 sm:w-15 sm:h-14" />
      </div>
    </div>
  );
}
