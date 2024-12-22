import { useToast } from '@/shared/hooks';
import { DataTable } from '@/shared/types';
import supabase from '@/shared/utils/supbabase';
import { useState } from 'react';

type TourBySlug = {
  startSlug?: string;
  endSlug?: string;
};

export const useFindTourBySlug = () => {
  const { showToast } = useToast();
  const [isFinding, setIsFinding] = useState(false);

  const handleFindTourBySlug = async ({ startSlug, endSlug }: TourBySlug) => {
    setIsFinding(true);
    const { data, error } = await supabase
      .from(DataTable.TOURS)
      .select(
        `
          *,
          buses(
            *,
            drivers(
             *
            ),
            companies(
              *
            )
          ),
          routes(
            *
          )
        `,
      )
      .eq('routes.start_slug', startSlug)
      .eq('routes.end_slug', endSlug);

    if (error) {
      showToast({
        type: 'error',
        message: 'Error',
        description: error?.message,
      });
    }
    setIsFinding(false);
    const dataHasRoutes = data?.filter((item) => item?.routes);

    if (!data?.length || !dataHasRoutes?.length) {
      showToast({
        type: 'success',
        message: 'Không có chuyến!',
        description: 'Không tìm thấy chuyến xe cho tuyến đường bạn chọn',
      });
    }

    return data?.filter((item) => item?.routes);
  };

  return {
    handleFindTourBySlug,
    isFinding,
  };
};
