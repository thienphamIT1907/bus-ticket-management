import { DataTable } from '@/shared/types';

export const QueryKeys = {
  Provinces: 'provinces',
  summary: 'summary',
  [DataTable.COMPANIES]: 'companies',
  [DataTable.ROUTES]: 'routes',
  [DataTable.COMFORTS]: 'comforts',
} as const;
