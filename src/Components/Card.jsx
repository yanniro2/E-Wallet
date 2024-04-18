// Card.jsx
import React from "react";
import BitcoinIcon from "../assets/vendor-bitcoin.svg";
import BlockchainIcon from "../assets/vendor-blockchain.svg";
import EvilIcon from "../assets/vendor-evil.svg";
import NinjaIcon from "../assets/vendor-ninja.svg";
import ChipDark from "../assets/chip-dark.svg";
import ChipLight from "../assets/chip-light.svg";

const getVendorClass = (vendor) => {
  return `card color-${vendor.replace(/\s+/g, "-").toLowerCase()}`;
};

const Card = ({ cardData, onClick, active }) => {
  const vendorIcon = (vendor) => {
    switch (vendor) {
      case "bitcoin-inc":
        return BitcoinIcon;
      case "block-chain-inc":
        return BlockchainIcon;
      case "evil-corp":
        return EvilIcon;
      case "ninja-bank":
        return NinjaIcon;
      default:
        return "";
    }
  };

  const vendorChip = (vendor) => {
    return vendor === "bitcoin-inc" ? ChipDark : ChipLight;
  };

  // Add the 'active' class if the card is active
  const cardClass = getVendorClass(cardData.vendor) + (active ? "active" : "");

  return (
    <div className="w-full h-max flex items-center flex-col gap-3">
      <p className="uppercase font-semibold text-gray">Active card</p>
      <div
        // className={cardClass}
        onClick={onClick}
        className="bg-[orange] w-full h-max flex p-3 drop-shadow-xl rounded-xl flex-col gap-3">
        <div className="w-full justify-between flex items-center">
          <img
            src={vendorChip(cardData.vendor)}
            alt="Chip"
            width={25}
            height={25}
          />
          <img
            src={vendorIcon(cardData.vendor)}
            alt={`${cardData.vendor} Icon`}
          />
        </div>

        <div className="card-no">{cardData.number}</div>
        <div className="w-full flex items-center justify-between">
          <div className="flex flex-col">
            <span className="label-2">CARDHOLDER NAME</span>
            <span>{cardData.holder}</span>
          </div>
          <div className="flex flex-col">
            <span>VALID THRU</span>
            <span>{cardData.expiry}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
