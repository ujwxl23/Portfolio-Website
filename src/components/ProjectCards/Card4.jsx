import React from "react";
import { BackgroundGradient } from "../CardBackgroundColor";
import boy from "../../assets/boy.png";

export function BackgroundGradientDemo4() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 ">
        <img
          src={boy}
          alt="jordans"
          height="250"
          width="250"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          ProfileCreate DiD
        </p>
        <p className="text-sm text-neutral-400">
          A decentralized profile creation application built using thirdweb on
          optimism-goreli testnet and using an information schema with Ethereum
          Attestation Service(EAS). Users are also able to add a profile photo
          which is stored in IPFS (De-centralized storage) using web3.storage.
          Also, added a feature of creating a domainName where a single address
          can get it's own name (like ENS), giving a long public address a
          personalized name. Hence, users can create a verified digital ID where
          they can use it to prove their authenticity without giving all their
          personal information.
        </p>
        <a
          href="https://github.com/ujwxl23/EAS_Profile"
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
