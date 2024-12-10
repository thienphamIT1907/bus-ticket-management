import { DEFAULT_PAGE_SIZE } from '@/shared/constants';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';

const table = DataTable.COMPANIES;

export const fetchBusCompanies = async () => {
  const { data, error } = await supabase
    .from<DataTable.COMPANIES, Database['public']['Tables']['companies']>(table)
    .select()
    .limit(DEFAULT_PAGE_SIZE)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
