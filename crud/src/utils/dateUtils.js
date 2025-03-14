/*
Считаем разницу межде текущей датой и входным аргументом
менее 1 часа - выводим минуты
более 1 часа и менее 24 часов - выводим часы
более 24 часов - выводим дни
*/
import declNum from "./declNum";

const minuteWords = ["минута", "минуты", "минут"];
const hourWords = ["час", "часа", "часов"];
const dayWords = ["день", "дня", "дней"];
const words = { minutes: minuteWords, hours: hourWords, days: dayWords };

const msInMinute = 1000 * 60;
const msInHour = msInMinute * 60;
const msInDay = msInHour * 24;

const isDate = function (date) {
  const testDate = new Date(date);
  return testDate !== "Invalid Date" && !isNaN(new Date(date));
};

const calcDateDifference = (inputDate) => {
  let result = "";
  if (!isDate(inputDate)) return result;

  const dateEnd = new Date();
  const dateStart = new Date(inputDate);

  const diff = dateEnd - dateStart;

  if (diff > msInDay) {
    result = declNum(Math.floor(diff / msInDay), words.days);
  } else if (diff < msInHour) {
    result = declNum(Math.floor(diff / msInMinute), words.minutes);
  } else {
    result = declNum(Math.floor(diff / msInHour), words.hours);
  }

  return result += " назад";
};

const dateToLocaleString = (date, region = "ru") => {
  let tempDate = new Date(date);
  tempDate = isDate(tempDate) ? tempDate : new Date();
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

export { dateToLocaleString, calcDateDifference };
