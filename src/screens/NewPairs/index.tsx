// NewPairs.tsx

import { useEffect, useState } from 'react';
import { BrowserView } from 'react-device-detect';
import LeftNavbar from '../../components/LeftNavbar';
import Div from '../../components/SimpleComponents/Div';
import SearchBar from '../../components/SearchBar';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './columns';
import { getNewPairs } from '../../api/tickerApi';
import './style.css';
import themeNewPairs from './theme';
import Filters from './filters';
import WarningMessage from '../../components/WarningMsg';

interface Token {
  id: string;
  symbol: string;
  pairAddress: string;
  price: number;
  pool_created_at: string;
  volume: number;
  last_5m: string;
  last_1h: string;
  last_6h: string;
  last_24h: string;
  liquidity: number;
  fdv: number;
  marketCap: number;
  txs: number;
  image?: string;
}

interface FilterCriteria {
  minVolume: number | null;
  maxVolume: number | null;
  minPrice: number | null;
  maxPrice: number | null;
  minLiquidity: number | null;
  maxLiquidity: number | null;
  minFDV: number | null;
  maxFDV: number | null;
  dateRange: { start: string | null; end: string | null };
  minLast5mChange: number | null;
  maxLast5mChange: number | null;
  minLast1hChange: number | null;
  maxLast1hChange: number | null;
  minLast6hChange: number | null;
  maxLast6hChange: number | null;
  minLast24hChange: number | null;
  maxLast24hChange: number | null;
}

export default function NewPairs(props: any) {
  const { theme, mobile } = props;
  const [style, setStyle] = useState<any>({});
  const [tokens, setTokens] = useState<Token[]>([]);
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  // Temporary state for filter inputs
  const [tempFilters, setTempFilters] = useState<FilterCriteria>({
    minVolume: null,
    maxVolume: null,
    minPrice: null,
    maxPrice: null,
    minLiquidity: null,
    maxLiquidity: null,
    minFDV: null,
    maxFDV: null,
    dateRange: { start: null, end: null },
    minLast5mChange: null,
    maxLast5mChange: null,
    minLast1hChange: null,
    maxLast1hChange: null,
    minLast6hChange: null,
    maxLast6hChange: null,
    minLast24hChange: null,
    maxLast24hChange: null,
  });

  const [filters, setFilters] = useState<FilterCriteria>(tempFilters);

  useEffect(() => {
    getNewPairs().then((data: Token[]) => {
      setTokens(data);
      setFilteredTokens(data);
    });
  }, []);

  useEffect(() => {
    if (mobile) {
      setStyle((stl: any) => ({
        ...stl,
        width: '100%',
        padding: '0px',
      }));
    }
  }, [mobile]);

  const handleToggleNavbar = (open: boolean) => {
    setIsNavbarOpen(open);
  };

  const applyFilters = () => {
    setFilteredTokens(
      tokens.filter((token) => {
        const meetsVolume = filters.minVolume === null || token.volume >= filters.minVolume;
        const meetsPrice = filters.maxPrice === null || token.price <= filters.maxPrice;
        const meetsLiquidity = filters.minLiquidity === null || token.liquidity >= filters.minLiquidity;
        const meetsFDV = filters.minFDV === null || token.fdv >= filters.minFDV;

        const meetsLast5mChange = filters.minLast5mChange === null || parseFloat(token.last_5m) >= filters.minLast5mChange;
        const meetsLast1hChange = filters.minLast1hChange === null || parseFloat(token.last_1h) >= filters.minLast1hChange;
        const meetsLast6hChange = filters.minLast6hChange === null || parseFloat(token.last_6h) >= filters.minLast6hChange;
        const meetsLast24hChange = filters.minLast24hChange === null || parseFloat(token.last_24h) >= filters.minLast24hChange;

        const meetsDateRange =
          (!filters.dateRange.start || new Date(token.pool_created_at) >= new Date(filters.dateRange.start)) &&
          (!filters.dateRange.end || new Date(token.pool_created_at) <= new Date(filters.dateRange.end));

        return (
          meetsVolume &&
          meetsPrice &&
          meetsLiquidity &&
          meetsFDV &&
          meetsLast5mChange &&
          meetsLast1hChange &&
          meetsLast6hChange &&
          meetsLast24hChange &&
          meetsDateRange
        );
      })
    );
  };

  const handleChangeTheme = () => {
    window.location.reload();
  };

  const updateTempFilter = (key: keyof FilterCriteria, value: any) => {
    setTempFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApplyFilters = () => {
    setFilters(tempFilters);
    applyFilters();
  };

  return (
    <>
      <BrowserView>
        <LeftNavbar onToggle={handleToggleNavbar}/>
      </BrowserView>
      <div className={`${isNavbarOpen? 'ml-56':'ml-[65px]'}`}>
        <SearchBar theme={theme} onChangeTheme={handleChangeTheme} />

        <div className='px-3'>

        <Filters filters={tempFilters} onFilterChange={updateTempFilter} onApply={handleApplyFilters} />

        <WarningMessage />

        <Div style={style} className="border-l-2 border-[#e867ea] rounded-[8px]" sx={themeNewPairs.container}>
          <div style={{ height: '1050px', overflowY: 'auto' }}>
          <DataGrid
              rows={filteredTokens}
              columns={columns}
              getRowId={(row: Token) => row.id}
              pageSize={filteredTokens.length}
              rowsPerPageOptions={[]}
              disableColumnMenu
              hideFooterPagination
              headerHeight={40}

              classes={{
                columnHeader: 'flex items-center py-2 pl-3 pr-2 sm:py-3 border-r border-[rgb(74,42,80)]/40',
                columnHeaderTitleContainer: 'token_explorer_column_header_title_container ',
                columnHeaders: 'token_explorer_column_headers ',
                cell: 'token_explorer_cell',
                row: 'token_explorer_row',
                columnSeparator: 'token_explorer_column_separator',
                root: 'token_explorer_table_root',
                footerContainer: 'token_explorer_footer_container',
              }}
              onCellClick={(params) => {
                window.open(`/${params.row.pairAddress}-ether`, '_self');
              }}
              className="overflow-hidden"
            />
          </div>
        </Div>
        </div>
        <div className="h-10"></div>
      </div>
    </>
  );
}
