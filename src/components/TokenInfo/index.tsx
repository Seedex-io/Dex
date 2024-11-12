import { useEffect, useState } from 'react';
import { getInfo } from '../../api/getInfo';
import { formatNumber } from '../../utils/helpers/numberFormat';
import './styles.css';
import Div from '../SimpleComponents/Div';
import Header from './Header';
import General from './General';
import { BrowserView, MobileView } from 'react-device-detect';
import Img from '../SimpleComponents/Img';
import Button from '../Button';
import logoMain from '../../assets/logo.png';

export default function TokenInfo(props: any) {
  const { visible, onSetAddress, onSetAddressFinish } = props;
  const [token, setToken] = useState<any>({});
  const [showMore, setShowMore] = useState(0);
  const [error, setError] = useState<string | null>(null); // Error state to track fetch failures
  const [loading, setLoading] = useState<boolean>(false); // Loading state to manage loading behavior

  const setInfo = async () => {
    setLoading(true); // Set loading to true when starting the API call
    try {
      const data = await getInfo();
      if (data) {
        setToken(data);
        onSetAddress(data.pairAddress, data.symbol, data.tokenAddress);
        document.title = `${data.symbol} - $${formatNumber(data.price)}, ${data.name}`;
        onSetAddressFinish();
        setError(null); // Clear any previous errors
      }
    } catch (err) {
      setError('Failed to fetch token info. Retrying...');
    } finally {
      setLoading(false); // Set loading to false after the API call is complete
    }
  };

  useEffect(() => {
    setInfo(); // Fetch token info on mount

    // If an error occurs, attempt to refetch every 60 seconds
    const interval = setInterval(() => {
      if (error) {
        setInfo(); // Retry fetch only if there was an error
      }
    }, 60000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [error]); // Dependency on error to trigger refetch in case of failure

  const renderSimpleInfo = () => (
    <Div className="flex items-center gap-3 px-3 py-2 md:border-l-2 md:py-3 border-fuchsia-400 bg-fuchsia-950/20 border-l rounded-sm">
      <Img className="relative rounded-full mb-2 ml-1.5 h-[36px] w-[36px] border-2 sm:h-[42px] sm:w-[42px]" src={token.logo || logoMain} alt={token.symbol} />
      <div className="ml-1 min-w-0 flex-1 flex flex-col md:ml-2">
        <div className='flex justify-between items-center gap-2'>
          <div className="flex items-center text-white gap-1 max-w-[200px] pr-1 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className='text-[1.1em] font-bold leading-tight'>{token.baseToken.name}</span>
            <span className='text-[1.1em] font-normal leading-tight'>/ {token.quoteToken.symbol}</span>
          </div>
          <span className={`text-xl font-bold ${token.price24hChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
            <span className='text-[16px] inline-flex gap-[1px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap leading-[1.3] rounded-[6px]'><span className='opacity-60'>$</span>{formatNumber(token.price)}</span>
          </span>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <div className="flex items-center text-white gap-1 max-w-[200px] pr-1 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className='text-[0.9em] opacity-70 text-white leading-[1.1em] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap'>{token.baseToken.symbol}</span>
          </div>
          <span className={`text-xl font-bold ${token.price24hChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
            <span className='text-sm leading-[1.43] font-medium overflow-hidden text-ellipsis whitespace-nowrap'> 
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className={`inline-block items-center justify-center ${token.price24hChange > 0 ? '' : 'rotate-180'}`}  height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 15h14l-7-8z"></path></svg> 
              {formatNumber(token.price24hChange)}%
            </span>
          </span>
        </div>
      </div>
    </Div>
  );

  const renderShowMoreButtons = () => (
    <Div className="token_info__show_more_buttons flex justify-between mt-5">
      <Button title="About" onClick={() => setShowMore(showMore === 1 ? 0 : 1)} focus={showMore === 1} />
      <Button title="More Info" onClick={() => setShowMore(showMore === 2 ? 0 : 2)} focus={showMore === 2} />
    </Div>
  );

  const renderShowMoreOptions = () => {
    switch (showMore) {
      case 1:
        return <Header token={token} setToken={setToken} />;
      case 2:
        return <General token={token} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-h-full overflow-y-auto px-5 py-4 border-l-[#651e6e] flex flex-1 flex-col gap-3 pb-1 md:border-l md:pb-6 text-white">
      {visible && (
        <>
          {renderSimpleInfo()}
          <MobileView>
            {renderShowMoreButtons()}
            {renderShowMoreOptions()}
          </MobileView>
          <BrowserView>
            <Header token={token} setToken={setToken} />
            <General token={token} />
          </BrowserView>
        </>
      )}
      {loading && <div className="loading">Loading...</div>}  {/* Display loading state */}
      {error && <div className="error">{error}</div>}  {/* Display error state */}
    </div>
  );
}
