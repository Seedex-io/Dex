import Div from '../SimpleComponents/Div';
import PoolInfo from './PoolInfo';
import PriceChange from './PriceChange';
import SwapTable from './SwapTable';
import themeTokenInfo from './theme';

export default function General(props: any) {
  const { token } = props;

  const renderDescription = () => {
    return (
      <Div className="token_info__description">
        <Div
          className="token_info__description__title"
          sx={themeTokenInfo.token_info__description.title}
        >
          {token.name} ({token.symbol})
        </Div>
        <Div
          className="token_info__description__text"
          sx={themeTokenInfo.token_info__description.description}
        >
          {token.description ? token.description : 'No description'}
        </Div>
      </Div>
    );
  };

  return (
    <>
      <Div className="token_info__general_container">
        <Div className="token_info__changes">
          <PriceChange change={token.price5mChange} tm="5m" />
          <PriceChange change={token.price15mChange} tm="15m" />
          <PriceChange change={token.price30mChange} tm="30m" />
          <PriceChange change={token.price1hChange} tm="1h" />
          <PriceChange change={token.price2hChange} tm="2h" />
          <PriceChange change={token.price4hChange} tm="4h" />
          <PriceChange change={token.price6hChange} tm="6h" />
          <PriceChange change={token.price12hChange} tm="12h" />
          <PriceChange change={token.price24hChange} tm="24h" />
        </Div>
        <SwapTable token={token} />
        <PoolInfo token={token} />
        {/* <Score score={token.dextScore?.total} name={token.name} /> */}
        {renderDescription()}
      </Div>
    </>
  );
}
