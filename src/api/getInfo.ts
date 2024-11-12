import axios from 'axios';
import { getPourcentageChangeBetweenTwoNumbers } from '../utils/calculate';
import { CAPI, API, ORIGIN } from './constants';
import { scanHoneypot } from './honeyPot';

export const getInfo = async () => {
  const address = window.location.pathname.split('/')[1].split('-')[0];
  const chain = window.location.pathname.split('/')[1].split('-')[1];
  const url = `${API}/info?address=${address}&chain=${chain}`;

  return axios
    .get(url)
    .then(async (res: any) => {
      const val = res.data.pair;
      const publicInfo = await getPublicInfo(val.baseToken.address, chain);
      const honeypot = await scanHoneypot(val.pairAddress, chain);

      const creationTime = new Date(val.pairCreatedAt).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      
      return {
        ...val,
        honeypot: {
          BuyTax: honeypot.simulationResult.buyTax,
          BuyGas: honeypot.simulationResult.buyGas,
          SellTax: honeypot.simulationResult.sellTax,
          SellGas: honeypot.simulationResult.sellGas,
          isHoneypot: honeypot.honeypotResult.isHoneypot,
        },
        favourite: false,
        chainId: val.chainId,
        dexId: val.dexId,
        url: val.url,
        labels: val.labels,
        pairAddress: val.pairAddress,
        tokenAddress: val.baseToken.address,
        baseToken: {
          address: val.baseToken.address,
          name: val.baseToken.name,
          symbol: val.baseToken.symbol,
        },
        quoteToken: {
          address: val.quoteToken.address,
          name: val.quoteToken.name,
          symbol: val.quoteToken.symbol,
        },
        priceNative: val.priceNative,
        price: val.priceUsd,
        txns: {
          m5: {
            buys: val.txns.m5.buys,
            sells: val.txns.m5.sells,
          },
          h1: {
            buys: val.txns.h1.buys,
            sells: val.txns.h1.sells,
          },
          h6: {
            buys: val.txns.h6.buys,
            sells: val.txns.h6.sells,
          },
          h24: {
            buys: val.txns.h24.buys,
            sells: val.txns.h24.sells,
          },
        },
        volume: {
          m5: val.volume.m5,
          h1: val.volume.h1,
          h6: val.volume.h6,
          h24: val.volume.h24,
        },
        priceChange: {
          m5: val.priceChange.m5,
          h1: val.priceChange.h1,
          h6: val.priceChange.h6,
          h24: val.priceChange.h24,
        },
        liquidity: {
          usd: val.liquidity.usd,
          base: val.liquidity.base,
          quote: val.liquidity.quote,
        },
        fdv: val.fdv,
        marketCap: val.marketCap,
        pairCreatedAt: val.pairCreatedAt,
        price5mChange: val.priceChange.m5,
        price1hChange: val.priceChange.h1,
        price6hChange: val.priceChange.h6,
        price24hChange: val.priceChange.h24,
        mcap: val.fdv,
        price24h: val.txns.h24,
        volume24h: val.volume.h24,
        reserveRef: val.liquidity.quote,
        creationTime,
        reserve: val.liquidity.base,
        chain: 'ether',
        // logo: `https://dd.dexscreener.com/ds-data/tokens/ethereum/${val.baseToken.address.toLowerCase()}.png?size=lg`,
        ...publicInfo,
      };
    })
    .catch((err: any) => {
      console.log(err);
      return null;
    });
};

export const getPublicInfo = async (tokenAddress: any, chain: any) => {
  const url = `${CAPI}/${chain}/contract/${tokenAddress}`;

  return axios
    .get(url)
    .then(async (res: any) => {
      const val = res.data;
      console.log(val);

      return {
        maxSupply: val.market_data.max_supply,
        totalSupply: val.market_data.total_supply,
        holders: val.market_data.holders, // (not available directly in CoinGecko)
        txCount: val.market_data.total_transactions, // (not available directly in CoinGecko)
        description: val.description.en,
        links: val.links,
        logo: val.image.large,  // logo is located here in CoinGecko API
        audit: val.audits, // (if any)
      };
    })
    .catch((err: any) => {
      console.log(err);
      return null;
    });
};


{/*export const getPublicInfo = async (tokenAddress: any, chain: any) => {
  const url = `${API}/publicInfo?tokenAddress=${tokenAddress}&chain=${chain}`;

  return axios
    .get(url)
    .then(async (res: any) => {
      const val = res.data.data;
      console.log(val);

      return {
        maxSupply: val.metrics.maxSupply,
        totalSupply: val.metrics.totalSupply,
        holders: val.metrics.holders,
        txCount: val.metrics.txCount,
        description: val.info.description,
        links: val.links,
        logo: val.logo ? `https://www.dextools.io/resources/tokens/logos/${val.logo}` : null,
        audit: val.audit,
      };
    })
    .catch((err: any) => {
      console.log(err);
      return null;
    });
}; */}

export const checkFavourite = (address: any) => {
  let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  return favourites.includes(address);
};

export const addFavourite = (address: any) => {
  let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  favourites.push(address);
  localStorage.setItem('favourites', JSON.stringify(favourites));
};

export const removeFavourite = (address: any) => {
  let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  favourites = favourites.filter((f: any) => f !== address);
  localStorage.setItem('favourites', JSON.stringify(favourites));
};

const getFavourites = () => {
  let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  return favourites;
};

export const getFavouritesData = async () => {
  const url = `${API}/favourites`;

  return await axios
    .post(url, { favourites: getFavourites() })

    .then((res) => {
      return res.data.map((val: any) => {
        return {
          symbol: val.symbol,
          symbolRef: val.symbolRef,
          pair: val.id.pair,
          logo: `${ORIGIN}/raw?url=https://www.dextools.io/resources/tokens/logos/${val.token.logo}`,
          price: val.price,
          change:
            val.price24h && getPourcentageChangeBetweenTwoNumbers(val.price24h.price, val.price),
          chain: val.id.chain,
        };
      });
    });
};
