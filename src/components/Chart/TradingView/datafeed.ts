import axios from 'axios';
import {
  makeApiRequest,
  generateSymbol,
  parseFullSymbol,
} from './helpers';
import {
  subscribeOnStream,
  unsubscribeFromStream,
} from './streaming';

// Use it to keep a record of the most recent bar on the chart
const lastBarsCache = new Map();
// ...
const channelToSubscription = new Map();
export default {
  onReady: (callback: any) => {
    setTimeout(() => callback(configurationData));
  },
  searchSymbols: async (
    userInput: string,
    exchange: string,
    symbolType: any,
    onResultReadyCallback: (arg0: any[]) => void
  ) => {
    const symbols = await getAllSymbols();
    const newSymbols = symbols.filter((symbol) => {
      const isExchangeValid =
        exchange === '' || symbol.exchange === exchange;
      const isFullSymbolContainsInput =
        symbol.full_name
          .toLowerCase()
          .indexOf(userInput.toLowerCase()) !== -1;
      return isExchangeValid && isFullSymbolContainsInput;
    });
    onResultReadyCallback(newSymbols);
  },
  resolveSymbol: async (
    symbolName: any,
    onSymbolResolvedCallback: any,
    onResolveErrorCallback: any,
    extension: any
  ) => {
    const symbolItem = await getSymbol(symbolName);
    if (!symbolItem) {
      console.log(
        '[resolveSymbol]: Cannot resolve symbol',
        symbolName
      );
      onResolveErrorCallback('Cannot resolve symbol');
      return;
    }
    // Symbol information object
    const symbolInfo = {
      ticker: symbolItem.name,
      name: symbolItem.symbols[0],
      description: symbolItem.symbols[0],
      type: symbolItem.type,
      session: '24x7',
      timezone: 'Etc/UTC',
      exchange: symbolItem.AMM,
      minmov: 1,
      pricescale: 100,
      has_intraday: false,
      has_no_volume: true,
      has_weekly_and_monthly: false,
      supported_resolutions: configurationData.supported_resolutions,
      volume_precision: 2,
      data_status: 'streaming',
      address: `${symbolItem.underlyingAddresses[0]}-${symbolItem.network}`,
    };
    console.log('[resolveSymbol]: Symbol resolved', symbolName);
    onSymbolResolvedCallback(symbolInfo);
  },
  getBars: async (
    symbolInfo: any,
    resolution: any,
    periodParams: any,
    onHistoryCallback: any,
    onErrorCallback: any
  ) => {
    const { from, to, firstDataRequest } = periodParams;

    const url = `https://api.dex.guru/v1/tradingview/history?symbol=${symbolInfo.address}_USD&resolution=${resolution}&from=${from}&to=${to}`;
    const parsedSymbol: any = parseFullSymbol(symbolInfo.full_name);
    const urlParameters: any = {
      e: parsedSymbol.exchange,
      fsym: parsedSymbol.fromSymbol,
      tsym: parsedSymbol.toSymbol,
      toTs: to,
      limit: 2000,
    };
    const query = Object.keys(urlParameters)
      .map(
        (name) => `${name}=${encodeURIComponent(urlParameters[name])}`
      )
      .join('&');
    try {
      const data = await axios.get(url);

      if (data.data.s === 'no_data') {
        onHistoryCallback([], { noData: true });
        return;
      }
      let bars: any = [];

      for (let index = 0; index < data.data.t.length; index++) {
        bars = [
          ...bars,
          {
            time: data.data.t[index] * 1000,
            low: data.data.l[index],
            high: data.data.h[index],
            open: data.data.o[index],
            close: data.data.c[index],
          },
        ];
      }

      console.log(`[getBars]: returned ${bars.length} bar(s)`);
      onHistoryCallback(bars, { noData: false });
    } catch (error) {
      console.log('[getBars]: Get error', error);
      onErrorCallback(error);
    }
  },
  subscribeBars: (
    symbolInfo: { full_name: any },
    resolution: any,
    onRealtimeCallback: any,
    subscriberUID: any,
    onResetCacheNeededCallback: any
  ) => {
    console.log(
      '[subscribeBars]: Method call with subscriberUID:',
      subscriberUID
    );
    subscribeOnStream(
      symbolInfo,
      resolution,
      onRealtimeCallback,
      subscriberUID,
      onResetCacheNeededCallback,
      lastBarsCache.get(symbolInfo.full_name)
    );
  },

  unsubscribeBars: (subscriberUID: any) => {
    console.log(
      '[unsubscribeBars]: Method call with subscriberUID:',
      subscriberUID
    );
    unsubscribeFromStream(subscriberUID);
  },
};

const configurationData = {
  // Represents the resolutions for bars supported by your datafeed
  supported_resolutions: [
    '1',
    '5',
    '15',
    '30',
    '1h',
    '4h',
    'D',
    'W',
    'M',
  ],

  // The `exchanges` arguments are used for the `searchSymbols` method if a user selects the exchange
  exchanges: [
    { value: 'Bitfinex', name: 'Bitfinex', desc: 'Bitfinex' },
    {
      value: 'Kraken',
      name: 'Kraken',
      desc: 'Kraken bitcoin exchange',
    },
  ],
  // The `symbols_types` arguments are used for the `searchSymbols` method if a user selects this symbol type
  symbols_types: [{ name: 'crypto', value: 'crypto' }],
};

// Obtains all symbols for all exchanges supported by CryptoCompare API
async function getAllSymbols() {
  const data = await makeApiRequest('data/v3/all/exchanges');
  let allSymbols: any[] = [];

  for (const exchange of configurationData.exchanges) {
    const pairs = data.Data[exchange.value].pairs;

    for (const leftPairPart of Object.keys(pairs)) {
      const symbols = pairs[leftPairPart].map(
        (rightPairPart: any) => {
          const symbol = generateSymbol(
            exchange.value,
            leftPairPart,
            rightPairPart
          );
          return {
            symbol: symbol.short,
            full_name: symbol.full,
            description: symbol.short,
            exchange: exchange.value,
            type: 'crypto',
          };
        }
      );
      allSymbols = [...allSymbols, ...symbols];
    }
  }
  return allSymbols;
}

async function getSymbol(symbolName: any) {
  const body: any = {
    ids: [symbolName],
    limit: 1,
  };
  try {
    const res = await axios('https://api.dex.guru/v3/tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(body),
    });

    const result = res.data.data[0];
    console.log(result);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}
