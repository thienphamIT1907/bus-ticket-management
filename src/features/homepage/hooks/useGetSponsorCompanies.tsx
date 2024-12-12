import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import type { Database } from '@/shared/types/database.types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

export const useGetSponsorCompanies = () => {
  const { showToast } = useToast();

  const {
    data: sponsoredCompanies,
    isFetching,
    error,
  } = useQuery({
    queryKey: [QueryKeys.companies],
    queryFn: async () => {
      try {
        const { data } = await supabase
          .from<
            DataTable.COMPANIES,
            Database['public']['Tables']['companies']
          >(DataTable.COMPANIES)
          .select()
          .eq('is_sponsor', true);

        return data;
      } catch (error) {
        console.error(error);
      }
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
    sponsoredCompanies,
    isFetching,
  };
};
