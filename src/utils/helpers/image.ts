import { Buffer } from 'buffer';
// function to convert binary raw data string to base64
export const convertToBase64 = (data: string) => {
  return Buffer.from(data).toString('base64');
};
