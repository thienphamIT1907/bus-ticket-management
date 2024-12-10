import type { Rule } from 'antd/es/form';

export const useValidateCreateBusCompany = () => {
  const VALIDATE_FIELDS_RULES: { [key: string]: Rule[] } = {
    businessCode: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
      {
        min: 10,
        message: 'Mã số kinh doanh phải ít nhất 10 kí tự',
      },
      {
        max: 10,
        message: 'Mã số kinh doanh không quá 10 kí tự',
      },

      {
        pattern: /^[0-9]*$/,
        message: 'Mã số kinh doanh phài là số',
      },
    ],
    name: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    owner: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    address: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    phone: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
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
    avatar: [],
  };

  const CREATE_BUS_COMPANY_FORM_FIELDS = {
    businessCode: {
      label: 'Mã số kinh doanh',
      name: 'business_code',
      rules: VALIDATE_FIELDS_RULES.businessCode,
      placeholder: 'Nhập mã số kinh doanh',
    },
    name: {
      label: 'Tên nhà xe',
      name: 'name',
      rules: VALIDATE_FIELDS_RULES.name,
      placeholder: 'Nhập tên nhà xe',
    },
    owner: {
      label: 'Chủ sở hữu',
      name: 'owner',
      rules: VALIDATE_FIELDS_RULES.owner,
      placeholder: 'Nhập tên chủ sở hữu',
    },
    address: {
      label: 'Địa chỉ',
      name: 'address',
      rules: VALIDATE_FIELDS_RULES.address,
      placeholder: 'Nhập địa chỉ',
    },
    phone: {
      label: 'Số điện thoại',
      name: 'phone',
      rules: VALIDATE_FIELDS_RULES.phone,
      placeholder: 'Nhập số điện thoại',
    },
    email: {
      label: 'Email',
      name: 'email',
      rules: VALIDATE_FIELDS_RULES.email,
      placeholder: 'Nhập email',
    },
    avatar: {
      label: 'Logo',
      name: 'avatar_base64',
      rules: VALIDATE_FIELDS_RULES.avatar,
      placeholder: '',
    },
  };
  return {
    VALIDATE_FIELDS_RULES,
    CREATE_BUS_COMPANY_FORM_FIELDS,
  };
};
