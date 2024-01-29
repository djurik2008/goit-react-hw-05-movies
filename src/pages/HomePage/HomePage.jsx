import css from './homePage.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getTrendingMovies } from 'service/apiFilms';
import MoviesList from 'components/Movies/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getTrendingMovies();
        setFilms(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      {error && <p className={css.error}>{error}</p>}
      {loading && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
      {films && (
        <>
          <h1>Trending today</h1>
          <MoviesList items={films} />
        </>
      )}
    </div>
  );
};

export default HomePage;
