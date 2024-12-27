import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import { Button, Divider, Flex, Spin, Typography } from 'antd';
import { useGetTicketDetails } from '@/features/qr-scanner/hooks/useGetTicketDetails';
import { TicketStatus, type Ticket } from '@/shared/types';
import { formatCurrency } from '@/shared/utils';
import { HiMiniCamera } from 'react-icons/hi2';
import { useTicketStatus } from '@/features/qr-scanner/hooks/useTicketStatus';

const { Text } = Typography;

const QRCodeScanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [qrResult, setQrResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { handleGetTicketDetails, isLoadingDetails } = useGetTicketDetails();
  const [ticketDetails, setTicketDetails] = useState<Ticket | undefined>(
    undefined,
  );

  const { isLoading, handleSetTicketStatus } = useTicketStatus();
  const [rescan, setRescan] = useState(true);

  const onClick = async (status: TicketStatus) => {
    await handleSetTicketStatus(status, ticketDetails as Ticket);
    setTicketDetails(undefined);
    setRescan(true);
    setQrResult(null);
  };

  useEffect(() => {
    let codeReader: BrowserMultiFormatReader | null = null;
    let activeStream: MediaStream | null = null;
    const stopCamera = () => {
      if (codeReader) {
        codeReader.reset();
      }
      if (activeStream) {
        activeStream.getTracks().forEach((track) => track.stop());
      }
    };
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment', // Use rear camera
          },
        });

        activeStream = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute('playsinline', 'true');
          await videoRef.current.play();
        }

        codeReader = new BrowserMultiFormatReader();
        codeReader.decodeFromVideoDevice(
          null,
          videoRef.current,
          (result, error) => {
            if (result) {
              setQrResult(result.getText());
              stopCamera();
              setRescan(false);
              handleGetTicketDetails(result?.getText()).then((data) =>
                setTicketDetails(data),
              );
            } else if (error) {
              setError('Scanning...');
            }
          },
        );
      } catch (err) {
        setError(`Error accessing camera: ${(err as Error).message}`);
      }
    };

    if (rescan) {
      startCamera();
    }

    return () => {
      stopCamera();
    };
  }, [handleGetTicketDetails, rescan]);

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      className="mb-6 w-full"
      gap={16}
    >
      <div className="mx-auto mt-4 flex size-60 items-center justify-center rounded-lg border border-dashed border-gray-400 bg-gray-100 p-4">
        {rescan ? (
          <video ref={videoRef} className="size-full object-cover">
            <track default kind="captions" srcLang="en" src="SUBTITLE_PATH" />
          </video>
        ) : (
          <HiMiniCamera
            className="size-20"
            onClick={() => {
              setRescan(true);
              setTicketDetails(undefined);
            }}
          />
        )}
      </div>

      {qrResult ? (
        <Flex vertical justify="center" align="center">
          <h2 className="text-xl font-bold">Mã vé xe:</h2>
          <p className="w-[65%] text-center font-bold text-[#c35959]">
            {qrResult}
          </p>
        </Flex>
      ) : null}
      {error && !qrResult ? (
        <Flex className="rounded-lg border border-solid border-red-200 bg-red-50 p-2">
          <Text className="text-red-500">{error}</Text>
        </Flex>
      ) : null}

      {isLoadingDetails ? (
        <Spin spinning />
      ) : (
        <>
          {ticketDetails ? (
            <>
              <Flex
                vertical
                className="mt-4 w-[90%] rounded-xl border border-solid border-gray-200 bg-gray-50 px-4 py-2"
                gap={4}
                justify="center"
              >
                <Flex justify="space-between">
                  <Text className="font-bold">Khách hàng</Text>
                  <Text>{ticketDetails?.client_name}</Text>
                </Flex>
                <Flex justify="space-between">
                  <Text className="font-bold">SDT</Text>
                  <Text className="underline">
                    {ticketDetails?.client_phone}
                  </Text>
                </Flex>
                <Divider className="my-2" />
                <Flex justify="space-between">
                  <Text className="text-base font-bold">Giá vé</Text>
                  <Text className="text-base font-bold underline">
                    {formatCurrency(ticketDetails?.price || 0)} VND
                  </Text>
                </Flex>
              </Flex>
              <Flex
                justify="center"
                align="center"
                gap={10}
                className="w-[90%]"
              >
                <Button
                  size="large"
                  type="primary"
                  className="flex-1 px-6 py-4"
                  onClick={() => onClick(TicketStatus.Checkin)}
                  loading={isLoading}
                >
                  Checkin
                </Button>

                <Button
                  size="large"
                  className="flex-1 px-6 py-4"
                  loading={isLoading}
                  onClick={() => onClick(TicketStatus.Cancelled)}
                >
                  Huỷ vé
                </Button>
              </Flex>
            </>
          ) : null}
        </>
      )}
    </Flex>
  );
};

export default QRCodeScanner;
