import React, { useEffect, useState } from 'react';
import { fetchWalletAnalytics } from '../../api/getTransactions';
import { calculateAge } from './utils';

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
      <div className="text-light-seedex text-lg font-semibold flex flex-col items-center mt-8">
        <div className="w-16 h-16 rounded-full border-t-2 border-fuchsia-500 animate-spin mb-4"></div>
        Loading...
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-lg mt-8 text-center">{error}</p>;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-fuchsia-500 mt-8">
      <table className="min-w-full table-auto">
        <thead className="border-y border-fuchsia-500">
          <tr className="text-slate-200">
            <th className="px-4 py-5">Chain</th>
            <th className="px-4 py-5">Age</th>
            <th className="px-4 py-5">From</th>
            <th className="px-4 py-5">To</th>
            <th className="px-4 py-5">Trade Value (USD)</th>
            <th className="px-4 py-5">Tx Hash</th>
          </tr>
        </thead>
        <tbody className="font-mono">
          {allTrades.map((trade, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'text-center bg-transparent' : 'text-center bg-[#343913]'}
            >
              <td className="px-4 py-5">{currentNetwork}</td>
              <td className="px-4 py-5">{calculateAge(trade.date.date)}</td>
              <td className="px-4 py-5">{trade.transaction.hash.substring(0, 6)}...</td>
              <td className="px-4 py-5">{trade.smartContract.currency.name}</td>
              <td className="px-4 py-5">${trade.tradeAmount.toFixed(2)}</td>
              <td className="px-4 py-5">
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
  );
};

export default Results;
