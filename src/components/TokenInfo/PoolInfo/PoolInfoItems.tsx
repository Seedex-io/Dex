import { Lock } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import React from 'react';
import { shortNumber } from '../../../utils/helpers/numberFormat';
import Div from '../../SimpleComponents/Div';
import Span from '../../SimpleComponents/Span';
import themeTokenInfo from '../theme';

export default function PoolInfoItems(props: any) {
  const { val, name, locks, text, type } = props;

  const renderToolTip = () => {
    const locked = locks && locks[0];
    return (
      <Tooltip
        title={locked ? 'Liquidity and supply locks' : 'Liquidity and supply locks are not checked'}
        placement="right"
        arrow
        classes={{
          tooltip: 'tooltip',
        }}
      >
        <Lock color={locked ? 'success' : 'disabled'} fontSize="small" />
      </Tooltip>
    );
  };
  return val !== undefined ? (
    <Div className="token_info__general__item" sx={themeTokenInfo.token_info__general__item}>
      <Div sx={themeTokenInfo.token_info__general__item.div}>{name}</Div>
      <Span sx={themeTokenInfo.token_info__general__item.span}>
        {!(text || type) ? shortNumber(val) : val}
      </Span>
      {locks && renderToolTip()}
    </Div>
  ) : (
    <></>
  );
}
