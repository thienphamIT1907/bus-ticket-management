import type { MonthsInYear } from '@/shared/types';

export const upperCaseFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getMonthFromString = (mon: MonthsInYear) =>
  new Date(Date.parse(`${mon} 1, 2000`)).getMonth() + 1;

export const generateHeaderByCurrentPathname = (
  pathname: string,
  prefix: string,
) => {
  let headerPrefix = prefix || 'Summary';
  const [splittedPath] = pathname.split('/');
  if (splittedPath !== '') {
    headerPrefix = upperCaseFirstLetter(splittedPath);
  }

  return `My ${headerPrefix} Board`;
};
