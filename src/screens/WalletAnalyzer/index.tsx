import React, { useState } from 'react';
import { BrowserView } from 'react-device-detect';
import LeftNavbar from '../../components/LeftNavbar';
import SearchBar from '../../components/SearchBar';
import Results from './Result';
import AddressInput from './AddressInput';

export default function WalletAnalyzer(props: any) {
  const { theme } = props;
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [address, setAddress] = useState<string>(''); // Wallet address input state
  const [resultsVisible, setResultsVisible] = useState<boolean>(false); // Track if results are displayed

  const handleAddressSubmit = (addr: string) => {
    setAddress(addr); // Update the address state
    setResultsVisible(true); // Show results when submission is handled
  };

  return (
    <div className="h-screen max-h-screen text-white">
      <BrowserView>
        <LeftNavbar onToggle={(open) => setIsNavbarOpen(open)} />
      </BrowserView>
      <div className={`${isNavbarOpen ? 'ml-56' : 'ml-[65px]'}`}>
        <SearchBar theme={theme} />
        <div className="realtive flex flex-1 flex-col items-center justify-center h-full">
          {/* Show text and input only when results are not visible */}
          {!resultsVisible && (
            <div className="absolute left-1/2 top-1/2 flex w-fit -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center px-4 md:p-14">
              <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
                Multi-chain SPY Wallet
              </h1>
              <p className="text-lg font-light text-gray-300 mt-4">
                Monitor wallet trades across multiple chains instantly.
              </p>
              <div className="mt-6">
                {/* Pass handleAddressSubmit to AddressInput */}
                <AddressInput address={address} onSubmit={handleAddressSubmit} />
              </div>
            </div>
          )}
          {/* Render Results component when resultsVisible is true */}
          {resultsVisible && <Results address={address} />}
        </div>
      </div>
    </div>
  );
}
