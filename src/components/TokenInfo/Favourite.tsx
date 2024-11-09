import React from 'react';
import { addFavourite, removeFavourite } from '../../api/getInfo';
import Div from '../SimpleComponents/Div';
import themeTokenInfo from './theme';

export default function Favourite(props: any) {
  const { token, setToken } = props;
  return (
    <Div
      className="token_info_favourite"
      sx={themeTokenInfo.token_info_favourite}
      onClick={() => {
        if (token.favourite) {
          removeFavourite(token.id.token);
        } else {
          addFavourite(`${token.id.pair}-${token.id.chain}`);
        }
        setToken({ ...token, favourite: !token.favourite });
      }}
    >
      {/* {token.favourite ? (
        <Bookmark fontSize="small" />
      ) : (
        <BookmarkBorderOutlined fontSize="small" />
      )} */}
    </Div>
  );
}
