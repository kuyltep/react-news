export const formatDate = (date: Date): string => {
  const formater: Intl.DateTimeFormat = new Intl.DateTimeFormat("EN-us", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formater.format(date);
};
