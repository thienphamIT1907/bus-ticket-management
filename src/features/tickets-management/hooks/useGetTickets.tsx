import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants';
import type { Ticket } from '@/shared/types';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetTickets = () =>
  useQuery<Ticket[]>({
    queryKey: [QueryKeys.tickets],
    initialData: [],
    queryFn: async () => {
      const { data, error } = await supabase
        .from<DataTable.TICKETS, Database['public']['Tables']['tickets']>(
          DataTable.TICKETS,
        )
        .select(
          `
            *,
            tours(
              *,
              routes(
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
      return data as unknown as Ticket[] & {
        // routes: BusRoute;
        // buses: keyof Vehicle & { drivers: Driver };
      };
    },
  });
