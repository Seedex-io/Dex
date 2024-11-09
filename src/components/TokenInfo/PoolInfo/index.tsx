import { timeFormat } from '../../../utils/time';
import Div from '../../SimpleComponents/Div';
import themeTokenInfo from '../theme';
import PoolInfoItems from './PoolInfoItems';
import PoolTaxGas from './PoolTaxGas';
import './style.css';
export default function PoolInfo(props: any) {
  const { token } = props;

  return (
    <Div className="token_info__general">
      <PoolInfoItems val={token.liquidity} name="Total liquidity:" locks={token.locks} />
      <PoolInfoItems val={token.volume24h} name="24h volume:" />
      <Div
        className="token_info__general__item_honeyscan"
        sx={themeTokenInfo.token_info__general__item_honeyscan}
      >
        <PoolTaxGas val={token.honeypot?.BuyTax} name="Buy Tax" />
        <PoolTaxGas val={token.honeypot?.SellTax} name="Sell Tax" />
        <PoolTaxGas val={token.honeypot?.BuyGas} name="Buy Gas" />
        <PoolTaxGas val={token.honeypot?.SellGas} name="Sell Gas" />
      </Div>
      <PoolInfoItems val={token.reserveRef} name="Pooled WETH:" />
      <PoolInfoItems val={token.reserve} name="Pooled X:" />
      <PoolInfoItems val={token.txCount} name="Total tx:" />

      <PoolInfoItems val={timeFormat(token.creationTime)} name="Pool created:" type={'time'} />
      <PoolInfoItems val={token.totalSupply} name="Total Supply:" />
      <PoolInfoItems val={token.maxSupply} name="Max Supply:" />
      <PoolInfoItems val={token.holders} name="Holders:" />
    </Div>
  );
}
