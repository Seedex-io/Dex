import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { getFavouritesData } from '../../api/getInfo';
import { searchToken } from '../../api/search';
import LeftNavbar from '../../components/LeftNavbar';
import './style.css';
import Div from '../../components/SimpleComponents/Div';
import themeFavourites from './theme';
import { BrowserView } from 'react-device-detect';
import SearchBar from '../../components/SearchBar';
import { columns } from './columns';
export default function Favourites(props: any) {
  const { mobile, theme } = props;
  const [tokens, setTokens] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getFavouritesData().then((data: any) => {
      setLoading(false);
      setTokens(data);
    });
  }, [mobile]);

  const handleChangeTheme = () => {
    window.location.reload();
  };

  return (
    <>
      <BrowserView>
      </BrowserView>
      <SearchBar theme={theme} onChangeTheme={handleChangeTheme} />
      <Div className="favourites" sx={themeFavourites.container}>
        <Div className="favourites_title">
          <Div className="favourites_title_text">
            <Div className="title" sx={themeFavourites.title}>
              Favourites
            </Div>
          </Div>
        </Div>
        <Div
          style={{
            height: window.innerHeight - 40,
          }}
          className="favourites_table_container"
        >
          <DataGrid
            rows={tokens}
            columns={columns}
            getRowId={(_row: any) => {
              return Math.random() * Math.random() * Math.random() * Math.random();
            }}
            loading={loading}
            pageSize={7}
            rowsPerPageOptions={[5]}
            disableColumnMenu
            classes={{
              columnHeader: 'favourites_column_header',
              columnHeaderTitleContainer: 'favourites_column_header_title_container',
              columnHeaders: 'favourites_column_headers',
              cell: 'favourites_cell',
              row: 'favourites_row',
              columnSeparator: 'favourites_column_separator',
              root: 'favourites_table_root',
            }}
            onCellClick={(params: any) => {
              if (params.field === 'actions_favourite') {
                return;
              }
              searchToken(params.row.pair).then((data: any) => {
                window.open(`/${data[0].pairAddress}-ether`, '_self');
              });
            }}
            sx={themeFavourites.table}
          />
        </Div>
      </Div>
    </>
  );
}
