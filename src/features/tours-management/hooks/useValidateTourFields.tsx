import type { Rule } from 'antd/es/form';

export const useValidateTourFields = () => {
  const VALIDATE_FIELDS_RULES: { [key: string]: Rule[] } = {
    route: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    bus: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    timeToGo: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    price: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
  };

  const TOUR_FORM_FIELDS = {
    route: {
      label: 'Lộ trình',
      name: 'route_id',
      rules: VALIDATE_FIELDS_RULES.route,
      placeholder: 'Chọn lộ trình',
    },
    bus: {
      label: 'Phương tiện',
      name: 'bus_id',
      rules: VALIDATE_FIELDS_RULES.bus,
      placeholder: 'Chọn phương tiện',
    },
    timeToGo: {
      label: 'Thời gian khởi hành dự kiến',
      name: 'time_to_go',
      rules: VALIDATE_FIELDS_RULES.bus,
      placeholder: 'Chọn thời gian khởi hành',
    },
    price: {
      label: 'Giá',
      name: 'price',
      rules: VALIDATE_FIELDS_RULES.price,
      placeholder: 'Nhập giá',
    },
  };

  return {
    TOUR_FORM_FIELDS,
  };
};
