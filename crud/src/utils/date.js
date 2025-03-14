const isDateValid = (date) => {
    return !isNaN(date.getTime())
} 

const dateToLocaleString = (date, region = "ru") => {
  let tempDate = new Date(date);
  tempDate = isDateValid(tempDate) ? tempDate : new Date();
  const formatter = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const result = new Intl.DateTimeFormat(region, formatter).format(tempDate);
  return result;
};

export {dateToLocaleString}