import { Routes, Route } from 'react-router-dom';

import MainMenu from './MainMenu/MainMenu';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';

export const App = () => {
  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
      </Routes>
    </div>
  );
};
