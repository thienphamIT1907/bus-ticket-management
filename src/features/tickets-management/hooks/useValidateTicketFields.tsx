import type { Rule } from 'antd/es/form';

export const useValidateTicketFields = () => {
  const VALIDATE_FIELDS_RULES: { [key: string]: Rule[] } = {
    clientName: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    clientEmail: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
    clientPhone: [
      {
        required: true,
        message: 'Vui lòng nhập đủ thông tin',
      },
    ],
  };
  const TICKET_FORM_FIELDS = {
    clientName: {
      label: 'Họ và tên',
      name: 'client_name',
      rules: VALIDATE_FIELDS_RULES.clientName,
      placeholder: 'Nhập họ và tên',
    },
    clientEmail: {
      label: 'Email',
      name: 'client_email',
      rules: VALIDATE_FIELDS_RULES.clientEmail,
      placeholder: 'Nhập email',
    },
    clientPhone: {
      label: 'Số điện thoại',
      name: 'client_phone',
      rules: VALIDATE_FIELDS_RULES.clientPhone,
      placeholder: 'Nhập số điện thoại',
    },
  };

  return {
    TICKET_FORM_FIELDS,
  };
};
