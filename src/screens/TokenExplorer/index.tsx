import { DataGrid, GridColDef } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import './style.css';
import { getTagIds, getTokenExplorer } from '../../api/tokenExplorer';
import formatNumberSmaller, { commaFormatted } from '../../utils/helpers/numberFormat';
import Chips from '../../components/Chips';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import LeftNavbar from '../../components/LeftNavbar';
import { searchToken } from '../../api/search';
import { Footer } from '../../components/Footer';

export default function TokenExplorer(props: any) {
  const [tagIds, setTagIds] = useState([]);
  const [tokens, setTokens] = useState([]);
  const [tokensData, setTokensData] = useState([]);
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const [style, setStyle] = useState<any>({
    backgroundColor: props.theme.palette.background.default,
  });

  useEffect(() => {
    getTagIds().then((data) => {
      setTokensData(data);
    });
    if (props.mobile) {
      setStyle((stl: any) => ({
        ...stl,
        width: '100%',
        padding: '0px',
      }));
    }
  }, [props.mobile]);

  useEffect(() => {
    getTokenExplorer(tagIds).then((data) => {
      setTokens(data);
    });
  }, [tagIds]);

  const tagIdsSelect = (vals: any) => {
    setTagIds(vals);
  };
  const columns: GridColDef[] = [
    {
      field: 'symbol',
      headerName: 'Asset',
      width: 230,
      sortable: false,
      renderCell: (params: any) => (
        <div className="token_explorer_symbol">
          <img
            src={params && params.row && params.row.logo_uri}
            alt="icon"
            className="token_explorer_symbol_icon"
          />
          <span className="token_explorer_symbol_name">
            {params && params.row && params.row.symbol}
          </span>
        </div>
      ),
    },
    {
      field: 'volume_usd',
      headerName: 'Trading Volume, 24h',
      width: 200,
      sortable: false,
      renderCell: (params: any) => (
        <div className="token_explorer_volume_usd">
          <span className="dollar">$</span>
          {commaFormatted(params.row.current.volume_usd, 0)}
        </div>
      ),
    },
    {
      field: 'price_usd',
      headerName: 'Price',
      width: 160,
      sortable: false,
      renderCell: (params: any) => (
        <div className="token_explorer_price_usd">
          <span className="dollar">$</span>
          {formatNumberSmaller(params.row.current.price_usd)}
        </div>
      ),
    },
    {
      field: 'price_move_day',
      headerName: '24h',
      width: 120,
      sortable: false,
      renderCell: (params: any) => {
        let chng = Number.parseFloat(params.row.trending.day.price_move) > 0;
        return (
          <div
            className={`token_explorer_price_move  ${
              chng ? 'token_explorer_up' : 'token_explorer_down'
            }`}
          >
            {chng ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />}
            {formatNumberSmaller(params.row.trending.day.price_move, 2, true)}%
          </div>
        );
      },
    },
    {
      field: 'price_move_week',
      headerName: '7d',
      width: 120,
      sortable: false,
      renderCell: (params: any) => {
        let chng = Number.parseFloat(params.row.trending.month.price_move) > 0;

        return (
          <div
            className={`token_explorer_price_move  ${
              chng ? 'token_explorer_up' : 'token_explorer_down'
            }`}
          >
            {chng ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />}
            {formatNumberSmaller(params.row.trending.week.price_move, 2, true)}%
          </div>
        );
      },
    },
    {
      field: 'price_move_month',
      headerName: '30d',
      width: 120,
      sortable: false,
      renderCell: (params: any) => {
        let chng = Number.parseFloat(params.row.trending.month.price_move) > 0;
        return (
          <div
            className={`token_explorer_price_move  ${
              chng ? 'token_explorer_up' : 'token_explorer_down'
            }`}
          >
            {chng ? <KeyboardArrowDown fontSize="small" /> : <KeyboardArrowUp fontSize="small" />}
            {formatNumberSmaller(params.row.trending.month.price_move, 2, true)}%
          </div>
        );
      },
    },
    {
      field: 'price_usd_max',
      headerName: 'All-Time High Price',
      width: 180,
      sortable: false,
      renderCell: (params: any) => {
        let chng = Number.parseFloat(params.row.price_usd_max_delta) > 0;
        return (
          <div className="token_explorer_price_usd_max">
            <div>
              <span className="dollar">$</span>
              {formatNumberSmaller(params.row.price_usd_max)}{' '}
            </div>
            <div
              className={`token_explorer_price_usd_max_delta  ${
                chng ? 'token_explorer_up' : 'token_explorer_down'
              }`}
            >
              {chng ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />}
              {formatNumberSmaller(params.row.price_usd_max_delta, 2, true)}%
            </div>
          </div>
        );
      },
    },
    {
      field: 'fully_diluted_valuation',
      headerName: 'Fully Diluted Valuation',
      width: 200,
      sortable: false,
      renderCell: (params: any) => {
        let chng = Number.parseFloat(params.row.fully_diluted_valuation_daily_delta) > 0;
        return (
          <div className="token_explorer_price_usd_max">
            <div>
              <span className="dollar">$</span>
              {commaFormatted(params.row.fully_diluted_valuation, 0)}{' '}
            </div>
            <div
              className={`token_explorer_price_usd_max_delta  ${
                chng ? 'token_explorer_up' : 'token_explorer_down'
              }`}
            >
              {chng ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />}
              {formatNumberSmaller(params.row.fully_diluted_valuation_daily_delta, 2, true)}%
            </div>
          </div>
        );
      },
    },
    {
      field: 'token_supply',
      headerName: 'Max supply',
      width: 150,
      sortable: false,
      renderCell: (params: any) => (
        <div className="token_explorer_token_supply ">
          {commaFormatted(params.row.token_supply, 0)}
        </div>
      ),
    },
    {
      field: 'liquidity_usd',
      headerName: 'Liquidity, 24h',
      width: 180,
      sortable: false,
      renderCell: (params: any) => {
        let chng = Number.parseFloat(params.row.liquidity_usd_change24h) > 0;
        return (
          <div className="token_explorer_price_usd_max">
            <div>
              <span className="dollar">$</span>
              {commaFormatted(params.row.liquidity_usd, 0)}{' '}
            </div>
            <div
              className={`token_explorer_price_usd_max_delta  ${
                chng ? 'token_explorer_up' : 'token_explorer_down'
              }`}
            >
              {chng ? <KeyboardArrowUp fontSize="small" /> : <KeyboardArrowDown fontSize="small" />}
              {formatNumberSmaller(params.row.liquidity_usd_change24h, 2, true)}%
            </div>
          </div>
        );
      },
    },
    {
      field: 'holders_count',
      headerName: 'Holders',
      sortable: false,
      renderCell: (params: any) => (
        <div className="token_explorer_holders_count ">
          {commaFormatted(params.row.holders_count, 0)}
        </div>
      ),
    },
  ];

  const handleToggleNavbar = (open: boolean) => {
    setIsNavbarOpen(open);
  };

  return (
    <div className={`token_explorer ${isNavbarOpen? 'ml-56':'ml-[65px]'}`} style={style}>
      {!props.mobile && <LeftNavbar onToggle={handleToggleNavbar}/>}
      <div className="token_explorer_title">
        <div className="token_explorer_title_text">
          <h1>Token Explorer</h1>
        </div>
      </div>
      <Chips data={tokensData} onSelect={tagIdsSelect} />
      {/* <Ad adNumber={1} /> */}
      <div
        style={{
          height: '800px',
          margin: '0 20px',
        }}
      >
        <DataGrid
          rows={tokens}
          columns={columns}
          getRowId={(row: any) => {
            return Math.random() * Math.random() * Math.random() * Math.random();
          }}
          pageSize={10}
          rowsPerPageOptions={[5]}
          disableColumnMenu
          classes={{
            columnHeader: 'token_explorer_column_header',
            columnHeaderTitleContainer: 'token_explorer_column_header_title_container',
            columnHeaders: 'token_explorer_column_headers',
            cell: 'token_explorer_cell',
            row: 'token_explorer_row',
            columnSeparator: 'token_explorer_column_separator',
            root: 'token_explorer_table_root',
          }}
          onCellClick={(params: any) => {
            searchToken(params.row.token_address).then((data: any) => {
              window.open(`/${data[0].pairAddress}-ether`, '_self');
            });
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
