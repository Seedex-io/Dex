import React from 'react';
import { API } from '../../../api/constants';
import { getCookie } from '../../../utils/cookies';
import themeChart from '../theme';
import {
  widget,
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from './charting_library/charting_library';
import './styles.css';

class TVChartContainer extends React.PureComponent<any, any> {
  private ref: React.RefObject<HTMLDivElement> = React.createRef();
  constructor(props: any) {
    super(props);
    this.state = { tvWidget: null, currency: props.currency };
  }

  componentDidMount(): void {
    if (!this.ref.current) {
      return;
    }

    const widgetOptions: ChartingLibraryWidgetOptions = {
      container_id: this.props.containerId,
      library_path: '/charting_library/charting_library/',
      locale: 'en',
      theme: getCookie('theme') !== 'light' ? 'dark' : 'light',
      charts_storage_url: this.props.chartsStorageUrl,
      charts_storage_api_version: this.props.chartsStorageApiVersion,
      client_id: this.props.clientId,
      user_id: this.props.userId,
      fullscreen: this.props.fullscreen,
      studies_overrides: this.props.studiesOverrides,
      symbol: this.props.symbol as string,

      // datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
      //   `http://localhost:4000/${this.state.currency}`,
      //   10000
      // ),

      datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(`${API}`, 10000),
      // datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
      //   'https://demo_feed.tradingview.com/',
      //   undefined,
      //   {
      //     maxResponseLength: 1000,
      //     expectedOrder: 'latestFirst',
      //   }
      // ),
      // datafeed: Datafeed,
      // symbol: 'Bitfinex:BABY/USD', // Default symbol pair
      disabled_features: ['header_saveload', 'header_symbol_search'],
      enabled_features: ['header_fullscreen_button'],

      container: this.ref.current,
      autosize: true,
      loading_screen: {
        backgroundColor: themeChart.tv.backgroundColor,
      },
      load_last_chart: false,
      interval: '1h' as ResolutionString,
      overrides: {},
      height: 600,
    };

    const tvWidget = new widget(widgetOptions);
    this.setState({ tvWidget });
  }

  componentDidUpdate(prevProps: any) {}

  componentWillUnmount(): void {
    if (this.state.tvWidget !== null) {
      this.state.tvWidget.remove();
      this.setState({ tvWidget: null });
    }
  }

  render(): JSX.Element {
    return (
      <>
        {/* <Ad /> */}
        <div className="trmain" ref={this.ref} />
      </>
    );
  }
}

export default TVChartContainer;
