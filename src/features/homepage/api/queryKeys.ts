import { DataTable } from '@/shared/types';

export const QueryKeys = {
  Provinces: 'provinces',
  summary: 'summary',
  [DataTable.COMPANIES]: 'companies',
  [DataTable.ROUTES]: 'routes',
  [DataTable.COMFORTS]: 'comforts',
  [DataTable.BUSES]: 'buses',
  [DataTable.DRIVERS]: 'drivers',
} as const;
