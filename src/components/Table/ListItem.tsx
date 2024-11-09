import React from 'react';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';
import { formatNumber } from '../../utils/helpers/numberFormat';
import { searchToken } from '../../api/search';
import Div from '../SimpleComponents/Div';
import themeTable from './theme';
export default function ListItem(props: any) {
  const { data, id } = props;
  const onListClick = () =>
    searchToken(data.address).then((data: any) => {
      window.open(`/${data[0].pairAddress}-ether`, '_self');
    });

  return (
    <Div className="listItem" onClick={onListClick} sx={themeTable.listItem}>
      <FontAwesomeIcon
        icon={data.change > 0 ? faAnglesUp : faAnglesDown}
        color={data.change > 0 ? '#3aeab5' : '#ff646d'}
        size="xs"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 10,
        }}
      >
        <img src={data.src} alt="" className="imgTrending" />
        <Div className="listItemName" sx={themeTable.listItemName}>
          {data.symbol}
        </Div>
      </div>
      <Div
        className="priceListItem"
        style={{
          color: data.change > 0 ? '#3aeab5' : '#ff646d',
        }}
      >
        {formatNumber(data.change * 100)} %
      </Div>
    </Div>
  );
}
