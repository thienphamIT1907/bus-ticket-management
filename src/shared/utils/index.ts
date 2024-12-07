import { MonthsInYear } from '@/shared/types';

export const upperCaseFirstLetter = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getMonthFromString = (mon: MonthsInYear) =>
  new Date(Date.parse(mon + ' 1, 2000')).getMonth() + 1;

export const generateHeaderByCurrentPathname = (
  pathname: string,
  prefix: string,
) => {
  let headerPrefix = prefix || 'Summary';
  const splittedPath: string = pathname.split('/')[1];
  if (splittedPath !== '') {
    headerPrefix = upperCaseFirstLetter(splittedPath);
  }

  return `My ${headerPrefix} Board`;
};
