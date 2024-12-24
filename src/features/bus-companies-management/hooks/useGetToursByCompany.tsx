import type { BusCompany } from '@/shared/types';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useQuery } from '@tanstack/react-query';

type Props = {
  companyId?: string;
};

export const useGetToursByCompany = ({ companyId }: Props) => {
  const { data } = useQuery({
    queryKey: ['toursByCompany'],
    queryFn: async () => {
      if (!companyId) return;
      const { data } = await supabase
        .from(DataTable.COMPANIES)
        .select(
          `
        *,
        buses(
          *,
          tours(
            *,
            buses(
              *,
               companies(
                *
              ),
              drivers(
                *
              )
            ),
            routes(
              *
            )
          )
        )
        `,
        )
        .eq('id', companyId);

      return data as BusCompany[];
    },
  });

  return {
    data,
  };
};
