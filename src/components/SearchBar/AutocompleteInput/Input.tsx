import { Search } from '@mui/icons-material';
import { CircularProgress, TextField } from '@mui/material';
import { searchToken } from '../../../api/search';
import themeSearchbar from '../theme';


export default function Input(props: any) {
  const { params, loading, setOptions } = props;

  const onSearch = (ev: any) => {
    if (
      ev.target.value !== '' &&
      ev.target.value !== null &&
      ev.target.value !== undefined &&
      ev.target.value.length > 1
    ) {
      searchToken(ev.target.value).then((data: any) => {
        if (data === null || data === undefined || data.length === 0) {
          setOptions([]);
          return;
        }

        const optionsData = data.map((item: any) => {
          return {
            pairAddress: item.pairAddress,
            address: item.baseToken.address,
            symbolBase: item.baseToken.symbol,
            symbolQuote: item.quoteToken.symbol,
            name: item.baseToken.name,
          };
        });

        setOptions(optionsData);
      });
    }
  };

  return (
    <TextField
      {...params}
      placeholder="Search by name, symbol or address"
      onChange={onSearch}
      classes={{
        root: 'search_token_root',
        inputRoot: 'search_token_root',
        input: 'search_token_root',
        listbox: 'search_token_root',
        option: 'search_token_root',
        popupIndicator: 'search_token_root',
        clearIndicator: 'search_token_root',
        endAdornment: 'search_token_root',
      }}
      sx={themeSearchbar.input}
      InputProps={{
        ...params.InputProps,
        className: 'w-full m-0 p-[8px] !px-[8px] rounded-md text-[14px]',
        startAdornment: (
          <>
            {loading ? <CircularProgress color="inherit" size={20} /> : <Search color="inherit" />}
          </>
        ),
        endAdornment: <></>,
      }}
    />
  );
}
