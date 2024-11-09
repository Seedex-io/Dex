import axios from 'axios';
import { API } from './constants';

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
