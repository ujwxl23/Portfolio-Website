import React from "react";
import { BackgroundGradient } from "../CardBackgroundColor";
import sav from "../../assets/savings.png";

export function BackgroundGradientDemo5() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 ">
        <img
          src={sav}
          alt="jordans"
          height="250"
          width="250"
          className="object-contain"
        />
        <p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
          DemocraticFund
        </p>
        <p className="text-sm text-neutral-400">
          It is a crowd-investing open accounting blockchain integrated unique
          platform with first in its kind investing platform inspired by the
          Indian government system. We have constructed our e-voting system in
          "Cumilative Voting" method eliminating traditional 50-50% yes/no path.
          We provide each voter or shareholder with a VOTE POWER depending upon
          the funding they have provided in the campaign .Thus, powering each
          induvidual with a strong share in the decision making process and not
          being influenced by the major shareholders.
        </p>
        <a
          href="https://github.com/ujwxl23/DemocraticFund"
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
