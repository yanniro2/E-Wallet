// Home.jsx
import React from "react";
import { useSelector } from "react-redux";
import Top from "../Components/Top";
import CardStack from "../Components/CardStack";
import { Link } from "react-router-dom";
import BitcoinIcon from "../assets/vendor-bitcoin.svg";
import BlockchainIcon from "../assets/vendor-blockchain.svg";
import EvilIcon from "../assets/vendor-evil.svg";
import NinjaIcon from "../assets/vendor-ninja.svg";
import ChipDark from "../assets/chip-dark.svg";
import ChipLight from "../assets/chip-light.svg";

const Home = () => {
  const cards = useSelector((state) => state.card.cards);
  const activeCardIndex = useSelector((state) => state.card.activeCardIndex);

  const getVendorIconPath = (vendor) => {
    switch (vendor) {
      case "bitcoin-inc":
        return { icon: BitcoinIcon, chip: ChipDark };
      case "ninja-bank":
        return { icon: NinjaIcon, chip: ChipLight };
      case "block-chain-inc":
        return { icon: BlockchainIcon, chip: ChipLight };
      case "evil-corp":
        return { icon: EvilIcon, chip: ChipLight };
      default:
        return { icon: "", chip: "" }; // Return an empty string or path to a default icon if you have one
    }
  };

  return (
    <div className="section">
      <Top title={"e-wallet"} />
      <CardStack
        cards={cards}
        activeCardIndex={activeCardIndex}
        getVendorIconPath={getVendorIconPath}
      />
      <Link to="/addcard" className="btn btn-primary">
        Add a New Card
      </Link>
    </div>
  );
};

export default Home;
