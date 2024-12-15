import { QueryKeys } from '@/features/homepage/api/queryKeys';
import type { SummaryData } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetBusSummary = () => {
  const { data, isFetching } = useQuery({
    queryKey: [QueryKeys.summary],
    queryFn: async (): Promise<SummaryData> => {
      const { data } = await supabase.rpc('fetch_table_counts');
      return data;
    },
  });

  return {
    isFetching,
    summary: {
      comforts: data?.comforts,
    },
  };
};
