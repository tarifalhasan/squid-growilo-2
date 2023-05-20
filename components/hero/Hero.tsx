import React from 'react';
import Container from '../Container';
import ConnectWallect from '../ConnectWallect';
import Image from 'next/image';
import heroImage from '../../assets/images/hero.svg';

import Footer from './Footer';
const Hero = () => {
  return (
    <Container>
      <div className=" pt-10 lg:pt-16  flex flex-col gap-2 lg:gap-24 justify-between lg:flex-row ">
        {/* Connect Wallet */}
        <div className=" basis-1/2 order-first lg:order-last">
          <ConnectWallect />
        </div>
        {/*  hero content for Desktop*/}

        <div className=" basis-1/2  ">
          <div className="hidden md:block">
            <Image className=" block mx-auto" src={heroImage} alt="heroImage" />
          </div>
          <div className=" mt-4   bg-secondary py-3 px-3 border border-[#57585A] rounded-lg">
            <p className=" text-[9px] md:text-sm !font-semibold">
              Contract Address:{' '}
              <a
                href="https://etherscan.io/token/0x17cb1b6623cef547f16e4c125ebef6ec240ec12a"
                target="_blank"
                rel="noopener noreferrer"
              >
                0x17cb1b6623cef547f16e4c125ebef6ec240ec12a
              </a>
            </p>
          </div>
        </div>

        {/* footer content for mobile */}
        <Footer />
      </div>
    </Container>
  );
};

export default Hero;
