import { useGetSponsorCompanies } from '@/features/homepage/hooks/useGetSponsorCompanies';
import { TableTitle } from '@/shared/components/TableTitle';
import { Card, Flex, Image, Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';

export const BusCompaniesSection = () => {
  const navigate = useNavigate();
  const { sponsoredCompanies } = useGetSponsorCompanies();

  const handleNavigateDetail = (id: string) => {
    navigate(`/bus-company/${id}`, {});
  };

  if (!sponsoredCompanies?.length) {
    return null;
  }

  return (
    <Flex vertical gap={10}>
      <TableTitle title="Nhà Xe Đối Tác" className="text-2xl" />
      <div className="grid grid-cols-3 gap-4">
        {sponsoredCompanies?.map((item, index) => (
          <Card
            key={index}
            className="rounded-2xl border border-solid border-gray-200 duration-200 hover:bg-gray-200"
            onClick={() => handleNavigateDetail(item?.id)}
          >
            <Tooltip title={item?.name} mouseEnterDelay={1}>
              <Flex justify="center" align="center">
                <div className="flex size-full h-[120px] w-[300px] cursor-pointer items-center justify-center">
                  <Image
                    preview={false}
                    src={item?.avatar_base64 || ''}
                    className="h-[120px/] w-[120px]"
                  />
                </div>
              </Flex>
            </Tooltip>
          </Card>
        ))}
      </div>
    </Flex>
  );
};
