export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const year = () => {
  const yearArray = [];

  for (let i = 0; i <= 90; i++) {
    yearArray.push(1932 + Number(i));
  }

  return yearArray;
};

export const days = () => {
  const days = [];

  for (let i = 0; i <= 30; i++) {
    const number = (i + 1).toString().length === 1 ? `0${i + 1}` : i + 1;
    days.push(number);
  }

  return days;
};
