import React from "react";
import { BackgroundGradient } from "../CardBackgroundColor";
import supply from "../../assets/supply-chain.png";

export function BackgroundGradientDemo6() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 ">
        <img
          src={supply}
          alt="jordans"
          height="250"
          width="250"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          TheGraphSuppyChain
        </p>
        <p className="text-sm text-neutral-400">
          This application is a subgraph application created using TheGraph
          protocol for tracking of goods and suppy chain management deployed in
          Polygon_Mumbai testnet. It is used to track and record the
          transactions occuring on-chain with the help of events. This acts as
          an off-chain storage for all the delivery, locations, amount of goods,
          etc with necessary details required in a supply-chain management
          software. The features like immutability, transpirancy and automation
          provided by blockchain makes it a better option than traditional
          methods.
        </p>
        <a
          href="https://github.com/ujwxl23/TheGraphSupplyChain"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full pl-3 pr-1 py-1 text-white flex items-center space-x-1  mt-3 text-lg font-bold bg-zinc-800"
        >
          <span>View in GitHub</span>
        </a>
      </BackgroundGradient>
    </div>
  );
}
