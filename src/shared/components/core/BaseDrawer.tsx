import ActionButtons from '@/shared/components/core/ActionButtons';
import type { DrawerProps } from 'antd';
import { Drawer } from 'antd';
import type { ReactNode } from 'react';
import '@/shared/styles/drawer.css';

const LAYOUT_SIZE_DRAWER = 400;

type Props = {
  children?: ReactNode;
  width?: number;
  footer?: ReactNode;
  hiddenFooter?: boolean;
  btnCancelText?: string;
  btnOKText?: string;
  onCancel?: () => void;
  onOK?: () => void;
} & DrawerProps;

export const BaseDrawer = ({
  children,
  width,
  footer,
  btnCancelText,
  btnOKText,
  onCancel,
  onClose,
  onOK,
  hiddenFooter = false,
  ...props
}: Props) => {
  const renderFooter = () => {
    if (footer) {
      return footer;
    }

    return (
      <ActionButtons
        btnCancelText={btnCancelText}
        btnOkText={btnOKText}
        onOK={onOK}
      />
    );
  };

  return (
    <Drawer
      {...props}
      footer={hiddenFooter ? null : renderFooter()}
      keyboard={false}
      maskClosable={false}
      width={width || LAYOUT_SIZE_DRAWER}
      destroyOnClose
      onClose={onClose}
    >
      {!!open && children}
    </Drawer>
  );
};
