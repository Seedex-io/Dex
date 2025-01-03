// Makes requests to CryptoCompare API
export async function makeApiRequest(path: any) {
  try {
    const response = await fetch(
      `https://min-api.cryptocompare.com/${path}`
    );
    return response.json();
  } catch (error: any) {
    throw new Error(`CryptoCompare request error: ${error.status}`);
  }
}

// Generates a symbol ID from a pair of the coins
export function generateSymbol(
  exchange: any,
  fromSymbol: any,
  toSymbol: any
) {
  const short = `${fromSymbol}/${toSymbol}`;
  return {
    short,
    full: `${exchange}:${short}`,
  };
}

export function parseFullSymbol(fullSymbol: any) {
  const match = fullSymbol.split('/');
  if (!match) {
    return null;
  }
  return {
    exchange: match[1],
    fromSymbol: match[2],
    toSymbol: match[3],
  };
}
