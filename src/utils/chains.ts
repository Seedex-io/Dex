import bsc from '../assets/chain/bsc.png';
import base from '../assets/chain/base.webp';
import ether from '../assets/chain/ether.png';
import polygon from '../assets/chain/polygon.webp';
import solana from '../assets/chain/solana.webp';
import arbitrum from '../assets/chain/arbitrum.webp';
import linea from '../assets/chain/linea.png';
import neox from '../assets/chain/neox.png';
import okx from '../assets/chain/okx.png';
import celo from '../assets/chain/celo.png';
import avalanche from '../assets/chain/avalanche.png';
import fantom from '../assets/chain/fantom.png';
import metis from '../assets/chain/metis.png';
import moonbeam from '../assets/chain/moonbeam.png';
import optimism from '../assets/chain/optimism.png';
import shibarium from '../assets/chain/shibarium.png';
import scroll from '../assets/chain/scroll.png';
import degen from '../assets/chain/degen.png';
import flow from '../assets/chain/flow.png';
import saitachain from '../assets/chain/saitanchain.png';
import mode from '../assets/chain/mode.png';
import flare from '../assets/chain/flare.png';
import ink from '../assets/chain/ink.png';
import core from '../assets/chain/core.png';
import mantle from '../assets/chain/mantle.png';
import gnosis from '../assets/chain/gnosis.png';
import blast from '../assets/chain/blast.png';
import allnetworks from '../assets/chain/allnetworks.svg';

const CHAINS = [
  {
    id: 'allnetworks',
    chain_identifier: 0,
    name: 'All Networks',
    shortname: 'All Networks',
    logo: allnetworks,
  },
  {
    id: 'base',
    chain_identifier: 8453,
    name: 'Base',
    shortname: 'Base',
    logo: base,
  },
  {
    id: 'optimism',
    chain_identifier: 10,
    name: 'Optimism',
    shortname: 'Optimism',
    logo: optimism,
  },
  {
    id: 'flare',
    chain_identifier: 14,
    name: 'Flare',
    shortname: 'Flare',
    logo: flare, // Assuming mode.png is the correct logo
  },
  {
    id: 'gnosis',
    chain_identifier: 100,
    name: 'Gnosis',
    shortname: 'Gnosis',
    logo: gnosis, // Placeholder: Update if needed
  },
  {
    id: 'shibarium',
    chain_identifier: 109,
    name: 'Shibarium',
    shortname: 'Shibarium',
    logo: shibarium,
  },
  {
    id: 'celo',
    chain_identifier: 42220,
    name: 'Celo',
    shortname: 'Celo',
    logo: celo,
  },
  {
    id: 'avalanche',
    chain_identifier: 43114,
    name: 'Avalanche',
    shortname: 'Avalanche',
    logo: avalanche,
  },
  {
    id: 'neox',
    chain_identifier: 47763,
    name: 'Neo X',
    shortname: 'Neo X',
    logo: neox,
  },
  {
    id: 'ink',
    chain_identifier: 57073,
    name: 'Ink',
    shortname: 'Ink',
    logo: ink,
  },
  {
    id: 'linea',
    chain_identifier: 59144,
    name: 'Linea',
    shortname: 'Linea',
    logo: linea,
  },
  {
    id: 'blast',
    chain_identifier: 81457,
    name: 'Blast',
    shortname: 'Blast',
    logo: blast, // Placeholder: Update if needed
  },
  {
    id: 'scroll',
    chain_identifier: 534352,
    name: 'Scroll',
    shortname: 'Scroll',
    logo: scroll,
  },
  {
    id: 'degen',
    chain_identifier: 666666666,
    name: 'Degen',
    shortname: 'Degen',
    logo: degen,
  },
  {
    id: 'okx',
    chain_identifier: 196,
    name: 'OKX',
    shortname: 'OKX',
    logo: okx,
  },
  {
    id: 'fantom',
    chain_identifier: 250,
    name: 'Fantom',
    shortname: 'Fantom',
    logo: fantom,
  },
  {
    id: 'flow',
    chain_identifier: 747,
    name: 'Flow',
    shortname: 'Flow',
    logo: flow,
  },
  {
    id: 'metis',
    chain_identifier: 1088,
    name: 'Metis',
    shortname: 'Metis',
    logo: metis,
  },
  {
    id: 'core',
    chain_identifier: 1116,
    name: 'Core',
    shortname: 'Core',
    logo: core,
  },
  {
    id: 'saitachain',
    chain_identifier: 1209,
    name: 'Saitachain',
    shortname: 'Saitachain',
    logo: saitachain,
  },
  {
    id: 'moonbeam',
    chain_identifier: 1284,
    name: 'Moonbeam',
    shortname: 'Moonbeam',
    logo: moonbeam,
  },
  {
    id: 'mantle',
    chain_identifier: 5000,
    name: 'Mantle',
    shortname: 'Mantle',
    logo: mantle,
  },
  {
    id: 'mode',
    chain_identifier: 34443,
    name: 'Mode',
    shortname: 'Mode',
    logo: mode, // Assuming mode.png is the correct logo
  },
  {
    id: 'factom',
    chain_identifier: null,
    name: 'Factom',
    shortname: '',
    logo: fantom,
  },
  {
    id: 'openledger',
    chain_identifier: null,
    name: 'OpenLedger',
    shortname: '',
  },
  {
    id: 'basechain',
    chain_identifier: 8453,
    name: 'Basechain',
    shortname: '',
    logo: base,
  },
  {
    id: 'cosmos',
    chain_identifier: null,
    name: 'Cosmos',
    shortname: '',
  },
  {
    id: 'tezos',
    chain_identifier: null,
    name: 'Tezos',
    shortname: '',
  },
  {
    id: 'metaverse-etp',
    chain_identifier: null,
    name: 'Metaverse ETP',
    shortname: '',
  },
  {
    id: 'nem',
    chain_identifier: null,
    name: 'NEM',
    shortname: '',
  },
  {
    id: 'findora',
    chain_identifier: null,
    name: 'Findora',
    shortname: '',
  },
  {
    id: 'icon',
    chain_identifier: null,
    name: 'ICON',
    shortname: '',
  },
  {
    id: 'waves',
    chain_identifier: null,
    name: 'Waves',
    shortname: '',
  },
  {
    id: 'stratis',
    chain_identifier: null,
    name: 'Stratis',
    shortname: '',
  },
  {
    id: 'theta',
    chain_identifier: 361,
    name: 'Theta',
    shortname: '',
  },
  {
    id: 'nuls',
    chain_identifier: null,
    name: 'Nuls',
    shortname: '',
  },
  {
    id: 'qtum',
    chain_identifier: null,
    name: 'Qtum',
    shortname: '',
  },
  {
    id: 'stellar',
    chain_identifier: null,
    name: 'Stellar',
    shortname: '',
  },
  {
    id: 'nxt',
    chain_identifier: null,
    name: 'NXT',
    shortname: '',
  },
  {
    id: 'ardor',
    chain_identifier: null,
    name: 'Ardor',
    shortname: '',
  },
  {
    id: 'ontology',
    chain_identifier: null,
    name: 'Ontology',
    shortname: '',
  },
  {
    id: 'eos',
    chain_identifier: null,
    name: 'EOS',
    shortname: '',
  },
  {
    id: 'godwoken',
    chain_identifier: null,
    name: 'Godwoken',
    shortname: '',
  },
  {
    id: 'vechain',
    chain_identifier: null,
    name: 'VeChain',
    shortname: '',
  },
  {
    id: 'omni',
    chain_identifier: null,
    name: 'Omni',
    shortname: '',
  },
  {
    id: 'counterparty',
    chain_identifier: null,
    name: 'Counterparty',
    shortname: '',
  },
  {
    id: 'chiliz',
    chain_identifier: null,
    name: 'Chiliz',
    shortname: '',
  },
  {
    id: 'bitshares',
    chain_identifier: null,
    name: 'BitShares',
    shortname: '',
  },
  {
    id: 'neo',
    chain_identifier: null,
    name: 'NEO',
    shortname: '',
  },
  {
    id: 'super-zero',
    chain_identifier: null,
    name: 'Sero',
    shortname: '',
  },
  {
    id: 'tron',
    chain_identifier: null,
    name: 'TRON',
    shortname: '',
  },
  {
    id: '',
    chain_identifier: null,
    name: 'Radix',
    shortname: '',
  },
  {
    id: 'komodo',
    chain_identifier: null,
    name: 'Komodo',
    shortname: '',
  },
  {
    id: 'rootstock',
    chain_identifier: null,
    name: 'Rootstock RSK',
    shortname: '',
  },
  {
    id: 'achain',
    chain_identifier: null,
    name: 'Achain',
    shortname: '',
  },
  {
    id: 'vite',
    chain_identifier: null,
    name: 'Vite',
    shortname: '',
  },
  {
    id: 'gochain',
    chain_identifier: null,
    name: 'GoChain',
    shortname: '',
  },
  {
    id: 'bittorrent',
    chain_identifier: 199,
    name: 'BitTorrent',
    shortname: '',
  },
  {
    id: 'enq-enecuum',
    chain_identifier: null,
    name: 'Enecuum',
    shortname: '',
  },
  {
    id: 'mdex',
    chain_identifier: null,
    name: 'Mdex',
    shortname: '',
  },
  {
    id: 'ethereum-classic',
    chain_identifier: null,
    name: 'Ethereum Classic',
    shortname: '',
  },
  {
    id: 'kusama',
    chain_identifier: null,
    name: 'Kusama',
    shortname: '',
  },
  {
    id: 'binancecoin',
    chain_identifier: null,
    name: 'BNB Beacon Chain',
    shortname: 'BEP2',
  },
  {
    id: 'bitcoin-cash',
    chain_identifier: null,
    name: 'Simple Ledger Protocol (Bitcoin Cash)',
    shortname: 'SLP',
  },
  {
    id: 'velas',
    chain_identifier: 106,
    name: 'Velas',
    shortname: 'velas',
  },
  {
    id: 'huobi-token',
    chain_identifier: 128,
    name: 'Huobi ECO Chain Mainnet',
    shortname: 'HECO',
  },
  {
    id: 'bitkub-chain',
    chain_identifier: 96,
    name: 'Bitkub Chain',
    shortname: '',
  },
  {
    id: 'zilliqa',
    chain_identifier: null,
    name: 'Zilliqa',
    shortname: '',
  },
  {
    id: 'terra',
    chain_identifier: null,
    name: 'Terra',
    shortname: '',
  },
  {
    id: 'polis-chain',
    chain_identifier: 333999,
    name: 'Polis Chain',
    shortname: '',
  },
  {
    id: 'defichain',
    chain_identifier: null,
    name: 'DeFiChain',
    shortname: '',
  },
  {
    id: 'fusion-network',
    chain_identifier: null,
    name: 'Fusion Network',
    shortname: 'fusion-network',
  },
  {
    id: 'celer-network',
    chain_identifier: null,
    name: 'Celer Network',
    shortname: 'Celer',
  },
  {
    id: 'telos',
    chain_identifier: null,
    name: 'Telos',
    shortname: '',
  },
  {
    id: 'kucoin-community-chain',
    chain_identifier: 321,
    name: 'Kucoin Community Chain',
    shortname: 'KCC',
  },
  {
    id: 'hoo',
    chain_identifier: null,
    name: 'Hoo',
    shortname: 'Hoo',
  },
  {
    id: 'Bitcichain',
    chain_identifier: null,
    name: 'Bitcichain',
    shortname: 'Bitcichain',
  },
  {
    id: 'kava',
    chain_identifier: null,
    name: 'Kava',
    shortname: '',
  },
  {
    id: 'algorand',
    chain_identifier: null,
    name: 'Algorand',
    shortname: '',
  },
  {
    id: 'yocoin',
    chain_identifier: null,
    name: 'Yocoin',
    shortname: 'yocoin',
  },
  {
    id: 'near-protocol',
    chain_identifier: null,
    name: 'Near Protocol',
    shortname: 'near-protocol',
  },
  {
    id: 'mixin-network',
    chain_identifier: null,
    name: 'Mixin Network',
    shortname: '',
  },
  {
    id: 'klay-token',
    chain_identifier: null,
    name: 'Klaytn',
    shortname: '',
  },
  {
    id: 'wanchain',
    chain_identifier: null,
    name: 'Wanchain',
    shortname: '',
  },
  {
    id: 'iotex',
    chain_identifier: null,
    name: 'IoTeX',
    shortname: 'iotex',
  },
  {
    id: 'xrp',
    chain_identifier: null,
    name: 'XRP Ledger',
    shortname: 'xrp',
  },
  {
    id: 'fuse',
    chain_identifier: 122,
    name: 'Fuse',
    shortname: '',
  },
  {
    id: 'polkadot',
    chain_identifier: null,
    name: 'Polkadot',
    shortname: '',
  },
  {
    id: 'cardano',
    chain_identifier: null,
    name: 'Cardano',
    shortname: '',
  },
  {
    id: 'arbitrum-one',
    chain_identifier: 42161,
    name: 'Arbitrum One',
    shortname: 'Arbitrum',
    logo: arbitrum,
  },
  {
    id: 'bsc',
    chain_identifier: 56,
    name: 'BNB Smart Chain',
    shortname: 'BSC',
    chain_name: 'chain-bsc',
    logo: bsc,
  },
  {
    id: 'ronin',
    chain_identifier: null,
    name: 'Ronin',
    shortname: 'ron',
  },
  {
    id: 'solana',
    chain_identifier: 1399811149,
    name: 'Solana',
    shortname: '',
    logo: solana,
  },
  {
    id: 'fantom',
    chain_identifier: 250,
    name: 'Fantom',
    shortname: '',
  },
  {
    id: 'osmosis',
    chain_identifier: null,
    name: 'Osmosis',
    shortname: 'Osmo',
  },
  {
    id: 'optimistic-ethereum',
    chain_identifier: 10,
    name: 'Optimism',
    shortname: 'Optimism',
  },
  {
    id: 'sora',
    chain_identifier: null,
    name: 'Sora',
    shortname: '',
  },
  {
    id: 'secret',
    chain_identifier: null,
    name: 'Secret',
    shortname: '',
  },
  {
    id: 'polygon-pos',
    chain_identifier: 137,
    name: 'Polygon POS',
    shortname: 'MATIC',
    logo: polygon,
  },
  {
    id: 'bitgert',
    chain_identifier: null,
    name: 'Bitgert Chain',
    shortname: 'Bitgert Brise',
  },
  {
    id: 'thorchain',
    chain_identifier: null,
    name: 'Thorchain',
    shortname: '',
  },
  {
    id: 'elrond',
    chain_identifier: null,
    name: 'Elrond',
    shortname: 'elrond',
  },
  {
    id: 'moonriver',
    chain_identifier: 1285,
    name: 'Moonriver',
    shortname: 'moonriver',
  },
  {
    id: 'cronos',
    chain_identifier: 25,
    name: 'Cronos',
    shortname: 'CRO',
  },
  {
    id: 'smartbch',
    chain_identifier: 10000,
    name: 'SmartBCH',
    shortname: '',
  },
  {
    id: 'aurora',
    chain_identifier: 1313161554,
    name: 'Aurora',
    shortname: 'aurora',
  },
  {
    id: 'tomochain',
    chain_identifier: 88,
    name: 'TomoChain',
    shortname: '',
  },
  {
    id: 'avalanche',
    chain_identifier: 43114,
    name: 'Avalanche',
    shortname: 'AVAX',
  },
  {
    id: 'metis-andromeda',
    chain_identifier: 1088,
    name: 'Metis Andromeda',
    shortname: '',
  },
  {
    id: 'okex-chain',
    chain_identifier: 66,
    name: 'OKExChain',
    shortname: 'OKEx',
  },
  {
    id: 'ether',
    chain_identifier: 1,
    name: 'Ethereum',
    shortname: 'eth',
    chain_name: 'chain-ethereum',
    logo: ether,
  },
  {
    id: 'ethw',
    chain_identifier: 1,
    name: 'Ethereum',
    shortname: 'eth',
    logo: ether,
  },
  {
    id: 'milkomeda-cardano',
    chain_identifier: 2001,
    name: 'Milkomeda (Cardano)',
    shortname: '',
  },
  {
    id: 'acala',
    chain_identifier: null,
    name: 'Acala',
    shortname: '',
  },
  {
    id: 'harmony-shard-0',
    chain_identifier: 1666600000,
    name: 'Harmony Shard 0',
    shortname: 'Harmony Shard 0',
  },
  {
    id: 'defi-kingdoms-blockchain',
    chain_identifier: null,
    name: 'DFK Chain',
    shortname: 'DFK Chain',
  },
  {
    id: 'evmos',
    chain_identifier: 9001,
    name: 'Evmos',
    shortname: 'evmos',
  },
  {
    id: 'karura',
    chain_identifier: null,
    name: 'Karura',
    shortname: '',
  },
  {
    id: 'everscale',
    chain_identifier: null,
    name: 'Everscale',
    shortname: '',
  },
  {
    id: 'boba',
    chain_identifier: 288,
    name: 'Boba Network',
    shortname: '',
  },
  {
    id: 'sx-network',
    chain_identifier: null,
    name: 'SX Network',
    shortname: 'sxn',
  },
  {
    id: 'cube',
    chain_identifier: null,
    name: 'Cube',
    shortname: '',
  },
  {
    id: '',
    chain_identifier: null,
    name: 'Matrix',
    shortname: '',
  },
  {
    id: 'conflux',
    chain_identifier: null,
    name: 'Conflux',
    shortname: 'conflux',
  },
  {
    id: 'elastos',
    chain_identifier: null,
    name: 'Elastos Smart Contract Chain',
    shortname: 'Elastos',
  },
  {
    id: 'celo',
    chain_identifier: 42220,
    name: 'Celo',
    shortname: 'celo',
  },
  {
    id: 'echelon',
    chain_identifier: null,
    name: 'Echelon',
    shortname: '',
  },
  {
    id: 'energi',
    chain_identifier: null,
    name: 'Energi',
    shortname: '',
  },
  {
    id: 'hydra',
    chain_identifier: null,
    name: 'Hydra',
    shortname: '',
  },
  {
    id: 'coinex-smart-chain',
    chain_identifier: 52,
    name: 'CoinEx Smart Chain',
    shortname: 'CSC',
  },
  {
    id: 'hedera-hashgraph',
    chain_identifier: null,
    name: 'Hedera Hashgraph',
    shortname: 'hashgraph',
  },
  {
    id: 'kardiachain',
    chain_identifier: null,
    name: 'KardiaChain',
    shortname: 'kardiachain',
  },
  {
    id: 'tombchain',
    chain_identifier: null,
    name: 'Tombchain',
    shortname: '',
  },
  {
    id: 'astar',
    chain_identifier: null,
    name: 'Astar',
    shortname: '',
  },
  {
    id: 'moonbeam',
    chain_identifier: 1284,
    name: 'Moonbeam',
    shortname: '',
  },
  {
    id: 'hoo-smart-chain',
    chain_identifier: 70,
    name: 'Hoo Smart Chain',
    shortname: '',
  },
  {
    id: 'dogechain',
    chain_identifier: null,
    name: 'Dogechain',
    shortname: '',
  },
  {
    id: 'oasis',
    chain_identifier: 42262,
    name: 'Oasis',
    shortname: 'oasis',
  },
  {
    id: 'skale',
    chain_identifier: null,
    name: 'Skale',
    shortname: '',
  },
  {
    id: 'ethereumpow',
    chain_identifier: null,
    name: 'EthereumPoW',
    shortname: '',
  },
  {
    id: 'stacks',
    chain_identifier: null,
    name: 'Stacks',
    shortname: '',
  },
  {
    id: 'step-network',
    chain_identifier: null,
    name: 'Step Network',
    shortname: '',
  },
  {
    id: 'ShibChain',
    chain_identifier: null,
    name: 'ShibChain',
    shortname: '',
  },
  {
    id: 'xdc-network',
    chain_identifier: 50,
    name: 'XDC Network',
    shortname: 'xdc xinfin',
  },
  {
    id: 'songbird',
    chain_identifier: null,
    name: 'Songbird',
    shortname: '',
  },
  {
    id: 'kadena',
    chain_identifier: null,
    name: 'Kadena',
    shortname: '',
  },
  {
    id: 'canto',
    chain_identifier: 7700,
    name: 'Canto',
    shortname: '',
  },
  {
    id: 'xdai',
    chain_identifier: 100,
    name: 'xDAI',
    shortname: '',
  },
  {
    id: 'function-x',
    chain_identifier: 530,
    name: 'Function X',
    shortname: '',
  },
  {
    id: 'redlight-chain',
    chain_identifier: 2611,
    name: 'Redlight Chain',
    shortname: '',
  },
  {
    id: 'thundercore',
    chain_identifier: 108,
    name: 'ThunderCore',
    shortname: '',
  },
  {
    id: 'shiden network',
    chain_identifier: 8545,
    name: 'Shiden Network',
    shortname: '',
  },
  {
    id: 'arbitrum-nova',
    chain_identifier: 42170,
    name: 'Arbitrum Nova',
    shortname: '',
  },
  {
    id: 'meter',
    chain_identifier: 82,
    name: 'Meter',
    shortname: '',
  },
  {
    id: 'syscoin',
    chain_identifier: 57,
    name: 'Syscoin NEVM',
    shortname: 'syscoin',
  },
];

export const getChain = (chainId: string) => {
  return CHAINS.find(
    (chain) => chain.id.toLowerCase() === chainId.toLowerCase()
  )?.shortname.toLowerCase();
};

export const getChainName = (chainId: string) => {
  return CHAINS.find(
    (chain) => chain.id.toLowerCase() === chainId.toLowerCase()
  )?.name;
};

export const getChainLogo = (chainIdentifier: number) => {
  return CHAINS.find(
    (chain) => chain.chain_identifier === chainIdentifier
  )?.logo;
};

export const getChainNameById = (chainIdentifier: number) => {
  return CHAINS.find(
    (chain) => chain.chain_identifier === chainIdentifier
  )?.name.toLowerCase();
};