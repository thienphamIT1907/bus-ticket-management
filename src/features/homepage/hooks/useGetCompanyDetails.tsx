import { QueryKeys } from '@/features/homepage/api/queryKeys';
import type { BusCompany } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

type Props = {
  companyId?: string;
};

export const useGetCompanyDetails = ({ companyId }: Props) => {
  const { data, isFetching } = useQuery<BusCompany>({
    queryKey: [QueryKeys.companies],
    initialData: undefined,
    queryFn: async () => {
      if (!companyId) {
        return undefined;
      }

      const { data, error } = await supabase
        .from(DataTable.COMPANIES)
        .select()
        .eq('id', companyId)
        .order('created_at', { ascending: false })
        .single();

      if (error) {
        throw new Error(error.message);
      }
      return data;
    },
  });

  return {
    companyDetails: data,
    isFetching,
  };
};
