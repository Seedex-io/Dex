import { GridColDef } from '@mui/x-data-grid';
import formatNumberSmaller, { commaFormatted } from '../../utils/helpers/numberFormat';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import CopyText from '../../components/CopyText';
import InitialIcon from '../../components/HelperComponents/InitialIcon';
import { TimeAgoCell } from '../../components/HelperComponents/TimeAgoCell';

export const columns: GridColDef[] = [
  {
    field: 'symbol',
    headerName: 'TOKEN',
    flex: 2,
    sortable: false,
    renderCell: (params: any) => (
      <div className="flex items-center space-x-2 text-white">
        {/* Image or Gradient Background */}
        {params && params.row && params.row.image && !params.row.image.includes('missing') ? (
          <img
            src={params.row.image}
            alt="icon"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ba5ae1]/90 to-[#4cc0ec]/90 flex items-center justify-center text-white font-bold">
            {params.row.symbol?.charAt(0)}
          </div>
        )}

        {/* Token symbol and name */}
        <div>
          <div className="flex items-center space-x-1">
            {/* Base Token */}
            <span className="font-bold">
              {params.row.tokenName.split(' / ')[0]}
            </span>

            {/* Quote Token */}
            <span className="text-[#818ea3] text-xs leading-none font-normal overflow-hidden text-ellipsis whitespace-nowrap">
              / {params.row.tokenName.split(' / ')[1]}
            </span>
          </div>
          <div className="text-sm ">
            {params?.row?.pairAddress ? `${params.row.pairAddress.slice(0, 4)}...${params.row.pairAddress.slice(-4)}` : ''}
          </div>
        </div>
      </div>
    ),
  },
  {
    field: 'pool_created_at',
    headerName: 'PAIR AGE',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_pool_created_at">
        <TimeAgoCell timestamp={params.row.pool_created_at} />
      </div>
    ),
  },
  {
    field: 'volume_usd',
    headerName: '24h VOLUME',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_volume_usd">
        <span className="dollar">$</span>
        {commaFormatted(params.row.volume, 0)}
      </div>
    ),
  },
  {
    field: '24h Transactions',
    headerName: 'TXNS',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_volume_usd">
        {commaFormatted(params.row.txs, 0)}
      </div>
    ),
  },
  {
    field: 'price_usd',
    headerName: 'PRICE (USD)',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_price_usd">
        <span className="dollar">$</span>
        {formatNumberSmaller(params.row.price, 2)}
      </div>
    ),
  },
  {
    field: 'last_5m',
    headerName: '5m',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div
        className={`token_explorer_price_move ${params.row.last_5m.includes('+') ? 'token_explorer_up' : 'token_explorer_down'
          }`}
      >
        {params.row.last_5m.includes('+') ? (
          <KeyboardArrowUp fontSize="small" />
        ) : (
          <KeyboardArrowDown fontSize="small" />
        )}
        {params.row.last_5m}
      </div>
    ),
  },
  {
    field: 'last_1h',
    headerName: '1H',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div
        className={`token_explorer_price_move ${params.row.last_1h.includes('+') ? 'token_explorer_up' : 'token_explorer_down'
          }`}
      >
        {params.row.last_1h.includes('+') ? (
          <KeyboardArrowUp fontSize="small" />
        ) : (
          <KeyboardArrowDown fontSize="small" />
        )}
        {params.row.last_1h}
      </div>
    ),
  },
  {
    field: 'last_6h',
    headerName: '6H',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div
        className={`token_explorer_price_move ${params.row.last_6h.includes('+') ? 'token_explorer_up' : 'token_explorer_down'
          }`}
      >
        {params.row.last_6h.includes('+') ? (
          <KeyboardArrowUp fontSize="small" />
        ) : (
          <KeyboardArrowDown fontSize="small" />
        )}
        {params.row.last_6h}
      </div>
    ),
  },
  {
    field: 'last_24h',
    headerName: '24H',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div
        className={`token_explorer_price_move ${params.row.last_24h.includes('+') ? 'token_explorer_up' : 'token_explorer_down'
          }`}
      >
        {params.row.last_24h.includes('+') ? (
          <KeyboardArrowUp fontSize="small" />
        ) : (
          <KeyboardArrowDown fontSize="small" />
        )}
        {params.row.last_24h}
      </div>
    ),
  },
  {
    field: 'liquidity',
    headerName: 'LIQUIDITY',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_price_usd">
        <div>
          <span className="dollar">$</span>
          {params.row.liquidity ? commaFormatted(parseFloat(params.row.liquidity)) : "NAN"}
        </div>
      </div>
    ),
  },
  {
    field: 'fdv',
    headerName: 'FDV',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_price_usd">
        <div>
          <span className="dollar">$</span>
          {commaFormatted(params.row.fdv)}
        </div>
      </div>
    ),
  },
  {
    field: 'marketCap',
    headerName: 'MCAP',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_price_usd">
        <div>
          <span className="dollar">$</span>
          {params.row.marketCap ? commaFormatted(params.row.marketCap) : "   -"}
        </div>
      </div>
    ),
  },
];
