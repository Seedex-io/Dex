import React, { useEffect, useState } from 'react';
import { getGainerList, getLoserList } from '../../api/tickerApi';
import Button from '../Button';
import Div from '../SimpleComponents/Div';
import Table from '../Table';
import './style.css';
import themeTrending from './theme';
export default function Trending(props: any) {
  const [gainers, setGainers] = useState<any>([]);
  const [loosers, setLoosers] = useState<any>([]);
  const [hide, setHide] = useState<any>(false);
  const setGainerList = async () => {
    getGainerList().then((res) => {
      setGainers(res);
    });
  };

  const setLoserLists = async () => {
    getLoserList().then((res) => {
      setLoosers(res);
    });
  };
  const display = () => {
    setHide(!hide);
  };

  useEffect(() => {
    setGainerList();
    setLoserLists();
  }, [props.mobile]);

  return (
    <Div
      className="tablesTrending"
      sx={themeTrending.trending}
      style={{
        width: hide ? 50 : 300,
      }}
    >
      <Button title={hide ? '<<' : '>>'} className="tablesTrending_button" onClick={display} />
      {!hide && (
        <>
          <Table name="Biggest Gainers" data={gainers} />
          {/* <Ad small /> */}
          <Table name="Biggest Losers" data={loosers} />
        </>
      )}
    </Div>
  );
}
