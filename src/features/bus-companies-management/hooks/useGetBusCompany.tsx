import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants';
import type { BusCompany } from '@/shared/types';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetBusCompany = () =>
  useQuery<BusCompany[]>({
    queryKey: [QueryKeys.companies],
    initialData: [],
    queryFn: async () => {
      const { data, error } = await supabase
        .from<
          DataTable.COMPANIES,
          Database['public']['Tables']['companies']
        >(DataTable.COMPANIES)
        .select()
        .limit(DEFAULT_PAGE_SIZE)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
