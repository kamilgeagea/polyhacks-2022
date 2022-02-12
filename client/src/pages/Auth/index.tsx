import './Auth.scss';

import { FC, useState } from 'react';

import { Button, FlatButton, Input } from '../../components';

const Auth: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);

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
        <div className={`auth__container__transition-input${isSignIn ? '__closed' : '__opened'}`}>
          <Input
            value={confirmPassword}
            placeholder="Confirmer le mot de passe"
            onChange={e => setConfirmPassword(e.target.value)}
            password
          />
        </div>
        <div className="auth__container__button">
          <Button title={isSignIn ? 'Se connecter' : "S'inscrire"} onClick={() => {}} />
        </div>
        <div className="auth__container__flat-button">
          <FlatButton
            title={isSignIn ? "Creer un compte" : "Avez-vous déjà un compte?"}
            onClick={() => setIsSignIn(!isSignIn)}
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;