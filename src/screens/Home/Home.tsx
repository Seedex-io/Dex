import React, { useEffect, useState } from 'react';
import './styles.css';
import SearchBar from '../../components/SearchBar';
import Chart from '../../components/Chart';
import { BrowserView } from 'react-device-detect';
import { Alert, AlertTitle, Collapse } from '@mui/material';
import themeHome from './theme';

export default function Home(props: any) {
  const { theme, mobile } = props;
  const [honeypot, setHoneypot] = useState<boolean>(false);
  const [style, setStyle] = useState<any>({});

  useEffect(() => {
    if (mobile) {
      setStyle((stl: any) => ({
        ...stl,
        width: '100%',
        padding: '0px',
      }));
    }
  }, [mobile]);

  const handleChangeTheme = () => {
    window.location.reload();
  };

  return (
    <>
      <BrowserView>
      </BrowserView>
      <div className="home" >
        <Collapse in={honeypot}>
          <Alert severity="error" sx={themeHome.alert} onClose={() => setHoneypot(false)}>
            <AlertTitle>Honeypot Detected</AlertTitle>
            Do not send any funds to this address.
          </Alert>
        </Collapse>
        <SearchBar theme={theme} onChangeTheme={handleChangeTheme} />

        <Chart theme={theme} currency="eth" setHoneypot={(val: any) => setHoneypot(val)} />
      </div>
    </>
  );
}
