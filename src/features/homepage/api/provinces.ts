import axiosRequest from '@/libs/axios.ts';

const getProvincesEndPoint = 'https://open.oapi.vn/location/provinces';

export interface GetProvincesParams {
  page?: number;
  size?: number;
  query?: string;
}

export const getProvinces = async (params: GetProvincesParams) => {
  const { page = 1, size = 100, query = '' } = params;
  const { data } = await axiosRequest.get(getProvincesEndPoint, {
    params: {
      page,
      size,
      query,
    },
  });
  return data?.data || [];
};
