import { useToast } from '@/shared/hooks';
import { Button, Divider, Form, Input } from 'antd';
import { Rule } from 'antd/es/form';
import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const { useForm, Item } = Form;

export type LoginFormFields = {
  username: string;
  password: string;
};

const validateRules: Rule[] = [
  {
    pattern: /^[a-zA-Z0-9_]+$/,
    message: 'Tên đăng nhập không hợp lệ',
  },
  {
    min: 3,
    message: 'Tên đăng nhập không được ít hơn 3 kí tự',
  },
  {
    required: true,
    message: 'Vui lòng nhập đủ thông tin',
  },
];

export const LoginForm = () => {
  const { showToast } = useToast();
  const [form] = useForm<LoginFormFields>();

  const onFinish = (values: LoginFormFields) => {
    form
      .validateFields()
      .then(() => {
        console.log('Form Values: ', values);
      })
      .catch(() => {
        showToast({
          type: 'error',
          message: 'Lỗi',
          description: 'Thông tin đăng nhập không hợp lệ!',
        });
      });
  };

  return (
    <Form
      layout="vertical"
      form={form}
      className="mt-10 w-1/2"
      onFinish={onFinish}
    >
      <Item name="username" rules={validateRules}>
        <Input size="large" placeholder="Tên đăng nhập" />
      </Item>

      <Item
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
        className="mt-8"
      >
        <Input.Password
          size="large"
          placeholder="Mật khẩu"
          iconRender={(visible) =>
            visible ? (
              <HiOutlineEye className="cursor-pointer" />
            ) : (
              <HiOutlineEyeOff className="cursor-pointer" />
            )
          }
        />
      </Item>
      <Divider className="my-10" />
      <Button
        className="block w-full border-none bg-[#c35959] text-white shadow-lg shadow-[#e19191] outline-none"
        size="large"
        htmlType="submit"
      >
        Đăng nhập
      </Button>
    </Form>
  );
};
