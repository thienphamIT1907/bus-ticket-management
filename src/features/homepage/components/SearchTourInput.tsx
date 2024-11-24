import { cn } from '@/libs/tailwind';
import { Button, DatePicker, Form, Input } from 'antd';
import { GrLocation } from 'react-icons/gr';
import { BiCurrentLocation } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { CiCalendar } from 'react-icons/ci';

const { useForm } = Form;

type Props = {
  className?: string;
};

export const SearchTourInput = ({ className }: Props) => {
  const [form] = useForm();
  return (
    <div className={cn(className && className)}>
      <Form
        form={form}
        layout="horizontal"
        className="flex items-center gap-x-2"
      >
        <Input
          className="w-full p-4"
          size="large"
          placeholder="Nơi xuất phát"
          suffix={<BiCurrentLocation className="text-xl text-[#bebebe]" />}
        />
        <Input
          className="w-full p-4"
          size="large"
          placeholder="Nơi đến"
          suffix={<GrLocation className="text-xl text-[#bebebe]" />}
        />
        <DatePicker
          className="w-full p-4"
          placeholder="Ngày đi"
          suffixIcon={<CiCalendar className="text-xl text-[#bebebe]" />}
        />
        <Button
          className="flex items-center justify-center gap-x-2 bg-[#1c73e8] p-7"
          size="large"
        >
          <CiSearch className="text-2xl text-white" />
          <span className="text-xl text-white">Tìm kiếm</span>
        </Button>
      </Form>
    </div>
  );
};
