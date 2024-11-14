import Div from '../SimpleComponents/Div';
import PoolInfo from './PoolInfo';
import SwapTable from './SwapTable';
import themeTokenInfo from './theme';
import etherscan from '../../assets/etherscan-logo.webp';
import { formatNumber, shortNumber } from '../../utils/helpers/numberFormat';
import { useState } from 'react';
import { Tabs, Tab } from '@mui/material';

export default function General(props: any) {
  const { token } = props;
  const [selectedTab, setSelectedTab] = useState(0);

  // Handler for tab change
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  // Define the tab data for each period, including main label and price change with conditional color
  const tabData = [
    { label: '5m', change: token.price5mChange, data: token.txns.m5, volume: token.volume.m5 },
    { label: '1h', change: token.price1hChange, data: token.txns.h1, volume: token.volume.h1 },
    { label: '6h', change: token.price6hChange, data: token.txns.h6, volume: token.volume.h6 },
    { label: '24h', change: token.price24hChange, data: token.txns.h24, volume: token.volume.h24 },
  ];

  const renderDescription = () => {
    return (
      <Div className="token_info__description">
        <Div className="token_info__description__title" sx={themeTokenInfo.token_info__description.title}>
          {token.name} ({token.symbol})
        </Div>
        <Div className="token_info__description__text" sx={themeTokenInfo.token_info__description.description}>
          {token.description ? token.description : 'No description'}
        </Div>
      </Div>
    );
  };

  return (
    <>
      <div className="my-2 md:my-3">
        <div className="bg-[#100113] border-fuchsia-800 flex flex-col gap-3 border-[0.8px] px-1.5 pt-2 pb-2.5 sm:px-2 sm:pt-2.5 sm:pb-3 md:border-0 md:pb-0">
          <div className="flex items-end bg-[#230a28] px-1 py-1">
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="price change tabs">
              {tabData.map((tab, index) => (
                <Tab
                  key={index}
                  label={
                    <div className={`text-center ${selectedTab === index ? 'text-seedex' : 'text-white'}`}>
                      <span>{tab.label}</span>
                      <br />
                      <span
                        className={`text-${tab.change >= 0 ? 'green-500' : 'red-500'} text-xs font-medium`}
                      >
                        {tab.change >= 0 ? `+${tab.change}%` : `${tab.change}%`}
                      </span>
                    </div>
                  }
                  className="!p-0"
                  sx={{
                    backgroundColor: selectedTab === index ? '#100113' : 'transparent',
                    transition: 'background-color 0.3s ease',
                  }}
                />
              ))}
            </Tabs>
          </div>

          <div>
            {tabData.map((tab, index) => (
              <div key={index} role="tabpanel" hidden={selectedTab !== index}>
                {selectedTab === index && (
                  <>
                    {/* Displaying token data based on the selected time period */}
                    <div className="my-1 flex gap-3">
                      <div className="flex flex-col items-start justify-center gap-3 md:px-1.5">
                        <div className="font-inter flex items-center gap-1.5 text-[13px] text-white sm:text-sm">
                          <p className="text-[#9499a9]">TX Count: </p>
                          <p className="font-medium">{tab.data?.buys + tab.data?.sells || 'N/A'}</p>
                        </div>
                        <div className="font-inter flex items-center gap-1.5 text-[13px] text-white sm:text-sm">
                          <p className="text-[#9499a9]">Vol: </p>
                          <p className="font-medium">{shortNumber(tab.volume) || 'N/A'}</p>
                        </div>
                      </div>

                      <div className="bg-blue-800 flex h-full w-[0.8px]"></div>

                      <div className="flex flex-1 flex-col gap-2 md:px-1.5">
                        <div className="flex items-center justify-between px-1">
                          <div className="flex flex-col gap-1">
                            <p className="text-seedex font-inter text-[13px] sm:text-sm">Buys</p>
                            <p className="font-inter text-[13px] font-medium text-white sm:text-sm">
                              {tab.data?.buys || 'N/A'}
                            </p>
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-seedex font-inter text-[13px] sm:text-sm">Sells</p>
                            <p className="font-inter text-[13px] font-medium text-white sm:text-sm">
                              {tab.data?.sells || 'N/A'}
                            </p>
                          </div>
                        </div>

                        {/* Buy/Sell indicator bar */}
                        <div className="flex items-center gap-0.5">
                          {(() => {
                            const totalTransactions = (tab.data?.buys || 0) + (tab.data?.sells || 0);
                            const buyPercentage = totalTransactions ? (tab.data?.buys / totalTransactions) * 100 : 50;
                            const sellPercentage = totalTransactions ? (tab.data?.sells / totalTransactions) * 100 : 50;

                            return (
                              <>
                                <div
                                  className="bg-green-600 h-[3px] rounded-tl-full rounded-bl-full"
                                  style={{ width: `${buyPercentage}%` }}
                                ></div>
                                <div
                                  className="bg-red-500 h-[3px] rounded-tr-full rounded-br-full"
                                  style={{ width: `${sellPercentage}%` }}
                                ></div>
                              </>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
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
