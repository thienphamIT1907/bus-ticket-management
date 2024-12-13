import { DataTable } from '@/shared/types';

export const QueryKeys = {
  Provinces: 'provinces',
  [DataTable.COMPANIES]: 'companies',
  [DataTable.ROUTES]: 'routes',
} as const;
