import './styles.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { sortByBuyandSell } from '../../utils/soter';
import {
  commaFormatted,
  formatDate,
  formatNumber,
  shortNumber,
} from '../../utils/helpers/numberFormat';
import { useEffect, useState } from 'react';
import { getTransactions } from '../../api/getTransactions';
import TokenScan from '../TokenScan';
import ShortText from '../ShortText';
import Cell from './Cell';
import Div from '../SimpleComponents/Div';
import './styles.css';
import styled from 'styled-components';

const NoRowMessage = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TokenTransaction = (props: any) => {
  const { token, address } = props;
  const chain = window.location.pathname.split('/')[1].split('-')[1];
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);  // Added loading state
  const [error, setError] = useState<string | null>(null);  // Added error state

  const columns: GridColDef[] = [
    {
      field: 'timestamp',
      headerName: 'AGE',
      flex: 1.2,
      renderCell: (params: any) => (
        <Cell
          row={formatDate(params.row.timestamp)}
          type={params.row.type}
          fontSize={10}
          nocolor={true}
        />
      ),
    },
    {
      field: 'type',
      headerName: 'TYPE',
      flex: 0.5,
      renderCell: (params: any) => <Cell row={params.row.type} type={params.row.type} />,
      sortComparator: sortByBuyandSell,
    },
    {
      field: 'price',
      headerName: 'PRICE',
      flex: 0.8,
      renderCell: (params: any) => (
        <Cell row={formatNumber(params.row.price)} type={params.row.type} />
      ),
    },
    {
      field: 'total',
      headerName: `Total USD`,
      flex: 1,
      renderCell: (params: any) => (
        <Cell row={'$' + commaFormatted(params.row.total)} type={params.row.type} />
      ),
    },
    {
      field: 'amountToken',
      headerName: `AMOUNT ${token.symbol}`,
      flex: 1,
      renderCell: (params: any) => (
        <Cell
          row={shortNumber(params.row.amountToken) + ' ' + params.row.symbol}
          type={params.row.type}
        />
      ),
    },
    {
      field: 'maker',
      headerName: 'MAKER',
      flex: 1,
      renderCell: (params: any) => (
        <>
          <Cell row={<ShortText text={params.row.maker} size="big" />} type={params.row.type} />
          <TokenScan address={params.row.transactionAddress} chain={chain} />
        </>
      ),
    },
    {
      field: 'maker',
      headerName: 'TXN HASH',
      flex: 1,
      renderCell: (params: any) => (
        <>
          <Cell row={<ShortText text={params.row.maker} size="big" />} type={params.row.type} />
          <TokenScan address={params.row.transactionAddress} chain={chain} />
        </>
      ),
    },
  ];

  const setTransactionsData = async () => {
    setLoading(true); // Set loading state to true before fetching
    try {
      const responses = await getTransactions(address, chain, token);
      if (responses.length > 0) {
        setTransactions(responses);
        setError(null);  // Clear any previous errors
      } else {
        setTransactions([]);
        setError('No transactions found');
      }
    } catch (err) {
      setError('Failed to fetch transactions');
      setTransactions([]);  // Clear transactions in case of error
    } finally {
      setLoading(false);  // Set loading state to false once fetching is complete
    }
  };

  useEffect(() => {
    setTransactionsData();
    const interval = setInterval(() => {
      setTransactionsData();
    }, 30000);
    return () => clearInterval(interval);
  }, [token]);

  return (
    <Div className="h-full">
      {loading ? (
        <NoRowMessage>Loading transactions...</NoRowMessage>  // Show loading message when loading
      ) : error ? (
        <NoRowMessage>{error}</NoRowMessage>  // Show error message if there is an error
      ) : (
        <DataGrid
          rows={transactions}
          columns={columns}
          getRowId={(row: any) => row.id}
          disableColumnMenu
          classes={{
            columnHeaderTitle: 'text-md font-bold text-white',
            columnHeader: '',
            cell: 'text-md text-white bg-white',
            row: 'text-md text-white bg-pink-500',
            columnSeparator: '!hidden',
            root: '',
            overlay: 'dataGridOverlay',
            columnHeaderTitleContainer: 'bg-red-500',
            columnHeaders: 'bg-gray-800',
          }}
          components={{
            NoRowsOverlay: () => <NoRowMessage>No Transactions Found</NoRowMessage>,  // Show no transactions found message
          }}
        />
      )}
    </Div>
  );
};

export default TokenTransaction;
