import { useState, useEffect } from 'react';
import { getSearchMovie } from 'service/apiFilms';
import MoviesList from '../MoviesList/MoviesList';
import SearchForm from '../SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import css from './moviesSearch.module.css';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const {
          data: { results },
        } = await getSearchMovie(search);
        setMovies(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [search]);

  const handleSearch = ({ search: word }) => {
    if (word === search) {
      return;
    }
    setSearch(word);
    setMovies([]);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {error && <p className={css.error}>{error}</p>}
      {loading && (
        <div className={css.loader}>
          <Loader />
        </div>
      )}
      {movies && (
        <div>
          <MoviesList items={movies} />
        </div>
      )}
    </>
  );
};

export default MoviesSearch;
