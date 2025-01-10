import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { searchToken } from '../../api/search';
import { getTrending } from '../../api/tickerApi';
import { formatNumber } from '../../utils/helpers/numberFormat';
import Div from '../SimpleComponents/Div';
import './styles.css';
import themeTicker from './theme';
import { getChainNameById } from '../../utils/chains';


export default function TrendingTicker(props: any) {
  const { title, className } = props;
  const [data, setdata] = useState<any>([]);

  const trendingApi2 = async () => {
    getTrending(0).then((res) => {
      res = res.slice(0, 20);
      setdata(res);
    });
  };
  useEffect(() => {
    trendingApi2();

    const interval = setInterval(() => {
      trendingApi2();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Div className={`ticker ${className}`} sx={themeTicker.ticker}>
      <Div className="ticker__title">
        <Div>{title}</Div>
      </Div>
      <ul id="ul1">
        <Div className="scroll_span">
          {data.map((val: any, i: any) => (
            <li
              key={i}
              onClick={() =>
                searchToken(val.address).then((data: any) => {
                  window.open(`/${data[0].pairAddress}-ether`, '_self');
                })
              }
            >
              <Div>#{i + 1}</Div>
              <FontAwesomeIcon
                icon={val.pc24h > 0 ? faAngleUp : faAngleDown}
                color={val.pc24h > 0 ? 'green' : 'red'}
              />
              <Div
                style={{
                  color: val.pc24h > 0 ? 'green' : 'red',
                }}
              >
                ${`${formatNumber(val.price)}`}
              </Div>
              <Div>{`${val.baseSymbol}`}</Div>
              <img
                src={`https://dd.dexscreener.com/ds-data/tokens/${getChainNameById(val.chain)}/${val.baseHash}.png`}
                alt="icon"
                className="w-6 h-6 rounded-full"
              />
            </li>
          ))}
        </Div>
      </ul>
    </Div>
  );
}
