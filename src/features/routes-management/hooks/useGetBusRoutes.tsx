import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants';
import type { BusRoute } from '@/shared/types';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetBusRoutes = () =>
  useQuery<BusRoute[]>({
    queryKey: [QueryKeys.routes],
    initialData: [],
    queryFn: async () => {
      const { data, error } = await supabase
        .from<
          DataTable.ROUTES,
          Database['public']['Tables']['routes']
        >(DataTable.ROUTES)
        .select()
        .limit(DEFAULT_PAGE_SIZE)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });
