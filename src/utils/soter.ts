export const sortByBuyandSell = (val: any, nextVal: any) => {
  if (val === 'buy' && nextVal === 'sell') {
    return -1;
  }
  if (val === 'sell' && nextVal === 'buy') {
    return 1;
  }
  return 0;
};
