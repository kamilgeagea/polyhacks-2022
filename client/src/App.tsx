import './App.scss';

import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Auth } from './pages';

const App: FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;