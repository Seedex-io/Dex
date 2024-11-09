import { GridColDef } from '@mui/x-data-grid';
import Div from '../../components/SimpleComponents/Div';
import { Tooltip } from '@mui/material';
import { Cancel, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import TokenChain from '../../components/TokenChain';
import formatNumberSmaller from '../../utils/helpers/numberFormat';
import CopyText from '../../components/CopyText';
import Span from '../../components/SimpleComponents/Span';
import Img from '../../components/SimpleComponents/Img';

export const columns: GridColDef[] = [
  {
    field: 'actions_favourite',
    headerName: 'Actions',
    width: 80,
    sortable: false,
    renderCell: (params: any) => (
      <Div
        className="favourites_delete"
        onClick={(event: any) => {
          event.stopPropagation();
          // deleteToken(params.row.pair, params.row.chain);
        }}
      >
        <Tooltip
          title="Remove from favourites"
          placement="left"
          arrow
          classes={{
            tooltip: 'tooltip',
          }}
        >
          <Cancel fontSize="small" />
        </Tooltip>
      </Div>
    ),
  },
  {
    field: 'symbol',
    headerName: 'Pair',
    minWidth: 200,
    flex: 1,
    sortable: false,

    renderCell: (params: any) => (
      <Div className="favourites_symbol">
        <Img src={params.row.logo} alt="icon" className="favourites_symbol_icon" />
        <Div className="favourites_symbol_name_container">
          <Span className="favourites_symbol_name">
            {params.row.symbol}/{params.row.symbolRef}
          </Span>
          <CopyText text={params.row.pair} />
        </Div>
      </Div>
    ),
  },
  {
    field: 'price_usd',
    headerName: 'Price',
    minWidth: 160,
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <Div className="favourites_price_usd">
        <span className="dollar">$</span>
        {formatNumberSmaller(params.row.price)}
      </Div>
    ),
  },
  {
    field: 'price_change',
    headerName: '24H Change',
    minWidth: 120,
    flex: 1,
    sortable: false,
    renderCell: (params: any) => {
      let chng = Number.parseFloat(params.row.change) > 0;
      return (
        <Div className={`favourites_price_move  ${chng ? 'favourites_up' : 'favourites_down'}`}>
          {chng ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />}
          {formatNumberSmaller(params.row.change, 2, true)}%
        </Div>
      );
    },
  },
  {
    field: 'token_chain',
    headerName: 'Chain',
    minWidth: 200,
    flex: 1,
    sortable: false,
    renderCell: (params: any) => <TokenChain chain={params.row.chain} />,
  },
];
