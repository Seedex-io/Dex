import React from 'react';
import ethscanIcon from '../../assets/scanIcon/etherscan.png';
import bscscanIcon from '../../assets/scanIcon/bscscan.png';
import polyscanIcon from '../../assets/scanIcon/polygonscan.svg';
import avaxscanIcon from '../../assets/scanIcon/avaxscan.svg';
import solscanIcon from '../../assets/scanIcon/solana.svg';
import './style.css';
export default function TokenScan(props: any) {
  const { address, chain } = props;

  const renderIcon = () => {
    switch (chain) {
      case 'bsc':
        return (
          <img src={bscscanIcon} className="iconscan" alt="bscscan" />
        );
      case 'ether':
        return (
          <img src={ethscanIcon} className="iconscan" alt="ethscan" />
        );
      case 'polygon':
        return (
          <img
            src={polyscanIcon}
            className="iconscan"
            alt="polyscan"
          />
        );
      case 'avax':
        return (
          <img
            src={avaxscanIcon}
            className="iconscan"
            alt="avaxscan"
          />
        );
      case 'solana':
        return (
          <img src={solscanIcon} className="iconscan" alt="solscan" />
        );

      default:
        return (
          <img src={ethscanIcon} className="iconscan" alt="ethscan" />
        );
    }
  };

  const renderLink = () => {
    switch (chain) {
      case 'bsc':
        return `https://bscscan.com/tx/${address}`;
      case 'ether':
        return `https://etherscan.io/tx/${address}`;
      case 'polygon':
        return `https://polygonscan.com/tx/${address}`;
      case 'avax':
        return `https://cchain.explorer.avax.network/tx/${address}`;
      case 'solana':
        return `https://explorer.solana.com/tx/${address}`;
      default:
        return `https://etherscan.io/tx/${address}`;
    }
  };

  return (
    <a
      href={renderLink()}
      target="_blank"
      rel="noreferrer"
      className="scanLink"
    >
      {renderIcon()}
    </a>
  );
}
