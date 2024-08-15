export const formatTimeAgo = (date: Date): string => {
  const newDate = new Date();
  const dateAgo = new Date(date);
  const secondsBetween = (newDate.getTime() - dateAgo.getTime()) / 1000;
  if (secondsBetween < 60) {
    return `${Math.floor(secondsBetween)}s ago`;
  }
  if (secondsBetween < 3600) {
    return `${Math.floor(secondsBetween / 60)}m ago`;
  }
  if (secondsBetween < 86400) {
    return `${Math.floor(secondsBetween / 3600)}h ago`;
  } else if (secondsBetween >= 86400) {
    const day = Math.floor(secondsBetween / 86400);
    return day === 1 ? `${day} day ago` : `${day} days ago`;
  }
  return "";
};
