import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/features/homepage/api/queryKeys.ts';
import {
  fetchProvinces,
  FetchProvincesParams,
} from '@/features/homepage/api/provinces';
import { ProvinceItem } from '@/shared/types';

export const useGetProvinces = ({
  page = 1,
  size = 100,
  query = '',
}: FetchProvincesParams) => {
  return useQuery<ProvinceItem[]>({
    queryKey: [QueryKeys.Provinces],
    queryFn: () => fetchProvinces({ page, size, query }),
    initialData: [],
  });
};
