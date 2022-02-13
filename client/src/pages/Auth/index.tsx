import './Auth.scss';

import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input } from '../../components';

const Auth: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="auth__container__title">\\Nom de l'appli\\</div>
        <div className="auth__container__subtitle">\\slogan slogan slogan slogan slogan slogan slogan\\</div>
        <div className="auth__container__input">
          <Input value={email} placeholder="Addresse courriel" onChange={e => setEmail(e.target.value)} />
        </div>
          <Input
            value={password}
            placeholder="Mot de passe"
            onChange={e => setPassword(e.target.value)}
            password
          />
        <div className="auth__container__button">
          <Button title="Se Connecter" onClick={() => {
            if (email === 'test@test.com' && password === 'password123') {
              navigate('/profile');
            }
          }} />
        </div>
      </div>
    </div>
  );
};

export default Auth;