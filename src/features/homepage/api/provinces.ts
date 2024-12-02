import axiosInstance from '@/libs/axios';

const provincesEndpoint = 'https://open.oapi.vn/location/provinces';

export interface FetchProvincesParams {
  page?: number;
  size?: number;
  query?: string;
}

export const fetchProvinces = async (params: FetchProvincesParams) => {
  const { page = 1, size = 100, query = '' } = params;
  const { data } = await axiosInstance.get(provincesEndpoint, {
    params: {
      page,
      size,
      query,
    },
  });
  return data?.data || [];
};
