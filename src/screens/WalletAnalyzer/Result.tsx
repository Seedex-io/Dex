import React, { useEffect, useState } from 'react';
import { fetchWalletAnalytics } from '../../api/getTransactions';
import { calculateAge } from './utils';
import etherscanlogo from '../../assets/etherscan-logo.webp'
import etherlogo from '../../assets/chain/ether.png'
import NoLogo from '../../assets/n0n3.png'

interface ResultPageProps {
  address: string;
}

const Results: React.FC<ResultPageProps> = ({ address }) => {
  const [allTrades, setAllTrades] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [currentNetwork, setCurrentNetwork] = useState<string>('bsc');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const trades = await fetchWalletAnalytics(address, currentNetwork);
        setAllTrades(trades);
        console.log(trades);
        setError(trades.length === 0 ? 'No trades found for this address.' : null);
      } catch (err) {
        setError('Failed to fetch wallet analytics. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [address, currentNetwork]);

  if (loading) {
    return (
      <div className="absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center px-4 md:p-14">
        <div className="text-light-seedex text-lg font-semibold flex flex-col items-center mt-8">
          <div className="w-16 h-16 rounded-full border-t-2 border-fuchsia-500 animate-spin mb-4"></div>
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center px-4 md:p-14">
        <p className="text-red-500 text-lg mt-8 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-1 flex-col gap-1 px-1.5 pb-1 pt-2 sm:gap-3 md:px-6 md:pb-2 md:pt-6'>
        {/* Header */}
        <div className="flex w-full flex-col items-center justify-between sm:flex-row">
          <div className="border-fuchsia-500 mb-2 flex w-full items-center gap-2 border-b pb-2 sm:mb-0 sm:w-fit sm:gap-3 sm:border-b-0 sm:pb-0">
            <p className="font-azeret text-seedex one-line text-base tracking-tight sm:text-xl sm:tracking-normal">
              <span className="hidden text-base font-semibold md:inline">{address.substring(0, 5)}...{address.substring(address.length - 5)}</span>
              <span className="text-base font-semibold md:hidden">..{address.substring(address.length - 5)}</span>
            </p>
            <button
              title="Copy address"
              className="bg-light-seedex group rounded-full p-[10px] sm:p-3"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="transform text-base text-white opacity-70 duration-200 group-hover:opacity-100 sm:text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
              </svg>
            </button>
            <button
              id="WALLET_WATCHLIST_BUTTON"
              title="Save Wallet"
              className="bg-light-seedex group rounded-full p-[10px] sm:p-3"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="transform text-base text-white opacity-70 duration-200 group-hover:opacity-100 sm:text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z" />
              </svg>
            </button>
            <button
              title="Edit address"
              className="bg-light-seedex group rounded-full p-[10px] sm:p-3"
              aria-describedby="popup-33"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="transform text-base text-white opacity-70 duration-200 group-hover:opacity-100 sm:text-lg"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z" />
              </svg>
            </button>
            <div className="ml-auto flex items-center gap-2 sm:ml-0 md:gap-3">
              <a
                href="https://t.me/DexCheckWalletBot"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-light-seedex group rounded-full p-[10px] sm:p-3"
                title="Subscribe for Alerts"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  className="transform text-base text-white opacity-70 duration-200 group-hover:opacity-100 sm:text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z" />
                </svg>
              </a>
              <div className="flex min-w-fit items-center gap-2 md:gap-3">
                <a
                  href={`https://etherscan.io/address/${address}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-light-seedex group rounded-full p-[10px] sm:p-3"
                >
                  <img
                    src={etherscanlogo}
                    alt=""
                    className="h-[16px] w-[16px] rounded-full sm:h-[18px] sm:w-[18px]"
                  />
                </a>
              </div>
              <div className="pointer ml-1.5 h-2 w-2 rounded-full animate-ping-2s bg-green-500" />
            </div>
          </div>
          <div className="flex w-full flex-1 items-center justify-end gap-2 md:gap-3">
            <div className="hidden flex-wrap items-center gap-1.5 md:flex">
              <div className="relative h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]">
                <div className="bg-light-seedex absolute inset-0 rounded-full">
                  <svg
                    className="CircularProgressbar "
                    viewBox="0 0 100 100"
                    data-test-id="CircularProgressbar"
                  >
                    <path
                      className="CircularProgressbar-trail"
                      d="
M 50,50
m 0,-49
a 49,49 0 1 1 0,98
a 49,49 0 1 1 0,-98
    "
                      strokeWidth={2}
                      fillOpacity={0}
                      style={{
                        stroke: "transparent",
                        strokeDasharray: "307.876px, 307.876px",
                        strokeDashoffset: 0
                      }}
                    />
                    <path
                      className="CircularProgressbar-path"
                      d="
M 50,50
m 0,-49
a 49,49 0 1 1 0,98
a 49,49 0 1 1 0,-98
    "
                      strokeWidth={2}
                      fillOpacity={0}
                      style={{
                        stroke: "rgb(0, 240, 255)",
                        strokeDasharray: "307.876px, 307.876px",
                        strokeDashoffset: 0
                      }}
                    />
                  </svg>
                </div>
                <button className="absolute inset-0 z-10 rounded-full bg-transparent p-[8px] sm:p-[11px]">
                  <img
                    src={etherlogo}
                    alt="eth"
                    className="h-[16px] w-[16px] rounded-full sm:h-[18px] sm:w-[18px]"
                  />
                </button>
              </div>
              <div className="relative h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]">
                <div className="bg-light-seedex absolute inset-0 rounded-full" />
                <button className="absolute inset-0 z-10 rounded-full bg-transparent p-[8px] sm:p-[11px]">
                  <img
                    src="/assets/images/bnb_chain.png"
                    alt="bsc"
                    className="h-[16px] w-[16px] rounded-full sm:h-[18px] sm:w-[18px]"
                  />
                </button>
              </div>
              <div className="relative h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]">
                <div className="bg-light-seedex absolute inset-0 rounded-full" />
                <button className="absolute inset-0 z-10 rounded-full bg-transparent p-[8px] sm:p-[11px]">
                  <img
                    src="/assets/images/polygon.png"
                    alt="polygon"
                    className="h-[16px] w-[16px] rounded-full sm:h-[18px] sm:w-[18px]"
                  />
                </button>
              </div>
              <div className="relative h-[32px] w-[32px] sm:h-[40px] sm:w-[40px]">
                <div className="bg-light-seedex absolute inset-0 rounded-full" />
                <button className="absolute inset-0 z-10 rounded-full bg-transparent p-[8px] sm:p-[11px]">
                  <img
                    src="/assets/images/kcc.png"
                    alt="kcc"
                    className="h-[16px] w-[16px] rounded-full sm:h-[18px] sm:w-[18px]"
                  />
                </button>
              </div>
            </div>
            <div className="flex w-[4rem] items-center md:hidden">
              <button
                className="relative flex min-w-fit items-center gap-1.5 text-white"
                aria-describedby="popup-39"
              >
                <div className="bg-light-seedex border-rebrand-accent rounded-full border-[0.8px] p-[8px]">
                  <img
                    src="/assets/images/eth.png"
                    alt="eth"
                    className="h-[16px] w-[16px] rounded-full sm:h-[18px] sm:w-[18px]"
                  />
                </div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                </svg>
                <div className="text-rebrand-blue bg-rebrand-nav absolute -top-0.5 right-3.5 flex h-3.5 w-3.5 items-center justify-center rounded-full text-[10px] font-semibold">
                  3
                </div>
              </button>
            </div>
            <div className="tabs bg-rebrand-tab no-scroll-bar flex w-full flex-nowrap overflow-x-auto rounded-none p-1 sm:w-fit">
              <button className="tab font-azeret text-rebrand-gray-blue h-auto flex-1 rounded-none px-3 py-1.5 text-[13px] uppercase">
                Today
              </button>
              <button className="tab font-azeret text-rebrand-gray-blue h-auto flex-1 rounded-none px-3 py-1.5 text-[13px] uppercase">
                1W
              </button>
              <button className="tab font-azeret text-rebrand-gray-blue h-auto flex-1 rounded-none px-3 py-1.5 text-[13px] uppercase">
                1M
              </button>
              <button className="tab font-azeret text-rebrand-gray-blue h-auto flex-1 rounded-none px-3 py-1.5 text-[13px] uppercase">
                2M
              </button>
              <button className="tab font-azeret text-rebrand-gray-blue h-auto flex-1 rounded-none px-3 py-1.5 text-[13px] uppercase">
                3M
              </button>
              <button className="tab font-azeret h-auto flex-1 rounded-none px-3 py-1.5 text-[13px] uppercase font-medium bg-rebrand-dark-blue text-rebrand">
                MAX
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-fuchsia-500 mt-8">
          <table className="min-w-full border-collapse border border-fuchsia-950">
            <thead className="bg-tab-header-seedex sticky -top-[1px] z-10 grid">
              <tr className="text-center grid grid-cols-[80px,minmax(50px,1.5fr),minmax(80px,1fr),minmax(80px,1fr),minmax(70px,0.9fr),minmax(100px,1fr),80px] md:grid-cols-[80px,1.5fr,1fr,1fr,0.9fr,1fr,80px]">
                <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">Type</th>
                <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">Token</th>
                <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">Age</th>
                <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">Maker</th>
                <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">Quantity</th>
                <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">Trade Value (USD)</th>
                <th className="px-4 py-3 text-sm font-semibold border border-fuchsia-950">Tx Hash</th>
              </tr>
            </thead>
            <tbody className='flex flex-col flex-1'>
              {allTrades.map((trade, index) => (
                <tr
                  key={index}
                  className="hover:opacity-70 bg-light-seedex transition-colors duration-200 text-center grid grid-cols-[80px,minmax(50px,1.5fr),minmax(80px,1fr),minmax(80px,1fr),minmax(70px,0.9fr),minmax(100px,1fr),80px] md:grid-cols-[80px,1.5fr,1fr,1fr,0.9fr,1fr,80px]"
                >
                  <td className={`px-4 py-3 border border-fuchsia-950 flex h-full items-center justify-center ${trade.type === 'Sell' ? 'text-red-500' : 'text-green-500'}`}>
                    {trade.type}
                  </td>
                  <td className="px-4 py-3 border border-fuchsia-950">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://assets.coincap.io/assets/icons/${trade.quoteCurrency.symbol.toLowerCase()}@2x.png`}
                        alt={trade.quoteCurrency.symbol}
                        onError={(e) => {
                          const imgElement = e.target as HTMLImageElement;
                          imgElement.onerror = null;
                          imgElement.src = NoLogo;
                        }}
                        className="h-6 w-6 rounded-full"
                      />
                      <div className="flex flex-col text-left ml-1">
                        <span>{trade.quoteCurrency.name}</span>
                        <span>{trade.quoteCurrency.symbol}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border border-fuchsia-950">{calculateAge(trade.date.date)}</td>
                  <td className="px-4 py-3 border border-fuchsia-950">{trade.transaction.hash.substring(0, 6)}...</td>
                  <td className={`px-4 py-3 border border-fuchsia-950 ${trade.type === 'Sell' ? 'text-red-500' : 'text-green-500'}`}>{trade.smartContract.currency.name}</td>
                  <td className={`px-4 py-3 border border-fuchsia-950 ${trade.type === 'Sell' ? 'text-red-500' : 'text-green-500'}`}>${trade.tradeAmount.toFixed(2)}</td>
                  <td className="px-4 py-3 border border-fuchsia-950">  
                    <a
                      href={`https://${currentNetwork === 'bsc' ? 'bscscan.com' : 'etherscan.io'}/tx/${trade.transaction.hash}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View Tx
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
