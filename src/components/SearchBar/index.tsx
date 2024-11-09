import './styles.css';
import Div from '../SimpleComponents/Div';
import TrendingTicker from '../TrendingTicker';
export default function SearchBar(props: any) {
  const { theme } = props;
  return (
    <div className="mx-auto">
      <Div className="tickers">
        <TrendingTicker theme={theme} title="⚡ Trending" className="ticker_pairs" />
        {/* <TrendingTicker theme={theme} title="Newly listed ⚡️" className="ticker_listed" /> */}
      </Div>
      {/* <SwitchTheme /> */}
    </div>
  );
}
