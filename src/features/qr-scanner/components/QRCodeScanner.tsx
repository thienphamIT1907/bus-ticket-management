import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';
import { Divider, Flex, Spin, Typography } from 'antd';
import { useGetTicketDetails } from '@/features/qr-scanner/hooks/useGetTicketDetails';
import type { Ticket } from '@/shared/types';

const { Text } = Typography;

const QRCodeScanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [qrResult, setQrResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { handleGetTicketDetails, isLoadingDetails } = useGetTicketDetails();
  const [ticketDetails, setTicketDetails] = useState<Ticket | undefined>(
    undefined,
  );

  useEffect(() => {
    setTimeout(() => {
      setQrResult('CS447BUS-62579345-611b-43fb-aee6-fc266e9d9bde');
    }, 5000);
  }, []);

  useEffect(() => {
    const stopCamera = () => {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach((track) => track.stop());
    };
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
          },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.setAttribute('playsinline', 'true');
          await videoRef.current.play();
        }

        const codeReader = new BrowserMultiFormatReader();
        codeReader.decodeFromVideoDevice(
          null,
          videoRef.current,
          (result, error) => {
            if (result) {
              setQrResult(result.getText()); // QR code successfully scanned
              stopCamera(); // Stop the camera after scanning
              handleGetTicketDetails(result?.getText()).then((data) =>
                setTicketDetails(data),
              );
            }
            if (error) {
              setError('Scanning...');
            }
          },
        );
      } catch (error) {
        console.error(error);
        setError(`Error accessing camera`);
      }
    };

    startCamera();

    return () => {
      stopCamera();
    };
  }, [handleGetTicketDetails]);

  return (
    <Flex vertical justify="center" align="center" className="w-full" gap={16}>
      <h1 className="mt-6 text-center font-bold">Checkin Vé Xe</h1>
      <video
        ref={videoRef}
        className="mx-auto size-60 rounded-lg border border-solid border-gray-200 p-1"
      >
        <track default kind="captions" srcLang="en" src="SUBTITLE_PATH" />
      </video>
      {qrResult ? (
        <Flex vertical justify="center" align="center">
          <h2 className="font-bold">Mã vé xe:</h2>
          <p className="text-center text-[#c35959]">{qrResult}</p>
        </Flex>
      ) : null}
      {error && !qrResult ? (
        <Flex className="rounded-lg border border-solid border-red-200 bg-red-50 p-2">
          <Text className="text-red-500">{error}</Text>
        </Flex>
      ) : null}

      {/* Ticket Information */}
      <Spin spinning={isLoadingDetails}>
        {ticketDetails ? (
          <Flex
            vertical
            className="mt-4 rounded-xl border border-solid border-gray-200 bg-gray-50 px-4 py-2"
            gap={4}
          >
            <Flex justify="space-between">
              <Text className="font-bold">Khách hàng</Text>
              <Text>{ticketDetails?.client_name}</Text>
            </Flex>
            <Flex justify="space-between">
              <Text className="font-bold">SDT</Text>
              <Text className="underline">{ticketDetails?.client_phone}</Text>
            </Flex>
            <Divider className="my-2" />
            <Flex justify="space-between">
              <Text className="text-base font-bold">Giá vé</Text>
              <Text className="text-base font-bold underline">
                {ticketDetails?.price}
              </Text>
            </Flex>
          </Flex>
        ) : null}
      </Spin>
    </Flex>
  );
};

export default QRCodeScanner;
