import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../assets/cn";

export const StickyScroll = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = 4;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = [
      0,
      1 / cardLength,
      2 / cardLength,
      3 / cardLength,
    ];
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--neutral-900)",
    "var(--black)",
    "var(--neutral-900)",
    "var(--black)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  const content = [
    {
      title: "PredictRAM",
      description: (
        <p>
          I was a Frontend Developer (Intern) from Febuary 2024 to April 2024 In
          this internship, I worked with multiple department heads and founder
          on the companies main website. I was responsible to build multiple
          frontend components and fetch the data from the backend API and
          dynamically render and update the data. I worked in 3 parts of the
          website including the CRM, authentication and database of the website.
        </p>
      ),
      content: null,
    },
    {
      title: "Metakraft",
      description: (
        <p>
          I was a Full stack Developer (Intern) from September 2023 to November
          2023 In this internship, I designed and implemented responsive
          frontend using React for 3 websites, enhancing user experience and
          accessibility. I also created robust API using Node.js & Express.js
          ensuring seamless functionality & connectivity. Integrated MongoDB to
          optimize data storage, retrieval, and management. I collaborated with
          cross-functional teams ensuring feature integration that optimized
          overall system performance by 20 percent.
        </p>
      ),
      content: null,
    },
    {
      title: "AppAvengers",
      description: (
        <p>
          I was a Blockchain Developer (Intern) from June 2023 to August 2023. I
          developed over 20 DeFi smart contracts using Hardhat for decentralized
          systems and blockchain-based solutions. I also build and launched 4
          fully functional decentralized applications (Dapps) with seamless user
          experience in multiple networks like Ethereum, Polygon, Optimism,
          Binance. Integrated external API for enhancing blockchain
          applications, leveraging real-time data from various websites and
          oracles like Chainlink. Developed Full stack application by smart
          contract integration with React and ethersJS, leveraging the Chai
          framework for testing.
        </p>
      ),
      content: null,
    },
    {
      title: "IoTAGI",
      description: (
        <p>
          I was a Content creation and Research (Intern) from January 2023 to
          March 2023 I researched and created content for the company website on
          multiple topics. I was also responsilble for communicating with
          companies for partnerships and sponsors.
        </p>
      ),
      content: null,
    },
  ];

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="relative flex flex-wrap items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 ">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden",
          content[activeCard].title.toLowerCase().replace(/\s/g, "-")
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
