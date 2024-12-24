import { TicketInformation } from '@/features/homepage/components/TicketInformation';
import { TicketCodeQRModal } from '@/features/tickets-management/components/TicketCodeQRModal';
import { useOrderTicket } from '@/features/tickets-management/hooks/useOrderTicket';
import { useValidateTicketFields } from '@/features/tickets-management/hooks/useValidateTicketFields';
import { useToggle } from '@/shared/hooks';
import { TicketStatus, type Ticket, type Tour } from '@/shared/types';
import { Button, Divider, Form, Input, Modal, Typography } from 'antd';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const { Text } = Typography;
const { Item } = Form;

type Props = {
  selectedTour?: Tour;
  isOpen: boolean;
  onClose: () => void;
  closeTourListModal?: () => void;
};

export const OrderTicketModal = ({
  selectedTour,
  isOpen,
  onClose,
  closeTourListModal,
}: Props) => {
  const {
    open: isOpenQRModal,
    onClose: onCloseQRModal,
    onOpen: onOpenQRModal,
  } = useToggle();

  const { handleOrderTicket, isOrdering, form } = useOrderTicket({
    closeTicketModal: onClose,
    closeTourListmodal: closeTourListModal || undefined,
    onOpenQRModal,
  });

  const [code, setCode] = useState('');

  const { TICKET_FORM_FIELDS } = useValidateTicketFields();
  const { clientEmail, clientName, clientPhone } = TICKET_FORM_FIELDS;

  const onFinish = () => {
    form.validateFields().then((formValues) => {
      const code = `CS447BUS-${uuidv4()}`;
      setCode(code);
      const input = {
        ...formValues,
        price: selectedTour?.price || 0,
        code,
        tour_id: selectedTour?.id,
        status: TicketStatus.Ordered,
      };
      handleOrderTicket(input as Ticket);
    });
  };
  return (
    <>
      <Modal
        afterOpenChange={(open) => {
          if (!open) {
            form.resetFields();
          }
        }}
        title={<Text className="text-2xl font-bold">Đặt vé xe</Text>}
        className="w-1/2"
        centered
        open={isOpen}
        onCancel={onClose}
        maskClosable={false}
        footer={
          <Button
            type="primary"
            size="large"
            onClick={() => form.submit()}
            loading={isOrdering}
          >
            Đặt vé
          </Button>
        }
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Item
            name={clientName?.name}
            label={clientName?.label}
            rules={clientName?.rules}
          >
            <Input
              placeholder={clientName?.placeholder}
              className="w-full"
              size="large"
            />
          </Item>
          <Item
            name={clientEmail?.name}
            label={clientEmail?.label}
            rules={clientEmail?.rules}
          >
            <Input
              placeholder={clientEmail?.placeholder}
              className="w-full"
              size="large"
            />
          </Item>
          <Item
            name={clientPhone?.name}
            label={clientPhone?.label}
            rules={clientPhone?.rules}
          >
            <Input
              placeholder={clientPhone?.placeholder}
              className="w-full"
              size="large"
              maxLength={10}
            />
          </Item>
          <Divider />
          <TicketInformation selectedTour={selectedTour} />
        </Form>
      </Modal>
      <TicketCodeQRModal
        value={code}
        isOpen={isOpenQRModal}
        onClose={onCloseQRModal}
      />
    </>
  );
};
