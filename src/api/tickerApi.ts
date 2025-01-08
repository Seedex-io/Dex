import axios from 'axios';
import { API, APIToken } from './constants';

export const getTop10 = async () => {
  try {
    const res = await axios.get(`${API}/getTop10`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTrending = async () => {
  return fetch(`${API}/getHotPairs`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};

export const getGainerList = async () => {
  try {
    const res = await axios.get(`${API}/getGainerList`);
    console.log(res.data);

    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getLoserList = async () => {
  try {
    const res = await axios.get(`${API}/getLoserList`);
    return res.data;
  } catch (error) {
    return [];
  }
};

export const addToken = async (address: string, chain: string, adminkey: string) => {
  const url = `${APIToken}/tkadd?address=${address}&rank=${0}&chain=${chain}&key=${adminkey}`;

  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data) {
        if (data.error) return data.error;
        return 'success';
      }
      return 'success';
    })
    .catch((err) => {
      return err.error;
    });
};

export const getNewPairs = async (page: number = 1) => {
  try {
    const res = await axios.get(`${API}/getpairs?page=${page}`);
    console.log('Response Data:', res.data);

    return res.data.map((val: any) => ({
      chain: val.chain,
      pairHash: val.pairHash,
      baseHash: val.baseHash,
      baseSymbol: val.baseSymbol,
      baseName: val.baseName,
      baseIconTs: val.baseIconTs,
      socials: val.socials,
      verified: val.verified,
      quoteHash: val.quoteHash,
      quoteSymbol: val.quoteSymbol,
      quoteName: val.quoteName,
      quoteIconTs: val.quoteIconTs,
      dexHash: val.dexHash,
      dexName: val.dexName,
      dexIconTs: val.dexIconTs,
      price: val.price,
      createdAt: val.createdAt,
      discoveredAt: val.discoveredAt,
      liquidity: val.liquidity,
      marketCap: val.marketCap,
      fdMarketCap: val.fdMarketCap,
      volume: val.volume,
      transactions: val.transactions,
      makers: val.makers,
      pc5m: val.pc5m,
      pc1h: val.pc1h,
      pc6h: val.pc6h,
      pc24h: val.pc24h,
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};