import { Button, Flex, Form, Tooltip } from 'antd';
import { StartPointSelector } from '@/features/homepage/components/StartPointSelector.tsx';
import { EndPointSelector } from '@/features/homepage/components/EndPointSelector.tsx';
import { useEffect, useState } from 'react';
import { cn } from '@/libs/tailwind.ts';
import type { SearchTour } from '@/features/homepage/types';
import { useGetProvinces } from '@/features/homepage/hooks/useGetProvinces';
import { useFindTourBySlug } from '@/features/homepage/hooks/useFindTourBySlug';
import { useToggle } from '@/shared/hooks';
import { TourListModal } from '@/features/homepage/components/TourListModal';
import type { Tour } from '@/shared/types';
import { OrderTicketModal } from '@/features/homepage/components/OrderTicketModal';

const { useForm, Item } = Form;

export const SearchTourForm = () => {
  const [form] = useForm<SearchTour>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [query, setQuery] = useState('');
  const [tourList, setTourList] = useState<Tour[] | null>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | undefined>(undefined);
  const {
    data: provinces,
    isLoading,
    refetch,
  } = useGetProvinces({
    page: 0,
    size: 100,
    query,
  });

  const {
    open: isOpenTourListModal,
    onOpen: openTourListModal,
    onClose: closeTourlistModal,
  } = useToggle();

  const {
    open: isOpenTicketModal,
    onOpen: openTicketModal,
    onClose: closeTicketModal,
  } = useToggle();

  const { handleFindTourBySlug, isFinding } = useFindTourBySlug();

  useEffect(() => {
    refetch();
  }, [query]);

  const onFinish = () => {
    form
      .validateFields()
      .then(() => {
        setDisabled(false);
      })
      .then(async () => {
        const formValues = form.getFieldsValue();
        const tours = await handleFindTourBySlug({
          startSlug: formValues?.startPoint,
          endSlug: formValues?.endPoint,
        });

        if (tours?.length) {
          setTourList(tours);
          openTourListModal();
        }
      })
      .catch(() => {
        setDisabled(true);
      });
  };

  const handleFormChange = () => {
    const formValue = form.getFieldsValue();
    setQuery(formValue?.endPoint);

    if (formValue?.endPoint && formValue.startPoint) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleCloseTourList = () => {
    setTourList(null);
    closeTourlistModal();
  };

  const handleCloseTicketModal = () => {
    setSelectedTour(undefined);
    closeTicketModal();
  };

  const handleOrderTicket = (selectedTour: Tour) => {
    setSelectedTour(selectedTour);
    openTicketModal();
  };

  return (
    <>
      <Form
        form={form}
        className="w-full"
        onFinish={onFinish}
        onFieldsChange={handleFormChange}
      >
        <Flex gap={6} align="center" justify="center">
          <Item className="w-full" required name="startPoint">
            <StartPointSelector
              isLoading={isLoading}
              provinces={provinces}
              setQuery={setQuery}
            />
          </Item>
          <Item className="w-full" name="endPoint">
            <EndPointSelector
              isLoading={isLoading}
              provinces={provinces}
              setQuery={setQuery}
            />
          </Item>
          <Tooltip title={disabled ? 'Vui lòng điền đủ thông tin!' : null}>
            <Button
              className={cn(
                'self-start border-none bg-[#8f3333] px-10 font-medium text-white outline-none',
                disabled && 'opacity-30',
              )}
              size="large"
              htmlType="submit"
              disabled={disabled}
              loading={isFinding}
            >
              Tìm kiếm
            </Button>
          </Tooltip>
        </Flex>
      </Form>
      <TourListModal
        isOpen={isOpenTourListModal}
        tourList={tourList}
        onClose={handleCloseTourList}
        handleOrderTicket={handleOrderTicket}
      />
      <OrderTicketModal
        isOpen={isOpenTicketModal}
        onClose={handleCloseTicketModal}
        selectedTour={selectedTour}
        closeTourListModal={handleCloseTourList}
      />
    </>
  );
};
