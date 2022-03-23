const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function leadingZero(val) {
  let s = String(val);
  if (s.length < 2) {
    s = "0" + s;
  }
  return s;
}

export const toDate = (ts) => {
  const formatOptions = { day: "numeric", month: "short", year: "numeric" };
  let date = new Date(ts * 1000);
  return date.toLocaleString("en-US", formatOptions);
};

export const toDateShort = (ts) => {
  const formatOptions = { day: "numeric", month: "short" };
  let date = new Date(ts * 1000);
  return date.toLocaleString("en-US", formatOptions);
};

export const getStartDateByTariff = (limit) => {

  let newStartDate = null;
  if (limit.depth > 0) {
    newStartDate = new Date();
    newStartDate.setFullYear(newStartDate.getFullYear() - limit.depth);
  } else if (limit.depth < 0) {
    newStartDate = limit.start;
  }
  return newStartDate;
};

export const getDateInPast = (nOfMonths) => {


  let dateInPast = new Date();
  dateInPast.setMonth(dateInPast.getMonth() - nOfMonths);
  dateInPast.setHours(0, 0, 0, 0);
  return dateInPast;
};


export function formatDateShort(dt, offset = 0) {
  let date = new Date((dt + offset) * 1000);
  return `${months[date.getUTCMonth()]} ${leadingZero(date.getUTCDate())}`;
}

export function formatDateTime(dt, offset = 0) {
  let date = new Date((dt + offset) * 1000);
  return (
    months[date.getUTCMonth()] +
    " " +
    date.getUTCDate() +
    ", " +
    leadingZero(date.getUTCHours()) +
    ":" +
    leadingZero(date.getUTCMinutes())
  );
}

export const timeInHours = (dt, offset = 0) => {
  const date = new Date((dt + offset) * 1000);
  return date.getUTCHours() + ":00";
};
