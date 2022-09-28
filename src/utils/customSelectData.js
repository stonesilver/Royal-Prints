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
    days.push(Number(i) + 1);
  }

  return days;
};
