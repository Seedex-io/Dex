import uniswap from '../assets/dex/uniswap.svg';
import zerox from '../assets/dex/zerox_exchange.svg';
import uniswapv3 from '../assets/dex/uniswap-v3.png';
import pancakeswap from '../assets/dex/pancakeswap.png';
import balancer from '../assets/dex/balancer.png';
import curve from '../assets/dex/curve.png';
import sushiswap from '../assets/dex/sushiswap.svg';
import dodo from '../assets/dex/dodo.webp';
import balancerv2 from '../assets/dex/balancer.svg';
import zeroxv2 from '../assets/dex/zerox_exchange.svg';
import inch from '../assets/dex/1inch.svg';
import kyberswap from '../assets/dex/kyberswap.svg';


const DEXS = [
  {
    id: 'zerox',
    name: 'Zerox Exchange',
    address: '0xdef1c0ded9bec7f1a1670819833240f027b25eff',
    logo: zerox,
    url: 'https://www.0x.org/',
  },
  {
    id: '1inch',
    name: '1inch',
    address: '0x11111112542d85b3ef69ae05771c2dccff4faa26',
    logo: inch,
    url: 'https://1inch.io/',
  },
  {
    id: 'kyberswap',
    name: 'KyberSwap',
    address: '0x818e6fecd516ecc3849daf6845e3ec868087b755',
    logo: kyberswap,
    url: 'https://kyberswap.com/',
  },
  {
    id: 'uniswap-v2',
    name: 'Uniswap v2',
    address: '0xd36aba9ec96523b0a89886c76065852adfe2eb39',
    logo: uniswap,
    url: 'https://uniswap.org/',
  },
  {
    id: 'uniswap-v2',
    name: 'Uniswap v2',
    address: '0x43ec799eadd63848443e2347c49f5f52e8fe0f6f',
    logo: uniswap,
    url: 'https://uniswap.org/',
  },
  {
    id: 'uniswap-v3',
    name: 'Uniswap v3',
    address: '0x70fe4a44ea505cfa3a57b95cf2862d4fd5f0f687',
    logo: uniswapv3,
    url: 'https://uniswap.org/',
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    address: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
    logo: uniswap,
    url: 'https://uniswap.org/',
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    address: '0xb8900621b03892c2d030e05cb9e01f6474814f6a',
    logo: uniswap,
    url: 'https://uniswap.org/',
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    address: '0x115934131916c8b277dd010ee02de363c09d037c',
    logo: uniswap,
    url: 'https://uniswap.org/',
  },
  {
    id: 'uniswap',
    name: 'Uniswap',
    address: '0x1f98431c8ad98523631ae4a59f267346ea31f984',
    logo: uniswap,
    url: 'https://uniswap.org/',
  },
  {
    id: 'pancakeswap',
    name: 'PancakeSwap',
    address: '0x0bfbcf9fa4f9c56b0f40a671ad40e0805a091865',
    logo: pancakeswap,
    url: 'https://pancakeswap.finance/',
  },
  {
    id: 'balancer',
    name: 'Balancer',
    address: '0xba12222222228d8ba445958a75a0704d566bf2c8',
    logo: balancer,
    url: 'https://balancer.fi/',
  },
  {
    id: 'curve',
    name: 'Curve',
    address: '0x7eeac6cddbd1d0b8af061742d41877d7f707289a',
    logo: curve,
    url: 'https://curve.fi/',
  },
  {
    id: 'curve',
    name: 'Curve',
    address: '0x745748bcfd8f9c2de519a71d789be8a63dd7d66c',
    logo: curve,
    url: 'https://curve.fi/',
  },
  {
    id: 'sushiswap',
    name: 'SushiSwap',
    address: '0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac',
    logo: sushiswap,
    url: 'https://sushi.com/',
  },
  {
    id: 'dodo',
    name: 'Dodo',
    address: '0x6dae6ae227438378c117821c51fd61661faa8893',
    logo: dodo,
    url: 'https://dodoex.io/',
  },
  {
    id: 'balancer-v2',
    name: 'Balancer v2',
    address: '0xd315a9c38ec871068fec378e4ce78af528c76293',
    logo: balancerv2,
    url: 'https://balancer.fi/',
  },
  {
    id: 'zerox-v2',
    name: 'Zerox Exchange v2',
    address: '0x1334c337bb8680e2becd36cc5183f1f28cd12a6b',
    logo: zeroxv2,
    url: 'https://www.0x.org/',
  },
];


export const getdex = (dexId: string) => {
  return DEXS.find(
    (dex) => dex.id.toLowerCase() === dexId.toLowerCase()
  )?.name.toLowerCase();
};

export const getdexName = (dexId: string) => {
  return DEXS.find(
    (dex) => dex.id.toLowerCase() === dexId.toLowerCase()
  )?.id;
};

export const getdexLogo = (address: string) => {
  return DEXS.find(
    (dex) => dex.address === address
  )?.logo;
};

export const getdexNameById = (address: string) => {
  return DEXS.find(
    (dex) => dex.address === address
  )?.name;
};