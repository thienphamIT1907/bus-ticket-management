import { Button } from 'antd';
import { useNavigate, useRouteError } from 'react-router-dom';

interface Error {
  message: string;
  statusText: string;
}

const ErrorPage = () => {
  const error = useRouteError() as Error;

  const navigate = useNavigate();

  return (
    <>
      <div className="flex size-full h-screen flex-col items-center justify-center gap-6 text-center">
        <p className="rounded-xl bg-red-300 p-4 text-base text-red-700">
          {error.statusText || error.message}
        </p>
        <Button onClick={() => navigate('/dashboard/summary')} type="primary">
          Back
        </Button>
      </div>
      <div />
    </>
  );
};

export default ErrorPage;
