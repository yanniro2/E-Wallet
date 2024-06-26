import React from 'react';
import BitcoinIcon from '../assets/vendor-bitcoin.svg';
import BlockchainIcon from '../assets/vendor-blockchain.svg';
import EvilIcon from '../assets/vendor-evil.svg';
import NinjaIcon from '../assets/vendor-ninja.svg';
import ChipDark from '../assets/chip-dark.svg';
import ChipLight from '../assets/chip-light.svg';
// import './card-form.css';

const CardPreview = ({ cardDetails }) => {
  // Function to get the corresponding SVG based on the vendor
  const getVendorIcon = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return BitcoinIcon;
      case 'block-chain-inc':
        return BlockchainIcon;
      case 'evil-corp':
        return EvilIcon;
      case 'ninja-bank':
        return NinjaIcon;
      default:
        return null; // Return null or a default icon if the vendor doesn't match
    }
  };

  // Function to get the corresponding chip based on the vendor
  const getVendorChip = (vendor) => {
    switch (vendor) {
      case 'bitcoin-inc':
        return ChipDark;
      case 'block-chain-inc':
      case 'evil-corp':
      case 'ninja-bank':
        return ChipLight;
      default:
        return null; // Return null or a default chip if the vendor doesn't match
    }
  };

  // Function to determine card color based on the vendor
  const getCardColorClass = (vendor) => {
    if (!vendor) return '';
    return `color-${vendor}`;
  };

  // Use the getVendorIcon and getVendorChip functions to set the src for images
  const chipImageSrc = getVendorChip(cardDetails.vendor);
  const vendorIconSrc = getVendorIcon(cardDetails.vendor);
  const cardColorClass = getCardColorClass(cardDetails.vendor);

  return (
    <div className="w-full h-max flex items-center flex-col gap-3">
      <p className="uppercase font-semibold text-gray">New card</p>
      <div className="bg-[#0000001A] w-full h-max flex p-3 drop-shadow-xl rounded-xl flex-col gap-5">
        <div className="w-full justify-between flex items-center">
          {BitcoinIcon && (
            <img src={BitcoinIcon} alt="Vendor Icon" width={25} height={25} />
          )}
          {chipImageSrc && <img src={chipImageSrc} width={25} height={25} />}
          {/* <img src={ChipDark} alt="img" width={50} height={50} className />
          <img src={BitcoinIcon} alt="img" width={25} height={25} className /> */}
        </div>
        <div className="card-no">
          {cardDetails.number || "•••• •••• •••• ••••"}
          {/* 1234 5678 1234 3456 */}
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col">
            <span className="label-2">CARDHOLDER NAME</span>
            <span>{cardDetails.holder || "FIRSTNAME LASTNAME"}</span>
          </div>
          <div className="flex flex-col">
            <span className="label-2">VALID THRU</span>
            <span>{cardDetails.expiry || "MM/YY"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
