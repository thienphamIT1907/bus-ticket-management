import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants';
import type { BusRoute, Driver, Tour, Vehicle } from '@/shared/types';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetTours = () =>
  useQuery<Tour[]>({
    queryKey: [QueryKeys.tours],
    initialData: [],
    queryFn: async () => {
      const { data, error } = await supabase
        .from<DataTable.TOURS, Database['public']['Tables']['tours']>(
          DataTable.TOURS,
        )
        .select(
          `
            *,
            routes(
              *
            ),
            buses(
              *,
              companies(
                *
              ),
              drivers(
               *
              )
            )
          `,
        )
        .limit(DEFAULT_PAGE_SIZE)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }
      return data as unknown as Tour[] & {
        routes: BusRoute;
        buses: keyof Vehicle & { drivers: Driver };
      };
    },
  });
