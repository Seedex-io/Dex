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
    getTrending().then((res) => {
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
                onError={(e) => {
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.onerror = null;
                  imgElement.style.display = 'none';
                  imgElement.parentElement?.insertAdjacentHTML(
                    'beforeend',
                    `<div class="w-6 h-6 rounded-full bg-gradient-to-r from-[#ba5ae1]/90 to-[#4cc0ec]/90 flex items-center justify-center text-white font-bold">
                  ${val.baseSymbol.charAt(0)}
                </div>`
                  );
                }}
              />
            </li>
          ))}
        </Div>
      </ul>
    </Div>
  );
}
