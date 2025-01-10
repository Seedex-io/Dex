import React, { useEffect, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import LeftNavbar from '../../components/LeftNavbar';
import SearchBar from '../../components/SearchBar';
import { Collapse, Alert, AlertTitle } from '@mui/material';
import { fetchWhaleTrades } from '../../api/getTransactions';
import NoLogo from '../../assets/n0n3.png';
import Etherscan from '../../assets/etherscan-logo.webp'
import CopyText from '../../components/CopyText';

// Import DEX logos
import uniswap from '../../assets/dex/uniswap.svg';
import balancer from '../../assets/dex/balancer.svg';
import inch from '../../assets/dex/1inch.svg';
import kyber from '../../assets/dex/kyberswap.svg';
import sushiswap from '../../assets/dex/sushiswap.svg';
import zrx from '../../assets/dex/zerox_exchange.svg';
import pancakeswap from '../../assets/dex/pancakeswap.svg';
import curve from '../../assets/dex/curve.svg';
import SmallLoading from '../../components/SmallLoading';
import { commaFormatted } from '../../utils/helpers/numberFormat';
import { getdexLogo } from '../../utils/dexs';
import { CalendarMonth } from '@mui/icons-material';

// Define logo mapping
const dexLogoMap: Record<string, string> = {
  uniswap,
  balancer,
  "1inch": inch,
  kyber,
  sushiswap,
  "Zerox Exchange": zrx,
  pancakeswap,
  curve
};

interface DexTrade {
  timeInterval: { minute: string };
  transaction: { txFrom: any; hash: string };
  baseAmount: number;
  baseCurrency: { name: any; address: string; symbol: string };
  quoteAmount: number;
  quoteCurrency: { name: any; symbol: string };
  tradeAmount: number;
  exchange: { fullName: string; address: { address: string } };
  tradeType: 'Buy' | 'Sell';
}

const chains = ['ethereum', 'bsc', 'polygon', 'arbitrum'];
const tradeSizes = ['10000', '50000', '100000', '500000', '1000000'];

export default function WhaleTrackerPage(props: any) {
  const { theme, mobile } = props;
  const [honeypot, setHoneypot] = useState<boolean>(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [dexTrades, setDexTrades] = useState<DexTrade[]>([]);
  const [sortBy, setSortBy] = useState<'timeInterval.minute' | 'tradeAmount'>('timeInterval.minute');
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedTradeSize, setSelectedTradeSize] = useState<string>('10000');
  const [showRelativeTime, setShowRelativeTime] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const trades = await fetchWhaleTrades();
      setDexTrades(trades);
      setIsFetching(false);
    };
    fetchData();
  }, []);

  // Sorting logic
  useEffect(() => {
    const sortedTrades = [...dexTrades];
    if (sortBy === 'timeInterval.minute') {
      sortedTrades.sort((a, b) => new Date(b.timeInterval.minute).getTime() - new Date(a.timeInterval.minute).getTime());
    } else if (sortBy === 'tradeAmount') {
      sortedTrades.sort((a, b) => b.tradeAmount - a.tradeAmount);
    }
    setDexTrades(sortedTrades);
  }, [sortBy]);

  const filteredTrades = dexTrades.filter(
    (trade) => trade.tradeAmount >= Number(selectedTradeSize)
  );

  const formatNumber = (num: number) => {
    if (num < 1000) {
      return num.toFixed(2);
    } else if (num >= 1000 && num < 1000000) {
      return `${(num / 1000).toFixed(0)}K`;
    } else if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    return num.toString();
  };

  // Get the DEX logo based on the exchange name
  const getDexLogo = (dexName: string): string => {
    const lowerDexName = dexName.toLowerCase();
    const matchedKey = Object.keys(dexLogoMap).find((key) =>
      lowerDexName.includes(key)
    );
    return matchedKey ? dexLogoMap[matchedKey] : NoLogo;
  };

  const getRelativeTime = (dateString: string): string => {
    const now = new Date();
    const tradeDate = new Date(dateString);
    const diffMs = now.getTime() - tradeDate.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (months > 0) return `${months} month${months > 1 ? 's' : ''}`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''}`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''}`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    return `${seconds} second${seconds > 1 ? 's' : ''}`;
  };

  // Format time based on the toggle state
  const formatTime = (date: string) => {
    const tradeDate = new Date(date);

    // If showRelativeTime is false, format as "25 Nov, 01:51 AM"
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true
    };

    return showRelativeTime
      ? getRelativeTime(date)
      : tradeDate.toLocaleString('en-GB', options).replace(',', '');
  };

  return (
    <div className="h-screen max-h-screen text-white">
      <BrowserView>
        <LeftNavbar onToggle={(open) => setIsNavbarOpen(open)} />
      </BrowserView>
      <div className={`${isNavbarOpen ? 'ml-56' : 'ml-[65px]'}`}>
        <Collapse in={honeypot}>
          <Alert severity="error" onClose={() => setHoneypot(false)}>
            <AlertTitle>Honeypot Detected</AlertTitle>
            Do not send any funds to this address.
          </Alert>
        </Collapse>
        <SearchBar theme={theme} />
        <div className='flex flex-1 flex-col px-1.5 pt-1.5 pb-1 md:px-6 md:pb-2 md:pt-6'>
          {/* filters */}
          <div className="flex flex-1 flex-col">
            <div className="flex items-center justify-between">
              <div className='tabs bg-light-seedex hidden w-fit px-1 py-1 md:flex'>
                <button className="h-8 px-4 items-center justify-center font-azeret rounded-none text-sm uppercase font-medium bg-dark-seedex text-seedex">
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-[inherit]">Large Trades</p>
                  </div>
                </button>
                <button className="h-8 px-4 items-center justify-center font-azeret rounded-none text-sm uppercase font-medium text-seedex">
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-[inherit]">Large Trades</p>
                  </div>
                </button>
              </div>
              <div className="flex w-full items-center gap-1.5 md:w-auto md:gap-2">
                <div className="relative bg-light-seedex">
                  {/* Dropdown button */}
                  <button
                    className="border-rebrand-blue font-inter flex h-[34px] w-[10.6rem] flex-1 items-center gap-2 rounded border bg-transparent px-2 text-[13px] capitalize text-white md:h-[42px] md:flex-auto md:border-0"
                    aria-describedby="popup-12"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Size ($): <span className="font-semibold">&gt; {selectedTradeSize}</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-auto transition duration-500"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {isDropdownOpen && (
                    <ul className="absolute z-50 mt-1 w-full rounded bg-dark-seedex">
                      {tradeSizes.map((trade) => (
                        <li
                          key={trade}
                          onClick={() => {
                            setSelectedTradeSize(trade);
                            setIsDropdownOpen(false);
                          }}
                          className="cursor-pointer px-3 py-2 hover:bg-light-seedex text-[14px]"
                        >
                          {`Size >= $${trade}`}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Whale Trades Table */}
          <div className="overflow-x-auto max-h-[80vh] mt-2">
            <table className="min-w-full border-collapse border border-fuchsia-950">
              <thead className="bg-tab-header-seedex sticky -top-[1px] z-10 grid">
                <tr className="text-center grid grid-cols-[minmax(50px,1.5fr),80px,minmax(80px,1fr),minmax(80px,1fr),minmax(70px,0.9fr),minmax(100px,1fr),80px] md:grid-cols-[1.5fr,80px,1fr,1fr,0.9fr,1fr,80px]">
                  <th className="px-4 py-3 text-left text-sm font-semibold border border-fuchsia-950">
                    Token Swapped
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">
                    Type
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">
                    Maker
                  </th>
                  <th
                    className="px-4 py-3 text-sm font-semibold border border-fuchsia-950 hover:cursor-pointer"
                    onClick={() => setShowRelativeTime(!showRelativeTime)}
                  >
                    Age
                    <CalendarMonth className="!w-5 !h-5 ml-1" />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold border border-fuchsia-950">
                    Exchange
                  </th>
                  <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">
                    Txn
                  </th>
                </tr>
              </thead>
              <tbody className='flex flex-col flex-1'>
                {isFetching && <SmallLoading />}
                {filteredTrades.map((trade, index) => (
                  <tr
                    key={index}
                    className="hover:opacity-70 bg-light-seedex transition-colors duration-200 text-center  grid grid-cols-[minmax(50px,1.5fr),80px,minmax(80px,1fr),minmax(80px,1fr),minmax(70px,0.9fr),minmax(100px,1fr),80px] md:grid-cols-[1.5fr,80px,1fr,1fr,0.9fr,1fr,80px]"
                  >
                    <td className="px-4 py-3 border border-fuchsia-950">
                      <a
                        href={`https://etherscan.io/token/${trade.baseCurrency.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2"
                      >
                        <div className="relative w-10 h-10">
                          <img
                            src={`https://www.iconaves.com/token_icon/eth/${trade.baseCurrency.address.toLowerCase()}.png`}
                            alt={NoLogo}
                            className="h-8 w-8 rounded-full border-2 md:h-10 md:w-10 border-fuchsia-600"
                          />
                          <img
                            src={getdexLogo(trade.exchange.address.address)}
                            alt="chain icon"
                            className="w-4 h-4 rounded-full absolute bottom-0 right-0 bg-white p-[1px]"
                          />

                        </div>
                        <div className="flex flex-col md:gap-0.5">
                          <div className="flex items-center gap-2">
                            <p className="one-line text-[13px] font-bold text-white">{trade.baseCurrency.symbol}</p>
                            <CopyText text={trade.baseCurrency.address} />
                          </div>
                          <p className="one-line text-rebrand-lighter-gray text-[13px]">{trade.baseCurrency.name}</p>
                        </div>
                      </a>
                    </td>
                    <td className={`px-4 py-3 border border-fuchsia-950 ${trade.tradeType === 'Buy' ? 'text-green-400' : 'text-red-400'}`}>
                      {trade.tradeType}
                    </td>
                    <td className={`px-4 py-3 border border-fuchsia-950 ${trade.tradeType === 'Buy' ? 'text-green-400' : 'text-red-400'}`}>
                      ${commaFormatted(trade.tradeAmount)}
                    </td>
                    <td className="px-4 py-3 border border-fuchsia-950">
                      <a
                        href={`https://etherscan.io/address/${trade.transaction.txFrom.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {trade.transaction.txFrom.address.substring(0, 6)}...{trade.transaction.txFrom.address.slice(-5)}
                      </a>
                    </td>
                    <td className="px-4 py-3 border border-fuchsia-950">
                      {formatTime(trade.timeInterval.minute)}
                    </td>
                    <td className="px-4 py-3 border border-fuchsia-950">
                      <span className="flex items-center gap-2">
                        <img
                          src={getDexLogo(trade.exchange.fullName)}
                          alt={trade.exchange.fullName}
                          className="h-6 w-6 rounded-full"
                        />
                        {trade.exchange.fullName}
                      </span>
                    </td>
                    <td className="px-4 py-3 border border-fuchsia-950">
                      <a
                        href={`https://etherscan.io/tx/${trade.transaction.hash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <img
                          src={Etherscan}
                          alt={trade.baseCurrency.symbol}
                          onError={(e) => {
                            const imgElement = e.target as HTMLImageElement;
                            imgElement.onerror = null;
                            imgElement.src = NoLogo;
                          }}
                          className="h-4 w-4 rounded-full border-2 md:h-5 md:w-5 border-blue-400"
                        />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
