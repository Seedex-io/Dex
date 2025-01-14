const SMALLNUMBERS: Record<string, string> = {
  0: '₀',
  1: '₁',
  2: '₂',
  3: '₃',
  4: '₄',
  5: '₅',
  6: '₆',
  7: '₇',
  8: '₈',
  9: '₉',
};

export function formatNumber(number: any, afterDot = 3) {
  if (number === undefined || number === null || number === '') {
    return '';
  }
  number = parseFloat(number) > 0 ? parseFloat(number) : parseFloat(number) * -1;

  if (number === 0) {
    return `${number}`;
  }
  if (number >= 1) {
    return commaFormatted(parseFloat(number).toFixed(afterDot));
  } else {
    return formatNumberSmaller(number, afterDot);
  }
}

export function commaFormatted(amount: any, decimal = 2) {
  amount = formatNumberSmaller(amount);
  var delimiter = ','; // replace comma if desired
  var a = amount.split('.', 2);
  var d = a[1];
  var i = parseInt(a[0]);
  if (isNaN(i)) {
    return '';
  }
  var minus = '';
  if (i < 0) {
    minus = '-';
  }
  i = Math.abs(i);
  var n = i + '';
  a = [];
  while (n.length > 3) {
    var nn = n.substr(n.length - 3);

    a.unshift(nn);
    n = n.substr(0, n.length - 3);
  }
  if (n.length > 0) {
    a.unshift(n);
  }
  n = a.join(delimiter);
  if (d.length < 1) {
    amount = n;
  } else {
    amount = n + (decimal === 0 ? '' : '.') + d.substring(0, decimal);
  }
  amount = minus + amount;

  return amount;
}

export function shortNumber(number: any, decimal = 2) {
  if (number === undefined || number === null || number === '') {
    return '';
  }
  number = parseFloat(number) > 0 ? parseFloat(number) : parseFloat(number) * -1;

  if (number === 0) {
    return `${number}`;
  }
  if (number < 1000) {
    return `${number.toFixed(decimal)}`;
  }
  if (number < 1000000) {
    return `${(number / 1000).toFixed(1)}K`;
  }
  if (number < 1000000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }
  if (number < 1000000000000) {
    return `${(number / 1000000000).toFixed(1)}B`;
  }
  if (number <= 9000000000000000) {
    return `${(number / 1000000000000).toFixed(0)}T`;
  }

  return `${number.toFixed(decimal)}`;
}

export default function formatNumberSmaller(number: any, afterDot = 3, removeNegativeSign = false) {
  // Handle cases where the input is undefined, null, or an empty string
  if (number === undefined || number === null || number === '') {
    return '-';
  }
  
  // Convert the input to a number (if it's not already a number)
  number = parseFloat(number);

  // For numbers greater than or equal to 1, format to the specified precision
  if (number >= 1) {
    return parseFloat(number).toFixed(afterDot);
  }

  // Handle numbers in scientific notation (e.g., `1.57e-10`) and very small values
  if (number.toString().indexOf('e') > -1 && number < 1) {
    number = number.toFixed(number.toString().split('e')[1] * -1);
  }

  // Extract the fractional part of the number (everything after the decimal point)
  let numberStr: any = `${number}`.split('.')[1];

  // If there's no fractional part or the first digit is not zero, format as a regular small number
  if (!numberStr || numberStr[0] !== '0') {
    let result = `${parseFloat(number).toFixed(afterDot)}`;
    if (removeNegativeSign) {
      result = result.replace('-', '');
    }
    return result;
  }

  let numberOfZero = 0;
  let numberNoZero = [];
  let numberList = numberStr.split('');
  for (let index = 0; index < numberList.length; index++) {
    const element = numberList[index];
    if (element !== '0') {
      numberOfZero = index;
      numberNoZero = numberList.slice(index, index + afterDot).join('');
      break;
    }
  }
  if (numberOfZero < 5) {
    return `${parseFloat(number).toFixed(numberOfZero + afterDot)}`;
  }

  const subscriptZeros = `${numberOfZero}`
    .split('') // Split the number into individual digits
    .map((digit) => SMALLNUMBERS[digit]) // Map each digit to its subscript equivalent
    .join(''); // Join the subscript characters

  return `0.0${subscriptZeros}${numberNoZero}`;
}

// format timestamp to date string
export function formatDate(timestamp: any) {
  // if timestamp is 2022-08-15T01:07:12.000Z then convert to timestamp
  if (timestamp && typeof timestamp === 'string' && timestamp.indexOf('T') > -1) {
    timestamp = new Date(timestamp).getTime() / 1000;
  }

  if (timestamp === undefined || timestamp === null || timestamp === '') {
    return '';
  }

  const date = new Date(timestamp * 1e3);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  // return like 2019-01-01 00:00:00 and add 0 if month or day or hour or minute or second is less than 10
  return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day} ${
    hour < 10 ? `0${hour}` : hour
  }:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;
}
