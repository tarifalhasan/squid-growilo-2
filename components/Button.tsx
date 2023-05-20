import React from 'react';

import connectWalletBtn from '../assets/images/CollectWalletButton.svg';
import Image from 'next/image';
const Button = () => {
  return (
    <button className=" py-3">
      <Image src={connectWalletBtn} alt="" />
    </button>
  );
};

export default Button;
