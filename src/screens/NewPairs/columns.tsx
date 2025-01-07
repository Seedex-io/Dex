import { GridColDef } from '@mui/x-data-grid';
import formatNumberSmaller, { commaFormatted } from '../../utils/helpers/numberFormat';
import { TimeAgoCell } from '../../components/HelperComponents/TimeAgoCell';
import { getChainLogo, getChainNameById } from '../../utils/chains';

export const columns: GridColDef[] = [
  {
    field: 'baseSymbol',
    headerName: 'TOKEN',
    flex: 2,
    sortable: false,
    renderCell: (params: any) => (
      <div className="flex items-center space-x-2 text-white">
        <div className="relative w-10 h-10">
          {/* Token logo */}
          <img
            src={`https://dd.dexscreener.com/ds-data/tokens/${getChainNameById(params?.row?.chain)}/${params.row.baseHash}.png`}
            alt="icon"
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.onerror = null;
              imgElement.style.display = 'none';
              imgElement.parentElement?.insertAdjacentHTML(
                'beforeend',
                `<div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#ba5ae1]/90 to-[#4cc0ec]/90 flex items-center justify-center text-white font-bold">
                  ${params?.row?.baseSymbol?.charAt(0)}
                </div>`
              );
            }}
          />

          {/* Chain icon */}
          <img
            src={getChainLogo(params?.row?.chain)}
            alt="chain icon"
            className="w-4 h-4 rounded-full absolute bottom-0 right-0 bg-black p-[2px]"
          />
        </div>
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-bold">
              {params.row.baseName}
            </span>
            <span className="text-[#818ea3] text-xs leading-none font-normal overflow-hidden text-ellipsis whitespace-nowrap">
              / {params.row.quoteSymbol}
            </span>
          </div>
          <div className="text-sm ">
            {params?.row?.pairHash ? `${params.row.pairHash.slice(0, 4)}...${params.row.pairHash.slice(-4)}` : ''}
          </div>
        </div>
      </div>
    ),
  },
  {
    field: 'createdAt',
    headerName: 'CREATED AT',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_created_at">
        <TimeAgoCell timestamp={params.row.createdAt} />
      </div>
    ),
  },
  {
    field: 'volume',
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
    field: 'transactions',
    headerName: 'TXNS',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_volume_usd">
        {commaFormatted(params.row.transactions, 0)}
      </div>
    ),
  },
  {
    field: 'price',
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
    field: 'liquidity',
    headerName: 'LIQUIDITY',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_liquidity">
        <span className="dollar">$</span>
        {commaFormatted(params.row.liquidity, 0)}
      </div>
    ),
  },
  {
    field: 'marketCap',
    headerName: 'MARKET CAP',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_market_cap">
        <span className="dollar">$</span>
        {commaFormatted(params.row.marketCap, 0)}
      </div>
    ),
  },
  {
    field: 'fdMarketCap',
    headerName: 'FD MARKET CAP',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className="token_explorer_fd_market_cap">
        <span className="dollar">$</span>
        {commaFormatted(params.row.fdMarketCap, 0)}
      </div>
    ),
  },
  {
    field: 'pc5m',
    headerName: '5M CHANGE',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className={`token_explorer_pc5m ${params.row.pc5m >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {formatNumberSmaller(params.row.pc5m)}%
      </div>
    ),
  },
  {
    field: 'pc1h',
    headerName: '1H CHANGE',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className={`token_explorer_pc1h ${params.row.pc1h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {formatNumberSmaller(params.row.pc1h)}%
      </div>
    ),
  },
  {
    field: 'pc6h',
    headerName: '6H CHANGE',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className={`token_explorer_pc6h ${params.row.pc6h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {formatNumberSmaller(params.row.pc6h)}%
      </div>
    ),
  },
  {
    field: 'pc24h',
    headerName: '24H CHANGE',
    flex: 1,
    sortable: false,
    renderCell: (params: any) => (
      <div className={`token_explorer_pc24h ${params.row.pc24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {formatNumberSmaller(params.row.pc24h)}%
      </div>
    ),
  },
];