import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import './style.css';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(
  name: string,
  personName: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    backgroundColor: '#0e1621',
  };
}

export default function Chips(props: any) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);
  React.useEffect(() => {
    setPersonName([props.data[2]?.id]);
  }, [props.data]);

  const handleChange = (
    event: SelectChangeEvent<typeof personName>
  ) => {
    const {
      target: { value },
    } = event;
    let val = typeof value === 'string' ? value.split(',') : value;
    props.onSelect(val);
    setPersonName(val);
  };

  return (
    <div className="chips">
      <FormControl
        classes={{
          root: 'chips_root',
        }}
      >
        <InputLabel id="demo-multiple-chip-label">
          Tag Identifiers
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="Tag Identifiers"
              classes={{
                root: 'chips_input',
              }}
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value + '0'} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {props.data?.map((name: any) => (
            <MenuItem
              key={name.id}
              value={name.id}
              style={getStyles(name, personName, theme)}
            >
              {name.tag_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
