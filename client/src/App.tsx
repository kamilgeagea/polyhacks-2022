import './App.scss';

import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import dotenv from 'dotenv';

import { Auth, Profile, Track } from './pages';

const App: FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;