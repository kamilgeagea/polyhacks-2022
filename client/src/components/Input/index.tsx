import './Input.scss';

import { FC, ChangeEventHandler } from 'react';

interface InputProps {
  value: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  password?: boolean
}

const Input: FC<InputProps> = ({ value, placeholder, onChange, password = false }) => {
  return (
    <div className="input">
      <input
        type={password ? 'password' : 'text'}
        className="input__field"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;