import type { Rule } from 'antd/es/form';

export const useValidateBusRouteFields = () => {
  const VALIDATE_FIELDS_RULES: { [key: string]: Rule[] } = {
    startPoint: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    endPoint: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    estDistance: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    estTime: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
  };

  const BUS_ROUTES_FORM_FIELDS = {
    startPoint: {
      label: 'Điểm đi',
      name: 'start_point',
      rules: VALIDATE_FIELDS_RULES.startPoint,
      placeholder: 'Đà Nẵng...',
    },
    endPoint: {
      label: 'Điểm đến',
      name: 'end_point',
      rules: VALIDATE_FIELDS_RULES.endPoint,
      placeholder: 'Hà Nội...',
    },
    estDistance: {
      label: 'Khoảng cách dự tính',
      name: 'est_distance',
      rules: VALIDATE_FIELDS_RULES.estDistance,
      placeholder: '100',
    },
    estTime: {
      label: 'Thời gian dự tính',
      name: 'est_time',
      rules: VALIDATE_FIELDS_RULES.estTime,
      placeholder: '24',
    },
    isActive: {
      label: 'Khả dụng',
      name: 'is_active',
    },
  };
  return {
    VALIDATE_FIELDS_RULES,
    BUS_ROUTES_FORM_FIELDS,
  };
};
