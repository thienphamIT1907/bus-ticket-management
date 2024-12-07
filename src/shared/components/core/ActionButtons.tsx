import type { ButtonProps } from 'antd/lib';
import { Button } from 'antd';

interface ActionButtonsProps extends ButtonProps {
  btnCancelText?: string;
  btnOkText?: string;
  loading?: boolean;
  onCancel?: () => void;
  onOK?: () => void;
}

const ActionButtons = ({
  onCancel,
  onOK,
  loading = false,
  btnOkText,
  btnCancelText,
  ...restProps
}: ActionButtonsProps) => (
  <>
    <div className="flex items-center justify-end gap-x-4 py-2">
      {onCancel ? (
        <Button disabled={loading} onClick={onCancel} size="large">
          {btnCancelText || 'Huỷ'}
        </Button>
      ) : null}
      <Button
        {...restProps}
        htmlType="submit"
        loading={loading}
        onClick={onOK}
        type="primary"
        size="large"
        className="bg-[#d84f57]"
      >
        {btnOkText || 'OK'}
      </Button>
    </div>
  </>
);

export default ActionButtons;
