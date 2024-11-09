import { shortNumber } from '../../../utils/helpers/numberFormat';
import Div from '../../SimpleComponents/Div';
import Span from '../../SimpleComponents/Span';
import './style.css';
export default function PoolTaxGas(props: any) {
  const { val, name } = props;
  return val !== undefined ? (
    <Div className="token_info__general__item_honeyscan_item">
      <Div>{name}</Div>
      <Span>{shortNumber(val)}</Span>
    </Div>
  ) : (
    <></>
  );
}
