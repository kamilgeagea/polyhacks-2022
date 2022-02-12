import './FlatButton.scss';

import { FC, MouseEventHandler } from 'react';

interface FlatButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const FlatButton: FC<FlatButtonProps> = ({ title, onClick }) => {
  return (
    <div className="flat-button" onClick={onClick}>{title}</div>
  );
};

export default FlatButton;