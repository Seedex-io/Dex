import axios from 'axios';

export const searchToken = async (token: string) => {
  let url = `https://api.dexscreener.com/latest/dex/search/?q=${token}&type=token`;
  return axios
    .get(url)
    .then((res) => {
      let data: any[] = res.data.pairs;

      data = data.filter((pair) => pair.chainId === 'ethereum');

      return data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};
