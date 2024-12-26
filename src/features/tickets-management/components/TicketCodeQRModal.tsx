import { Button, Checkbox, Flex, Modal, Typography } from 'antd';
import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

const { Text } = Typography;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  value?: string;
  showHint?: boolean;
  title?: string;
};

export const TicketCodeQRModal = ({
  isOpen,
  onClose,
  value,
  showHint = true,
  title,
}: Props) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <Modal
      title={
        <Text className="text-2xl font-bold">
          {title || 'Mã vé xe của bạn'}
        </Text>
      }
      centered
      open={isOpen}
      onCancel={onClose}
      closable={!showHint}
      maskClosable={false}
      footer={
        <Flex justify="space-between" align="center" hidden={!showHint}>
          <Checkbox
            defaultChecked={false}
            onChange={(e) => {
              const isChecked = e.target.checked;
              if (isChecked) {
                setIsDisabled(!isChecked);
              }
            }}
          >
            Tôi đã lưu mã QR
          </Checkbox>

          <Button
            type="primary"
            size="large"
            onClick={onClose}
            disabled={isDisabled}
          >
            OK
          </Button>
        </Flex>
      }
    >
      {value ? (
        <Flex justify="center" align="center" className="p-10" vertical>
          <QRCodeSVG value={value} className="size-1/2" />
        </Flex>
      ) : null}
      <Flex
        justify="flex-start"
        align="baseline"
        gap={10}
        hidden={!showHint}
        className="w-full rounded-xl border border-solid border-yellow-300 bg-yellow-50 p-4 text-base"
      >
        <FaRegLightbulb />
        <Text>
          Hãy chụp hình hoặc lưu lại mã QR vé xe của bạn để nhân viên có thể
          check-in khi bạn lên xe.
        </Text>
      </Flex>
    </Modal>
  );
};
