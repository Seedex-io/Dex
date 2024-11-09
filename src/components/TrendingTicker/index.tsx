import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { searchToken } from '../../api/search';
import { getTrending } from '../../api/tickerApi';
import { formatNumber } from '../../utils/helpers/numberFormat';
import Div from '../SimpleComponents/Div';
import Img from '../SimpleComponents/Img';
import logo from '../../assets/logo.png';

import './styles.css';
import themeTicker from './theme';
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
                icon={val.change > 0 ? faAngleUp : faAngleDown}
                color={val.change > 0 ? 'green' : 'red'}
              />
              <Div
                style={{
                  color: val.change > 0 ? 'green' : 'red',
                }}
              >
                ${`${formatNumber(val.price)}`}
              </Div>
              <Div>{`${val.symbol}`}</Div>
              <Img src={val.src ? val.src : logo} alt="" className="imgTrending" />
            </li>
          ))}
        </Div>
      </ul>
    </Div>
  );
}
