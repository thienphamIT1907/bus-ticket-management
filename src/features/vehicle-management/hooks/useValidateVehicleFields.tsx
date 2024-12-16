import type { Rule } from 'antd/es/form';

export const useValidateVehicleFields = () => {
  const VALIDATE_FIELDS_RULES: { [key: string]: Rule[] } = {
    plateNumber: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    capacity: [
      {
        required: true,
        message: 'Vui lòng chọn đủ thông tin',
      },
    ],
    type: [
      {
        required: true,
        message: 'Vui lòng chọn đủ thông tin',
      },
    ],
    comforts: [
      {
        required: true,
        message: 'Vui lòng chọn đủ thông tin',
      },
    ],
  };

  const VEHICLE_FORM_FIELDS = {
    plateNumber: {
      label: 'Biển số',
      name: 'plate_number',
      rules: VALIDATE_FIELDS_RULES.plateNumber,
      placeholder: 'Nhập biển số',
    },
    capacity: {
      label: 'Số chỗ',
      name: 'capacity',
      rules: VALIDATE_FIELDS_RULES.capacity,
      placeholder: 'Chọn số chỗ',
    },
    company: {
      label: 'Nhà xe',
      name: 'company_id',
      rules: [],
      placeholder: 'Chọn nhà xe',
    },
    driver: {
      label: 'Tài xế',
      name: 'driver_id',
      rules: [],
      placeholder: 'Chọn tài xế',
    },
    type: {
      label: 'Loại',
      name: 'type',
      rules: VALIDATE_FIELDS_RULES.type,
      placeholder: 'Chọn loại',
    },
    comforts: {
      label: 'Tiện ích',
      name: 'comforts',
      rules: VALIDATE_FIELDS_RULES.comforts,
      placeholder: 'Chọn tiện ích',
    },
  };

  return {
    VALIDATE_FIELDS_RULES,
    VEHICLE_FORM_FIELDS,
  };
};
