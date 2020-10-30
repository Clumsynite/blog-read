import moment from "moment";

export const getRelativeTime = (time) => {
  const hours = moment(time).startOf("hour").fromNow();
  return hours;
};
