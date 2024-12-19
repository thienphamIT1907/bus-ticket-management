import type { Rule } from 'antd/es/form';

export const useValidateDriverFields = () => {
  const VALIDATE_FIELDS_RULES: { [key: string]: Rule[] } = {
    firstName: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    lastName: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    birthday: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    email: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
      {
        pattern: /^[^@]+@[^@]+\.[^@]{2,}$/,
        message: 'Email sai định dạng',
      },
    ],
    phone: [
      {
        pattern: /^[0-9]*$/,
        message: 'Số điện thoại không hợp lệ',
      },
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    address: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    yoe: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    licenseType: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
  };

  const DRIVER_FORM_FIELDS = {
    firstName: {
      label: 'Tên',
      name: 'first_name',
      rules: VALIDATE_FIELDS_RULES.firstName,
      placeholder: 'Nhập tên',
    },
    lastName: {
      label: 'Họ',
      name: 'last_name',
      rules: VALIDATE_FIELDS_RULES.lastName,
      placeholder: 'Nhập họ',
    },
    birthday: {
      label: 'Ngày sinh',
      name: 'birthday',
      rules: VALIDATE_FIELDS_RULES.birthday,
      placeholder: 'Chọn ngày sinh',
    },
    email: {
      label: 'Email',
      name: 'email',
      rules: VALIDATE_FIELDS_RULES.email,
      placeholder: 'Nhập email',
    },
    phone: {
      label: 'Số điện thoại',
      name: 'phone',
      placeholder: 'Nhập số điện thoại',
      rules: VALIDATE_FIELDS_RULES.phone,
    },
    address: {
      label: 'Địa chỉ',
      name: 'address',
      placeholder: 'Nhập địa chỉ',
      rules: VALIDATE_FIELDS_RULES.address,
    },
    yoe: {
      label: 'Năm kinh nghiệm',
      name: 'yoe',
      rules: VALIDATE_FIELDS_RULES.yoe,
      placeholder: 'Chọn năm kinh nghiệm',
    },
    licenseType: {
      label: 'Loại bằng lái',
      name: 'license_type',
      rules: VALIDATE_FIELDS_RULES.licenseType,
      placeholder: 'Chọn loại bằng lái',
    },
  };
  return {
    VALIDATE_FIELDS_RULES,
    DRIVER_FORM_FIELDS,
  };
};
