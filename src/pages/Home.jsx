import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Spline from "@splinetool/react-spline";
import wave from "../assets/wave.png";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../components/canvas-reveal-effect";
import { GridBackgroundDemo } from "../components/GridBackground";
import { BackgroundBeams } from "../components/BeamBackground";
import { SparklesPreview } from "../components/SparklesText";
import { StickyScroll } from "../components/StickyScrollEffect";
import { ExperienceText } from "../components/ExperienceText";
import { ProjectsText } from "../components/ProjectsText";
import { BackgroundGradientDemo1 } from "../components/ProjectCards/Card1";
import { BackgroundGradientDemo2 } from "../components/ProjectCards/Card2";
import { BackgroundGradientDemo3 } from "../components/ProjectCards/Card3";
import { BackgroundGradientDemo4 } from "../components/ProjectCards/Card4";
import { BackgroundGradientDemo5 } from "../components/ProjectCards/Card5";
import { BackgroundGradientDemo6 } from "../components/ProjectCards/Card6";
import { ContactUsForm } from "../components/FormUI/ContactUsForm";
import { ContactText } from "../components/ContactUsText";
import MintNFT from "./NFT";

const CanvasRevealEffectDemo2 = () => {
  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
      <Card
        title="I am a 3rd year student in VIT Vellore. I love to build new trending
          projects on the latest technologies. I am passionate about web3 and AI. Looking to work in building
          real-world problem solving projects and research."
        icon={<AceternityIcon />}
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[[125, 211, 252]]}
          dotSize={2}
        />
      </Card>
    </div>
  );
};

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-4xl w-full mx-auto p-4  h-[30rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex flex-col items-center justify-center">
          <span className="block dark:text-white text-black font-bold text-5xl">
            About Me
          </span>
          <span className="block dark:text-white text-black text-sm">
            (Hover Me to Reveal)
          </span>
        </div>

        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => (
  <svg
    width="66"
    height="65"
    viewBox="0 0 66 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
  >
    <path
      d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
      stroke="currentColor"
      strokeWidth="15"
      strokeMiterlimit="3.86874"
      strokeLinecap="round"
      style={{ mixBlendMode: "darken" }}
    />
  </svg>
);

const Icon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

const Home = () => {
  const Typewriter = () => {
    const words = [
      "Student.",
      "Web3 enthusiast.",
      "Full-Stack Developer.",
      "Learner.",
      "Smart Contract Developer.",
      "Blockchain Developer.",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const dynamicText = document.querySelector("#typewriter span");
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
      } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
      }
    };

    useEffect(() => {
      typeEffect();
    }, []);

    return (
      <h1
        id="typewriter"
        className="text-3xl md:text-4xl font-semibold text-white w-full md:w-1/2 mx-10"
        style={{ height: "auto", maxHeight: "3rem" }}
      >
        I'm a <span className="text-blue-500 text-4xl md:text-5xl"></span>
      </h1>
    );
  };

  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "50px",
          backgroundColor: "black",
        }}
      >
        <div
          style={{
            width: "80%",
            "@media only screen and (max-width: 600px)": { width: "100%" },
          }}
        >
          <h1 className="text-4xl font-semibold text-white flex items-center ml-10 my-2">
            Hi!! <img src={wave} style={{ width: "40px" }} />
          </h1>
          <h1 className="text-4xl font-semibold text-white flex items-center ml-10">
            This is Ujwal Kumar.
          </h1>
          <h1 className="text-2xl font-semibold text-white flex items-center ml-10 mb-20">
            (Full-Stack Blockchain Developer)
          </h1>
          <Typewriter />
        </div>
        <div className="hidden md:block relative mr-10">
          <Spline scene="https://prod.spline.design/rbVUVCB4iBjV7TjM/scene.splinecode" />
        </div>
      </div>
      <div id="about">
        <CanvasRevealEffectDemo2 />
        <SparklesPreview />
        <GridBackgroundDemo />
      </div>
      <div id="experience">
        <ExperienceText />
        <StickyScroll />
      </div>
      <div id="projects">
        <ProjectsText />
        <div className="flex flex-col lg:flex-row lg:space-x-36 p-5">
          <div style={{ marginTop: "40px" }}>
            <BackgroundGradientDemo1 />
          </div>
          <div style={{ marginTop: "40px" }}>
            <BackgroundGradientDemo2 />
          </div>
          <div style={{ marginTop: "40px" }}>
            <BackgroundGradientDemo3 />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-36 p-5">
          <div style={{ marginTop: "40px" }}>
            <BackgroundGradientDemo4 />
          </div>
          <div style={{ marginTop: "40px" }}>
            <BackgroundGradientDemo5 />
          </div>
          <div style={{ marginTop: "40px" }}>
            <BackgroundGradientDemo6 />
          </div>
        </div>
      </div>
      <div id="contact">
        <ContactText />
        <ContactUsForm />
      </div>
      <MintNFT />
      <BackgroundBeams />
    </>
  );
};

export default Home;
