import React from 'react';
import { formatNumber } from '../../utils/helpers/numberFormat';
import Div from '../SimpleComponents/Div';
import themeTokenInfo from './theme';
export default function PriceChange(props: any) {
  const { change, tm } = props;

  return change || change === 0 ? (
    <Div
      sx={
        themeTokenInfo[
          Number(change) > 0 ? 'token_info__changes__item__up' : 'token_info__changes__item__down'
        ]
      }
    >
      <Div>
        {Number(change) > 0 ? '' : '-'}
        {formatNumber(change, 2)}%
      </Div>
      <Div>{tm}</Div>
    </Div>
  ) : (
    <></>
  );
}
