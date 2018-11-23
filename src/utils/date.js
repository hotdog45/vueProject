// https://github.com/iamkun/dayjs
import dayjs from 'dayjs';

const DEFAULT_FORMAT = 'YYYY-MM-DD hh:mm:ss';

export function getCurrentDate(format) {
  if (!format) {
    format = DEFAULT_FORMAT;
  }
  return dayjs().format(format);
}

export function getTimeSlot() {
  const hour = dayjs().hour();
  let str = '上午';
  if (hour > 12 && hour < 18) {
    str = '中午';
  } else if (hour > 16) {
    str = '下午';
  }

  return str;
}
