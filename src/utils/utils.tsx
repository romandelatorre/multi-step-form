export const totalDetail = (str: string) => {
  if (!str || typeof str !== 'string') {
    return '';
  }
  const regexp = /(\d+)\/(\w+)/g;
  const matches = str.match(regexp);
  if (!matches) {
    return '';
  }
  const nums = matches.map((m) => parseInt(m.split('/')[0]));
  const unit = matches[0].split('/')[1];
  const suma = nums.reduce((acc, num) => acc + num, 0);
  return `$${suma}/${unit}`;
};
