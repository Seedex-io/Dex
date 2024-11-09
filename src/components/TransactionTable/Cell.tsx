import React from 'react';
import Div from '../SimpleComponents/Div';
import themeTransactionTable from './theme';

export default function Cell(props: any) {
  const { row, type, fontSize, nocolor } = props;
  return (
    <Div className={'cellContent'} sx={themeTransactionTable.cell}>
      <Div
        className={`${nocolor ? '' : type === 'buy' ? 'cellContent_buy' : 'cellContent_sell'}`}
        style={{ fontSize: fontSize }}
      >
        {row}
      </Div>
    </Div>
  );
}
