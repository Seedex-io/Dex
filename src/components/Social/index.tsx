import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Facebook, Instagram, Language, LinkedIn, Reddit, YouTube } from '@mui/icons-material';
import etherscanIcon from '../../assets/scanIcon/etherscan.png';
import bscscanIcon from '../../assets/scanIcon/bscscan.png';
import polygonscanIcon from '../../assets/scanIcon/polygonscan.svg';
import avaxtraceIcon from '../../assets/scanIcon/avaxscan.svg';
import solanaIcon from '../../assets/scanIcon/solana.svg';
import './styles.css';

interface SocialLinks {
  homepage?: string;
  twitter_screen_name?: string;
  telegram_channel_identifier?: string;
  subreddit_url?: string;
  youtube?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  whitepaper?: string;
}

interface SocialProps {
  socialLinks: SocialLinks;
  address: string;
  chain: string;
}

const Social: React.FC<SocialProps> = ({ socialLinks, address, chain }) => {
  const scanIcon = () => {
    if (!address || !chain) {
      return null;
    }
    const explorers: Record<string, string> = {
      bsc: bscscanIcon,
      ether: etherscanIcon,
      polygon: polygonscanIcon,
      avax: avaxtraceIcon,
      sol: solanaIcon,
    };

    const explorerUrls: Record<string, string> = {
      bsc: `https://bscscan.com/address/${address}`,
      ether: `https://etherscan.io/address/${address}`,
      polygon: `https://polygonscan.com/address/${address}`,
      avax: `https://cchain.explorer.avax.network/address/${address}`,
      sol: `https://explorer.solana.com/address/${address}`,
    };

    const explorerIcon = explorers[chain];
    const explorerUrl = explorerUrls[chain];

    return explorerIcon && explorerUrl ? (
      <a href={explorerUrl} target="_blank" rel="noreferrer">
        <img src={explorerIcon} className="iconscan" alt={`${chain} explorer`} />
      </a>
    ) : null;
  };

  return (
    <div className="socialLinks">
      {scanIcon()}
      {socialLinks?.homepage && (
        <a href={socialLinks.homepage} target="_blank" rel="noreferrer">
          <Language style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}
      {socialLinks?.twitter_screen_name && (
        <a href={`https://twitter.com/${socialLinks.twitter_screen_name}`} target="_blank" rel="noreferrer">
          <TwitterIcon style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}
      {socialLinks?.telegram_channel_identifier && (
        <a href={`https://t.me/${socialLinks.telegram_channel_identifier}`} target="_blank" rel="noreferrer">
          <TelegramIcon style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}
      {socialLinks?.subreddit_url && (
        <a href={socialLinks.subreddit_url} target="_blank" rel="noreferrer">
          <Reddit style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}
      {socialLinks?.youtube && (
        <a href={socialLinks.youtube} target="_blank" rel="noreferrer">
          <YouTube style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}
      {socialLinks?.facebook && (
        <a href={socialLinks.facebook} target="_blank" rel="noreferrer">
          <Facebook style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}
      {socialLinks?.instagram && (
        <a href={socialLinks.instagram} target="_blank" rel="noreferrer">
          <Instagram style={{ color: '#818ea3' }} fontSize="medium" />
        </a>
      )}
      {socialLinks?.linkedin && (
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          <LinkedIn style={{ color: '#818ea3' }} fontSize="small" />
        </a>
      )}
    </div>
  );
};

export default Social;
