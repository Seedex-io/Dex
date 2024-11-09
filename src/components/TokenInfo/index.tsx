import { useEffect, useState } from 'react';
import { getInfo } from '../../api/getInfo';
import { formatNumber } from '../../utils/helpers/numberFormat';
import './styles.css';
import Div from '../SimpleComponents/Div';
import themeTokenInfo from './theme';
import Header from './Header';
import General from './General';
import { BrowserView, MobileView } from 'react-device-detect';
import Favourite from './Favourite';
import Img from '../SimpleComponents/Img';
import Button from '../Button';
import logoMain from '../../assets/logo.png';
export default function TokenInfo(props: any) {
  const { visible, onSetAddress, onSetAddressFinish } = props;
  const [token, setToken] = useState<any>({});
  const [showMore, setShowMore] = useState(0);
  const setInfo = () => {
    getInfo()
      .then((data: any) => {
        if (data) {
          setToken(data);
          onSetAddress(data.pairAddress, data.symbol, data.tokenAddress);
          document.title = `${data.symbol} - $${formatNumber(data.price)}, ${data.name}`;
          onSetAddressFinish();
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    setInfo();
    const interval = setInterval(() => {
      setInfo();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const renderSimpleInfo = () => {
    return (
      <Div className="token_info__header__title" sx={themeTokenInfo.token_info__header__title}>
        <Img className="token_info__header__logo" src={token.logo ? token.logo : logoMain} alt="" />
        <Div className="token_info__header__name" sx={themeTokenInfo.token_info__header__name}>
          {token.symbol}
        </Div>
        <Div
          sx={
            themeTokenInfo[`token_info__header__price__${token.price24hChange > 0 ? 'up' : 'down'}`]
          }
          className="token_info__header__price"
        >
          ${formatNumber(token.price)}
        </Div>
        <Favourite token={token} setToken={setToken} />
      </Div>
    );
  };

  const renderShowMoreButtons = () => {
    const setShowMoreOptions = (key: number) => {
      if (showMore === key) {
        setShowMore(0);
      } else {
        setShowMore(key);
      }
    };
    return (
      <Div
        className="token_info__show_more_buttons"
        sx={themeTokenInfo.token_info__show_more_buttons}
      >
        <Button title="About" onClick={() => setShowMoreOptions(1)} focus={showMore === 1} />
        <Button title="More Info" onClick={() => setShowMoreOptions(2)} focus={showMore === 2} />
      </Div>
    );
  };

  const renderShowMoreoptions = () => {
    switch (showMore) {
      case 0:
        return <></>;
      case 1:
        return <Header token={token} setToken={setToken} />;
      case 2:
        return <General token={token} />;
      default:
        return <></>;
    }
  };

  return (
    <Div className="token_info" sx={themeTokenInfo.token_info}>
      {visible && (
        <>
          {renderSimpleInfo()}
          <MobileView>
            {renderShowMoreButtons()}
            {renderShowMoreoptions()}
          </MobileView>
          <BrowserView>
            <Header token={token} setToken={setToken} />
            <General token={token} />
          </BrowserView>
        </>
      )}
    </Div>
  );
}
