import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { DEFAULT_PAGE_SIZE } from '@/shared/constants';
import type { BusCompany, Vehicle } from '@/shared/types';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetVehicle = () =>
  useQuery<Vehicle[]>({
    queryKey: [QueryKeys.buses],
    initialData: [],
    queryFn: async () => {
      const { data, error } = await supabase
        .from<DataTable.BUSES, Database['public']['Tables']['buses']>(
          DataTable.BUSES,
        )
        .select(
          `
          *,
          companies (
           *
          ),
          buses_comforts (
            comforts!inner (
              *
            )
          )
        `,
        )
        .eq('buses_comforts.comforts.is_active', true)
        .limit(DEFAULT_PAGE_SIZE)
        .order('created_at', { ascending: false });

      if (error) {
        throw new Error(error.message);
      }
      return data as unknown as Vehicle[] & { companies: BusCompany };
    },
  });
