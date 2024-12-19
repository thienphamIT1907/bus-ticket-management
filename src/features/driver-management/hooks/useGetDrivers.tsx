import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants';
import type { Driver } from '@/shared/types';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetDrivers = () =>
  useQuery<Driver[]>({
    queryKey: [QueryKeys.drivers],
    initialData: [],
    queryFn: async () => {
      const { data, error } = await supabase
        .from<
          DataTable.DRIVERS,
          Database['public']['Tables']['drivers']
        >(DataTable.DRIVERS)
        .select()
        .limit(DEFAULT_PAGE_SIZE)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }
      return data as unknown as Driver[];
    },
  });
