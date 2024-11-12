import { useEffect, useState } from 'react';
import './styles.css';
import SearchBar from '../../components/SearchBar';
import Chart from '../../components/Chart';
import { BrowserView } from 'react-device-detect';
import { Alert, AlertTitle, Collapse } from '@mui/material';
import LeftNavbar from '../../components/LeftNavbar';

export default function Home(props: any) {
  const { theme, mobile } = props;
  const [honeypot, setHoneypot] = useState<boolean>(false);
  const [style, setStyle] = useState<any>({});
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

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

  const handleToggleNavbar = (open: boolean) => {
    setIsNavbarOpen(open);
  };

  return (
    <div className='h-screen max-h-screen'>
      <BrowserView>
       <LeftNavbar onToggle={handleToggleNavbar} />
      </BrowserView>
      <div className={`${isNavbarOpen? 'ml-56':'ml-[65px]'}`} >
        <Collapse in={honeypot}>
          <Alert severity="error" onClose={() => setHoneypot(false)}>
            <AlertTitle>Honeypot Detected</AlertTitle>
            Do not send any funds to this address.
          </Alert>
        </Collapse>
        <SearchBar theme={theme} onChangeTheme={handleChangeTheme} />

        <Chart currency="eth" setHoneypot={(val: any) => setHoneypot(val)} />
      </div>
    </div>
  );
}
