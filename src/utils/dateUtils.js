import moment from 'moment';

const DATE_MOCK = '--/--/-- --:--';

export const format = (timestamp, pattern) => {
  if (timestamp === 0) return DATE_MOCK;
  return moment(timestamp).format(pattern);
};
