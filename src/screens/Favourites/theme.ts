const themeFavourites = {
  container: {
    backgroundColor: 'primary.darker',
    '.favourites_title': {
      color: 'primary.contrastText',
    },
  },
  delete: {
    color: 'primary.dark',
  },
  favourites_symbol: {
    color: 'primary.contrastText',
  },
  token_chain: {
    color: 'primary.contrastText',
  },
  table: {
    '.MuiTableContainer-root': {
      backgroundColor: 'primary.main',
    },
    '.MuiTableHead-root': {
      backgroundColor: 'primary.main',
    },
    '.MuiTableCell-head': {
      color: 'primary.contrastText',
    },
    '.MuiTableCell-body': {
      color: 'primary.contrastText',
    },
    '.columnHeaderTitle': {
      color: 'primary.contrastText',
    },
    '.MuiDataGrid-columnSeparator': {
      color: 'primary.border',
    },
    '.MuiDataGrid-cell': {
      borderColor: 'primary.border',
    },
    '.MuiDataGrid-virtualScroller': {
      borderColor: 'primary.border',
    },
    '.MuiDataGrid-columnHeaders': {
      borderColor: 'primary.border',
    },
    '.MuiDataGrid-footerContainer': {
      borderColor: 'primary.border',

      '.MuiTablePagination-root': {
        color: 'primary.contrastText',
      },
    },
    '.favourites_column_headers , .favourites_column_header_title_container': {
      color: 'primary.dark',
    },
    '.favourites_row': {
      backgroundColor: 'primary.main',
    },
    '.MuiDataGrid-overlay': {
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
    },
  },
  title: {
    color: 'primary.contrastText',
  },
  favourites_price_usd: {
    color: 'primary.contrastText',
    '& .dolar': {
      color: 'primary.darker',
    },
  },
  favourites_price_move: {
    '&.favourites_up': {
      color: 'success.mainDark',
    },
    '&.favourites_down': {
      color: 'error.mainDark',
    },
  },
};

export default themeFavourites;
