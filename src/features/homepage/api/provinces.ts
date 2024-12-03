import axiosInstance from '@/libs/axios';
import axios from 'axios';

const provincesEndpoint = 'https://open.oapi.vn/location/provinces';

export interface FetchProvincesParams {
  page?: number;
  size?: number;
  query?: string;
}

export const fetchProvinces = async (params: FetchProvincesParams) => {
  const { page = 1, size = 100, query = '' } = params;

  try {
    const { data } = await axiosInstance.get(provincesEndpoint, {
      params: {
        page,
        size,
        query,
      },
    });
    return data?.data || [];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};
