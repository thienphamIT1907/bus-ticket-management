import { useUpdateBusCompany } from '@/features/bus-companies-management/hooks/useUpdateBusCompany';
import { useValidateCreateBusCompany } from '@/features/bus-companies-management/hooks/useValidateCreateBusCompany';
import type { BusCompany } from '@/features/bus-companies-management/types';
import { BaseDrawer } from '@/shared/components/core/BaseDrawer';
import { FormLabelField } from '@/shared/components/forms/FormLabelField';
import { Button, Flex, Form, Input, Typography, Upload } from 'antd';

const { Item } = Form;
const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  selectedCompany?: BusCompany;
};

export const UpdateBusCompanyForm = ({
  isOpen,
  onClose,
  selectedCompany,
}: Props) => {
  const { CREATE_BUS_COMPANY_FORM_FIELDS } = useValidateCreateBusCompany();
  const { address, avatar, businessCode, email, name, owner, phone } =
    CREATE_BUS_COMPANY_FORM_FIELDS;

  const { form, handleUpdateBusCompany, isUpdating } = useUpdateBusCompany({
    onClose,
    selectedCompany,
  });

  const onFinish = () => {
    form.validateFields().then(() => {
      handleUpdateBusCompany();
    });
  };

  return (
    <BaseDrawer
      afterOpenChange={(open) => {
        if (!open) {
          form.resetFields();
        }
      }}
      title={<Text className="text-2xl font-medium">Cập nhật nhà xe</Text>}
      open={isOpen}
      onClose={onClose}
      onCancel={onClose}
      footer={
        <Flex gap={6} justify="flex-end">
          <Button
            size="large"
            type="text"
            onClick={onClose}
            disabled={isUpdating}
          >
            Huỷ
          </Button>
          <Button
            size="large"
            className="shadow-[#f3969c]' bg-[#d84f57] text-white shadow-md"
            loading={isUpdating}
            onClick={() => form.submit()}
          >
            Cập nhật
          </Button>
        </Flex>
      }
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={selectedCompany}
        disabled={isUpdating}
      >
        <Item
          label={<FormLabelField value={avatar.label} />}
          name={avatar.name}
          rules={avatar.rules}
          hidden
        >
          <Upload />
        </Item>
        <Item
          label={<FormLabelField value={name.label} />}
          name={name.name}
          rules={name.rules}
        >
          <Input size="large" placeholder={name.placeholder} />
        </Item>
        <Item
          label={<FormLabelField value={businessCode.label} />}
          name={businessCode.name}
          rules={businessCode.rules}
        >
          <Input size="large" placeholder={businessCode.placeholder} />
        </Item>
        <Item
          label={<FormLabelField value={owner.label} />}
          name={owner.name}
          rules={owner.rules}
        >
          <Input size="large" placeholder={owner.placeholder} />
        </Item>
        <Item
          label={<FormLabelField value={email.label} />}
          name={email.name}
          rules={email.rules}
        >
          <Input size="large" placeholder={email.placeholder} />
        </Item>
        <Item
          label={<FormLabelField value={phone.label} />}
          name={phone.name}
          rules={phone.rules}
        >
          <Input size="large" placeholder={phone.placeholder} />
        </Item>
        <Item
          label={<FormLabelField value={address.label} />}
          name={address.name}
          rules={address.rules}
        >
          <Input size="large" placeholder={address.placeholder} />
        </Item>
      </Form>
    </BaseDrawer>
  );
};
