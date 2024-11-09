import { ThemeProvider } from '@mui/material';
import { BrowserView, MobileView } from 'react-device-detect';
import './App.css';
import Favourites from './screens/Favourites';
import MobileNavigation from './components/MobileNavigation';
import Home from './screens/Home/Home';
import Div from './components/SimpleComponents/Div';
import TrendingPage from './screens/Trending';
import { themeDark, themeLight } from './assets/theme';
import { getCookie } from './utils/cookies';
import NewPairs from './screens/NewPairs';
import LeftNavbar from './components/LeftNavbar';
import WhaleTrackerPage from './screens/WhaleTracker';

function App() {
  const path = window.location.pathname;
  const theme = getCookie('theme') === 'light' ? themeLight : themeDark;

  const renderComponent = (isMobile = false) => {
    switch (path) {
      // case '/TokenExplorer':
      // return <TokenExplorer theme={theme} mobile={isMobile} />;
      case '/Favourites':
        return <Favourites theme={theme} mobile={isMobile} />;
      case '/Trending':
        return <TrendingPage theme={theme} mobile={isMobile} />;
      // case '/AddToken':
      // return <AddToken theme={theme} mobile={isMobile} />;
      case '/NewPairs':
        return <NewPairs theme={theme} mobile={isMobile} />;
      case '/WhaleTracker':
        return <WhaleTrackerPage theme={theme} mobile={isMobile} />;
      default:
        return <Home theme={theme} mobile={isMobile} />;
    }
  };

  const renderMobileComponent = () => {
    return <MobileNavigation />;
  };

  return (
    <>
      <MobileView
        style={{
          backgroundColor: theme.palette.primary.darker,
          height: '100vh',
        }}
      >
        <ThemeProvider theme={theme}>
          {renderComponent(true)}
          {renderMobileComponent()}

          <Div
            className="mobile_padding"
          />
        </ThemeProvider>
      </MobileView>
      <BrowserView>
        <div className="bg-rebrand-patch-one absolute top-0 left-0 h-[300px] w-[300px] opacity-40 mix-blend-plus-lighter blur-[120px]"></div>
        <ThemeProvider theme={theme}>{renderComponent()}</ThemeProvider>
      </BrowserView>
    </>
  );
}

export default App;
