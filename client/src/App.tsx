import './App.scss';

import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Auth, Profile } from './pages';

const App: FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;