import React, { useEffect, useState } from 'react';

import Autocomplete from '@mui/material/Autocomplete';
import './styles.css';
import Option from './Option';
import Input from './Input';
import themeSearchbar from '../theme';
import { Popper } from '@mui/material';

export default function AutocompleteInput(props: any) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<any>([]);
  const loading = open;

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="search_token"
      className="bg-[#140114] rounded-[10px]"
      classes={{
        paper: 'search_token_paper',
        root: 'search_token_root',
      }}
      sx={themeSearchbar.input}
      PopperComponent={(props: any) => (
        <Popper {...props} placement="bottom-start" sx={themeSearchbar.popper} />
      )}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderOption={(_, option) => <Option option={option} />}
      getOptionLabel={(option: any) => option.name}
      options={options}
      filterOptions={(options) => options}
      loading={loading}
      renderInput={(params) => (
        <Input params={params} loading={loading} setOptions={setOptions} key={'sdsafafasdqwfa'} />
      )}
    />
  );
}
