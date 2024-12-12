import { Flex, Image } from 'antd';

type Props = {
  imageUrl?: string;
};
export const ImageLink = ({ imageUrl }: Props) => (
  <Flex className="w-full" justify="center" align="center">
    {imageUrl ? (
      <Image
        src={imageUrl}
        className="size-40 self-center object-contain text-center"
      />
    ) : (
      ''
    )}
  </Flex>
);
