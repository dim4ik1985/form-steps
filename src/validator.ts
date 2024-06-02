export function isValidDate(input: string): [boolean, Date] {
  const pattern = /[,./-]/;
  const [day, month, year] = input.split(pattern);
  const d = new Date(+year, +month - 1, +day);

  return [+year == d.getFullYear() && +month - 1 == d.getMonth() && +day == d.getDate(), d];
}
