import './Alert.scss';

import { FC } from 'react';

interface AlertProps {
  message: string;
}

const Alert: FC<AlertProps> = ({ message }) => {
  return (
    <div className="alert">
      {message}
    </div>
  );
};

export default Alert;