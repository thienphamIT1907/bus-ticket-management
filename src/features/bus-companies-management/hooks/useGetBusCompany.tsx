import type { BusCompany } from '@/features/bus-companies-management/types';
import { QueryKeys } from '@/features/homepage/api/queryKeys';
import { fetchBusCompanies } from '@/shared/apis/bus-companies';
import { useQuery } from '@tanstack/react-query';

export const useGetBusCompany = () =>
  useQuery<BusCompany[]>({
    queryKey: [QueryKeys.companies],
    queryFn: fetchBusCompanies,
    initialData: [],
  });
