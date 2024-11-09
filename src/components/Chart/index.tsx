import React, { useEffect, useState } from 'react';
import './styles.css';
import TVChartContainer from './TradingView';
import TokenTransaction from '../TransactionTable';
import TokenInfo from '../TokenInfo';
import Loading from '../Loading';
import Div from '../SimpleComponents/Div';
import themeChart from './theme';
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
    <Div className="chart" sx={themeChart.tv}>
      {loading && <Loading />}

      <Div className="tradingview_container" sx={themeChart.tradingview_container}>
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
        <Div className="tvwrapper" sx={themeChart.tv}>
          {address && (
            <>
              <TVChartContainer currency={'USD'} theme={'Dark'} symbol={`${address}`} />
              <TokenTransaction theme={props.theme} token={token} address={address} />
            </>
          )}
        </Div>
        <BrowserView>
          <Trending />
        </BrowserView>
      </Div>
    </Div>
  );
}
