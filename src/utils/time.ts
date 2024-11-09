// function represent time from "2022-11-03T15:36:23.000Z" to "2022/11/03 15:36"
export const timeFormat = (time: string) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  return `${year}/${month}/${day} ${hour}:${minute}`;
};
