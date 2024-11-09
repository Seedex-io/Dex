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

export const getNewPairs = async () => {
  const images: any = {};

  try {
    const response = await axios.get(`${API}/getNewPairs`);
    const data = response.data;

    if (!data.data) return [];

    data.included.forEach((val: any) => {
      images[val.id] = {
        image: val.attributes.image_url,
        symbol: val.attributes.symbol,
        name: val.attributes.name,
        tokenAddress: val.attributes.address,
      };
    });

    return data.data.map((val: any) => ({
      id: val.attributes.base_token_id,
      tokenName: val.attributes.name,
      pairAddress: val.attributes.address,
      price: val.attributes.price_in_usd,
      pool_created_at: val.attributes.pool_created_at,
      volume: val.attributes.to_volume_in_usd,
      txs: val.attributes.swap_count_24h,
      last_5m: val.attributes.price_percent_changes.last_5m,
      last_1h: val.attributes.price_percent_changes.last_1h,
      last_6h: val.attributes.price_percent_changes.last_6h,
      last_24h: val.attributes.price_percent_changes.last_24h,
      liquidity: val.attributes.reserve_in_usd,
      image: images[val.attributes.base_token_id]?.image,
      symbol: images[val.attributes.base_token_id]?.symbol,
      name: images[val.attributes.base_token_id]?.name,
      tokenAddress: images[val.attributes.base_token_id]?.tokenAddress,
      fdv: val.attributes.token_value_data[Object.keys(val.attributes.token_value_data)[1]]
        .fdv_in_usd,
      marketCap: val.attributes.token_value_data[Object.keys(val.attributes.token_value_data)[1]]
        .market_cap_in_usd,
    }));
  } catch (error) {
    return [];
  }
};
