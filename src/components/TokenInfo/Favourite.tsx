import { addFavourite, removeFavourite } from '../../api/getInfo';

export default function Favourite(props: any) {
  const { token, setToken } = props;
  return (
    <button
      className="flex items-center justify-center text-[17px] text-white sm:text-lg ml-auto transform rounded-full p-2 opacity-70 duration-200 hover:opacity-100"
      onClick={() => {
        if (token.favourite) {
          removeFavourite(token.id.token);
        } else {
          addFavourite(`${token.id.pair}-${token.id.chain}`);
        }
        setToken({ ...token, favourite: !token.favourite });
      }}
    >
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 20.703.343.667a.748.748 0 0 1-.686 0l-.003-.002-.007-.003-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013-.007.003-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4Z"></path></svg>
      {/* {token.favourite ? (
        <Bookmark fontSize="small" />
      ) : (
        <BookmarkBorderOutlined fontSize="small" />
      )} */}
    </button>
  );
}
