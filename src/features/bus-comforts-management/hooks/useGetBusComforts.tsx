import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetBusComforts = () => {
  const { showToast } = useToast();
  const {
    data: busComforts,
    error,
    isFetching,
  } = useQuery({
    initialData: [],
    queryKey: [QueryKeys.comforts],
    queryFn: async () => {
      const { data } = await supabase
        .from<
          DataTable.COMFORTS,
          Database['public']['Tables']['comforts']
        >(DataTable.COMFORTS)
        .select()
        .order('name', { ascending: true });

      return data;
    },
  });

  if (error) {
    showToast({
      type: 'error',
      message: 'Error',
      description: error?.message,
    });
  }

  return {
    busComforts,
    isFetching,
  };
};
