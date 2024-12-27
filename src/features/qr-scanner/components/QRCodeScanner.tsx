import { useEffect, useRef, useState } from 'react';
import { BrowserMultiFormatReader } from '@zxing/library';

const QRCodeScanner = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [qrResult, setQrResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stopCamera = () => {
      const stream = videoRef.current?.srcObject as MediaStream;
      stream?.getTracks().forEach((track) => track.stop());
    };
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment', // Use rear camera
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
  }, []);

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <video
        ref={videoRef}
        style={{
          width: '100%',
          height: 'auto',
          border: '1px solid black',
        }}
      >
        <track default kind="captions" srcLang="en" src="SUBTITLE_PATH" />
      </video>
      {qrResult ? (
        <div>
          <h3>Scanned QR Code:</h3>
          <p>{qrResult}</p>
        </div>
      ) : null}
      {error && !qrResult ? <p>{error}</p> : null}
    </div>
  );
};

export default QRCodeScanner;
