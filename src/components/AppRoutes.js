import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import MovieDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import SharedLayout from './SharedLayout/SharedLayout';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default AppRoutes;
