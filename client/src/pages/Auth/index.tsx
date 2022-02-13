import './Auth.scss';

import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input, Alert } from '../../components';

// @ts-ignore
import VectorImage from '../../assets/vector-image.png';

const Auth: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth">
      <img src={VectorImage} alt="people on bicycles" className="vector-image" />
      {error && <Alert message="Veuillez contacter les proriétaires du projet pour reçevoir les accès" />}
      <div className="auth__container">
        <div className="auth__container__title">Citybike</div>
        <div className="auth__container__subtitle">Mesurez ce que vous respirez</div>
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
              localStorage.setItem('auth', 'true');
            } else {
              setError(true);
            }
          }} />
        </div>
      </div>
    </div>
  );
};

export default Auth;