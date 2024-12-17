import axios from 'axios';
import { API, API_URL, API_KEY } from './constants';

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
            tradeAmountUsd: {gt: 30000, lt: 50000}
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
            }
            tradeType: buyAmount
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
        'X-API-KEY': API_KEY!,
      },
    });

    return response.data?.data?.ethereum?.dexTrades.map((trade: any) => ({
      ...trade,
      tradeType: trade.baseAmount > trade.quoteAmount ? 'Buy' : 'Sell',
    })) || [];
  } catch (error) {
    console.error('Error fetching whale trades:', error);
    return [];
  }
};

// Fetch wallet analytics data
export const fetchWalletAnalytics = async (address: string, network: string) => {
  try {
    const query = {
      query: `
      {
        ethereum(network: ${network}) {
          dexTrades(
            date: { since: "2022-05-05" }
            any: [{ taker: { is: "${address}" } }, { txSender: { is: "${address}" } }]
            options: { desc: "block.height", limit: 100 }
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

    return response.data?.data?.ethereum?.dexTrades || [];
  } catch (error) {
    console.error('Error fetching wallet analytics:', error);
    return [];
  }
};