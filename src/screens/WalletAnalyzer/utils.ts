export const calculateAge = (date: string) => {
    const now = new Date();
    const tradeDate = new Date(date);
    const diffMs = now.getTime() - tradeDate.getTime();
  
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  
    return days > 0
      ? `${days} day${days > 1 ? 's' : ''} ago`
      : hours > 0
      ? `${hours} hour${hours > 1 ? 's' : ''} ago`
      : `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  };
  