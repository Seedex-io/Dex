import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@mui/material';
import React from 'react';
import { addToken } from '../../api/tickerApi';
import Button from '../../components/Button';
import LeftNavbar from '../../components/LeftNavbar';
import Div from '../../components/SimpleComponents/Div';
import './style.css';
export default function AddToken(props: any) {
  const { mobile } = props;
  const [chain, setChain] = React.useState('ether');
  const [address, setAddress] = React.useState('');
  const [adminkey, setAdminkey] = React.useState('');
  const [openSnackbar, setOpenSnackbar] = React.useState({
    open: false,
    message: '',
  });

  const handleChange = (event: any) => {
    setChain(event.target.value);
  };

  const handleSubmit = () => {
    addToken(address, chain, adminkey).then((res) => {
      if (res === 'success') {
        setOpenSnackbar({
          open: true,
          message: 'Token Added Successfully',
        });
        setAddress('');
        setAdminkey('');
      } else {
        setOpenSnackbar({ open: true, message: res });
      }
    });
  };
  return (
    <Div>
      {!mobile && ''}
      <Div className="addtoken">
        <Div className="addtoken_title">Add Token</Div>
        <TextField
          label="Token Address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <TextField
          label="Admin Key"
          variant="outlined"
          value={adminkey}
          onChange={(e) => setAdminkey(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel>Chain</InputLabel>
          <Select value={chain} label="Chain" onChange={handleChange}>
            <MenuItem value={'ether'}>Ether</MenuItem>
            <MenuItem value={'bnb'}>BNB</MenuItem>
          </Select>
        </FormControl>
        <Button
          title="submit"
          className="addtoken_button"
          onClick={handleSubmit}
        />
      </Div>
      <Snackbar
        open={openSnackbar.open}
        autoHideDuration={6000}
        message={openSnackbar.message}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setOpenSnackbar({ open: false, message: '' })}
      />
    </Div>
  );
}
