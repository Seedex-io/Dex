import Div from '../SimpleComponents/Div';
import PoolInfo from './PoolInfo';
import PriceChange from './PriceChange';
import SwapTable from './SwapTable';
import themeTokenInfo from './theme';
import etherscan from '../../assets/etherscan-logo.webp';
import { formatNumber, shortNumber } from '../../utils/helpers/numberFormat';
import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';

export default function General(props: any) {
  const { token } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  // Handler for tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Define the tab data for each period
  const tabData = [
    { label: '5m', change: token.price5mChange },
    { label: '1h', change: token.price1hChange },
    { label: '6h', change: token.price6hChange },
    { label: '24h', change: token.price24hChange },
  ];

  const renderDescription = () => {
    return (
      <Div className="token_info__description">
        <Div
          className="token_info__description__title"
          sx={themeTokenInfo.token_info__description.title}
        >
          {token.name} ({token.symbol})
        </Div>
        <Div
          className="token_info__description__text"
          sx={themeTokenInfo.token_info__description.description}
        >
          {token.description ? token.description : 'No description'}
        </Div>
      </Div>
    );
  };

  return (
    <>
      <div className="">
        <div className="">
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="price change tabs">
              {tabData.map((tab, index) => (
                <Tab key={index} label={tab.label} />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ p: 3 }}>
          {tabData.map((tab, index) => (
            <div
              key={index}
              role="tabpanel"
              hidden={selectedTab !== index}
            >
              {selectedTab === index && (
                <PriceChange change={tab.change} tm={tab.label} />
              )}
            </div>
          ))}
          </Box>
        </div>
        <div className='border-[#651e6e] flex items-center justify-between border-b-[0.8px] py-2 px-1'>
          <p className='font-inter text-seedex text-sm'>Pair age</p>
          <p className='font-azeret text-sm text-white'>{token.creationTime} </p>
        </div>
        <div className='border-[#651e6e] flex items-center justify-between border-b-[0.8px] py-2 px-1'>
          <p className='font-inter text-seedex text-sm'>Pooled {token.baseToken.symbol}</p>
          <p className='font-azeret text-sm text-white'>{shortNumber(token.reserve)} </p>
        </div>
        <div className='border-[#651e6e] flex items-center justify-between border-b-[0.8px] py-2 px-1'>
          <p className='font-inter text-seedex text-sm'>Pooled {token.quoteToken.symbol}</p>
          <p className='font-azeret text-sm text-white'>{formatNumber(token.reserveRef)} </p>
        </div>
        <div className='border-[#651e6e] flex items-center justify-between border-b-[0.8px] py-2 px-1'>
          <p className='font-inter text-seedex text-sm'>{token.baseToken.symbol}</p>
          <div className="flex gap-2">
            {/* Address display button */}
            <button className="font-azeret bg-[#220a26] border-[#651e6e] flex items-center gap-1.5 border px-2 py-0.5 text-xs font-semibold text-white">
              <p>{token.baseToken.address.slice(0, 6)}...{token.baseToken.address.slice(-6)}</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
              </svg>
            </button>

            {/* Etherscan link */}
            <a
              href={`https://etherscan.io/token/${token.baseToken.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-rebrand-button group flex items-center justify-center rounded-full"
            >
              <img
                src={etherscan}
                alt="Etherscan Logo"
                className="h-[16px] w-[16px] rounded-full"
              />
            </a>
          </div>
        </div>
        <div className='border-[#651e6e] flex items-center justify-between border-b-[0.8px] py-2 px-1'>
          <p className='font-inter text-seedex text-sm'>{token.quoteToken.symbol}</p>
          <div className="flex gap-2">
            {/* Address display button */}
            <button className="font-azeret bg-[#220a26] border-[#651e6e] flex items-center gap-1.5 border px-2 py-0.5 text-xs font-semibold text-white">
              <p>{token.quoteToken.address.slice(0, 6)}...{token.quoteToken.address.slice(-6)}</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
              </svg>
            </button>

            {/* Etherscan link */}
            <a
              href={`https://etherscan.io/token/${token.quoteToken.address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-rebrand-button group flex items-center justify-center rounded-full"
            >
              <img
                src={etherscan}
                alt="Etherscan Logo"
                className="h-[16px] w-[16px] rounded-full"
              />
            </a>
          </div>
        </div>
        <div className='border-[#651e6e] flex items-center justify-between border-b-[0.8px] py-2 px-1'>
          <p className='font-inter text-seedex text-sm'>Pair</p>
          <div className="flex gap-2">
            {/* Address display button */}
            <button className="font-azeret bg-[#220a26] border-[#651e6e] flex items-center gap-1.5 border px-2 py-0.5 text-xs font-semibold text-white">
              <p>{token.pairAddress.slice(0, 6)}...{token.pairAddress.slice(-6)}</p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
              </svg>
            </button>

            {/* Etherscan link */}
            <a
              href={`https://etherscan.io/address/${token.pairAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-rebrand-button group flex items-center justify-center rounded-full"
            >
              <img
                src={etherscan}
                alt="Etherscan Logo"
                className="h-[16px] w-[16px] rounded-full"
              />
            </a>
          </div>
        </div>
        <SwapTable token={token} />
        <PoolInfo token={token} />
        {/* <Score score={token.dextScore?.total} name={token.name} /> */}
        {renderDescription()}
      </div>
    </>
  );
}
