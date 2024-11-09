import { formatDistanceToNow } from 'date-fns';

export const TimeAgoCell = ({ timestamp }: any) => {
  const timeAgo = formatDistanceToNow(new Date(timestamp), { addSuffix: false });

  return <div className="token_explorer_pool_created_at">{timeAgo}</div>;
};
