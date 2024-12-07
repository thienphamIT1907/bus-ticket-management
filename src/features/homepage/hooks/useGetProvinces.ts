import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/features/homepage/api/queryKeys.ts';
import type { FetchProvincesParams } from '@/features/homepage/api/provinces';
import { fetchProvinces } from '@/features/homepage/api/provinces';
import type { ProvinceItem } from '@/features/homepage/types';

export const useGetProvinces = ({
  page = 1,
  size = 100,
  query = '',
}: FetchProvincesParams) =>
  useQuery<ProvinceItem[]>({
    queryKey: [QueryKeys.Provinces],
    queryFn: () => fetchProvinces({ page, size, query }),
    initialData: [],
  });
