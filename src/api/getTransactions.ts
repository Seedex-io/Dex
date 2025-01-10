import axios from 'axios';
import { API, API_URL, API_KEY } from './constants';
import dayjs from 'dayjs';

export const getTransactions = async (pairAddress: any, chain: any, tokenAddress: string) => {
  try {
    const url = `${API}/getTransactions?tokenAddress=${tokenAddress}&chain=${chain}&pairAddress=${pairAddress}`;
    const result = await axios.get(url);
    if (result.data.length === 0) throw new Error('No transactions found');

    return result.data;
  } catch (e) {
    return [];
  }
};


export const fetchWhaleTrades = async () => {
  try {
    const query = {
      query: `
      {
        ethereum(network: ethereum) {
          dexTrades(
            options: {limit: 100, desc: "timeInterval.minute"}
            tradeAmountUsd: {gt: 10000, lt: 50000}
            quoteCurrency: {in: ["WETH", "USDC"]}
            baseCurrency: {notIn: ["ETH", "WETH", "USDC", "DAI", "USDT", "WBTC"]}
          ) {
            timeInterval {
              minute
            }
            transaction {
              hash
              txFrom {
                address
              }
            }
            baseAmount
            baseCurrency {
              address
              name
              symbol
            }
            quoteAmount
            quoteCurrency {
              name
              symbol
            }
            tradeAmount(in: USD)
            exchange {
              fullName
              address{
                address
              }
            }
            sellCurrency {
              symbol
            }
            buyCurrency {
              tokenId
            }
          }
        }
      }
      `,
    };

    const response = await axios.post(API_URL, query, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      },
    });

    const trades = response.data?.data?.ethereum?.dexTrades || [];

    // Add the type field to each trade
    trades.forEach((trade: any) => {
      trade.tradeType = trade.sellCurrency.symbol === trade.quoteCurrency.symbol ? 'Sell' : 'Buy';
    });

    return trades;
  } catch (error) {
    console.error('Error fetching whale trades:', error);
    return [];
  }
};

// Fetch wallet analytics data
export const fetchWalletAnalytics = async (address: string, network: string) => {
  try {
    const sevenDaysAgo = dayjs().subtract(7, 'days').toISOString();

    const query = {
      query: `
      {
        ethereum(network: ${network}) {
          dexTrades(
            date: { since: "${sevenDaysAgo}" }
            any: [{ taker: { is: "${address}" } }, { txSender: { is: "${address}" } }]
            options: { desc: "block.height", limit: 100 }
            baseCurrency: {in: ["WBNB", "USDT", "BUSD"]}
          ) {
            transaction {
              hash
            }
            smartContract {
              address {
                address
              }
              contractType
              currency {
                name
              }
            }
            date {
              date
            }
            block {
              height
            }
            buyAmount
            buyAmountInUsd: buyAmount(in: USD)
            buyCurrency {
              symbol
              address
            }
            sellAmount
            sellAmountInUsd: sellAmount(in: USD)
            sellCurrency {
              symbol
              address
            }
            tradeAmount(in: USD)
            baseCurrency {
              symbol
            }
            quoteCurrency {
              symbol
              name
            }
          }
        }
      }
      `,
    };

    const response = await axios.post(API_URL, query, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      },
    });

    const trades = response.data?.data?.ethereum?.dexTrades || [];

    // Add the type field to each trade
    trades.forEach((trade: any) => {
      trade.type = trade.sellCurrency.symbol === trade.baseCurrency.symbol ? 'Sell' : 'Buy';
    });

    return trades;
  } catch (error) {
    console.error('Error fetching wallet analytics:', error);
    return [];
  }
};
