import React from 'react';
import Div from '../SimpleComponents/Div';
import ListItem from './ListItem';
import './styles.css';
import themeTable from './theme';

export default function Table(props: any) {
  return (
    <Div className="table">
      <Div className="titleTable" sx={themeTable.listItemName}>
        {props.name}
      </Div>
      {props.data.map(
        (val: any, i: any) =>
          i < 10 && <ListItem data={val} key={i} id={i} />
      )}
    </Div>
  );
}
