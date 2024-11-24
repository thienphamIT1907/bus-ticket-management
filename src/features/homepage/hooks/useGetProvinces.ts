import { useQuery } from '@tanstack/react-query';
import { getProvinces, GetProvincesParams } from '@/features/homepage/api/provinces.ts';
import { QueryKeys } from '@/features/homepage/api/queryKeys.ts';

export const useGetProvinces = ({ page = 1, size = 100, query = '' }: GetProvincesParams) => {
  return useQuery({
    queryKey: [QueryKeys.Provinces, page, size, query],
    queryFn: () => getProvinces({ page, size, query}),
    initialData: []
  })
};