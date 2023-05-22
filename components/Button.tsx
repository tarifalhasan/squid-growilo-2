import React from 'react';

import connectWalletBtn from '../assets/images/CollectWalletButton.svg';
import navButton from '../assets/images/navButton.svg';
import Image from 'next/image';
export const ConnectWalletBtn = () => {
  return (
    <div>
      <button className="w-full max-h-[90px] relative h-full flex flex-col justify-center items-center">
        <Image
          src={connectWalletBtn}
          className="relative z-20 w-full h-full"
          alt="connectWalletBtn"
        />
        <span className="absolute !font-medium text-lg md:text-2xl z-30 w-full">
          Contribute
        </span>
      </button>
    </div>
  );
};

export const NavButton = () => {
  return (
    <button className="  relative flex flex-col justify-center items-center  h-full w-full ">
      <Image
        src={navButton}
        className=" relative z-20 w-full h-full  "
        alt="connectWalletBtn"
      />
      <span className="  !font-medium text-lg md:text-xl  absolute  z-50 ">
        Launch Dapp
      </span>
    </button>
  );
};
