import React, { useEffect, useState } from 'react';
import { getGainerList, getLoserList } from '../../api/tickerApi';
import Div from '../../components/SimpleComponents/Div';
import Table from '../../components/Table';
import './style.css';
import { BrowserView } from 'react-device-detect';
import LeftNavbar from '../../components/LeftNavbar';
import SearchBar from '../../components/SearchBar';


export default function WhaleTrackerPage(props: any) {
  const { theme } = props;
  const [gainers, setGainers] = useState<any>([]);
  const [loosers, setLoosers] = useState<any>([]);

  const setGainerList = async () => {
    getGainerList().then((res) => {
      setGainers(res);
    });
  };

  const handleChangeTheme = () => {
    window.location.reload();
  };
  const setLoserLists = async () => {
    getLoserList().then((res) => {
      setLoosers(res);
    });
  };

  useEffect(() => {
    setGainerList();
    setLoserLists();
  }, [props.mobile]);

  return (
    <>
      <BrowserView>
      </BrowserView>
      <SearchBar theme={theme} onChangeTheme={handleChangeTheme} />
      <Div className="trending_page">
        <Div className="trending_page_title">⚡ Trending </Div>
        <Table name="Biggest Gainers" data={gainers} />
        <Table name="Biggest Losers" data={loosers} />
      </Div>
    </>
  );
}
