import { useEffect, useState } from 'react';
import LeftNavbar from '../../components/LeftNavbar';
import Div from '../../components/SimpleComponents/Div';
import SearchBar from '../../components/SearchBar';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './columns';
import { getTrending } from '../../api/tickerApi';
import './style.css';
import themeNewPairs from './theme';
import Filters from './filters';
import WarningMessage from '../../components/WarningMsg';
import Error from '../../components/error';
import { getChainNameById } from '../../utils/chains';

interface Token {
  chain: number;
  pairHash: string;
  baseHash: string;
  baseSymbol: string;
  baseName: string;
  baseIconTs: number;
  socials: any;
  verified: any;
  quoteHash: string;
  quoteSymbol: string;
  quoteName: string;
  quoteIconTs: number;
  dexHash: string;
  dexName: string;
  dexIconTs: number;
  price: string;
  createdAt: number;
  discoveredAt: any;
  liquidity: string;
  marketCap: string;
  fdMarketCap: string;
  volume: string;
  transactions: number;
  makers: number;
  pc5m: number;
  pc1h: number;
  pc6h: number;
  pc24h: number;
}

interface FilterCriteria {
  chainId: number | null;
  timeRange: string;
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
  minTransactions: number | null;
  maxTransactions: number | null;
}

export default function TrendingPage(props: any) {
  const { theme, mobile } = props;
  const [style, setStyle] = useState<any>({});
  const [tokens, setTokens] = useState<Token[]>([]);
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [tempFilters, setTempFilters] = useState<FilterCriteria>({
    chainId: null,
    timeRange: '24h',
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
    minTransactions: null,
    maxTransactions: null,
  });

  const [filters, setFilters] = useState<FilterCriteria>(tempFilters);

  useEffect(() => {
    fetchTokens();
  }, [filters.chainId]);

  const fetchTokens = async () => {
    setLoading(true);
    const chainId = filters.chainId !== null ? filters.chainId : 0;
    const data = await getTrending(chainId);
    setTokens(data);
    setFilteredTokens(data);
    setLoading(false);
  };

  useEffect(() => {
    if (mobile) {
      setStyle((stl: any) => ({
        ...stl,
        width: '100%',
        padding: '0px',
      }));
    }
  }, [mobile]);

  const matchesFilter = (token: Token, filters: FilterCriteria): boolean => {
    const {
      minVolume,
      maxVolume,
      minPrice,
      maxPrice,
      minLiquidity,
      maxLiquidity,
      minLast5mChange,
      maxLast5mChange,
      minLast1hChange,
      maxLast1hChange,
      minLast6hChange,
      maxLast6hChange,
      minLast24hChange,
      maxLast24hChange,
      minFDV,
      maxFDV,
      dateRange,
      minTransactions,
      maxTransactions,
    } = filters;

    const withinRange = (value: number | null, min: number | null, max: number | null): boolean =>
      (min === null || (value ?? Number.MIN_VALUE) >= min) &&
      (max === null || (value ?? Number.MAX_VALUE) <= max);

    return (
      withinRange(parseFloat(token.volume), minVolume, maxVolume) &&
      withinRange(parseFloat(token.price), minPrice, maxPrice) &&
      withinRange(parseFloat(token.liquidity), minLiquidity, maxLiquidity) &&
      withinRange(token.pc5m, minLast5mChange, maxLast5mChange) &&
      withinRange(token.pc1h, minLast1hChange, maxLast1hChange) &&
      withinRange(token.pc6h, minLast6hChange, maxLast6hChange) &&
      withinRange(token.pc24h, minLast24hChange, maxLast24hChange) &&
      withinRange(parseInt(token.transactions.toString().replace(/,/g, '')), minTransactions, maxTransactions) &&
      withinRange(parseFloat(token.fdMarketCap), minFDV, maxFDV) &&
      (!dateRange.start || new Date(token.createdAt * 1000).getTime() >= new Date(dateRange.start).getTime()) &&
      (!dateRange.end || new Date(token.createdAt * 1000).getTime() <= new Date(dateRange.end).getTime())
    );
  };

  const applyFilters = () => {
    const filtered = tokens.filter((token) => matchesFilter(token, filters));
    setFilteredTokens(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [filters, tokens]);

  const handleToggleNavbar = (open: boolean) => {
    setIsNavbarOpen(open);
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
  };

  return (
    <>
      <LeftNavbar onToggle={handleToggleNavbar} />
      <div className={`${isNavbarOpen ? 'ml-56' : 'ml-[65px]'}`}>
        <SearchBar theme={theme} onChangeTheme={handleChangeTheme} />
        <div className="px-3 mt-3">
          <Filters filters={tempFilters} onFilterChange={updateTempFilter} onApply={handleApplyFilters} />
          <WarningMessage />
          <Div style={style} className="border-l-2 border-[#e867ea] rounded-[8px]" sx={themeNewPairs.container}>
            <div style={{ height: '1050px', overflowY: 'auto' }}>
              <DataGrid
                rows={filteredTokens}
                columns={columns}
                getRowId={(row: Token) => row.pairHash}
                disableColumnMenu
                headerHeight={40}
                loading={loading}
                components={{
                  NoRowsOverlay: () => (
                    <span className="flex items-center justify-center h-full">
                      <Error />
                    </span>
                  ),
                  NoResultsOverlay: () => (
                    <span className="flex items-center justify-center h-full">
                      <Error />
                    </span>
                  )
                }}
                classes={{
                  columnHeader: 'flex items-center py-2 pl-3 pr-2 sm:py-3 border-r border-[rgb(74,42,80)]/40',
                  columnHeaderTitleContainer: 'token_explorer_column_header_title_container',
                  columnHeaders: 'token_explorer_column_headers',
                  cell: 'token_explorer_cell',
                  row: 'token_explorer_row',
                  columnSeparator: 'token_explorer_column_separator',
                  root: 'token_explorer_table_root',
                  footerContainer: 'token_explorer_footer_container',
                }}
                onCellClick={(params) => {
                  window.open(`/${params.row.pairHash}-${getChainNameById(params.row.chain)}`, '_self');
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
