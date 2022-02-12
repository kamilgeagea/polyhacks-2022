import './Button.scss';

import { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  title: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const Button: FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <div className="button" onClick={onClick}>{title}</div>
  );
};

export default Button;