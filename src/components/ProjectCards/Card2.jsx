import React from "react";
import { BackgroundGradient } from "../CardBackgroundColor";
import nft from "../../assets/pngwing.com.png";
import hos from "../../assets/hospital.png";

export function BackgroundGradientDemo2() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
        <img
          src={hos}
          alt="jordans"
          height="250"
          width="250"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Medilinked
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Designed an innovative solution to promote circular economy principles
          by using supply chain management strategy to track and trace medicine
          lifecycle, enabling manufacturers to make sustainable choices and
          encouraging reduction of medical waste generated. It helps retailers
          reduce loss by getting alerts and marketplace for the medicines for
          less profit and larger audience. Using blockchain, firebase, react,
          ML(geo-location).
        </p>
        <a
          href="https://github.com/ujwxl23/MediLinked/tree/master/medilink"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full pl-3 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-3 text-lg font-bold dark:bg-zinc-800"
        >
          <span>View in GitHub</span>
        </a>
      </BackgroundGradient>
    </div>
  );
}
