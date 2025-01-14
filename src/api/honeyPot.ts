import { API } from './constants';

export async function scanHoneypot(address: any, chain: string) {
  const url = `${API}/scan-honeypot?chain=${chain}&token=${address.split('-')[0]}`;

  const res = await fetch(url);
  return await res.json();
}
