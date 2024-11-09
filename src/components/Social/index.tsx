import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import './styles.css';
import {
  Facebook,
  Instagram,
  Language,
  LinkedIn,
  Reddit,
  YouTube,
} from '@mui/icons-material';
import etherscanIcon from '../../assets/scanIcon/etherscan.png';
import bscscanIcon from '../../assets/scanIcon/bscscan.png';
import polygonscanIcon from '../../assets/scanIcon/polygonscan.svg';
import avaxtraceIcon from '../../assets/scanIcon/avaxscan.svg';
import solanaIcon from '../../assets/scanIcon/solana.svg';

export default function Social(props: any) {
  const { socialLinks, address, chain } = props;
  const scanIcon = () => {
    if (!address || !chain) {
      return null;
    }
    switch (chain) {
      case 'bsc':
        return (
          <a
            href={`https://bscscan.com/address/${address}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={bscscanIcon}
              className="iconscan"
              alt="bscscan"
            />
          </a>
        );
      case 'ether':
        return (
          <a
            href={`https://etherscan.io/address/${address}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={etherscanIcon}
              className="iconscan"
              alt="etherscan"
            />
          </a>
        );
      case 'polygon':
        return (
          <a
            href={`https://polygonscan.com/address/${address}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={polygonscanIcon}
              className="iconscan"
              alt="polygonscan"
            />
          </a>
        );
      case 'avax':
        return (
          <a
            href={`https://cchain.explorer.avax.network/address/${address}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={avaxtraceIcon}
              className="iconscan"
              alt="avaxscan"
            />
          </a>
        );
      case 'sol':
        return (
          <a
            href={`https://explorer.solana.com/address/${address}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={solanaIcon}
              className="iconscan"
              alt="solscan"
            />
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="socialLinks">
      {scanIcon()}
      {socialLinks?.website && (
        <a
          href={socialLinks?.website}
          target="_blank"
          rel="noreferrer"
        >
          <Language
            style={{
              color: '#818ea3',
            }}
            fontSize="small"
          />
        </a>
      )}
      {socialLinks?.twitter && (
        <a
          href={socialLinks?.twitter}
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon
            style={{
              color: '#818ea3',
            }}
            fontSize="small"
          />
        </a>
      )}
      {socialLinks?.telegram && (
        <a
          href={socialLinks?.telegram}
          target="_blank"
          rel="noreferrer"
        >
          <TelegramIcon
            style={{
              color: '#818ea3',
            }}
            fontSize="small"
          />
        </a>
      )}

      {socialLinks?.reddit && (
        <a
          href={socialLinks?.reddit}
          target="_blank"
          rel="noreferrer"
        >
          <Reddit style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}

      {socialLinks?.youtube && (
        <a
          href={socialLinks?.youtube}
          target="_blank"
          rel="noreferrer"
        >
          <YouTube style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}

      {socialLinks?.facebook && (
        <a
          href={socialLinks?.facebook}
          target="_blank"
          rel="noreferrer"
        >
          <Facebook style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}

      {socialLinks?.instagram && (
        <a
          href={socialLinks?.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <Instagram style={{ color: '#818ea3' }} fontSize="medium" />
        </a>
      )}

      {socialLinks?.linkedin && (
        <a
          href={socialLinks?.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}
    </div>
  );
}
