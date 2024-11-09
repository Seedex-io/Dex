import React from 'react';
import { commaFormatted } from '../../utils/helpers/numberFormat';
import Div from '../SimpleComponents/Div';
import Span from '../SimpleComponents/Span';
import themeTokenInfo from './theme';

export default function SwapTable(props: any) {
  const { token } = props;
  const renderItemList = (name: string, val: any) => {
    return (
      <Div className="price24h_itemlist">
        <Div sx={themeTokenInfo.price24h_itemlist.div}>{name}</Div>
        <Span sx={themeTokenInfo.price24h_itemlist.span}>{commaFormatted(val, 0)}</Span>
      </Div>
    );
  };
  return (
    token.price24h && (
      <Div className="price24h_list">
        {renderItemList('Buys', token.price24h?.buys)}
        {renderItemList('Sells', token.price24h?.sells)}
        {renderItemList('Vol.', token.volume24h)}
      </Div>
    )
  );
}
