import { ORIGIN } from './constants';

export const getTokenExplorer = async (tagIds: any) => {
  if (tagIds.length === 0) {
    tagIds = ['airdrop'];
  }
  tagIds = tagIds.join(',');
  let url = `https://api.dex.guru/v2/tokens/profiles?tag_ids=${tagIds}&offset=0&limit=13`;

  return fetch(`${ORIGIN}/get?url=${encodeURIComponent(url)}`, {
    cache: 'no-store',
  })
    .then((response) => response.json())
    .then((data: any) => {
      let result = JSON.parse(data.contents).data;

      return result;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};

export const getTagIds = async () => {
  let url = 'https://api.dex.guru/v1/token_tags/tags?limit=50';

  return fetch(`${ORIGIN}/get?url=${encodeURIComponent(url)}`, {
    cache: 'no-store',
  })
    .then((response) => response.json())
    .then((data: any) => {
      let result = JSON.parse(data.contents).data;

      return result;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};
