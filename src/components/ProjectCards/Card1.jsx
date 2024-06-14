import React from "react";
import { BackgroundGradient } from "../CardBackgroundColor";
import nft from "../../assets/pngwing.com.png";

export function BackgroundGradientDemo1() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
        <img
          src={nft}
          alt="jordans"
          height="250"
          width="250"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          NFT Minter
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This is a NFTMinter application built using ReactJS, NodeJS,
          ExpressJS, MongoDB and ethers v5. This application allows new users
          and private users mint NFT. The application gets the addresses stored
          off-chain in the MongoDB database and using an GET API to fetch all
          the private addresses. Also, dynamically changes the mint value
          depending on it. The contract is deployed in the sepolia network of
          ethereum.
        </p>
        <a
          href="https://github.com/ujwxl23/NFTMinter"
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
