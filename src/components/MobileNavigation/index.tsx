import { BubbleChart, CandlestickChart, Grade, Insights, Rocket } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import './style.css';
import themeMobileBar from './theme';
const PATHS: {
  [key: string]: number;
} = {
  '/': 0,
  '/Trending': 1,
  '/Favourites': 2,
  '/NewPairs': 3,
};
export default function MobileNavigation() {
  const bottomNavigationRoutes = [
    {
      name: 'Charts',
      icon: <CandlestickChart fontSize="small" />,
      path: '/',
    },
    {
      name: 'Trending',
      icon: <BubbleChart fontSize="small" />,
      path: '/Trending',
    },
    {
      name: 'New Pairs',
      icon: <Rocket fontSize="small" />,
      path: '/NewPairs',
    },
  ];
  return (
    <BottomNavigation
      showLabels
      value={PATHS[window.location.pathname] ? PATHS[window.location.pathname] : 0}
      onChange={(_event, newValue) => {
        window.open(bottomNavigationRoutes[newValue].path, '_self');
      }}
      classes={{
        root: 'bottom_navigation',
      }}
      sx={themeMobileBar.bottomNavigationAction}
    >
      {bottomNavigationRoutes.map((item: any, index: any) => (
        <BottomNavigationAction
          label={item.name}
          icon={item.icon}
          key={`${index}_mobile_nav`}
          sx={themeMobileBar.bottomNavigationActionOptions}
          classes={{
            label: 'bottom_navigation_label',
            root: 'bottom_navigation_action',
          }}
        />
      ))}
    </BottomNavigation>
  );
}
