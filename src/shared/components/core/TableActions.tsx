import { Button, Flex, Tooltip } from 'antd';
import { CgTrash } from 'react-icons/cg';
import { FiEdit } from 'react-icons/fi';

type Props = {
  onDelete: () => void;
  onEdit: () => void;
};

export const TableActions = ({ onEdit, onDelete }: Props) => (
  <Flex gap={4}>
    <Tooltip title="Chỉnh sửa">
      <Button
        type="text"
        onClick={onEdit}
        icon={<FiEdit className="size-5" />}
      />
    </Tooltip>
    <Tooltip title="Xoá">
      <Button
        type="text"
        onClick={onDelete}
        icon={<CgTrash className="size-5" />}
      />
    </Tooltip>
  </Flex>
);
