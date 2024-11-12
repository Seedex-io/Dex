import { useEffect, useState } from 'react';
import TVChartContainer from './TradingView';
import TokenTransaction from '../TransactionTable';
import TokenInfo from '../TokenInfo';
import Loading from '../Loading';
import Div from '../SimpleComponents/Div';
import Trending from '../Trending';
import { BrowserView } from 'react-device-detect';
import { scanHoneypot } from '../../api/honeyPot';

export default function Chart(props: any) {
  const [token, setToken] = useState<any>(null);
  const [address, setAddress] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const chain = window.location.pathname.split('/')[1].split('-')[1];
  const { setHoneypot } = props;

  useEffect(() => {
    if (address) {
      scanHoneypot(address, chain).then((res: any) => {
        if (res) {
          setHoneypot(res.IsHoneypot);
        }
      });
    }
    // eslint-disable-next-line
  }, [address, chain]);

  return (
    <div className="relative h-screen w-full border-t border-[#651e6e] flex flex-col md:grid md:grid-cols-[1fr,420px] gap-3 p-2">
      {loading && <Loading />}

      {/* Left Side: Chart and Transaction Table */}
      <div className="flex flex-col max-h-full flex-1 overflow-hidden">
        <div className="flex-grow">
          {address && (
            <>
              <TVChartContainer currency={'USD'} theme={'Dark'} symbol={`${address}`} />
              <TokenTransaction theme={props.theme} token={token} address={address} />
            </>
          )}
        </div>
      </div>

      {/* Right Side: Token Info (Scrollable) */}
      <div className="max-h-full overflow-y-auto">
        <TokenInfo
          theme={props.theme === 'dark'}
          onSetAddress={(address: string, name: string, token: string) => {
            if (chain === 'solana') {
              setAddress(name);
            } else {
              setAddress(address);
              setToken(token);
            }
          }}
          onSetAddressFinish={() => {
            setLoading(false);
          }}
          visible={!loading}
        />
      </div>
    </div>
  );
}
