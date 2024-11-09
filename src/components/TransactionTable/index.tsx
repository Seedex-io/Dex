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
import themeTransactionTable from './theme';
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

  const columns: GridColDef[] = [
    {
      field: 'timestamp',
      headerName: 'Time Stamp',
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
      headerName: 'Type',
      flex: 0.5,
      renderCell: (params: any) => <Cell row={params.row.type} type={params.row.type} />,
      sortComparator: sortByBuyandSell,
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.8,
      renderCell: (params: any) => (
        <Cell row={formatNumber(params.row.price)} type={params.row.type} />
      ),
    },
    {
      field: 'amountToken',
      headerName: `Amount Token`,
      flex: 1,
      renderCell: (params: any) => (
        <Cell
          row={shortNumber(params.row.amountToken) + ' ' + params.row.symbol}
          type={params.row.type}
        />
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
      field: 'maker',
      headerName: 'Maker',
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
    getTransactions(address, chain, token).then((responses: any) => {
      if (responses.length > 0) setTransactions(responses);
    });
  };

  useEffect(() => {
    setTransactionsData();
    const interval = setInterval(() => {
      setTransactionsData();
    }, 30000);
    return () => clearInterval(interval);
  }, [token]);

  return (
    <Div className="transactionTable" sx={themeTransactionTable.tableContainer}>
      <DataGrid
        rows={transactions}
        columns={columns}
        getRowId={(row: any) => row.id}
        disableColumnMenu
        classes={{
          columnHeaderTitle: 'columnHeaderTitle',
          root: 'dataGridroot',
          overlay: 'dataGridOverlay',
        }}
        sx={themeTransactionTable.table}
        components={{
          NoRowsOverlay: () => <NoRowMessage> No Transactions Found </NoRowMessage>,
        }}
      />
    </Div>
  );
};
export default TokenTransaction;
