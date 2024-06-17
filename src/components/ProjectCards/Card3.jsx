import React from "react";
import { BackgroundGradient } from "../CardBackgroundColor";
import dao from "../../assets/DAO.jpg";

export function BackgroundGradientDemo3() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 ">
        <img
          src={dao}
          alt="jordans"
          height="250"
          width="250"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          Valhalla DAO
        </p>
        <p className="text-sm text-neutral-400">
          This application is a DAO(De-centralized Automated Organization) where
          users can enter only by holding the NFT of the DAO. The users gain
          exclusive voting rights on proposals by getting the NFT. The
          participants can send their proposals for funds and get approval by
          getting 50% of the votes. This process is automated using smart
          contracts. Using ERC20, ERC721, Solidity, Wagmi, Hardhat, NextJS and
          deployed on Sepolia Testnet.
        </p>
        <a
          href="https://github.com/ujwxl23/Valhalla_DAO"
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
