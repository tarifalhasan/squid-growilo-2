import React from 'react';

import briogeLogo from '../assets/images/brioge.png';
import logo from '../assets/images/SRLOGO.svg';
import eth2 from '../assets/images/eth.svg';
import multiChain from '../assets/images/multichain.svg';

import Image from 'next/image';
import { ConnectWalletBtn } from './Button';

const ConnectWallect = () => {
  return (
    <div className=" bg-secondary space-y-5 border px-6 py-6 border-[#D9D9D9] rounded-[16px]">
      <div className=" max-w-[160px] md:max-w-[270px]">
        <Image src={briogeLogo} alt="briogeLogo" />
      </div>
      <p className=" text-sm lg:text-lg ">
        Here you can contribute to the liquidity pool for the SquidGrow ethereum
        launch.
      </p>
      <h2 className="text-sm lg:text-lg !font-bold">
        Max Contribution: $200k | 100 ETH <br /> 5% Discount
      </h2>
      <div>
        <h3 className=" text-lg pb-2 text-muted">
          Enter the amount of ETH you want to contribute
        </h3>
        <div className=" space-y-4 relative">
          <div className=" md:rounded-none rounded-xl bg-extraDark flex justify-center h-[83px] md:h-[104px]">
            <input
              className="  w-full bg-extraDark text-sm md:text-lg placeholder:text-muted  rounded px-4 py-5 focus:outline-none outline-none"
              type="text"
              placeholder="0.000"
            />
          </div>
        </div>
      </div>

      {/* button collect wallet */}

      <div className="  flex justify-start">
        <ConnectWalletBtn />
      </div>
      {/* footer */}
      <div className=" ">
        <div className=" text-muted">
          *You will not be able to transfer tokens until Liquidity is added
        </div>
      </div>
    </div>
  );
};

export default ConnectWallect;
